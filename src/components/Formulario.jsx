import { useState } from "react"

const Formulario = () => {

    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fecha, setFecha] = useState("")





  return (
    <div className="md:w-1/2 lg:w-2/5 m-4 p-5">
        <h2 className="bg-blue-400 text-3xl p-4 text-center font-semibold">Formulario</h2>
        <div>
            
            <form 
                className="bg-blue-200 shadow-lg "
                >
                <div className="mb-3 p-3">
                    <label htmlFor="titulo" className="block text-2xl p-1 mb-1">Titulo</label>
                    <input 
                        id="titulo" 
                        type="text" 
                        placeholder="Titulo de la nota" 
                        className="w-full text-xl" 
                        value={titulo}
                        onChange={ (e) => {setTitulo(e.target.value)}}
                        />
                </div>
                <div className="mb-3 p-3">
                    <label htmlFor="descripcion" className="block text-2xl p-1 mb-1">Descripcion</label>
                    <textarea 
                        id="descripcion" 
                        placeholder="Descripcion de la nota" 
                        className="w-full text-xl"
                        value={descripcion}
                        onChange={ (e) => {setDescripcion(e.target.value)}}
                        />
                </div>
                <div className="mb-3 p-3">
                    <label htmlFor="fecha" className="block text-2xl p-1 mb-1">Fecha</label>
                    <input 
                        type="date" 
                        className="w-full text-xl"
                        value={fecha}
                        onChange={ (e) => {setFecha(e.target.value)}}
                        />
                </div>
                <div className="flex justify-center">
                    <input 
                        type="submit" 
                        value={'Agregar nota'}
                        className="text-3xl p-2 mb-2 rounded-md bg-blue-300 hover:bg-blue-400 transition-colors cursor-pointer"
                    />
                </div>
                    

            </form>
        </div>
    </div>
  )
}

export default Formulario