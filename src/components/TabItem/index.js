import './index.css'

const TabItem = props => {
  const {tabDetails, tabChanged, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTab = isActive ? 'active-tab' : ''

  const changeTab = () => {
    tabChanged(tabId)
  }

  return (
    <li className="listitem">
      <button
        type="button"
        className={`tabbtn ${activeTab}`}
        onClick={changeTab}
      >
        <h1 className="tabhead">{displayText}</h1>
      </button>
    </li>
  )
}
export default TabItem
