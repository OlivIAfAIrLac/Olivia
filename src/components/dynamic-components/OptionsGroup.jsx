import { useState } from "react"

export default function OptionsGroup(props) {

    const [userValue, setUserValue] = useState(props.block.options[0])
   
    
    const handleChange = (e, id) => {
        const find = props.block.options.find(item => item.value === e.target.value)
        setUserValue(find)
        props.onChange(e, id)
    }

    return (

        <div className="flex flex-wrap">
            {
                props.block.options.map(item => {
                    return(
                        <label key={item.value} className="mr-2 my-1 flex items-center justify-center">
                            <input type="radio" value={item.value} name={props.block._uid} onChange={(e)=>{handleChange(e, props.block._uid)} } checked={item.value === userValue.value} />
                            <span className="mx-1.5 whitespace-nowrap">{item.description}</span>
                        </label>
                    )
                })    
            }
        </div>
    )
}