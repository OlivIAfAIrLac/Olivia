import { useState } from "react"

export default function OptionsGroup(props) {

    const [userValue, setUserValue] = useState(props.block.options[0])
    
    const handleChange = (e, id) => {
        const find = props.block.options.find(item => item.value === e.target.value)
        setUserValue(find)
        console.log(id, e.target.value)
    }

    return (

        <div class="flex flex-wrap">
            {
                props.block.options.map(item => {
                    return(
                        <label class="mr-2 my-1 flex items-center justify-center">
                            <input type="radio" value={item.value} name={props.block.field} onChange={(e)=>{handleChange(e, props.block.field)} } checked={item.value === userValue.value} />
                            <span class="mx-1.5 whitespace-nowrap">{item.description}</span>
                        </label>
                    )
                })    
            }
        </div>
    )
}