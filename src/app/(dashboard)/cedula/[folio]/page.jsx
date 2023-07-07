const HomeCedula = ({ params }) => {
    const { folio } = params
    return (
        <h1>Cédula: {folio}</h1>
    );
}

export default HomeCedula;