import { CancelOutlined } from '@mui/icons-material'
import React from 'react'
import { ModalContainer, ModalContent, ModalOverlay, ModalWrap } from './styles'

const Modal = ({ children, openModal, setOpenModal }) => {

  return (
    <ModalContainer display={openModal}>
        <ModalOverlay/>
        <ModalWrap>
          <CancelOutlined className='close__modal' onClick={() => setOpenModal(false)}/>
          <ModalContent>{children}</ModalContent> 
        </ModalWrap>
    </ModalContainer>
  )

}

export default Modal