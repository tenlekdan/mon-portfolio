import './index.scss'

const AnimatedLetters = ({letterClass, strArray, startIndx}) => {
    return (
        <span>
            {
            strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + startIndx}`}>
                    {char}
                </span>
            ))
            }
        </span>
    )
}
export default AnimatedLetters;