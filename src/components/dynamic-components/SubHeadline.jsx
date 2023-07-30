export default function SubHeadline(props) {
    return (
        <h4 className={`${props.block.thin ? '' : 'font-bold'} mt-2 mb-1 `}>{props.block.text}</h4>
    )

}