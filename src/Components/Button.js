import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled('button')(
  {
    paddingLeft: '12px',
    paddingRight: '12px',
    width: '75px',
  }
)

const Button = ({ children }) => (
  <StyledButton type="submit">
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button;