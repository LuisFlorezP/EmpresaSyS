import CardCliente from "./CardCliente";
import imagenUno from "../Img/C1.jpg";
import imagenDos from "../Img/C2.jpeg";
import imagenTres from "../Img/C3.jpeg";
import imagenCuatro from "../Img/C4.jpeg";
import imagenCinco from "../Img/C5.jpeg";
import imagenSeis from "../Img/C6.jpeg";

const registros = [
    {
        imagen: imagenUno,
        nombre: "Rosio Perez",
        celular: "310 765 4645",
        compras: 1
    },
    {
        imagen: imagenDos,
        nombre: "Jorge Montoya",
        celular: "333 505 7687",
        compras: 0
    },
    {
        imagen: imagenTres,
        nombre: "Martha Suarez",
        celular: "323 123 6576",
        compras: 23
    },
    {
        imagen: imagenCuatro,
        nombre: "Pepe Gonzales",
        celular: "300 768 9054",
        compras: 4
    },
    {
        imagen: imagenCinco,
        nombre: "Mathias Bermudez",
        celular: "311 323 9800",
        compras: 2
    },
    {
        imagen: imagenSeis,
        nombre: "Georgina Pelaez",
        celular: "301 444 6565",
        compras: 19
    }
]

const ContenidoClientes = () => {
    return (
        <section class="contenido">
            {
                registros.map((valores)=>(
                    <CardCliente registros={valores} />
                ))
            }
        </section>
    );
};

export default ContenidoClientes;