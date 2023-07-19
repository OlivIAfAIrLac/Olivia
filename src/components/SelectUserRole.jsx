import { userRoles } from "@/helpers/catalogos";

const SelectUserRole = ({
    className,
    onChange,
    name,
    required,
    defaultValue
}) => {
    return (
        <select className={`input capitalize pl-2 ${className}`}
            onChange={onChange}
            name={name}
            required={required}
            defaultValue={defaultValue}
        >
            {userRoles.map(item => <option
                key={item.value}
                value={item.value}>
                {item.description}
            </option>)}
        </select>
    );
}

export default SelectUserRole;