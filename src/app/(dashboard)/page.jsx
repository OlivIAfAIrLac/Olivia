import { cookies } from 'next/headers';

import ExpedientesGrid from '@/components/ExpedientesGrid'
import Link from 'next/link'
import { FaClipboardUser } from 'react-icons/fa6'
import { dataExpedientes } from '../../mock/apiResponse'
import { routes } from '../../helpers/routes'
import { getUserInfo } from '@/helpers/auth';


export default async function Home() {
  const token = cookies().get('auth').value;
  const { nombre } = await getUserInfo(token);

  return (
    <>
      <div className="flex p-2  mt-12 pb-8 py-2 px-32">
        {/* User name */}
        <div className="flex-1 ">
          <h1 className="text-3xl font-semibold">¡Buen dia! </h1>
          <h1 className="font-bold text-5xl">{nombre}</h1>
        </div>
        <Link href={routes.dashboard.nuevoExpediente} className='flex primary-bg py-4 pr-8 pl-16 '>
          <FaClipboardUser className='flex-initial' size={59} />
          <span className='ml-5 flex-initial mr-24 mt-5'>
            Nuevo Expediente
          </span>
        </Link>
      </div>
      {/* CONTAIER */}
      <div className="flex flex-col bottom-0 login-bg">
        {/* cards */}
        <ExpedientesGrid
          data={dataExpedientes}
        />
      </div>
    </>
  )
}
