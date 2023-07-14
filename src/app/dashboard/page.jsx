'use client'

import ExpedientesGrid from '@/components/ExpedientesGrid'
import LoaderSkeleton from '@/components/LoaderSkeleton'
import { apiRoutes, axiosClient } from '@/helpers/apiRoutes'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { FaClipboardUser } from 'react-icons/fa6'
import { routes } from '../../helpers/routes'


export default function Home() {
  const { data, status } = useSession()
  const [dataExpedientes, setDataExpedientes] = useState([])
  const [expedientesLoading, setExpedientesLoading] = useState(true);
  const token = data?.user.token

  const getExpedientes = useCallback(async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } }
      const res = await axios.get(apiRoutes.EXPEDIENTE, config);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      if (res.status === 200) {
        setExpedientesLoading(false)
        setDataExpedientes(res.data)
      }

    } catch (error) {
      console.error(error);
    }
  },
    [token],
  );
    useEffect(() => {
      status !== 'loading' && getExpedientes()
    }, [getExpedientes, status])


  return (
    <>
      <div className="flex p-2  mt-12 pb-8 py-2 px-32">
        {/* User name */}
        <div className="flex-1 ">
          <h1 className="text-3xl font-semibold">¡Buen dia!</h1>
          {
            status === 'loading'
              ? <LoaderSkeleton />
              : <h1 className="font-bold text-5xl">{data?.user.nombre}</h1>
          }

        </div>
        <div className='flex flex-col'>
          {data?.user.rol !== 'admin' ?
            <Link href={routes.dashboard.nuevoExpediente} className='flex primary-bg py-4 pr-8 pl-16'>
              <FaClipboardUser className='flex-initial' size={59} />
              <span className='ml-5 flex-initial mr-24 mt-5 capitalize'>
                nuevo expediente
              </span>
            </Link>
            : <AdminButtons />
          }
        </div>
      </div>
      {/* CONTAIER */}
      <div className="flex flex-col bottom-0 login-bg">
        {/* cards */}
        {expedientesLoading
          ? <LoaderSkeleton />
          : <ExpedientesGrid
            data={dataExpedientes}
          />
        }
      </div>
    </>
  )
}
const AdminButtons = () => {
  return <>
    <Link href={routes.dashboard.admin.adminUsuarios} className='flex primary-bg py-2 pr-8 pl-16 mb-4'>
      <FaClipboardUser className='flex-initial' size={35} />
      <span className='ml-5 flex-initial mr-24 mt-2 capitalize'>
        administrar usuarios
      </span>
    </Link>
    <Link href={routes.dashboard.nuevoExpediente} className='flex primary-bg py-2 pr-8 pl-16 '>
      <FaClipboardUser className='flex-initial' size={35} />
      <span className='ml-5 flex-initial mr-24 mt-2 capitalize'>
        crear nuevo expediente
      </span>
    </Link>
  </>
}

