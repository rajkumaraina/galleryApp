import './index.css'

const Thumbnail = props => {
  const {item, imageChange} = props
  const {id, thumbnailUrl, thumbnailAltText} = item
  const changeImage = () => {
    imageChange(id)
  }
  return (
    <li className="listItems">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={changeImage}
          className="smallImages"
        />
      </button>
    </li>
  )
}
export default Thumbnail
