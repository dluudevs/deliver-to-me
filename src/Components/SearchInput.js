import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const InputContainer = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '8px'
  }
)

const StyledLabel = styled('label')(
  {
    textAlign: 'center',
    marginBottom: '4px'
  }
)

const SearchInput = ({ value, onChange, label, name }) => (
  <InputContainer>
    <StyledLabel htmlFor={name}> 
      {label}
    </StyledLabel>
    <input type="text" name={name} value={value} onChange={onChange}/>
  </InputContainer>
)
  // set value inside of form

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default SearchInput;