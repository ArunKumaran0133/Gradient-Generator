import styled from 'styled-components'

export const ListItemContainer = styled.li`
  font-family: 'Roboto';
`

export const CustomButton = styled.button`
  width: 110px;
  height: 33px;
  border-width: 0px;
  border-radius: 5px;
  background-color: ${props => (props.isActiveTabId ? '#ffffff' : '#c2c2d6')};

  margin-right: 15px;
  color: #1e293b;
  outline: none;
  opacity: ${props => (props.isActiveTabId ? 1 : 0.5)};
`
