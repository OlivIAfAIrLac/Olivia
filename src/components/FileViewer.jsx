import React from 'react'
import IconButton from './IconButton'
import CloseBtn from './CloseBtn'
import { FaRegEye } from 'react-icons/fa6'

export const FileViewer = ({
    isAudio,
    descripcion,
    onView,
    url,
    onRemove
}) => {
    return (
        <div className="px-5 mt-2 flex flex-col ">
            <div className="border-b-2 border-color-primary  flex flex-row">
                {/* Document descripcion */}
                <span className="pl-5 mt-4">{descripcion}</span>
                {/* button group */}
                <div className="ml-auto mb-1">
                    {!isAudio ?
                        <IconButton className='mr-3'>
                            <a download href={url}>
                                <FaRegEye size={25} />
                            </a>
                        </IconButton>
                        :
                        <IconButton className='mr-3' onClick={onView}>
                            <FaRegEye size={25} />
                        </IconButton>

                    }
                    <CloseBtn
                        onClick={onRemove}
                        size={25}
                    />
                </div>
            </div>
        </div>
    )
}

