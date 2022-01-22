import "./Button.scss";

//desestructurar las props
const Button =({color, mensaje})=>{
    return (
        <button className={`boton ${color}`}>
            {mensaje}
        </button>
    )
}

export default Button;