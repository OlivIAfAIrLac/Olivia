import { sabanaData } from "@/mock/apiResponse";
import { useRef } from "react";
import { DownloadTableExcel } from 'react-export-table-to-excel';

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

const Cell = ({ children }) => <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{children}</td>;

export default function SabanaTable() {
  const tableRef = useRef(null);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-7">
      <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
      >
        <button>Descargar en Xls</button>
      </DownloadTableExcel>
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
              <table className="min-w-full divide-y divide-gray-300" ref={tableRef}>
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
                    sabanaData.map(RowTable)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const RowTable = (item, index) => {
  const {
    _id,
    fecha,
    hora_de_inicio,
    area_que_atiende,
    especificar,
    modalidad_de_asesoria,
    modalidad_especificar,
    institucion_que_atiende,
    nombres_de_las_personas_que_atienden,
    numero_de_expediente_banavim,
    horario_de_termino_de_atencion,
    I_la_persona_presenta_alguna_enfermedad_y_o_lesion_que_requiera_ser_atendida_con_inmediatez,
    I_especificar_cual_en_caso_afirmativo,
    I_existe_algun_requerimiento_especifico,
    I_requerimiento_cual,
    I_presenta_alguna_emergencia,
    I_emergencia_cual,
    I_especificar,
    I_esta_en_periodo_de_gestacion,
    I_cuantos_meses,

  } = item;


  return <tr key={_id}>
    <Cell>{fecha}</Cell>
    <Cell>{hora_de_inicio}</Cell>
    <Cell>No. {index + 1}</Cell>
    <Cell>{ }</Cell>
    <CellAreaQueAtiende data={area_que_atiende} />
    <Cell>{especificar}</Cell>
    <CellModalidadAsesora data={modalidad_de_asesoria} />
    <Cell>{modalidad_especificar}</Cell>
    <Cell>{institucion_que_atiende}</Cell>
    {/* Área de adscripción*/}
    <Cell />
    <Cell>{nombres_de_las_personas_que_atienden}</Cell>
    {/* Cargo de la(s) persona(s) que atiende(n) */}
    <Cell />
    <Cell>{numero_de_expediente_banavim}</Cell>
    <Cell>{horario_de_termino_de_atencion}</Cell>
    <Cell>{I_la_persona_presenta_alguna_enfermedad_y_o_lesion_que_requiera_ser_atendida_con_inmediatez ? 1 : 0}</Cell>
    <Cell>{I_especificar_cual_en_caso_afirmativo}</Cell>
    <Cell>{I_existe_algun_requerimiento_especifico ? 1 : 0}</Cell>
    <CellRequerimientoEspecifico data={I_requerimiento_cual} />
    <Cell>{I_especificar}</Cell>
    <Cell>{I_presenta_alguna_emergencia ? 1 : 0}</Cell>
    <CellEmergencia data={I_emergencia_cual} />
    <Cell>{I_especificar}</Cell>
    <Cell>{I_esta_en_periodo_de_gestacion ? 1 : 0}</Cell>
    <Cell>{I_cuantos_meses}</Cell>
  </tr>
}

/* 
  TODO: improve this, could be better refactor and use catologos.js,
  but i i don't have time for deadline 
 */

const CellAreaQueAtiende = ({ data }) => {
  const psicologia = data.some(item => item === 'psicologia') ? 1 : 0
  const psicologia_nna = data.some(item => item === 'psicologia_nna') ? 1 : 0
  const juridica = data.some(item => item === 'juridica') ? 1 : 0
  const trabajo_social = data.some(item => item === 'trabajo_social') ? 1 : 0
  const ministerial = data.some(item => item === 'ministerial') ? 1 : 0
  const pericial = data.some(item => item === 'pericial') ? 1 : 0
  const medica = data.some(item => item === 'medica') ? 1 : 0
  const psiquiatrica = data.some(item => item === 'psiquiatrica') ? 1 : 0
  const otra = data.some(item => item === 'otra') ? 1 : 0
  return <>
    <Cell>{psicologia}</Cell>
    <Cell>{psicologia_nna}</Cell>
    <Cell>{juridica}</Cell>
    <Cell>{trabajo_social}</Cell>
    <Cell>{ministerial}</Cell>
    <Cell>{pericial}</Cell>
    <Cell>{medica}</Cell>
    <Cell>{psiquiatrica}</Cell>
    <Cell>{otra}</Cell>

  </>
}

const CellModalidadAsesora = ({ data }) => {
  return <>
    <Cell>{data === 'presencial' ? 1 : null}</Cell>
    <Cell>{data === 'telefonica' ? 1 : null}</Cell>
    <Cell>{data === 'otra' ? 1 : null}</Cell>
  </>
}
const CellRequerimientoEspecifico = ({ data }) => {
  const lengua_de_senias_mexicana_lsm = data === 'lengua_de_senias_mexicana_lsm' ? 1 : 0
  const lengua_indigena = data === 'lengua_indigena' ? 1 : 0
  const lengua_extranjera = data === 'lengua_extranjera' ? 1 : 0
  const discapacidades = data === 'discapacidades' ? 1 : 0
  const otra = data === 'otra' ? 1 : 0
  return <>
    <Cell>{lengua_de_senias_mexicana_lsm}</Cell>
    <Cell>{lengua_indigena}</Cell>
    <Cell>{lengua_extranjera}</Cell>
    <Cell>{discapacidades}</Cell>
    <Cell>{otra}</Cell>
  </>
}
const CellEmergencia = ({ data }) => {
  const atencion_medica_de_emergencia_por_lesiones = data === 'atencion_medica_de_emergencia_por_lesiones' ? 1 : 0
  const crisis_nerviosa = data === 'crisis_nerviosa' ? 1 : 0
  const dictamen_ginecologico_por_agresion_sexual = data === 'dictamen_ginecologico_por_agresion_sexual' ? 1 : 0
  const atencion_medica_por_agresion_sexual = data === 'atencion_medica_por_agresion_sexual' ? 1 : 0
  const otras = data === 'otras' ? 1 : 0
  return <>
    <Cell>{atencion_medica_de_emergencia_por_lesiones}</Cell>
    <Cell>{crisis_nerviosa}</Cell>
    <Cell>{dictamen_ginecologico_por_agresion_sexual}</Cell>
    <Cell>{atencion_medica_por_agresion_sexual}</Cell>
    <Cell>{otras}</Cell>
  </>
}