import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientMainContainer,
  Heading,
  ParaText,
  ListContainer,
  InputContainer,
  LabelElement,
  UserInput,
  InputMainContainer,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    initialColor1: '',
    initialColor2: '',
    activeTabId: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    value: gradientDirectionsList[0].value,
  }

  getHexCode1 = event => {
    this.setState({initialColor1: event.target.value})
  }

  getHexCode2 = event => {
    this.setState({initialColor2: event.target.value})
  }

  getTabId = (directionId, value) => {
    this.setState({activeTabId: directionId, value})
  }

  generateGradient = () => {
    const {initialColor1, initialColor2} = this.state

    this.setState({color1: initialColor1, color2: initialColor2})
  }

  renderColorInputs = () => {
    const {color1, color2} = this.state

    return (
      <InputMainContainer>
        <InputContainer>
          <LabelElement>{color1}</LabelElement>
          <UserInput type="color" onChange={this.getHexCode1} value={color1} />
        </InputContainer>
        <InputContainer>
          <LabelElement>{color2}</LabelElement>
          <UserInput type="color" onChange={this.getHexCode2} value={color2} />
        </InputContainer>
      </InputMainContainer>
    )
  }

  render() {
    const {color1, color2, activeTabId, value} = this.state
    return (
      <GradientMainContainer
        color1={color1}
        color2={color2}
        value={value}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <ParaText>Choose Direction</ParaText>
        <ListContainer>
          {gradientDirectionsList.map(eachGradient => (
            <GradientDirectionItem
              key={eachGradient.directionId}
              gradientTabs={eachGradient}
              isActiveTabId={activeTabId === eachGradient.directionId}
              getTabId={this.getTabId}
            />
          ))}
        </ListContainer>
        <ParaText>Pick the Colors</ParaText>
        {this.renderColorInputs()}
        <CustomButton type="button" onClick={this.generateGradient}>
          Generate
        </CustomButton>
      </GradientMainContainer>
    )
  }
}

export default GradientGenerator
