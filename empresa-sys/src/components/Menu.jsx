import {Link} from "react-router-dom";
import salida from "../Img/1.png"
import Logo from "./Logo";
import Nav from "./Nav";

const Menu = () => {
    return (
        <section class="menu">
            <Logo />
            <Nav />
            <Link id="linkInicio" to={'/'}><img id="logoInicio" src={salida} alt="" /></Link>
        </section>
    );
};

export default Menu;