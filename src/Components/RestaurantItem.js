import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled('div')(
  {
    border: '1px solid black',
    borderRadius: '5px',
    marginBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    listStyle: 'none',
    boxShadow: '10px 10px 5px #0000008a',
  }
)

const H3 = styled('h3')(
  {
    margin: 0
  }
)

const Text = styled('p')(
  {
    margin: 0
  }
)

const Bold = styled('span')(
  {
    fontWeight: 700
  }
)

const RestaurantItem = ({ restaurant }) => {
  const { name, address, area, price, id } = restaurant
  return (
    <Container as="li">
      <H3>{name}</H3>
      <Text><Bold>Address: </Bold>{address}</Text>
      <Text><Bold>Area: </Bold>{area}</Text>
      <Text><Bold>Price: </Bold>{price}</Text>
    </Container>
  )
}
RestaurantItem.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    area: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  })
}

export default RestaurantItem;