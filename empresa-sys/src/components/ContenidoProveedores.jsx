import CardProveedor from "./CardProveedor";
import imagenUno from "../Img/P1.jpg";
import imagenDos from "../Img/P2.png";
import imagenTres from "../Img/P3.png";
import imagenCuatro from "../Img/P4.png";

const registros = [
    {
        imagen: imagenUno,
        tipo: "Plástico",
        nombre: "RioPlast"
    },
    {
        imagen: imagenDos,
        tipo: "Pegante",
        nombre: "Infinita"
    },
    {
        imagen: imagenTres,
        tipo: "Pintura",
        nombre: "Bler"
    },
    {
        imagen: imagenCuatro,
        tipo: "Diseño gráfico",
        nombre: "Piensa Positivo"
    }
]

const ContenidoProveedores = () => {
    return (
        <section class="contenido">
            {
                registros.map((valores)=>(
                    <CardProveedor registros={valores} />
                ))
            }
        </section>
    );
};

export default ContenidoProveedores;