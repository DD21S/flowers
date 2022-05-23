import type { NextPage } from 'next'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout: NextPage = ({ children }) => {
	return (
		<div className="content">
			<Navbar />
			{ children }
			<Footer />
		</div>
	)
}

export default Layout