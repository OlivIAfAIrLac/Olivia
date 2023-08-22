const AudioPlayer = ({
    src
}) => {
    return (
        <audio controls autoPlay className="primary-bg" >
            <source src={src} />
            <source src={src} type="audio/x-wav" />
            <source src={src} type="audio/mpeg" />
            <source src={src} type="audio/mp3" />
            <source src={src} type="audio/mp4a" />
            <source src={src} type="audio/m4a" />
            Tu navegador no soporta reproductor de audio
        </audio>
    );
}

export default AudioPlayer;