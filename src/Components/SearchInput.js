import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({ value, onChange, label, name }) => (
  <label htmlFor={name}>
    {label}
    <input type="text" name={name} value={value} onChange={onChange}/>
  </label>
)
  // set value inside of form

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default SearchInput;