
const GiphyDisplay = ({giphy}) => {
    console.log(giphy)
//i like how you added text after they click the button
    return giphy.data ? (
        <>
        <h1>Merry Holidays! Enjoy this random GIF just for you. </h1>
        <img src={giphy.data.images.downsized.url} alt={giphy.data.title}/>
        </> 
    ) : (
        <p>Click below</p>
    )
}

export default GiphyDisplay;