import React from 'react'
import styled from 'styled-components'

const StyledForm = styled('form')(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '28px'
  }
)

const FormWrapper = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>
    { children }
  </StyledForm>
)

export default FormWrapper