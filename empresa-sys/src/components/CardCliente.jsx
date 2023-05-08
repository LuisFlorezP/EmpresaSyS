const CardCliente = ({registros}) => {
    return (
        <section className="cardCliente">
            <img className="imagenCliente" src={registros.imagen} alt="" />
            <section className="info">
                <h3>{registros.nombre}</h3>
            </section>
            <section className="info">
                <p><strong>Celular: </strong>{registros.celular}</p>
            </section>
            <section className="info">
                <p><strong>Cantidad compras: </strong>{registros.compras}</p>
            </section>
        </section>
    );
};

export default CardCliente;