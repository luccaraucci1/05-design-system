import { X } from "phosphor-react";
import { Description, Header, Label, ToastContainer } from "./styles";




export function Toast(){
  return (
   <ToastContainer>
      <Header>
        <Label>Agendamento realizado</Label> 
        <X size={20}/>
      </Header>
      <Description>Quarta-feira, 23 de Outubro às 16h</Description>
   </ToastContainer>
  )
}

Toast.displayName = 'Toast'