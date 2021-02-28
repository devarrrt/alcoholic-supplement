import React, { useRef, useEffect, useContext } from 'react'
import { AppContext } from '../context'


export const Search = () => {
const { setTerm } = useContext(AppContext)

const valueRef = useRef()

const handleSubmit = ( e ) => {
		e.preventDefault()
}

useEffect( ()=> {
	valueRef.current.focus()
},[] )

const changeText = ( ) => {
	setTerm( valueRef.current.value )
}



	return (
		<section className="section search"> 
			<form className="search-form" onChange={ handleSubmit } >
				<div className="form-control">
					<label htmlFor="name">  Что будем искать?  </label>
					<input 
						type="text"
						name="name"
						id="name"
						ref={ valueRef } 
						onChange={ changeText }
						/>
				</div>
			</form>
		</section>
	)
}
