import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
    <div className='flex flex-col items-center justify-center gap-5 px-6 py-4 rounded-md shadow-md bg-cyan-500/25'>
      <h2 className='text-2xl font-bold'>Página no encontrada</h2>
      <p className='text-xl text-gray-700'>No se pudo encontrar el recurso solicitado</p>
      <Link href='/outstanding' className='px-4 py-2 rounded-md cursor-pointer bg-cyan-500/50' >Volver al Inicio</Link>
    </div>
    </div>
  )
}
