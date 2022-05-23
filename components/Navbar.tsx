import type { NextPage } from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
	return (
		<div className="navbar">
			<div className="container">
	      		<h1 className="title">Flowers</h1>
				<ul>
					<li><Link href="/">Home</Link></li>
					<li><Link href="/about">About</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar