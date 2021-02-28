import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { CoctailInfo } from './pages/CoctailInfo'



const App = () => {
	return (
	<BrowserRouter>
	<Navbar/>
	<Switch>
		<Route path="/" exact component={ Home } />
		<Route path="/about" exact component={ About } />
		<Route path="/coctail/:id" component={ CoctailInfo } />
		<Route path="*" render={ ()=> <p> Ошибочка </p> }  />
	</Switch>
	</BrowserRouter>
	)
}





export default App
