import './index.css'

const Thumbnail = props => {
  const {item, imageChange, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = item
  const changeImage = () => {
    imageChange(id)
  }
  const elementClass = isActive ? 'button' : 'element'
  return (
    <li className="listItems">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={changeImage}
          className={`button ${elementClass}`}
        />
      </button>
    </li>
  )
}
export default Thumbnail
