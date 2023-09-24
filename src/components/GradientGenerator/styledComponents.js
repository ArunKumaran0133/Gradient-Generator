import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
`
export const GradientMainContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.value},
    ${props => props.color1},
    ${props => props.color2}
  );
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const ParaText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffff;
`
export const ListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
`

export const LabelElement = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffff;
  margin-bottom: 30px;
`

export const UserInput = styled.input`
  height: 35px;
  width: 100px;
  border: none;
  outline: none;
`
export const InputMainContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CustomButton = styled.button`
  font-family: 'Roboto';
  font-size: 13px;
  border-radius: 5px;
  border-width: 0px;
  background-color: #00c9b7;
  color: #1e293b;
  outline: none;
  height: 35px;
  width: 90px;
  font-weight: 600;
`
