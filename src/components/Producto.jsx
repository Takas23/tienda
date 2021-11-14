import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';

const Producto = ({producto, productos, changuitoProd, agregarChanguito}) => {

    const {id, articulo, precio, imagen} = producto;

    const seleccionarProducto = (id) => {
        const producto = productos.filter(p => p.id === id)[0];
        agregarChanguito([...changuitoProd, producto]);
    }

    const quitarChanguito = (id) => {
        const newProductos = changuitoProd.filter(p => p.id !== id);
        agregarChanguito(newProductos);
    }
 
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={imagen} alt="foto_alfombra" width="200px"/>
                        <h3>{articulo} ${precio} </h3>
                        {
                            productos
                            ?
                                <button type="button" onClick={ () => seleccionarProducto(id)}
                                >Comprar</button>
                            :
                                <button type="button" onClick={ () => quitarChanguito(id)}
                                >Quitar</button>
                        }
                    </div>
                </div>
            </div>

        </Fragment>
    );
}
 
export default Producto;