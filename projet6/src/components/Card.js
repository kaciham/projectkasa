import React from 'react';

export default function Card({ cover, title }) { //les cards de locations récupèrent les couvertures et titres en props depuis Home
	return (
		<article className="card">

			<img src={cover} alt="location" />
			<p>{title}</p>

		</article>
	);
}