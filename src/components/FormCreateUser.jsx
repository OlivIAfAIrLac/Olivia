import { routes } from "@/helpers/routes";

const { default: Link } = require("next/link");
const { default: SelectUserRole } = require("./SelectUserRole");
const { default: SelectUnidad } = require("./SelectUnidad");
const { default: SelectProfesion } = require("./SelectProfesion");

export const FormCreateUser = ({
    handleSubmit,
    editMode = false,
    defaultValues = {
        nombre: '',
        profesion: '',
        unidad: '',
        email: '',
        telefono: '',
        password: '',
        extension: '',
        rol: '',
    }
}) => {

    return (<>
        <span className="mt-10 capitalize font-semibold mb-4">
            {editMode ? 'editar' : 'crear'} usuario
        </span>
        <form className="flex flex-col login-bg p-5" onSubmit={handleSubmit}>
            {/* nombre */}
            <span className="capitalize mt-2">nombre completo *</span>
            <input className="input p-2 capitalize"
                name='nombre'
                defaultValue={defaultValues.nombre}
                required
            />
            {/* profesion */}
            <span className="capitalize mt-2">profesión *</span>
            <SelectProfesion
                defaultValue={defaultValues.profesion}
                name='profesion'
                required
                className="input w-1/5"
            />
            {/* unidad */}
            <span className="capitalize mt-2">unidad *</span>
            <SelectUnidad
                defaultValue={defaultValues.unidad}
                name='unidad'
                required
                className='w-1/5'
            />
            {/* correo institucional */}
            <span className="capitalize mt-2">correo institucional *</span>
            <input
                defaultValue={defaultValues.email}
                name='email'
                required
                className="input p-2"
                type="email"
            />
            {/* Telefono */}
            <span className="capitalize mt-2">Telefono *</span>
            <input className="input p-2"
                defaultValue={defaultValues.telefono}
                name='telefono'
                required
            />
            {/* password */}
            {!editMode && <><span className="capitalize mt-2">password *</span>
                <input className="input p-2"
                    defaultValue={defaultValues.password}
                    name='password'
                    required
                    type="password"
                />
            </>
            }
            <span className="capitalize mt-2">extensión</span>
            <input
                className="input w-1/5 p-2"
                defaultValue={defaultValues.extension}
                name='extension'
            />
            {/* tipo usuario */}
            <span className="capitalize mt-2">tipo de usuario *</span>
            <SelectUserRole
                defaultValue={defaultValues.rol}
                name='rol'
                required
                className='w-1/5'
            />
            <div className="grid grid-flow-col gap-6 mt-5">
                <button className="primary-bg p-3">Guardar</button>
                <Link href={routes.dashboard.admin.adminUsuarios} className="primary-bg p-3 text-center">Cancelar</Link>
            </div>
        </form>
    </>)
};