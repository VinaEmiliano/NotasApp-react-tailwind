import { useEffect, useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListaDeNotas from "./components/ListaDeNotas"

function App() {
  
  const [notas, setNotas] = useState(JSON.parse(localStorage.getItem('notas')) ?? [])
  const [nota, setNota] = useState({})
  
  
  useEffect( () => {
    localStorage.setItem('notas', JSON.stringify(notas));
  },[notas])
  
  const eliminarNota = id => {
    const notaEliminada = notas.filter(nota => nota.id !== id)
    setNotas(notaEliminada)
  }
  

  
  return (
    <div className="container mx-auto">
      
      <Header />
      <div className="mt-5 md:flex">
        <Formulario 
          notas={notas}
          setNotas={setNotas}
          nota={nota}
          setNota={setNota}
        />
        <ListaDeNotas
          notas={notas}
          setNota={setNota}
          eliminarNota={eliminarNota}
        />
      </div>
      
    </div>
  )
}

export default App
