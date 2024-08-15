import { styled } from "../../styles"
import { Text } from '../Text'

export const ToastContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  svg: {
    color: '$gray200'
  }
})

export const Label = styled('span', {
  color: '$white',
  fontWeight: '$bold',
  fontFamily: '$default',
  fontSize: '20px'
 
})

export const Description = styled('span', {
  
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  

})