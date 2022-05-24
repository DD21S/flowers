import type { NextPage } from 'next'
import Head from 'next/head'

export const getStaticPaths = async () => {

	const res = await fetch('http://localhost:8000/flowers/')
	const data = await res.json()

	const paths = data.results.map(flower => {
		return {
			params: { slug: flower.slug }
		}
	})

	return {
		paths,
		fallback: false
	}

}

export const getStaticProps = async (context) => {

	const res = await fetch('http://localhost:8000/flowers/' + context.params.slug + '/')
	const data = await res.json() 

	return { props: { flower: data } }

}

interface Props {
	id: number,
	name: string,
	scientific_name: string,
	slug: string,
	description: string,
	photo: string
}

const Details: NextPage<Props> = ({ flower }) => {
	return (
		<>
			<Head>
				<title>
					Flowers | { flower.name }
				</title>
			</Head>
			<div className="flower-details">
				<div className="container">
	                <img src={ flower.photo } alt={ flower.name + "photo" } className="flower-photo" />
					<h1 className="flower-name">{ flower.name }</h1>
					<p className="flower-scientific-name"><strong>Scientific name:</strong> { flower.scientific_name }</p>
					<h2>Description</h2>
					<p>{ flower.description }</p>
				</div>
			</div>
		</>
	)
}

export default Details