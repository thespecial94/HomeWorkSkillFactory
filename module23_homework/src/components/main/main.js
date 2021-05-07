//import css from './main.modules.css'
import About from './main-about'
import Contacts from './main-contacts'
import Team from './main-team'
import Questions from './main-questions'
import React from 'react'

function Main(){
    return(
     <main> 
             <Questions/>
                <About />
                <Contacts />
                <Team />          
      </main>
    )
}

export default Main;
