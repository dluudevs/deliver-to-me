import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_RESULTS, CLEAR_RESULTS, selectRestaurant } from './slice/restaurantSlice'
import SearchByCity from './Components/SearchByCity'
import SearchByName from './Components/SearchByName'
import RestaurantItem from './Components/RestaurantItem'

const AppContainer = styled('div')(
  {
    maxWidth: '1200px',
    margin: '0 auto'
  }
)

const SearchContainer = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
)

function App() {
  const dispatch = useDispatch()
  const restaurants = useSelector(selectRestaurant)
  
  const [ city, setCity ] = useState('')
  const [ name, setName ] = useState('')
  
  const [ filteredResults, setFilteredResults ] = useState([])

  const [ isSearching, setIsSearching ] = useState(false)
  const [ isCitySearched, setIsCitySearched ] = useState(false) 

  useEffect(() => {
    const fetchRestaurants = (city) => {
      if (!city){
        return null
      }
    
      fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}&per_page=100`)
        .then(res => res.json())
        .then((data) => {
          setIsSearching(false)
          setIsCitySearched(true)
          dispatch(ADD_RESULTS(data.restaurants))
        })
    }
    
    dispatch(CLEAR_RESULTS())
    fetchRestaurants(city)
  },[city, dispatch])

  useEffect(() => {
    const regex = RegExp(name, 'gi',)
    const filtered = restaurants.filter(res => regex.test(res.name))
    console.log(filtered)
    setFilteredResults(filtered)
  }, [name, restaurants])

  const showResults = () => {
      const data = name ? filteredResults : restaurants
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
      return <p>Searching for restaurants in: {city}</p>
    }

    if (isCitySearched && !isSearching){
      return <p>No results found for: {city}</p>
    }
  }

  const handleCitySubmit = (e, city) => {
    e.preventDefault()
    setCity(city)
    setIsSearching(true)
  }

  const handleFilterSubmit = (e, name) => {
    e.preventDefault()
    if (!restaurants?.length){
      return null
    }
    console.log('handle filter submit')
    setName(name)
  }

  return (
    <AppContainer>
      <SearchContainer>
        <SearchByCity onSubmit={handleCitySubmit} />
        <SearchByName onSubmit={handleFilterSubmit}/>
      </SearchContainer>
      <div role="main">
        { restaurants?.length ? showResults() : showLoading()}
      </div>
    </AppContainer>
  )
}
export default App;
