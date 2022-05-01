import React from 'react'


const Modal = ({ value, onClose }) => {

  return (
    <div className='modal'>
        <button className='button close' onClick={onClose}></button>
        <p>{value}</p>
    </div>
  )
}

export default Modal