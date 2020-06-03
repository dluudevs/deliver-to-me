import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ADD_RESULTS } from './slice/restaurantSlice'
import SearchByCity from './Components/SearchByCity'

function App() {
  const dispatch = useDispatch()

  const fetchRestaurants = (city) => {
    fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}&per_page=100`)
      .then(res => res.json())
      .then((data) => dispatch(ADD_RESULTS(data.restaurants)))
      // .then((data) => console.log(data.restaurants))
  }

  const onSubmit = (e, query) => {
    e.preventDefault()
    fetchRestaurants(query)
  }

  return (
    <>
      <SearchByCity onSubmit={onSubmit} />
      <div role="main">
        There is where results go
      </div>
    </>
  )
}

// return (
//   <div className="App">
//     <header className="App-header">
//       <Counter />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <span>
//         <span>Learn </span>
//         <a
//           className="App-link"
//           href="https://reactjs.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React
//         </a>
//         <span>, </span>
//         <a
//           className="App-link"
//           href="https://redux.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Redux
//         </a>
//         <span>, </span>
//         <a
//           className="App-link"
//           href="https://redux-toolkit.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Redux Toolkit
//         </a>
//         ,<span> and </span>
//         <a
//           className="App-link"
//           href="https://react-redux.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React Redux
//         </a>
//       </span>
//     </header>
//   </div>
// );

export default App;
