
const GiphyDisplay = ({giphy}) => {
    console.log(giphy)

    return giphy.data ? (
        <>
        <h1>Merry Holidays! Enjoy this random GIF just for you. </h1>
        <img src={giphy.data.images.downsized.url} alt={giphy.data.title}/>
        </>
    ) : (
        <img src={giphy.data.images.downsized.url}/>
    )
}

export default GiphyDisplay;