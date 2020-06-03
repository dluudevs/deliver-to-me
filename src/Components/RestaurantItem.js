import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled('div')(
  {
    border: '1px solid black',
    borderRadius: '5px',
    marginBottom: '32px',
    padding: '16px'
  }
)

const Bold = styled('span')(
  {
    fontWeight: 700
  }
)

const RestaurantItem = ({ name, address, price }) => (
  <Container as="li">
    <h3>{name}</h3>
    <p><Bold>Address: </Bold>{address}</p>
    <p><Bold>Price: </Bold>{price}</p>
  </Container>
)

RestaurantItem.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default RestaurantItem;