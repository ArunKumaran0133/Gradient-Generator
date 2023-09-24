import {ListItemContainer, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientTabs, getTabId, isActiveTabId} = props
  const {directionId, value, displayText} = gradientTabs
  const getActiveTabId = () => {
    getTabId(directionId, value)
  }
  console.log(isActiveTabId)
  return (
    <ListItemContainer>
      <CustomButton
        type="button"
        value={value}
        onClick={getActiveTabId}
        isActiveTabId={isActiveTabId}
      >
        {displayText}
      </CustomButton>
    </ListItemContainer>
  )
}

export default GradientDirectionItem
