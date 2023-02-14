export default function Paginacion(props) {

    const getPaginas = () => {
        const resultado = [];
        for (let i = 0; i < props.pagTotales; i++) {
            let pagina = i + 1;
            resultado.push(
                <a onClick={() => props.onChange(pagina)} 
                className={props.pagActual === pagina ? "active" : ""}
                href="#">{pagina}</a>);
        }
        return resultado;
    }

    return(
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Página {props.pagActual} de {props.pagTotales}:</span>

                {getPaginas()}
            </div>
        </div>
    );
}