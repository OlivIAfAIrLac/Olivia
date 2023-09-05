import { formatDateTime } from "@/helpers/dateFormatter";

const DateTimeDisplayer = ({
    timeStamp
}) => {
    const { fecha, hora } = formatDateTime(timeStamp ?? new Date());
    return (
        <div className="flex flex-col items-end justify-end">
            <h1 className="capitalize text-xs ml-auto">hora: {hora}</h1>
            <h1 className="capitalize text-xs ml-auto">fecha: {fecha}</h1>
        </div>
    );
}

export default DateTimeDisplayer;