import { useState } from 'react';
import '../src/App.css'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const options = ["Piedra", "Papel", "Tijera"];
  const [history, setHistory] = useState([]);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const computer = generateComputerChoice();
    setComputerChoice(computer);
    const gameResult = determineWinner(choice, computer);
    setResult(gameResult);
    setHistory([...history, { userChoice: choice, computerChoice: computer, result: gameResult }]);
  };

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      return "Empate";
    } else if (
      (user === "Piedra" && computer === "Tijera") ||
      (user === "Papel" && computer === "Piedra") ||
      (user === "Tijera" && computer === "Papel")
    ) {
      return "Ganaste";
    } else {
      return "Perdiste";
    }
  };

  const title = "Piedra, Papel o Tijera";
  const headingStyle = { textAlign: 'center' };

  return (
    <div>
      <h1 style={headingStyle}>{title}</h1>
      <div className='contenedor-btns'>
        <button className='btn-opcion-piedra' onClick={() => handleUserChoice("Piedra")}>Piedra🪨</button>
        <button className='btn-opcion-papel' onClick={() => handleUserChoice("Papel")}>Papel📋</button>
        <button className='btn-opcion-tijera' onClick={() => handleUserChoice("Tijera")}>Tijera✂️</button>
      </div>
      <div className='text-eleccion'>
        <Card className='m-2' style={{
          backgroundColor: userChoice === "Piedra" ? "green" :
            userChoice === "Papel" ? "purple" :
              userChoice === "Tijera" ? "blue" : "black"
        }}>
          <Card.Body>
            <h2 style={{ color: 'white', fontSize: '20px' }}>Tu elección: {userChoice}</h2>
          </Card.Body>
        </Card>
        <Card style={{
          backgroundColor: computerChoice === "Piedra" ? "green" :
            computerChoice === "Papel" ? "purple" :
              computerChoice === "Tijera" ? "blue" : "black"
        }}>
          <Card.Body>
            <h2 style={{ color: 'white', fontSize: '20px' }}>Elección del computador: {computerChoice}</h2>
          </Card.Body>
        </Card>
      </div>
      <div className='text-resultado'>
        <Card className='m-2' style={{
          backgroundColor: result === "Ganaste" ? "green" :
            result === "Perdiste" ? "red" : "orange"
        }}>
          <Card.Body>
            <h2 style={{ color: 'white', fontSize: '20px' }}>Resultado: {result}</h2>
          </Card.Body>
        </Card>
      </div>

      {/* Tabla de historial */}
      <div className="d-flex justify-content-center">
        <div className='container historial m-2'>
          <h2 className='mb-3'>Historial de Resultados</h2>
          <table className='table table-bordered table-responsive text-center'>
            <thead>
              <tr>
                <th>Tu Elección</th>
                <th style={{ maxWidth: '150px' }}>Elección del Computador</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.userChoice}</td>
                  <td>{entry.computerChoice}</td>
                  <td>{entry.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
