import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormWrapper from './FormWrapper'
import SearchInput from './SearchInput'
import Button from './Button'

const SearchByCity = ({ onSubmit }) => {
  const [ value, setValue ] = useState('')
  return (
    <FormWrapper name="city search" onSubmit={(e) => onSubmit(e, value)}>
      <SearchInput
        value={value}
        onChange={e => setValue(e.target.value)}
        name="city"
        label="Search"
      />
      <Button>Search</Button>
    </FormWrapper>
  )
}

SearchByCity.propTypes = {
  onSubmit: PropTypes.func
}

export default SearchByCity;