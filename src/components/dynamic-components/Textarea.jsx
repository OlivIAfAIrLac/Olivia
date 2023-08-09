export default function Textarea(props) {
    return (
        <textarea className="border border-solid border-gray-600 p-1 my-1 w-full"
            defaultValue={props.defaultValue}
            onBlur={() => props.onBlur()}
            onChange={(e) => { props.onChange(e, props.block._uid) }}
        />
    )
}