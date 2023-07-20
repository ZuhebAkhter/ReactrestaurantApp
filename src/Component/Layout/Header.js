import React from 'react'
import classes from './Header.module.css'
import headerImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>React Food Ordering App</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={headerImage} alt='Delicious food'/>
        </div>
    </React.Fragment>
  )
}

export default Header