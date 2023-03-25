
const Nota = ({nota, setNota, eliminarNota}) => {
    
    const {titulo, descripcion, fecha, id} = nota
    
    const handleEliminar = () => {
        const confirmacion = confirm('Desea eliminar la nota ?')
        
        if(confirmacion){
            eliminarNota(id)
        }
    }
    
  return (
    <div  className="bg-blue-200 shadow-lg mb-4">
        <div className="mb-3 p-3">
            <p className="font-bold mb-3 uppercase">Titulo:{' '}
                <span className="font-normal lowercase">{titulo}</span>
            </p>
            <p className="font-bold mb-3 uppercase">Descripcion:{' '}
                <span className="font-normal lowercase">{descripcion}</span>
            </p>
            <p className="font-bold mb-3 uppercase">fecha:{' '}
                <span className="font-normal">{fecha}</span>
            </p>
        </div>
        <div className="flex justify-around">
            <button 
                className="mb-2 px-8 py-2 text-2xl font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer"
                onClick={() => setNota(nota)}
            >
                Editar
            </button>
            <button 
                className="mb-2 px-8 py-2 text-2xl font-semibold rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                onClick={handleEliminar}
                >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Nota