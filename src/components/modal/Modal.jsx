import { CancelOutlined } from '@mui/icons-material'
import PropTypes from 'prop-types'
import React from 'react'
import { ModalContainer, ModalContent, ModalOverlay, ModalWrap } from './styles'

const Modal = ({ children, openModal, setOpenModal }) => {

  return (
    <ModalContainer display={openModal.toString()}>
        <ModalOverlay/>
        <ModalWrap>
          <CancelOutlined className='close__modal' onClick={() => setOpenModal(false)}/>
          <ModalContent>{children}</ModalContent> 
        </ModalWrap>
    </ModalContainer>
  )

}

export default Modal

Modal.propTypes = {
  children: PropTypes.node,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func
}