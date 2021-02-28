import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'


export const CoctailInfo = () => {
const { id } = useParams()
const [ loading, setLoadind ] = useState( false )
const [ coctail, setCoctail ] = useState( null )
   

useEffect( ()=> {
	setLoadind( true )

	async function getCoctail(){
		try {
			const res = await fetch( `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}` )
			const data = await res.json()
			
			if ( data.drinks ) {
				const {
					strDrink: name,
					strDrinkThumb: image,
					strAlcoholic: info,
					strCategory: category,
					strGlass: glass,
					strInstructions: instructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				} = data.drinks[0]
				const ingredients = [
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				]

				const newCoctail = {
					name,
					image,
					info,
					category,
					glass,
					instructions,
					ingredients,
				}
				setCoctail( newCoctail ) 
			} else {
				setCoctail( null )
			}
		} catch (error) {
			console.log(error)
		}
	setLoadind( false ) 
	}
	getCoctail()
},[ id ])


if ( loading ) {
	return <p> loading... </p>
}

if ( !coctail ) {
	return <h2 className='section-title'>no cocktail to display</h2>
}

const {
	name,
	image,
	category,
	info,
	glass,
	instructions,
	ingredients,
} = coctail

	return (
		<section className='section cocktail-section'>
		<Link to='/' className='btn btn-primary'>
			 Домой
		 </Link>
		 <h2 className='section-title'>{name}</h2>
		 <div className='drink'>
			 <img src={image} alt={name}></img>
			 <div className='drink-info'>
				 <p>
					 <span className='drink-data'>name :</span> {name}
				 </p>
				 <p>
					 <span className='drink-data'>category :</span> {category}
				 </p>
				 <p>
					 <span className='drink-data'>info :</span> {info}
				 </p>
				 <p>
					 <span className='drink-data'>glass :</span> {glass}
				 </p>
				 <p>
					 <span className='drink-data'>instructons :</span> {instructions}
				 </p>
				 <p>
					 <span className='drink-data'>ingredients :</span>
					 {ingredients.map((item, index) => {
						 return item ? <span key={index}> {item}</span> : null
					 })}
				 </p>
			 </div>
		 </div>
 </section>
	)
}

