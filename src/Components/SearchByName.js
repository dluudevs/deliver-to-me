import React from 'react'
import PropTypes from 'prop-types'
import FormWrapper from './FormWrapper'
import SearchInput from './SearchInput'
import Button from './Button'

const SearchByName = ({ onSubmit, onChange, value }) => {
  return (
    <FormWrapper name="restaurant filter" onSubmit={(e) => onSubmit(e)}>
      <SearchInput
        value={value}
        onChange={e => onChange(e.target.value)}
        name="restaurant"
        label="Filter by Restaurant"
      />
      <Button>Filter</Button>
    </FormWrapper>
  )
}

SearchByName.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default SearchByName;