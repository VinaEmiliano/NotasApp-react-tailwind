
const Nota = ({nota}) => {
    
    const {titulo, descripcion, fecha} = nota
    
  return (
    <div  className="bg-blue-200 shadow-lg ">
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

    </div>
  )
}

export default Nota