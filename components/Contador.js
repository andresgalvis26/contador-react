const Contador = () => {

    const [contador, setContador] = React.useState(0);
    //console.log(contador);

    const aumentar = () => setContador(contador + 1);
    const disminuir = () => setContador(contador - 1);

    // CLASS COMPONENT
    // Pueden entrar en conflicto con añadirle 'class' a las etiquetas HTML para dar estilo

    return (
        <div>
            <h1 className={ contador < 0 ? "menor" : "mayor" }>Contador: {contador}</h1>
            <hr/>

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    ) 
}