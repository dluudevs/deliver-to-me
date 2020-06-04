import React from 'react'
import styled from 'styled-components'

const SelectContainer = styled('div')(
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

const SortByPrice = ({ onChange }) => (
  <SelectContainer>
    <StyledLabel htmlFor="price-sort">Sort By Price</StyledLabel>
    <select name="price" id="price-sort" onChange={onChange} style={{width: '169px'}}>
      <option value="">Sort Price</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  </SelectContainer>
)

export default SortByPrice
