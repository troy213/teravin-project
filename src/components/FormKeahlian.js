import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { formActions } from '../store/form-slice'
import './FormKeahlian.css'

const FormKeahlian = () => {
  const [keahlianList, setKeahlianList] = useState([
    {
      id: 0,
      value: '',
    },
  ])
  const [keahlianCount, setKeahlianCount] = useState(1)

  const dispatch = useDispatch()

  const handleSubmitKeahlian = () => {
    dispatch(formActions.setKeahlian({ keahlianList }))
    dispatch(formActions.saveToLocalStorage())
    dispatch(formActions.clearAllForm())
    dispatch(formActions.setShowForm())
  }

  const tambahKeahlian = (e) => {
    e.preventDefault()
    setKeahlianList([
      ...keahlianList,
      {
        id: keahlianCount,
        value: '',
      },
    ])
    setKeahlianCount(keahlianList.length + 1)
  }

  const hapusKeahlian = (e) => {
    e.preventDefault()
    const newKeahlian = keahlianList.filter((keahlian) => {
      return keahlian.id !== keahlianList[keahlianList.length - 1].id
    })
    setKeahlianList(newKeahlian)
    setKeahlianCount(keahlianList.length - 1)
  }

  return (
    <>
      <div className='form-keahlian-container'>
        <form>
          <div>
            <p className='bold mb-1'>Keahlian</p>
            {keahlianList.map((keahlian) => {
              const { id } = keahlian
              return (
                <KeahlianComponent
                  id={id}
                  key={id}
                  setKeahlianList={setKeahlianList}
                  keahlianList={keahlianList}
                />
              )
            })}
            <button onClick={tambahKeahlian} className='btn btn-secondary'>
              Tambah
            </button>
            {keahlianList.length > 0 && (
              <button onClick={hapusKeahlian} className='btn btn-danger ml-1'>
                Hapus
              </button>
            )}
          </div>
        </form>
      </div>
      <button
        onClick={handleSubmitKeahlian}
        className='btn btn-primary p-1-2 mt-1'
      >
        Submit
      </button>
    </>
  )
}

const KeahlianComponent = ({ id, keahlianList, setKeahlianList }) => {
  const handleKeahlianValue = (e) => {
    const newKeahlianList = [...keahlianList]
    newKeahlianList[id].value = e.target.value
    setKeahlianList(newKeahlianList)
  }

  return (
    <div className='keahlian-container'>
      <label htmlFor={`keahlian-${id}`}>Keahlian {id + 1}</label>
      <input
        type='text'
        id={`keahlian-${id}`}
        onChange={(e) => handleKeahlianValue(e)}
        value={keahlianList[id].value}
        placeholder={`Masukan Keahlian ${id + 1}`}
      />
    </div>
  )
}

export default FormKeahlian
