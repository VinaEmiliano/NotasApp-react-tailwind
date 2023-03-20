import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListaDeNotas from "./components/ListaDeNotas"

function App() {
  
  const [notas, setNotas] = useState([])
  
  
  return (
    <div className="container mx-auto">
      
      <Header />
      <div className="mt-5 md:flex">
        <Formulario 
          notas={notas}
          setNotas={setNotas}
        />
        <ListaDeNotas/>
      </div>
      
    </div>
  )
}

export default App
