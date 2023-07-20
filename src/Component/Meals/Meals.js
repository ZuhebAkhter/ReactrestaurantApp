import React from 'react'
import Summary from './Summary'
import MealsList from './MealsList'

const Meals = () => {
  return (
    <React.Fragment>
        <Summary/>
        <MealsList/>
    </React.Fragment>
  )
}

export default Meals