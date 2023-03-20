import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListaDeNotas from "./components/ListaDeNotas"

function App() {


  return (
    <div className="container mx-auto">
      
      <Header />
      <div className="mt-5 md:flex">
        <Formulario />
        <ListaDeNotas/>
      </div>
      
    </div>
  )
}

export default App
