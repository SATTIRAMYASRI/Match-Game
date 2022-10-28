import './index.css'
import {Component} from 'react'

class ImageItem extends Component {
  render() {
    const {imageDetails, getThumbNailImg} = this.props
    const {id, thumbnailUrl} = imageDetails

    const onThumbnailImgClicked = () => {
      getThumbNailImg(id)
    }

    return (
      <li className="Thumbnail-image-container">
        <button
          type="button"
          className="Thumbnail-image-btn"
          onClick={onThumbnailImgClicked}
        >
          <img src={thumbnailUrl} alt="thumbnail" className="Thumbnail-image" />
        </button>
      </li>
    )
  }
}

export default ImageItem
