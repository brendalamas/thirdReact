import "./App.scss"
import Button from "./components/Button"

//desestructuracion, esto es js no REACT
//crear variables rapidamente a partir de un objeto

const persona = {
  nombre:"jacques",
  apellido: "derrida",
  profesion: "filosofa"
}

// const nombre = persona.nombre
// const apellido = persona.apellido

const {nombre, apellido} = persona

console.log(nombre); // jacques
console.log(apellido); //derrida

const App =()=>{
  return (
    <div className="contenedor">
      <h1>Hola</h1>
      <Button
      mensaje="hola"
      color="verde"/>
      <Button
      mensaje="chau"
      color="rojo"/>
    </div>
  )
}

export default App;