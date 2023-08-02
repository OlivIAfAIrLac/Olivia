import { getCatalogoDescription, getCatalogoIndexSabana } from "@/helpers/catalogos";
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
  'Cual',
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
  /* Habitantes */
  'Parentesco',
  'Especificar otro',
  'Sexo',
  'Género',
  'Especificar',
  'Edad',
  '¿Tiene alguna discapacidad?',
  '¿Es dependiente económico de quien solicita la atención?',
  '¿Es dependiente de cuidados de quien solicita la atención?',
  /* Hijos */
  '¿Tienes hijas, hijos o hijes?',
  '¿Cuantos?',
  'Sexo',
  'Especificar Sexo',
  'Nombre completo de sus hijes',
  'Edad. Años cumplidos',
  'Escolaridad',
  '¿Quién aporta el mayor ingreso dentro del hogar?',
  '¿Quién aporta el mayor porcentaje de ingresos para la víctima?',
  '¿Quién aporta el mayor ingreso para sus hijes?',
  '¿Cuánto?',
  /* EMPLEO */
  'Calle Empleo',
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
  '¿Qué días trabaja?',
  'Turno',
  'Monto de ingreso mensual de su empleo principal',
  '¿Pertenece a un grupo originario o indígena?',
  'Especificar',
  '¿Es una persona migrante/ transmigrante?',
  '¿Es una persona en situación de calle?',
  '¿Pertenece a la comunidad LGBTTIQ+?',
  'Especificar',
  '¿Tiene alguna discapacidad?',
  'Motora',
  'Auditiva',
  'Visual',
  'Intelectual',
  'Psicosocial',
  'Otra',
  'Especificar',
  '¿Vive violencia por presentar discapacidad?',
  'Especificar',
  '¿Presenta alguna discapacidad a consecuencia de la violencia?',
  'Especificar',
  '¿Tiene alguna enfermedad crónica degenerativa que limite o imposibilite sus actividades?',
  'Especificar',
  /*OMITIR Datos de consumo problematico */
  '¿Consume drogas?',
  'Alcohol',
  'Marihuana',
  'Depresores del sistema nervioso central(benzos)',
  'Cocaína (crack)',
  'GHB',
  'Alucinógenos',
  'Heroína',
  'Inhalantes',
  'Ketamina',
  'LSD (ácidos) ',
  'Tabaco',
  'PCP (ángel dust)',
  'MDMA (éxtasis) ',
  'Mescalina (peyote)',
  'Metanfetamina (cristal/meth)',
  'Medicamentos de venta libre',
  'Dextrometorfano (DXM) ',
  'Loperamida',
  'Opioides con receta médica (oxy/percs)',
  'Estimulantes con receta médica',
  'Esteroides (anabólicos)',
  'Fentanilo',
  'Cannabinoides sintéticos (K2/spice)',
  'Catinonas sintéticas',
  'Otra',
  'Especificar otro',
  /* IV Motivo de la atencion */
  'Contexto (Causa y Evolución)',
  '¿Ha tenido que ser atendida en una institución médica o por personal médico como consecuencia de un evento de violencia con la persona agresora?',
  '¿Episodio reciente?',
  'Especificar',
  'Último episodio de violencia',
  'Especificar',
  'Acciones o intentos de solución realizados',
  'Personas involucradas en la situación',
  /* V. ANTECEDENTES DE VIOLENCIA  */
  'Contexto (Causa y Evolución)',
  'Acciones o intentos de solución realizados',
  'Personas involucradas en la situación',
  'Redes de apoyo y tipo de apoyo que se proporcionó',
  '¿Recurrió a alguna institución para pedir apoyo?',
  'Especificar',
  '¿Cuenta con expediente  de atención?',
  'Especificar',
  /* VI INFORMACION DE LA PERSONA AGRESORA */
  '¿Persona conocida?',
  'Pseudónimo',
  'Nombre(s)',
  'Primer apellido',
  'Segundo apellido',
  'Género',
  'Especificar',
  'Sexo',
  'Nacionalidad',
  'Relación de la persona agresora con la víctima.',
  'Especificar relación',
  'Tiempo de convivencia con la persona agresora (años y meses)',
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
  'Escolaridad',
  '¿Su escolaridad está en?',
  'Ocupación',
  'Teléfono fijo/casa',
  'Celular',
  'Otro, especificar',
  'Posesión de armas',
  '¿Consume drogas?',
  'Alcohol',
  'Marihuana',
  'Depresores del sistema nervioso central(benzos)',
  'Cocaína (crack)',
  'GHB',
  'Alucinógenos',
  'Heroína',
  'Inhalantes',
  'Ketamina',
  'LSD (ácidos) ',
  'Tabaco',
  'PCP (ángel dust)',
  'MDMA (éxtasis) ',
  'Mescalina (peyote)',
  'Metanfetamina (cristal/meth)',
  'Medicamentos de venta libre',
  'Dextrometorfano (DXM) ',
  'Loperamida',
  'Opioides con receta médica (oxy/percs)',
  'Estimulantes con receta médica',
  'Esteroides (anabólicos)',
  'Fentanilo',
  'Cannabinoides sintéticos (K2/spice)',
  'Catinonas sintéticas',
  'Otra',
  'Especificar otro',
  'Enfermedad mental',
  'Toma algún tratamiento psiquiátrico',
  'Farmacodependencia',
  'Pertenece a la policía o al ejercito',
  'Pertenece o tiene enlace con el crimen organizado',
  'Historial de antecedentes penales',
  'Infidelidad',
  'Estatura Aproximada (m. / cm.)',
  'Complexión',
  'Tez',
  'Color de cabello',
  'Tamaño',
  'Forma',
  'Nariz',
  'Labios',
  'Color',
  'Descripción del estado físico aparente',
  'Forma de la cara. Especificar',
  'Tipos de cejas. Especificar',
  'Bigote',
  'Especificar Forma',
  'Barba',
  'Señas particulares',
  'Tatuajes',
  'Especificar forma y lugar',
  'Lunares',
  'Lesiones',
  'Cicatrices',
  'Especificar forma y lugar',
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
                    sabanaData.length > 0 && sabanaData.map(RowTable)
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
    II_curp,
    II_pseudonimo,
    II_nombre,
    II_primer_apellido,
    II_segundo_apellido,
    II_genero,
    II_genero_especificar,
    II_sexo,
    II_fecha_de_nacimiento,
    II_nacionalidad,
    II_lugar_de_nacimiento,
    II_entidad_federativa_donde_reside_actualmente,
    II_telefono_fijo_casa,
    II_celular,
    II_especificar,
    II_autoriza_dar_seguimiento_via_whatsapp,
    II_motivo_whatsapp,
    II_autoriza_dar_seguimiento_via_telefonica,
    II_motivo_telefonica,
    II_correo_electronico,
    II_direccion_calle,
    II_direccion_numero_exterior,
    II_direccion_numero_interior,
    II_direccion_letra_exterior,
    II_direccion_letra_interior,
    II_direccion_cp,
    II_direccion_cruce1,
    II_direccion_cruce2,
    II_direccion_referencia,
    II_direccion_estado,
    II_direccion_municipio,
    II_direccion_colonia_localidad,
    II_direccion_eventual_calle,
    II_direccion_eventual_numero_exterior,
    II_direccion_eventual_numero_interior,
    II_direccion_eventual_letra_exterior,
    II_direccion_eventual_letra_interior,
    II_direccion_eventual_cp,
    II_direccion_eventual_cruce1,
    II_direccion_eventual_cruce2,
    II_direccion_eventual_referencia,
    II_direccion_eventual_estado,
    II_direccion_eventual_municipio,
    II_direccion_eventual_colonia_localidad,
    III_escolaridad,
    III_su_escolaridad_esta_en,
    III_sabe_leer_y_escribir,
    III_tiene_seguridad_social,
    III_cual_seguridad_social,
    III_ocupacion_de_la_persona,
    III_especificar_ocupacion_de_la_persona,
    III_situacion_conyugal,
    III_regimen_matrimonial,
    III_tipo_de_vivienda,
    III_especificar_tipo_de_vivienda,
    III_compartida_con_otras_personas,
    III_cuantas_personas_habitan_en_su_vivienda,
    III_parentesco_habitante,
    III_especificar_habitante,
    III_sexo_habitante,
    III_genero_habitante,
    III_genero_habitante_especificar,
    III_edad_habitante,
    III_tiene_alguna_discapacidad_habitante,
    III_es_dependiente_economico_de_quien_solicita_la_atencion,
    III_es_dependiente_de_cuidados_de_quien_solicita_la_atencion,
    III_compartida_especificar,
    III_tiene_hijas_hijos_o_hijes,
    III_cuantos_hijes_tiene,
    III_sexo,
    III_nombre_completo_de_sus_hijes,
    III_especificar_sexo,
    III_edad_anios_cumplidos,
    III_escolaridad_hijes,
    III_quien_aporta_el_mayor_ingreso_dentro_del_hogar,
    III_quien_aporta_el_mayor_porcentaje_de_ingresos_para_la_victima,
    III_quien_aporta_el_mayor_ingreso_para_sus_hijes,
    III_cuanto,
    III_calle_empleo,
    III_numero_exterior_empleo,
    III_numero_interior_empleo,
    III_letra_exterior_empleo,
    III_letra_interior_empleo,
    III_cp_empleo,
    III_cruce1_empleo,
    III_cruce2_empleo,
    III_referencia_empleo,
    III_estado_empleo,
    III_municipio_empleo,
    III_colonia_localidad_empleo,
    III_que_dias_de_la_semana_trabaja,
    III_turno,
    III_monto_de_ingreso_mensual_de_su_empleo_principal,
    III_pertenece_a_un_grupo_originario_o_indigena,
    III_pertenece_a_un_grupo_originario_o_indigena_especiificar,
    III_es_una_persona_migrante_transmigrante,
    III_es_una_persona_en_situacion_de_calle,
    III_pertenece_a_la_comunidad_lgbtttiq,
    III_pertenece_a_la_comunidad_lgbtttiq_especificar,
    III_tiene_alguna_discapacidad,
    III_discapacidad,
    III_especificar_discapacidad,
    III_vive_violencia_por_presentar_discapacidad,
    III_especificar_violencia,
    III_presenta_alguna_discapacidad_a_consecuencia_de_la_violencia,
    III_presenta_alguna_discapacidad_a_consecuencia_de_la_violencia_especificar,
    III_tiene_alguna_enfermedad_cronica_degenerativa_que_limite_o_imposibilite_sus_actividades,
    III_especificar_enfermedad_cronica,
    III_consumo_de_drogas,
    III_especificar_el_tipo_de_drogas_que_consume_la_prv,
    IV_contexto_causa_y_evolucion,
    IV_ha_tenido_que_ser_atendida_en_una_institucion_medica_o_por_personal_medico_como_consecuencia_de_un_evento_de_violencia_con_la_persona_agresora,
    IV_ultimo_episodio_de_violencia_reciente,
    IV_ultimo_episodio_de_violencia_reciente_especificar,
    IV_ultimo_episodio_de_violencia,
    IV_ultimo_episodio_de_violencia_especificar,
    IV_acciones_o_intentos_de_solucion_realizados,
    IV_personas_involucradas_en_la_situacion,
    V_contexto_causa_y_evolucion,
    V_acciones_o_intentos_de_solucion_realizados,
    V_personas_involucradas_en_la_situacion,
    V_redes_de_apoyo_y_tipo_de_apoyo_que_se_proporciono,
    V_recurrio_a_alguna_institucion_para_pedir_apoyo,
    V_recurrio_a_alguna_institucion_especificar,
    V_cuenta_con_expediente_de_atencion,
    V_cuenta_con_expediente_de_atencion_especificar,
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
    <Cell>{II_curp}</Cell>
    <Cell>{II_pseudonimo}</Cell>
    <Cell>{II_nombre}</Cell>
    <Cell>{II_primer_apellido}</Cell>
    <Cell>{II_segundo_apellido}</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'genero',
        value: II_genero,
      })
    }</Cell>
    <Cell>{II_genero_especificar}</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'sexo',
        value: II_sexo,
      })
    }</Cell>
    <Cell>{II_fecha_de_nacimiento}</Cell>
    <Cell>{II_nacionalidad}</Cell>
    <Cell>{II_lugar_de_nacimiento}</Cell>
    <Cell>{II_entidad_federativa_donde_reside_actualmente}</Cell>
    <Cell>{II_telefono_fijo_casa}</Cell>
    <Cell>{II_celular}</Cell>
    <Cell>{II_especificar}</Cell>

    <Cell>{II_autoriza_dar_seguimiento_via_whatsapp ? 1 : 0}</Cell>
    <Cell>{II_motivo_whatsapp}</Cell>
    <Cell>{II_autoriza_dar_seguimiento_via_telefonica ? 1 : 0}</Cell>
    <Cell>{II_motivo_telefonica}</Cell>
    <Cell>{II_correo_electronico}</Cell>
    <Cell>{II_direccion_calle}</Cell>
    <Cell>{II_direccion_numero_exterior}</Cell>
    <Cell>{II_direccion_numero_interior}</Cell>
    <Cell>{II_direccion_letra_exterior}</Cell>
    <Cell>{II_direccion_letra_interior}</Cell>
    <Cell>{II_direccion_cp}</Cell>
    <Cell>{II_direccion_cruce1}</Cell>
    <Cell>{II_direccion_cruce2}</Cell>
    <Cell>{II_direccion_referencia}</Cell>
    <Cell>{II_direccion_estado}</Cell>
    <Cell>{II_direccion_municipio}</Cell>
    <Cell>{II_direccion_colonia_localidad}</Cell>
    <Cell>{II_direccion_eventual_calle}</Cell>
    <Cell>{II_direccion_eventual_numero_exterior}</Cell>
    <Cell>{II_direccion_eventual_numero_interior}</Cell>
    <Cell>{II_direccion_eventual_letra_exterior}</Cell>
    <Cell>{II_direccion_eventual_letra_interior}</Cell>
    <Cell>{II_direccion_eventual_cp}</Cell>
    <Cell>{II_direccion_eventual_cruce1}</Cell>
    <Cell>{II_direccion_eventual_cruce2}</Cell>
    <Cell>{II_direccion_eventual_referencia}</Cell>
    <Cell>{II_direccion_eventual_estado}</Cell>
    <Cell>{II_direccion_eventual_municipio}</Cell>
    <Cell>{II_direccion_eventual_colonia_localidad}</Cell>
    <>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'escolaridad',
        value: III_escolaridad
      })
    }</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'estatus_escolaridad',
        value: III_su_escolaridad_esta_en
      })
    }</Cell>
    <Cell>{III_sabe_leer_y_escribir ? 1 : 0}</Cell>
    <Cell>{III_tiene_seguridad_social ? 1 : 0}</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'seguridad_social',
        value: III_cual_seguridad_social
      })
    }</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'ocupacion',
        value: III_ocupacion_de_la_persona
      })
    }</Cell>
    <Cell>{III_especificar_ocupacion_de_la_persona}</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'situacion_conyugal',
        value: III_situacion_conyugal
      })
    }</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'regimen_matrimonial',
        value: III_regimen_matrimonial
      })
    }</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'tipo_de_vivienda',
        value: III_tipo_de_vivienda
      })
    }</Cell>
    <Cell>{III_especificar_tipo_de_vivienda}</Cell>
    <CellViviendaCompartida data={III_compartida_con_otras_personas} />
    <Cell>{III_compartida_especificar}</Cell>
    <Cell>{III_cuantas_personas_habitan_en_su_vivienda}</Cell>

    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'parentesco',
        value: III_parentesco_habitante
      })
    }</Cell>
    <Cell>{III_especificar_habitante}</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'sexo',
        value: III_sexo_habitante,
      })
    }</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'genero',
        value: III_genero_habitante
      })
    }</Cell>
    <Cell>{III_genero_habitante_especificar}</Cell>
    <Cell>{III_edad_habitante}</Cell>
    <Cell>{III_tiene_alguna_discapacidad_habitante ? 1 : 0}</Cell>
    <Cell>{III_es_dependiente_economico_de_quien_solicita_la_atencion ? 1 : 0}</Cell>
    <Cell>{III_es_dependiente_de_cuidados_de_quien_solicita_la_atencion ? 1 : 0}</Cell>
    <Cell>{III_tiene_hijas_hijos_o_hijes ? 1 : 0}</Cell>
    <Cell>{III_cuantos_hijes_tiene}</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'sexo',
        value: III_sexo
      })
    }</Cell>
    <Cell>{III_especificar_sexo}</Cell>
    <Cell>{III_nombre_completo_de_sus_hijes}</Cell>
    <Cell>{III_edad_anios_cumplidos}</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'escolaridad',
        value: III_escolaridad_hijes
      })
    }</Cell>
    <Cell>{III_quien_aporta_el_mayor_ingreso_dentro_del_hogar}</Cell>
    <Cell>{III_quien_aporta_el_mayor_porcentaje_de_ingresos_para_la_victima}</Cell>
    <Cell>{III_quien_aporta_el_mayor_ingreso_para_sus_hijes}</Cell>
    <Cell>{III_cuanto}</Cell>
    <Cell>{III_calle_empleo}</Cell>
    <Cell>{III_numero_exterior_empleo}</Cell>
    <Cell>{III_numero_interior_empleo}</Cell>
    <Cell>{III_letra_exterior_empleo}</Cell>
    <Cell>{III_letra_interior_empleo}</Cell>
    <Cell>{III_cp_empleo}</Cell>
    <Cell>{III_cruce1_empleo}</Cell>
    <Cell>{III_cruce2_empleo}</Cell>
    <Cell>{III_referencia_empleo}</Cell>
    <Cell>{III_estado_empleo}</Cell>
    <Cell>{III_municipio_empleo}</Cell>
    <Cell>{III_colonia_localidad_empleo}</Cell>
    <Cell>{III_que_dias_de_la_semana_trabaja}</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'turno',
        value: III_turno
      })
    }</Cell>
    <Cell>{III_monto_de_ingreso_mensual_de_su_empleo_principal}</Cell>
    <Cell>{III_pertenece_a_un_grupo_originario_o_indigena ? 1 : 0}</Cell>
    <Cell>{III_pertenece_a_un_grupo_originario_o_indigena_especiificar}</Cell>
    <Cell>{III_es_una_persona_migrante_transmigrante ? 1 : 0}</Cell>
    <Cell>{III_es_una_persona_en_situacion_de_calle ? 1 : 0}</Cell>
    <Cell>{III_pertenece_a_la_comunidad_lgbtttiq ? 1 : 0}</Cell>
    <Cell>{III_pertenece_a_la_comunidad_lgbtttiq_especificar}</Cell>
    <Cell>{III_tiene_alguna_discapacidad ? 1 : 0}</Cell>
    <CellDiscapacidad data={III_discapacidad} />
    <Cell>{III_especificar_discapacidad}</Cell>

    <Cell>{III_vive_violencia_por_presentar_discapacidad ? 1 : 0}</Cell>
    <Cell>{III_especificar_violencia}</Cell>
    <Cell>{III_presenta_alguna_discapacidad_a_consecuencia_de_la_violencia ? 1 : 0}</Cell>
    <Cell>{III_presenta_alguna_discapacidad_a_consecuencia_de_la_violencia_especificar}</Cell>
    <Cell>{III_tiene_alguna_enfermedad_cronica_degenerativa_que_limite_o_imposibilite_sus_actividades ? 1 : 0}</Cell>
    <Cell>{III_especificar_enfermedad_cronica}</Cell>
    <Cell>{III_consumo_de_drogas ? 1 : 0}</Cell>
    <CellDrogas data={III_especificar_el_tipo_de_drogas_que_consume_la_prv} />
    <Cell />
    <Cell>{IV_contexto_causa_y_evolucion}</Cell>
    <Cell>{IV_ha_tenido_que_ser_atendida_en_una_institucion_medica_o_por_personal_medico_como_consecuencia_de_un_evento_de_violencia_con_la_persona_agresora ? 1 : 0}</Cell>
    <Cell>{IV_ultimo_episodio_de_violencia_reciente ? 1 : 0}</Cell>
    <Cell>{IV_ultimo_episodio_de_violencia_reciente_especificar}</Cell>
    <Cell>{
      getCatalogoIndexSabana({
        catalogo: 'frecuencia_violencia',
        value: IV_ultimo_episodio_de_violencia
      })
    }</Cell>
    <Cell>{IV_ultimo_episodio_de_violencia_especificar}</Cell>
    <Cell>{IV_acciones_o_intentos_de_solucion_realizados}</Cell>
    <Cell>{IV_personas_involucradas_en_la_situacion}</Cell>
    <Cell>{V_contexto_causa_y_evolucion}</Cell>
    <Cell>{V_acciones_o_intentos_de_solucion_realizados}</Cell>
    <Cell>{V_personas_involucradas_en_la_situacion}</Cell>
    <Cell>{V_redes_de_apoyo_y_tipo_de_apoyo_que_se_proporciono}</Cell>
    <Cell>{V_recurrio_a_alguna_institucion_para_pedir_apoyo ? 1 : 0}</Cell>
    <Cell>{V_recurrio_a_alguna_institucion_especificar}</Cell>
    <Cell>{V_cuenta_con_expediente_de_atencion ? 1 : 0}</Cell>
    <Cell>{V_cuenta_con_expediente_de_atencion_especificar}</Cell>

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
const CellViviendaCompartida = ({ data }) => {
  const amistades = data === 'amistades' ? 1 : 0
  const familiares = data === 'familiares' ? 1 : 0
  const otras = data === 'otras' ? 1 : 0
  return <>
    <Cell>{amistades}</Cell>
    <Cell>{familiares}</Cell>
    <Cell>{otras}</Cell>
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
const CellDiscapacidad = ({ data }) => {
  const motora = data === 'motora' ? 1 : 0
  const auditiva = data === 'auditiva' ? 1 : 0
  const visual = data === 'visual' ? 1 : 0
  const intelectual = data === 'intelectual' ? 1 : 0
  const psicosocial = data === 'psicosocial' ? 1 : 0
  const otra = data === 'otra' ? 1 : 0
  return <>
    <Cell>{motora}</Cell>
    <Cell>{auditiva}</Cell>
    <Cell>{visual}</Cell>
    <Cell>{intelectual}</Cell>
    <Cell>{psicosocial}</Cell>
    <Cell>{otra}</Cell>
  </>
}
const CellDrogas = ({ data }) => {
  const alcohol = data === 'alcohol' ? 1 : 0
  const marihuana = data === 'marihuana' ? 1 : 0
  const depresores_del_sistema_nervioso_central_benzos = data === 'depresores_del_sistema_nervioso_central_benzos' ? 1 : 0
  const cocaina_crack_ghb = data === 'cocaina_crack_ghb' ? 1 : 0
  const alucinogenos = data === 'alucinogenos' ? 1 : 0
  const heroina = data === 'heroina' ? 1 : 0
  const inhalantes = data === 'inhalantes' ? 1 : 0
  const ketamina = data === 'ketamina' ? 1 : 0
  const lsd_acidos = data === 'lsd_acidos' ? 1 : 0
  const tabaco = data === 'tabaco' ? 1 : 0
  const pcp_angel_dust = data === 'pcp_angel_dust' ? 1 : 0
  const mdma_extasis = data === 'mdma_extasis' ? 1 : 0
  const mescalina_peyote = data === 'mescalina_peyote' ? 1 : 0
  const metanfetamina_cristal_meth = data === 'metanfetamina_cristal_meth' ? 1 : 0
  const dextrometorfano_dxm = data === 'dextrometorfano_dxm' ? 1 : 0
  const medicamentos_de_venta_libre = data === 'medicamentos_de_venta_libre' ? 1 : 0
  const loperamida = data === 'loperamida' ? 1 : 0
  const opioides_con_receta_medica_oxy_percs = data === 'opioides_con_receta_medica_oxy_percs' ? 1 : 0
  const estimulantes_con_receta_medica = data === 'estimulantes_con_receta_medica' ? 1 : 0
  const esteroides_anabolicos = data === 'esteroides_anabolicos' ? 1 : 0
  const cannabinoides_sinteticos_k_spice = data === 'cannabinoides_sinteticos_k_spice' ? 1 : 0
  const catinonas_sinteticas = data === 'catinonas_sinteticas' ? 1 : 0
  const fentanilo = data === 'fentanilo' ? 1 : 0
  return <>
    <Cell>{alcohol}</Cell>
    <Cell>{marihuana}</Cell>
    <Cell>{depresores_del_sistema_nervioso_central_benzos}</Cell>
    <Cell>{cocaina_crack_ghb}</Cell>
    <Cell>{alucinogenos}</Cell>
    <Cell>{heroina}</Cell>
    <Cell>{inhalantes}</Cell>
    <Cell>{ketamina}</Cell>
    <Cell>{lsd_acidos}</Cell>
    <Cell>{tabaco}</Cell>
    <Cell>{pcp_angel_dust}</Cell>
    <Cell>{mdma_extasis}</Cell>
    <Cell>{mescalina_peyote}</Cell>
    <Cell>{metanfetamina_cristal_meth}</Cell>
    <Cell>{dextrometorfano_dxm}</Cell>
    <Cell>{medicamentos_de_venta_libre}</Cell>
    <Cell>{loperamida}</Cell>
    <Cell>{opioides_con_receta_medica_oxy_percs}</Cell>
    <Cell>{estimulantes_con_receta_medica}</Cell>
    <Cell>{esteroides_anabolicos}</Cell>
    <Cell>{cannabinoides_sinteticos_k_spice}</Cell>
    <Cell>{catinonas_sinteticas}</Cell>
    <Cell>{fentanilo}</Cell>
    <Cell />
    <Cell />
  </>
}
