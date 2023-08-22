const AudioPlayer = ({
    src
}) => {
    return (
        <audio controls autoPlay className="primary-bg" src={src} >
            {/* <source src={src} />
            <source src={src} type="audio/x-wav" />
            <source src={src} type="audio/mpeg" />
            <source src={src} type="audio/m4a" />
            Tu navegador no soporta reproductor de audio */}
        </audio>
    );
}

export default AudioPlayer;