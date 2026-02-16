import './App.css'
import { User } from './components/User'

export const App = () => {
  return (
    <>
    <div className="circle"></div>
    <p style={{fontSize: "2rem", color: "aqua", textDecoration: "underline" }}>Hola react</p>
    <p>Hola JavaScript</p>
    <button>Enviar</button>

    <h1>Tarjeta de usuario 😎</h1>
    <User image="./rick_commander.jpeg" nombre="Commander Rick" Estado="Alive"/>
    <User image="./morty_smith.jpeg" nombre="Morty_Smith" Estado="Dead" />
    <User image="./beth_smith.jpeg" nombre="Beth Smith" Estado="Alive" />
    
    </>
  )
}

