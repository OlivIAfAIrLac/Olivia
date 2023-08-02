import { sabanaData } from "@/mock/apiResponse"

const cabecerasSabana = [
  'Fecha (DD/MM/AAA)',
  'Hora de inicio',
  'No. Expediente',
  'No. Atención',
  'Psicología',
  'Jurídica',
  'Trabajo Social',
  'Ministerial',
  'Pericial',
  'Otras',
  'Psicología NNA',
  'Médica',
  'Psiquiátrica',
  'Especificar',
  'Presencial',
  'Telefónica',
  'Otra',
  'Especificar',
  'Institución que atiende',
  'Área de adscripción',
  'Nombre(s) de la persona(s) que atiende(n)',
  'Cargo de la(s) persona(s) que atiende(n)',
  'Número de expediente BANAVIM',
  'Hora de término atención:',
  '¿La persona presenta alguna enfermedad y/o lesión que requiera ser atendida con inmediatez? Si/No',
  'Especificar',
  '¿Existe algún requerimiento específico? Si/No',
  'Lengua de Señas Mexicana (LSM)',
  'Lengua Indígena',
  'Lengua Extranjera',
  'Discapacidad(es)',
  'Otra',
  'Especificar',
  '¿Presenta alguna emergencia? Si/No',
  'Atención médica de emergencia por lesiones',
  'Crisis nerviosa',
  'Dictamen ginecológico  por agresión sexual',
  'Atención médica por agresión sexual',
  'Otras',
  'Especificar',
  '¿Está en periodo de gestación?	Si/No',
  '¿Cuántos meses?',
  /* III. INFORMACIÓN GENERAL DE CONTACTO */
  'CURP',
  'Pseudónimo',
  'Nombre(s)',
  'Primer apellido',
  'Segundo apellido',
  'Género',
  'Especificar',
  'Sexo',
  'Fecha de nacimiento (DD/MM/AAAA)',
  'Nacionalidad',
  'Lugar de nacimiento',
  'Entidad federativa donde reside actualmente',
  'Teléfono fijo/casa',
  'Celular',
  'Otro, especificar',
  'Autoriza dar seguimiento vía WhatsApp',
  'Motivo',
  'Autoriza dar seguimiento vía telefónica',
  'Motivo',
  'Correo electrónico',
  'Calle',
  /* Direccion principal */
  'Número exterior',
  'Número interior',
  'Letra exterior',
  'Letra interior',
  'C.P.',
  'Cruce 1',
  'Cruce 2',
  'Referencia',
  'Estado',
  'Municipio',
  'Colonia/ Localidad',
  /* Direccion eventual */
  'Calle',
  'Número exterior',
  'Número interior',
  'Letra exterior',
  'Letra interior',
  'C.P.',
  'Cruce 1',
  'Cruce 2',
  'Referencia',
  'Estado',
  'Municipio',
  'Colonia/ Localidad',
  /*OMITIR llenar si la atención brindadada es relacionada a una nna */
  '¿Viene con acompañante mayor de edad?',
  'Edad',
  'Parentesco',
  'Nombre(s) de la persona acompañante:',
  'Primer apellido de la persona acompañante',
  'Segundo apellido de la persona acompañante',
  'Sexo',
  'Teléfono fijo / casa',
  'Celular',
  'Otro, especificar',
  /*OMITIR Datos de madre/padre/persona tutora:*/
  'Nombre(s)',
  'Primer apellido',
  'Segundo apellido',
  '¿Se le pude contactar?',
  'Teléfono fijo/casa',
  'Celular',
  'Otro, especificar',
  /* IV. INFORMACIÓN SOCIODEMOGRÁFICA */
  'Escolaridad',
  '¿Su escolaridad está en?',
  '¿Sabe leer y escribir?',
  '¿Tiene seguridad social?',
  'Ocupación de la Víctima',
  'Especificar',
  'Situación conyugal',
  'Régimen matrimonial',
  'Tipo de vivienda',
  'Especificar',
  /* Compartida con otras personas */
  'Amistades',
  'Familiares',
  'Otras',
  'Especificar otras',
  '¿Cuántas personas habitan en su vivienda?',
]

export default function SabanaTable() {

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-7">
      {/* <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div> */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>

                    {
                      cabecerasSabana.map(item => <th
                        key={item}
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {item}
                      </th>)
                    }
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {
                    sabanaData.map((item) => (
                      <tr key={item._id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.fecha}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.hora_de_inicio}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.expediente}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ }</td>
                        <CellAreaQueAtiende data={item.area_que_atiende} />
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ }</td>

                        {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, {}</span>
                          </a>
                        </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const CellAreaQueAtiende = ({ data }) => {
  const piscologia = data.some(item => item === 'piscologia') ? 1 : 0
  const juridico = data.some(item => item === 'juridico') ? 1 : 0
  const trabajo_social = data.some(item => item === 'trabajo_social') ? 1 : 0
  const ministerial = data.some(item => item === 'ministerial') ? 1 : 0
  const pericial = data.some(item => item === 'pericial') ? 1 : 0
  const conserjeria = data.some(item => item === 'conserjeria') ? 1 : 0
  return <>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{piscologia}</td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{juridico}</td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trabajo_social}</td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ministerial}</td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{pericial}</td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{conserjeria}</td>

  </>
}