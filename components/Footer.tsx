import type { NextPage } from 'next'

const Footer: NextPage = () => {
	return (
		<footer className="footer">
			<div className="container">
				<p className="copy">Made by Deibys :)</p>
				<ul>
					<li><a href="https://github.com/DD21S" target="_blank">GitHub</a></li>
					<li><a href="https://linkedin.com/in/deibys-arteaga-17761323b" target="_blank">LinkedIn</a></li>
					<li><a href="https://t.me/deibys" target="_blank">Telegram</a></li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer