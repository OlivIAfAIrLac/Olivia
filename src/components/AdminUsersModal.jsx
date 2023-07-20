'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CloseBtn from './CloseBtn'
import Container from './Container'

// import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function AdminUsersModal({
    nombre = '',
    open,
    handleRemove,
    setOpen
}) {


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden primary-bg px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="absolute right-0 top-0 hidden pr-4 pt-2 sm:block">
                                    <CloseBtn size={25} onClose={() => setOpen(false)} />
                                </div>
                                {/* Modal Content */}
                                <div className='my-16 flex flex-row justify-center items-center '>
                                    <span className='capitalize'>¿Deseas eliminar a {nombre}?</span>
                                </div>
                                {/* Button Group */}
                                <div className="grid grid-flow-col gap-6 text-center">
                                    <button className="font-bold navbar-bg capitalize py-3 w-full mt-5" onClick={handleRemove}>
                                        {/* TODO: handle remove */}
                                        eliminar
                                    </button>
                                    <button className="font-bold navbar-bg capitalize py-3 w-full mt-5"
                                        onClick={() => setOpen(false)}
                                    >
                                        cancelar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
