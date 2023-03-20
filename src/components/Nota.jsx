
const Nota = () => {
  return (
    <div  className="bg-blue-200 shadow-lg ">
        <div className="mb-3 p-3">
            <p className="font-bold mb-3 uppercase">Titulo:{' '}
                <span className="font-normal">corriendo en la calle</span>
            </p>
            <p className="font-bold mb-3 uppercase">Descripcion:{' '}
                <span className="font-normal">Ayer sali a correr por la calle y me encontre con un mapache</span>
            </p>
            <p className="font-bold mb-3 uppercase">fecha:{' '}
                <span className="font-normal">16/23/59</span>
            </p>
        </div>

    </div>
  )
}

export default Nota