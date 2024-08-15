import { styled } from "../../styles";

export const TooltipBox = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray900',
  width: 'fit-content',
  position: 'relative',
  span: {
    color: '$gray100',
    fontFamily: '$default',
    fontSize: '$sm',
    
  },

'&::after' : {
  content: "",
  position: "absolute",
  width: '1rem',
  height: '1rem',

  top: '80%',
  left: '48%',
  transform: 'rotate(45deg)',
  background: '$gray900',
  zIndex: '-9999'
 

}

  
})