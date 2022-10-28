import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {tabDetails, isActive, onUpdateActiveTabId} = this.props
    const {displayText, tabId} = tabDetails

    const ActiveTabStyling = isActive ? 'active-tab' : ''

    const onBtnClicked = () => {
      onUpdateActiveTabId(tabId)
    }

    return (
      <li className="tabItem-container">
        <button
          type="button"
          className={`tabItem-heading ${ActiveTabStyling}`}
          onClick={onBtnClicked}
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
