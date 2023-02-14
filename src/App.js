import './App.css';
import PageWrapper from './PageWrapper';
import Pelicula from './Pelicula';
import Paginacion from './Paginacion';
import PeliculasJson from './peliculas.json';
import React, { useState } from 'react';

function App() {

	const TOTAL_POR_PAGINA = 5;
	const [paginaActual, setPagActual] = useState(1);

	let peliculas = PeliculasJson;

	conts cargarPeliculas = () => {
		peliculas = peliculas.slice(
			(paginaActual - 1) * TOTAL_POR_PAGINA,
			paginaActual * TOTAL_POR_PAGINA
		);
	}

	const getTotalPaginas = () => {
		let totalPeliculas = PeliculasJson.length;
		//Redondeamos hacia arriba
		return Math.ceil(totalPeliculas / TOTAL_POR_PAGINA);
	}

	cargarPeliculas();

	return (
		<PageWrapper>
			{peliculas.map(pelicula => 
				<Pelicula imagen={pelicula.imagen} titulo={pelicula.titulo} 
					calificacion={pelicula.calificacion} descripcion={pelicula.descripcion} 
					duracion={pelicula.duracion} mmpa={pelicula.mmpa} 
					lanzamiento={pelicula.lanzamiento} director={pelicula.director}
					reparto={pelicula.reparto}/>
			)}

			<Paginacion pagActual={paginaActual} pagTotales={getTotalPaginas} onChange={(pagina) => {
				setPagActual(pagina)
			}}/>

		</PageWrapper>
	);
}

export default App;