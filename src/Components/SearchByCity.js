import React from 'react'
import PropTypes from 'prop-types'
import FormWrapper from './FormWrapper'
import SearchInput from './SearchInput'
import Button from './Button'

const SearchByCity = ({ onSubmit, onChange, value }) => {
  return (
    <FormWrapper name="city search" onSubmit={(e) => onSubmit(e)}>
      <SearchInput
        value={value}
        onChange={e => onChange(e.target.value)}
        name="city"
        label="Search by City"
      />
      <Button>Search</Button>
    </FormWrapper>
  )
}

SearchByCity.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default SearchByCity;