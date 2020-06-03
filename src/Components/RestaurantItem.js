import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled('div')(
  {
    border: '1px solid black',
    borderRadius: '5px',
    marginBottom: '32px',
    padding: '16px',
    listStyle: 'none'
  }
)

const Bold = styled('span')(
  {
    fontWeight: 700
  }
)

const RestaurantItem = ({ restaurant }) => {
  const { name, address, area, price } = restaurant
  return (
    <Container as="li">
      <h3>{name}</h3>
      <p><Bold>Address: </Bold>{address}</p>
      <p><Bold>Area: </Bold>{area}</p>
      <p><Bold>Price: </Bold>{price}</p>
    </Container>
  )
}
RestaurantItem.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    area: PropTypes.string,
    price: PropTypes.string,
  })
}

export default RestaurantItem;