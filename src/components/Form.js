import DotProgress from './DotProgress'
import FormPersonal from './FormPersonal'
import FormRiwayat from './FormRiwayat'
import FormPengalaman from './FormPengalaman'
import FormKeahlian from './FormKeahlian'
import Modal from './Modal'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Form = () => {
  // state for open and close modal
  const [isOpen, setIsOpen] = useState(false)

  // get all the data content from the store
  const formContent = useSelector((state) => state.form)

  return (
    <div className='form-container'>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <p className='modal-value'>{formContent.modalValue}</p>
      </Modal>
      <DotProgress />
      {formContent.personal.showPersonal && (
        <FormPersonal onOpen={() => setIsOpen(true)} />
      )}
      {formContent.riwayat.showRiwayat && (
        <FormRiwayat onOpen={() => setIsOpen(true)} />
      )}
      {formContent.pengalaman.showPengalaman && (
        <FormPengalaman onOpen={() => setIsOpen(true)} />
      )}
      {formContent.keahlian.showKeahlian && (
        <FormKeahlian onOpen={() => setIsOpen(true)} />
      )}
    </div>
  )
}

export default Form
