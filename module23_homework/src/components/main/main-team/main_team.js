import css from './main_team.module.css'
import cssmain from '../main.module.css'
import ImgIvanov from './img/Ivanov.jpg'
import ImgIvanovMob from './img/Ivanov_mobile.jpg'
import ImgSmirnov from './img/Ivanov.jpg'
import ImgSmirnovMob from './img/Ivanov_mobile.jpg'
import ImgYarcev from './img/Ivanov.jpg'
import ImgYarcevMob from './img/Ivanov_mobile.jpg'
import ImgMorozov from './img/Ivanov.jpg'
import ImgMorozovMob from './img/Ivanov_mobile.jpg'
import ImgDeeva from './img/Ivanov.jpg'
import ImgDeevaMob from './img/Ivanov_mobile.jpg'
import ImgStrelkova from './img/Ivanov.jpg'
import ImgStrelkovaMob from './img/Ivanov_mobile.jpg'
import React from 'react'

function Team(){
    return(
        <>
        <section className={css.team}>
            <div className={cssmain.content__container .is+'-align-center'}>
              <h3>Команда</h3>
              <div className={css.team+'-group-image-first'}>
                <div className={css.team+'-group-image-first-item'}>
                        <img alt="Иван Иванов" src={ImgIvanov} />
                        <img alt="Иван Иванов" src={ImgIvanovMob} />
                  <p className={css.is+'-black'}>Иван Иванов</p>
                  <p className={css.is+'-grey'}>CEO</p>
                </div>
                <div className={css.team+'-group-image-first-item'}> 
                        <img alt="Алексей Смирнов" src={ImgSmirnov} />
                        <img alt="Алексей Смирнов" src={ImgSmirnovMob} />  
                  <p className={css.is+'-black'}>Алексей Смирнов</p>
                  <p className={css.is+'-grey'}>Frontend-разработчик</p>
                </div>
                <div className={css.team+'-group-image-first-item'}>
                    <img alt="Денис Ярцев" src={ImgYarcev} />
                    <img alt="Денис Ярцев" src={ImgYarcevMob} />
                    <p className={css.is+'-black'}>Денис Ярцев</p>
                    <p className={css.is+'-grey'}>Backend-разработчик</p>
                </div>
                <div className={css.team+'-group-image-first-item'}> 
                        <img alt="Николай Морозов" src={ImgMorozov} />
                        <img alt="Николай Морозов" src={ImgMorozovMob} />
                  <p className={css.is+'-black'}>Николай Морозов</p>
                  <p className={css.is+'-grey'}>Дизайнер</p>
                </div>
                <div className={css.team+'-group-image-first-item'}>
                        <img alt="Ирина Деева" src={ImgDeeva} />
                        <img alt="Ирина Деева" src={ImgDeevaMob} />
                  <p className={css.is+'-black'}>Ирина Деева</p>
                  <p className={css.is+'-grey'}>Копирайтер</p> 
                </div>  
                <div className={css.team+'-group-image-first-item'}> 
                    <img alt="Мария Стрелкова" src={ImgStrelkova} />
                    <img alt="Мария Стрелкова" src={ImgStrelkovaMob} />
                  <p className={css.is+'-black'}>Мария Стрелкова</p>
                  <p className={css.is+'-grey'}>SMM</p>
                </div>
              </div>
            </div>
          </section>
          </>
    )
}

export default Team;