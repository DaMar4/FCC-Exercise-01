import React from 'react'
import "../css/testimonio.css"
export function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img src={require(`../img/${props.foto}.png`)} alt="" className="foto" />
            <div className="info-testiomonio">
                <p className="nombre"><strong>{props.nombre}</strong> in {props.pais}</p>
                <p className="cargo">{props.cargo} at <strong>{props.empresa}</strong></p>
                <p className="texto">"{props.texto}" <strong>freeCodeCamp changed my life.</strong></p>
            </div>
        </div>
    )
}