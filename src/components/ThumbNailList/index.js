import './index.css'

const ThumbNailList = props => {
  const {timgDetails, imageChecked} = props
  const {imageUrl, thumbnailUrl, id} = timgDetails

  const checkImg = () => {
    imageChecked(id)
  }

  return (
    <li className="tlistitem">
      <button className="tbtn" onClick={checkImg}>
        <img src={thumbnailUrl} alt="thumbnail" className="timg" />
      </button>
    </li>
  )
}

export default ThumbNailList
