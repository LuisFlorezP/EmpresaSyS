import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav id="navsito">
            <Link className="valores" to={'../clientes'} >Clientes</Link>
            <Link className="valores" to={'../productos'} >Productos</Link>
            <Link className="valores" to={'../proveedores'} >Proveedores</Link>
        </nav>
    );
};

export default Nav;