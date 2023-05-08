import {Link} from "react-router-dom";

const Inicio = () => {
    return (
        <section id="inicio">
            <section id="login">
                <Link id="empresa" to={'empresa_sys'}>Empresa SyS</Link>
            </section>
        </section>
    );
};

export default Inicio;