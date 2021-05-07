import css from './main_contacts.module.css'
import cssmain from '../main.module.css'
import React from 'react'

function Contacts(){
    return(
        <section className={css.contacts .is+'-grey'}>
            <div className={cssmain.content__container .is+'-align-center'}>
              <h2>Контакты</h2>
              <div className={css.contacts+'-group' .is+'-align-center'}>
                <div className={css.contacts+'-group-email'}>
                  <p className={css.contacts+'-group-email-item' .is+'-darkgrey'}>©Электронная почта</p>
                  <p className={css.contacts+'-group-email-item' .is+'-black'}>drive@skillfactory.com</p>
                </div>
                <div className={css.contacts+'-group-border' .is+'-desktop'}></div>
                <div className={css.contacts+'-group-phone'}>
                  <p className={css.contacts+'-group-phone-item' .is+'-darkgrey'}>Телефон</p>
                  <p className={css.contacts+'-group-phone-item' .is+'-black'}>+7 912 123-45-67</p>
                </div> 
              </div>
            </div>
          </section>
    )
}

export default Contacts;