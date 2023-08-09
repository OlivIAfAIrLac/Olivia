import { useState } from "react"

export default function OptionsGroup(props) {

    const handleChange = (e, id) => {
        props.onChange(e, id)
    }

    return (

        <div className="flex flex-wrap">
            {
                props.block.options.map(item => {
                    return (
                        <label key={item.value} className="mr-2 my-1 flex items-center justify-center">
                            <input
                                type="radio"
                                value={item.value}
                                onBlur={() => props.onBlur()}
                                name={props.block._uid} onChange={(e) => { handleChange(e, props.block._uid) }}
                                checked={item.value === props.defaultValue}
                            />
                            <span className="mx-1.5 whitespace-nowrap">{item.description}</span>
                        </label>
                    )
                })
            }
        </div>
    )
}