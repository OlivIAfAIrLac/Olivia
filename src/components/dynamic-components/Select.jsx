export default function Select(props) {
    return (
        <select className="w-1/2 p-1 border border-solid border-gray-600 my-2"
            onBlur={props.onBlur}
            defaultValue={props.defaultValue}
        >
            {props.block.options.map((option) => {
                return <option key={option}>{option}</option>
            })}
        </select>

    )


}