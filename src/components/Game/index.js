import './index.css'
import {Component} from 'react'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'

class Game extends Component {
  render() {
    const {
      filteredImgList,
      tabsList,
      matchImg,
      activeTabId,
      updateActiveTabId,
      getThumbNailImg,
    } = this.props

    console.log(filteredImgList, tabsList, matchImg, activeTabId)

    return (
      <div className="game-bg-container">
        <div className="game-container">
          <img src={matchImg.imageUrl} className="matchImg" alt="match" />
          <ul className="tabsList-container">
            {tabsList.map(eachTabItem => (
              <TabItem
                tabDetails={eachTabItem}
                key={eachTabItem.tabId}
                isActive={eachTabItem.tabId === activeTabId}
                onUpdateActiveTabId={updateActiveTabId}
              />
            ))}
          </ul>

          <ul className="ImageList-container">
            {filteredImgList.map(eachImageItem => (
              <ImageItem
                imageDetails={eachImageItem}
                key={eachImageItem.thumbnailUrl}
                getThumbNailImg={getThumbNailImg}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Game
