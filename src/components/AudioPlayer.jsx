const AudioPlayer = ({
    src
}) => {
    return (
        <audio controls autoPlay className="primary-bg">
            <source src={src} type="audio/x-wav" />
            <source src={src} type="audio/mpeg" />
            Tu navegador no soporta reproductor de audio
        </audio>
    );
}

export default AudioPlayer;