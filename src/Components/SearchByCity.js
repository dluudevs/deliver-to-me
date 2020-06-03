import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import Button from './Button'

const SearchByCity = ({ onSubmit }) => {
  const [ value, setValue ] = useState('')
  return (
    <form onSubmit={(e) => onSubmit(e, value)}>
      <SearchInput
        value={value}
        onChange={e => setValue(e.target.value)}
        label="Search By City"
        name="city"
      />
      <Button>Search</Button>
    </form>
  )
}

SearchByCity.propTypes = {
  onSubmit: PropTypes.func
}

export default SearchByCity;