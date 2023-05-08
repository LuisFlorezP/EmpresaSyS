const CardProducto = ({registros}) => {
    return (
        <section className="cardCliente">
            <img className="imagenCliente" src={registros.imagen} alt="" />
            <section className="info">
                <h3>{registros.nombre}</h3>
            </section>
            <section className="info">
                <p><strong>Raza: </strong>{registros.raza}</p>
            </section>
            <section className="info">
                <p><strong>Precio: $ </strong>{registros.precio}</p>
            </section>
        </section>
    );
};

export default CardProducto;