import CardProducto from "./CardProducto";
import imagenUno from "../Img/O1.jpg";
import imagenDos from "../Img/O2.jpg";
import imagenTres from "../Img/O3.jpeg";
import imagenCuatro from "../Img/O4.jpg";
import imagenCinco from "../Img/O5.jpg";
import imagenSeis from "../Img/O6.jpg";
import imagenSiete from "../Img/O7.jpeg";
import imagenOcho from "../Img/O8.jpeg";
import imagenNueve from "../Img/O9.jpg";
import imagenDiez from "../Img/O10.jpg";

const registros = [
    {
        imagen: imagenUno,
        nombre: "Goku",
        raza: "Saiyajin",
        precio: 550300
    },
    {
        imagen: imagenDos,
        nombre: "Veggeta",
        raza: "Saiyajin",
        precio: 530590
    },
    {
        imagen: imagenTres,
        nombre: "Gohan",
        raza: "Saiyajin - terrícola",
        precio: 520000
    },
    {
        imagen: imagenCuatro,
        nombre: "Piccolo",
        raza: "Namekuseijin",
        precio: 350000
    },
    {
        imagen: imagenCinco,
        nombre: "Goten",
        raza: "Saiyajin - terrícola",
        precio: 289000
    },
    {
        imagen: imagenSeis,
        nombre: "Trunks",
        raza: "Saiyajin - terrícola",
        precio: 299400
    },
    {
        imagen: imagenSiete,
        nombre: "Krillin",
        raza: "Terrícola",
        precio: 200300
    },
    {
        imagen: imagenOcho,
        nombre: "Cell",
        raza: "Robot mutante",
        precio: 367800
    },
    {
        imagen: imagenNueve,
        nombre: "Majin Buu",
        raza: "Demonio",
        precio: 444800
    },
    {
        imagen: imagenDiez,
        nombre: "Frezzer",
        raza: "Changlongs",
        precio: 398300
    }
]

const ContenidoProductos = () => {
    return (
        <section class="contenido">
            {
                registros.map((valores)=>(
                    <CardProducto registros={valores} />
                ))
            }
        </section>
    );
};

export default ContenidoProductos;