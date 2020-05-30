import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import SEO from '../components/seo'

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not Found" />
		<section className="hero">
			<p className="preheader">Uh oh,</p>
			<h1>
				You're trying to go to a page that doesn't exist.
                <br />
			</h1>
			<p><Link to="/" className="button">Let's go home <span>&rarr;</span></Link></p>
		</section>
	</Layout>
)

export default NotFoundPage