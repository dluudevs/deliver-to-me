import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_RESULTS, CLEAR_RESULTS, selectRestaurant } from './slice/restaurantSlice'
import SearchByCity from './Components/SearchByCity'
import SearchByName from './Components/SearchByName'
import SortByPrice from './Components/SortByPrice'
import RestaurantItem from './Components/RestaurantItem'

const AppContainer = styled('div')(
  {
    maxWidth: '1200px',
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto'
  }
)

const SearchContainer = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '32px'
  }
)

const LoadingMessage = styled('p')(
  {
    textAlign: 'center'
  }
)

function App() {
  const dispatch = useDispatch()
  const restaurants = useSelector(selectRestaurant)
  
  const [ city, setCity ] = useState('')
  const [ name, setName ] = useState('')
  const [ priceSort, setPriceSort ] = useState('')
  
  const [ isSearching, setIsSearching ] = useState(false)
  const [ isCitySearched, setIsCitySearched ] = useState(false)
  const [ isFiltering, setIsFiltering ] = useState(false) 
  
  const [ filteredResults, setFilteredResults ] = useState([])

  useEffect(() => {
    const fetchRestaurants = (city) => {
      fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}&per_page=100`)
        .then(res => res.json())
        .then((data) => {
          setIsSearching(false)
          setIsCitySearched(true)
          dispatch(ADD_RESULTS(data.restaurants))
        })
    }
    
    if (isSearching){
      dispatch(CLEAR_RESULTS())
      fetchRestaurants(city)
    }

  },[city, isSearching, dispatch])

  const showResults = () => {
      // make a shallow copy of restaurants since it is read only and the sort method mutates
      let data = isFiltering ? filteredResults : [...restaurants]

      if (priceSort === 'ascending'){
        data = data.sort((a, b) => a.price - b.price)
      } else if (priceSort === 'descending'){
        data = data.sort((a, b) => b.price - a.price)
      }

      return (
        <ul style={{paddingLeft: 0}}>
          { 
            data.map((res) => <RestaurantItem key={res.id} restaurant={res}/>)
          }
        </ul>
      )
  }

  const showLoading = () => {
    if (isSearching){
      return <LoadingMessage>Searching for restaurants in: {city}</LoadingMessage>
    }

    if (isCitySearched && !isSearching){
      return <LoadingMessage>No results found for: {city}</LoadingMessage>
    }
  }

  const handleCitySubmit = (e) => {
    e.preventDefault()
    setName('')
    setIsFiltering(false)
    setIsSearching(true)
  }
  
  const handleCityChange = (city) => {
    setIsCitySearched(false)
    setCity(city)
  }

  const handleFilterSubmit = (e) => {
    e.preventDefault()

    if (!restaurants?.length){
      return null
    }

    const regex = RegExp(name, 'gi',)
    const filtered = restaurants.filter(res => regex.test(res.name))

    setFilteredResults(filtered)
    setIsFiltering(true)
  }

  const handlePriceSort = (e) => {
    setPriceSort(e.target.value)
  }

  return (
    <AppContainer>
      <h1 style={{textAlign: 'center'}}>Deliver to Me!</h1>
      <SearchContainer>
        <SearchByCity onSubmit={handleCitySubmit} onChange={handleCityChange} value={city} />
        <SearchByName onSubmit={handleFilterSubmit} onChange={setName} value={name}/>
        <SortByPrice onChange={handlePriceSort}/>
      </SearchContainer>
      <div role="main">
        { restaurants?.length ? showResults() : showLoading() }
      </div>
    </AppContainer>
  )
}
export default App;
