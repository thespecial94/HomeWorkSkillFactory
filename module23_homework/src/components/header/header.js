import css from './header.module.css'
import MobileNav from './mobile-nav'
import React from 'react'

function Header(){
    return(
        <header className={css.header}>
        <a className={css.header + '-SkillDrive'} href="">SkillDrive</a>
        <div className={css.header+'-group'}>
                <>
                <nav className={css.header+'-group-nav'}>
                <a className={css.header+'-group-nav-aboutus'} href="">О нас</a>
                <a className={css.header+'-group-nav-conditions'} href="">Условия</a>
                <a className={css.header+'-group-nav-oftenquestions'} href="">Частые вопросы</a>
                </nav> 
                <button className={css.header+'-group-btnsignin'} alt="Войти">Войти</button>
                </>      
                <MobileNav />            
        </div>
      </header>
    )
}

export default Header;
