import Nota from "./Nota"

const ListaDeNotas = ({notas}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 m-4 p-5 md:h-screen overflow-y-auto">
        
        {notas.length > 0 
            ? <h2 className="bg-blue-400 text-3xl p-4 text-center font-semibold">Listado de notas</h2> 
            : <h2 className="bg-blue-400 text-3xl p-4 text-center font-semibold">Agrega tu primer nota</h2>
        }
        {notas.map( (nota) => (
            <Nota
                key={nota.id}
                nota={nota}
            />
        ) )}
    </div>
  )
}

export default ListaDeNotas