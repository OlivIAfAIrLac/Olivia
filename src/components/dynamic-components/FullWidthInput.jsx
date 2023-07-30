export default function FullWidthInput(props) {
    return (
        <div className="flex items-center justify-center w-full my-2">
            <label className="mr-4 whitespace-nowrap inline-block">
                <input type="checkbox" onChange={(e)=>{props.onChange(e, props.block._uid)}} />
                <span className="ml-1.5">{props.block.checkboxText}</span>
            </label>
            <span>{props.block.inputText}</span>
            <input type="text" onChange={(e)=>{props.onChange(e, props.block._uid)}} className="flex-1 ml-2 border border-solid border-gray-600 p-1"/>
        </div>
        
    )

    }

    