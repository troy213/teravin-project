import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ open, children, onClose }) => {
  const handleModal = (e) => {
    if (e.target.id === 'modal') {
      onClose()
    }
  }

  if (!open) {
    return null
  }

  return ReactDOM.createPortal(
    <div className='modal' id='modal' onClick={handleModal}>
      <div className='modal-container'>
        <span className='modal-close' onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}

// thanks to WebDevSimplified to make this code clean and simple

export default Modal
