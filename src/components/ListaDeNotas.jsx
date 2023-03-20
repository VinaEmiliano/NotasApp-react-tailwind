import Nota from "./Nota"

const ListaDeNotas = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 m-4 p-5 md:h-screen overflow-y-auto">
        <h2 className="bg-blue-400 text-3xl p-4 text-center font-semibold">ListaDeNotas</h2>
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
        <Nota />
    </div>
  )
}

export default ListaDeNotas