const AudioPlayer = ({
    src
}) => {
    return (
        <audio controls className="primary-bg" >
            {/* <source src={src} />
            <source src={src} type="audio/x-wav" />
            <source src={src} type="audio/mpeg" />
        Tu navegador no soporta reproductor de audio */}
            <source src={src} type="audio/m4a" />
        </audio>
    );
}

export default AudioPlayer;