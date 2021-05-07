import css from '../header.module.css'
import MobBurger from './mobile_burger.svg'
import React from 'react'

function MobileNav() {
	return (      
			<nav className={css.header+'-group-nav-mobile'}>
                <a>
                    <img alt="Меню для мобильного устройства" src={MobBurger} />
                </a>
            </nav>
	)
}

export default MobileNav;