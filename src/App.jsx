
const App = () =>{   
  const title = "Piedra papel o tijera";   
   // Definir los estilos del titulo
  const headingStyle = {textAlign: 'center'};
  return (
    <h1 style = {headingStyle}>{title.toUpperCase()}</h1>
  ) 
}
export default App;