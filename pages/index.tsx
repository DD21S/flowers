import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:8000/flowers/')
    const data = await res.json()

    return { props: { flowers: data.results } } 

}

const Home: NextPage = ({ flowers }) => {
    return (
        <>
            <Head>
                <title>
                    Flowers | Home
                </title>
            </Head>
            <div className="flowers">
                <div className="container"> 
                { flowers.map(flower => (
                    <div className="flower" key={ flower.id }>
                        <img src={ flower.photo } alt={ flower.name + "photo" } className="flower-photo" />
                        <div className="flower-info">
                            <h1 className="flower-name">{ flower.name }</h1>
                            <p className="flower-scientific-name"><strong>Scientific name:</strong> { flower.scientific_name }</p>
                            <Link href={ "/flowers/" + flower.slug }>More</Link>  
                        </div>
                    </div>
                )) }
                </div>
            </div>
        </>
    )
}

export default Home