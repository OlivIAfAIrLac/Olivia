'use client'
import CardRecord from '@/components/CardRecord'
import IconButton from '@/components/IconButton'
import { FaSearch } from 'react-icons/fa'
export default function Home() {
  return (
    <>
      <div className="flex p-2 ml-14 mt-12">
        {/* User name */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">¡Buen dia!</h1>
          <h1 className="font-bold text-5xl">Lorem Ipsum</h1>
        </div>
        <div className="bg-green-500">
          Nuevo Expediente
        </div>
      </div>
      <div className="container flex flex-col my-10 bottom-0 login-bg">
        <div className='flex flex-col ml-8 mr-11 mt-4'>
          {/* Search button */}
          <div className='ml-auto'>
            <IconButton>
              <FaSearch size={30} />
            </IconButton>
          </div>
          <h1 className='primary-color font-bold '>
            Expedientes Recientes
          </h1>
        </div>
        {/* cards */}
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
            <CardRecord />
           
          </div>
        </div>
      </div>
    </>
  )
}
