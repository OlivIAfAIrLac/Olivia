'use client'
import CardRecord from '@/components/CardRecord'
import IconButton from '@/components/IconButton'
import { getFecha } from '@/helpers/getDate'
import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { FaClipboardUser } from 'react-icons/fa6'


const data = [
  { nombre: "Lorem Ipsum Dolo inntensa Dolo inntensa", folio: "Folio", fecha: getFecha(new Date) },
  { nombre: "Lorem Ipsum", folio: "Folio", fecha: getFecha(new Date) },
  { nombre: "Lorem Ipsum", folio: "Folio", fecha: getFecha(new Date) },
  { nombre: "Lorem Ipsum", folio: "Folio", fecha: getFecha(new Date) },
  { nombre: "Lorem Ipsum", folio: "Folio", fecha: getFecha(new Date) },
  { nombre: "Lorem Ipsum", folio: "Folio", fecha: getFecha(new Date) },
  { nombre: "Lorem Ipsum", folio: "Folio", fecha: getFecha(new Date) },
  { nombre: "Lorem Ipsum", folio: "Folio", fecha: getFecha(new Date) },
  { nombre: "Lorem Ipsum", folio: "Folio", fecha: getFecha(new Date) },
]
export default function Home() {
  return (
    <>
      <div className="flex p-2  mt-12 pb-8 py-2 px-32">
        {/* User name */}
        <div className="flex-1 ">
          <h1 className="text-3xl font-semibold">¡Buen dia!</h1>
          <h1 className="font-bold text-5xl">Lorem Ipsum</h1>
        </div>
        <Link href="/new_record" className='flex primary-bg py-4 pr-8 pl-16 '>
          <FaClipboardUser className='flex-initial' size={59}/>
          <span className='ml-5 flex-initial mr-24 mt-5'>
            Nuevo Expediente
          </span>
        </Link>
      </div>
      {/* CONTAIER */}
      <div className="flex flex-col bottom-0 login-bg">
        <div className='flex flex-col py-2 px-32'>
          {/* Search button */}
          <div className='ml-auto'>
            <IconButton>
              <FaSearch size={30} />
            </IconButton>
          </div>
          <h1 className='primary-color font-bold'>
            Expedientes Recientes
          </h1>
        </div>
        {/* cards */}
        <div className="py-2 px-32 pt-2">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {
              data.map((item, index) => <CardRecord key={index + item.folio} data={item} />)
            }
          </div>
          <div className='mt-10 flex flex-col justify-center items-center'>
            {/* TODO: add on click  */}
            <IconButton>
              <AiOutlinePlus size={40} />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  )
}
