export default function Checkbox(props) {
    return (
        <label className="mr-4 whitespace-nowrap mb-2 inline-block">
            <input type="checkbox" onChange={(e)=>{props.onChange(e, props.block._uid)}} />
            <span className="ml-1.5">{props.block.text}</span>
        </label>
    )


}
