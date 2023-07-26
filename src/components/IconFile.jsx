import { FaFileAudio, FaFileImage, FaFilePdf, FaFileWord, FaImagePortrait } from 'react-icons/fa6'

export default function IconFile({
    size,
    extension
}) {
    const fileIcon = {
        jpg: <FaFileImage size={size} />,
        jpeg: <FaFileImage size={size} />,
        png: <FaFileImage size={size} />,
        pdf: <FaFilePdf size={size} />,
        m4a: <FaFileAudio size={size} />,
        mp3: <FaFileAudio size={size} />,
        wav: <FaFileAudio size={size} />,
    }
    return (
        <>
            {fileIcon[extension]}
        </>
    )
}
