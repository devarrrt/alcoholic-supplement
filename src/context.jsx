import React, { createContext,  useState, useEffect, useCallback } from 'react'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' 

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
	
const [loading, setloading] = useState(false)
const [coctails, setcoctails] = useState([])
const [term, setTerm] = useState('a')


const fetchCoctails = useCallback( async ()=> {
	setloading( true )
	try {
		const res = await fetch ( `${ url } ${ term }` )
		const data = await res.json()
		const { drinks } = data

		if ( drinks ) {
			const newCoctails = drinks.map( item => {
				const {
					idDrink,
					strDrink,
					strDrinkThumb,
					strAlcoholic,
					strGlass,
				} = item

				return {
					id: idDrink,
					name: strDrink,
					image: strDrinkThumb,
					info: strAlcoholic,
					glass: strGlass,
				}
			})
				setcoctails( newCoctails )
		} else {
			setcoctails([])
		}
		setloading(false)

	} catch (error) {
		console.log( error )
		setloading( false )
	}
}, [ term ])



useEffect( ()=> {
fetchCoctails()
},[ term, fetchCoctails ])


	return (
		<AppContext.Provider
		value={{
			loading,
			coctails,
			term,
			setTerm
		}}
		>
			{ children }
		</AppContext.Provider>
	)
}