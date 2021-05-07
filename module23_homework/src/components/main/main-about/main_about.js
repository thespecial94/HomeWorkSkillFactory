import css from './main_about.module.css'
import cssmain from '../main.module.css'
import ImgDesk from './img/main_img.svg'
import ImgMob from './img/mobile_main_img.svg'
import React from 'react'

function About(){
    return(
        <section className={css.about}>
          <div className={cssmain.content__container .is+'-align-center'}>
                <img className={cssmain.is+'-desktop'} alt="Общая картинка" src={ImgDesk} />
                <img className={cssmain.is+'-mobile'} alt="Общая картинка" src={ImgMob} />   
                    <h1>Чаcтые вопросы</h1>
                    <p>Отвечаем на вопросы, которые у вас могут возникнуть.</p>
                    <h1>О нас</h1>
                    <p>Это учебный проект, созданный с целью получения боевого опыта в разработке<br>
                    настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга,</br>
                    <br> в котором можно не только арендовать автомобили, но и сдавать их в аренду.</br></p>
            </div>
        </section>
    )
}

export default About;