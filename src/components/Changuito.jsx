import {React, Fragment} from 'react'
import Producto from './Producto';


const Changuito = ({changuitoProd, agregarChanguito}) => {
    return (
        <Fragment>
            <div className="p-4 pt-5 mt-3 bg-success"
                style={{position:"fixed", right: 0, top: 0 }}>
                <h3>Changuito</h3>
                {
                    changuitoProd.map( p => (
                        <Producto
                            key = {p.id}
                            producto = {p}
                            changuitoProd = {changuitoProd}
                            agregarChanguito = {agregarChanguito}
                        />
                    )
                    )
                }
            </div>
        </Fragment>
        
    );
}
 
export default Changuito;