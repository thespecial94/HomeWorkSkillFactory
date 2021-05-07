import css from './main_questions.module.css'
import cssmain from '../main.module.css'
import ImpStrelka from './img/Strelka.svg'
import About from '../main-about'
import React from 'react'

function Questions(){
    return(
    <section class={css.question}>
            <About />
            <div className={cssmain.content__container .is+'-align-start'}>
                    <div className={css.question+'-first' .collapsible}>
                        <h2>Могу ли я отменить бронь?</h2>
                        <img alt="Стрелка мыши" src={ImpStrelka} />
                        <svg aria-label="Вопрос-ответы" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.88 0.439941L8 6.55994L14.12 0.439941L16 2.33327L8 10.3333L0 2.33327L1.88 0.439941Z" fill="#A0A7AD"/>
                        </svg>
                    </div>
                    <div className={css.content}>
                      <p>Ага, но еще вы можете получить подарок при отмене брони</p>
                    </div>                   
                    <div className={css.question+'-second' .collapsible}>
                        <h2>Могу ли я вернуть деньги, если не подошёл автомобиль?</h2>
                        <svg aria-label="Вопрос-ответы" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.88 0.439941L8 6.55994L14.12 0.439941L16 2.33327L8 10.3333L0 2.33327L1.88 0.439941Z" fill="#A0A7AD"/>
                        </svg>
                    </div>
                    <div className={css.content}>
                        <p>Да и еще пригласим на наш корпоратив!!!</p>
                    </div>
                    <div className={css.question+'-third' .collapsible}>
                        <h2>Что делать, если случилось ДТП?</h2>
                        <svg aria-label="Вопрос-ответы" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.88 0.439941L8 6.55994L14.12 0.439941L16 2.33327L8 10.3333L0 2.33327L1.88 0.439941Z" fill="#A0A7AD"/>
                        </svg>                        
                    </div>
                        <div className={css.content}>
                          <p>Ознакомиться с инструкцией по дальнейшим действиям</p>
                        </div>
                    <div className={css.question+'-fourth' .collapsible}>
                        <h2>Могу ли я оставить автомобиль в удобном для меня месте?</h2>
                        <svg aria-label="Вопрос-ответы" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.88 0.439941L8 6.55994L14.12 0.439941L16 2.33327L8 10.3333L0 2.33327L1.88 0.439941Z" fill="#A0A7AD"/>
                        </svg>                      
                    </div> 
                        <div className={css.content}>
                          <p>Данный вопрос обсуждается с собственником, но как правило автомобиль нужно 
                              <br> вернуть туда, где вы его получили.</br></p>
                        </div>
                    <div className={css.question+'-fifth' .collapsible}>
                        <h2>Что делать, если собственник просит заплатить ему напрямую?</h2>
                        <svg aria-label="Вопрос-ответы" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.88 0.439941L8 6.55994L14.12 0.439941L16 2.33327L8 10.3333L0 2.33327L1.88 0.439941Z" fill="#A0A7AD"/>
                        </svg>
                    </div>
                    <div className={css.content}>
                      <p>Позвать его на кофе и обсудить сделку в веселой обстановке</p>
                    </div>
                    <div className={css.question+'-sixth' .collapsible}>
                        <h2>Должен ли я заправлять автомобиль?</h2>
                        <svg aria-label="Вопрос-ответы" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" >
                          <path d="M1.88 0.439941L8 6.55994L14.12 0.439941L16 2.33327L8 10.3333L0 2.33327L1.88 0.439941Z" fill="#A0A7AD"/>
                        </svg>
                    </div>
                    <div className={css.content}>
                      <p>А то, еще не придумали авто без заправки.</p>
                    </div>
                </div>
        </section>
    )
}

export default Questions;