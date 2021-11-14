import React from 'react'
import { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            
            <nav className="navbar bg-light navbar-light fixed-top"
                style={{minWidth:"876px"}} >
                <div>
                    <a className="navbar-brand p-4" href="#" >
                        Alfombrux
                    </a>
                </div>

                <ul className="nav ">
                    <li className=" nav-item dropdown-toggle px-3" data-toggle="dropdown"
                        href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        Categorias
                    </li>
                    <li className="nav-item dropdown-toggle px-3" data-toggle="dropdown"
                        href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        Ordenar
                    </li>
                    <li className="nav-item px-3">
                        <div class="input-group">
                            <div class="form-outline">
                                <input type="search" placeholder="Buscar" class="form-control" />
                            </div>
                            <button type="button" class="btn btn-primary">
                            </button>
                        </div>
                    </li>
                </ul>

                <ul className="nav ">
                    <li className="nav-item"><a className="nav-link" href="#">
                        Ingresa 
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="#">
                        Crea una cuenta
                    </a></li>
                </ul>
            </nav>

        </Fragment>
    );
}
 
export default Header;