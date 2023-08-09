import { useState } from "react"

export default function MultipleOptionsGroup(props) {

    const [values, setValues] = useState(props.defaultValue || []) 

    const handleChange = (e, id) => {
        const options = [...values]
        if(values.includes(e.target.value)) {
      
            const index = values.indexOf(e.target.value);
            const selectedValue = options.splice(index, 1);
        } else {
           options.push(e.target.value)
        }
        setValues(options)
        props.onChangedMultiple(id, options)
       
    }

    return (

        <div className="flex flex-wrap">
            {
                props.block.options.map(item => {
                    return (
                        <label key={item.value} className="mr-2 my-1 flex items-center justify-center">
                            <input
                                type="checkbox"
                                value={item.value}
                                name={props.block.field}
                                onChange={(e) => { handleChange(e, props.block._uid) }}
                                onBlur={() => props.onBlur()}
                                checked={values.includes(item.value)}
                            />
                            <span className="mx-1.5 whitespace-nowrap">{item.description}</span>
                        </label>
                    )
                })
            }
        </div>
    )
}