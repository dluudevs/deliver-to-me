import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ADD_RESULTS, selectRestaurant } from './slice/restaurantSlice'
import SearchByCity from './Components/SearchByCity'
import RestaurantItem from './Components/RestaurantItem'

function App() {
  const dispatch = useDispatch()
  const restaurants = useSelector(selectRestaurant)
  const [ city, setCity ] = useState('')
  // const [ isSearching, setIsSearching ] = useState(false)
  // const [ hasResults, setHasResults ] = useState(false)

  const fetchRestaurants = (city) => {
    if (!city){
      return null
    }
    
    // setIsSearching(true)
    fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}&per_page=100`)
      .then(res => res.json())
      .then((data) => {
        dispatch(ADD_RESULTS(data.restaurants))

        // if (!data.restaurants.length){
        //   return setHasResults(false)
        // }
        
        // setHasResults(true)
        // setIsSearching(false)
      })
  }

  useEffect(() => {
    fetchRestaurants(city)
  },[city])

  const showResults = () => {
    return (
      <ul>
        { 
          restaurants.map((res) => <RestaurantItem restaurant={res}/>)
        }
      </ul>
    )
  }

  const handleCitySubmit = (e, city) => {
    e.preventDefault()
    setCity(city)
  }

  return (
    <>
      <SearchByCity onSubmit={handleCitySubmit} />
      <div role="main">
        { restaurants?.length ? showResults() : null}
      </div>
    </>
  )
}
export default App;
