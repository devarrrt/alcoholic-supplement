import React from 'react'
import { Link } from 'react-router-dom'



export const Coctail = ({ image, name, id, info, glass }) => {
	return (
	<article className="cocktail"> 
			<div className='img-container'>
				<img src={ image } alt="img" />
			</div>

			<div className='cocktail-footer'>
				<h3> {name} </h3>
				<h4> {glass} </h4> 
				<p> {info} </p>
				<Link  
				to={ `/coctail/${ id }` }
				className='btn btn-primary btn-details'
				>
				А вот тут подробнее
				</Link>
			</div>
	</article>
	)
}
