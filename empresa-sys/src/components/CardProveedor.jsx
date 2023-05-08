const CardProveedor = ({registros}) => {
    return (
        <section className="cardProveedorCliente">
            <img className="imagenProveedorCliente" src={registros.imagen} alt="" />
            <section className="info">
                <h3>{registros.nombre}</h3>
            </section>
            <section className="info">
                <p><strong>Tipo: </strong>{registros.tipo}</p>
            </section>
        </section>
    );
};

export default CardProveedor;