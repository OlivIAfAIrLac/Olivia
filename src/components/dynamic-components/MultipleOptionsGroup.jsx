

export default function MultipleOptionsGroup(props) {

    return (

        <div className="flex flex-wrap">
            {
                props.block.options.map(item => {
                    return(
                        <label key={item.value} className="mr-2 my-1 flex items-center justify-center">
                            <input type="checkbox" value={item.value} name={props.block.field} onChange={(e)=>{props.onChange(e, props.block._uid)} } />
                            <span className="mx-1.5 whitespace-nowrap">{item.description}</span>
                        </label>
                    )
                })    
            }
        </div>
    )
}