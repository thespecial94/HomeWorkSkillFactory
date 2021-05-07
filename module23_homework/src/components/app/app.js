import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import css from './app.module.css'
import React from 'react';

function App() {
	return (
        <>
        <head>
        <meta charset="UTF-8" />
        <link href=".\dist\main.css" rel="stylesheet" type="text/css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
		<div className={css.app}>
            <Header />
            <Main />
			<Footer />
		</div>
        </>
	)
}

export default App;