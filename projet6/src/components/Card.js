import React from 'react';

export default function Card({ cover, title }) {
	return (
		<article className="card">

			<img src={cover} alt="location" />
			<p>{title}</p>

		</article>
	);
}