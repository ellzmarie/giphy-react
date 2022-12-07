
const GiphyDisplay = ({giph}) => {
    return (
        <>
        <h1>Giphy Display</h1>
        <img src={giph.url} alt='{giph.title}'/>
        </>
    )
}

export default GiphyDisplay;