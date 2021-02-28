import React, { useContext } from 'react'
import { Coctail } from './Coctail'
import { AppContext } from '../context'


export const CoctailList = () => {
const { loading, coctails } = useContext( AppContext )

if ( loading ) {
	return <p> Минуточку.... </p>
}

if ( coctails.length < 1 ) {
	return <h2 className='section-title'>
	no cocktails matched your search criteria
</h2>
}

	return (
		<section>
			<h2 className='section-title'>cocktails</h2>
			<div className='cocktails-center'>
					{ coctails.map( item => (
						<Coctail key={ item.id } { ...item } />
					))}
			</div>
		</section>
	)
}
