import { getProfesion, getUnidad } from "@/helpers/catalogos";

const UserProfile = ({
    data
}) => {
    return (
        <>
            <span className="font-bold mb-2">{data.user.nombre}</span>
            <span className="capitalize">{getProfesion(data.user.profesion)}</span>
            <span>{getUnidad(data.user.unidad)}</span>
            <span>{data.user.email}</span>
            <span>{data.user.telefono} Ext.{data.user.extension}</span>
            <span className="capitalize">{data.user.rol}</span>
        </>
    );
}

export default UserProfile;