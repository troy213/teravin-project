import './FormPersonal.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formActions } from '../store/form-slice'

const FormPersonal = () => {
  const [hobiList, setHobiList] = useState([{ id: 0, value: '' }])
  const [hobiCount, setHobiCount] = useState(1)
  const [sosialMediaList, setSosialMediaList] = useState([{ id: 0, value: '' }])
  const [sosialMediaCount, setSosialMediaCount] = useState(1)

  const personal = useSelector((state) => state.form.personal)
  const dispatch = useDispatch()

  // TODO: create validation
  const handleSubmitPersonal = () => {
    dispatch(formActions.setPersonalArray({ hobiList, sosialMediaList }))
    dispatch(formActions.setShowPersonal())
    dispatch(formActions.setShowRiwayat())
  }

  const handleChange = (input, e) => {
    dispatch(formActions.setPersonal({ input: input, value: e.target.value }))
  }

  const tambahHobi = (e) => {
    e.preventDefault()
    setHobiList([...hobiList, { id: hobiCount, value: '' }])
    setHobiCount(hobiList.length + 1)
  }

  const hapusHobi = (e) => {
    e.preventDefault()
    const newHobi = hobiList.filter((hobi) => {
      return hobi.id !== hobiList[hobiList.length - 1].id
    })
    setHobiList(newHobi)
    setHobiCount(hobiList.length - 1)
  }

  const tambahSosialMedia = (e) => {
    e.preventDefault()
    setSosialMediaList([
      ...sosialMediaList,
      { id: sosialMediaCount, value: '' },
    ])
    setSosialMediaCount(sosialMediaList.length + 1)
  }

  const hapusSosialMedia = (e) => {
    e.preventDefault()
    const newHobi = sosialMediaList.filter((hobi) => {
      return hobi.id !== sosialMediaList[sosialMediaList.length - 1].id
    })
    setSosialMediaList(newHobi)
    setSosialMediaCount(sosialMediaList.length - 1)
  }

  return (
    <>
      <div className='form-personal-container'>
        <form>
          <label htmlFor='nama-lengkap'>Nama Lengkap</label>
          <input
            type='text'
            id='nama-lengkap'
            onChange={(e) => handleChange('nama', e)}
            value={personal.nama}
          />
          <label htmlFor='tempat-lahir'>Tempat Lahir</label>
          <input
            type='text'
            id='tempat-lahir'
            onChange={(e) => handleChange('tempatLahir', e)}
            value={personal.tempatLahir}
          />
          <label htmlFor='tanggal-lahir'>Tanggal Lahir</label>
          <input
            type='text'
            id='tanggal-lahir'
            onChange={(e) => handleChange('tanggalLahir', e)}
            value={personal.tanggalLahir}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            onChange={(e) => handleChange('email', e)}
            value={personal.email}
          />
          <label htmlFor='phone-number'>Telepon</label>
          <input
            type='text'
            id='phone-number'
            onChange={(e) => handleChange('telepon', e)}
            value={personal.telepon}
          />
          <label htmlFor='alamat'>Alamat</label>
          <input
            type='text'
            id='alamat'
            onChange={(e) => handleChange('alamat', e)}
            value={personal.alamat}
          />
          <div className='hobi-container'>
            <p>Hobi</p>
            {hobiList.map((hobi) => {
              const { id } = hobi
              return (
                <HobiComponent
                  id={id}
                  key={id}
                  setHobiList={setHobiList}
                  hobiList={hobiList}
                />
              )
            })}
            <button onClick={tambahHobi}>Tambah Hobi</button>
            {hobiList.length > 0 && (
              <button onClick={hapusHobi}>Hapus hobi</button>
            )}
          </div>
          <div className='sosial-media-container'>
            <p>Sosial Media</p>
            {sosialMediaList.map((sosialMedia) => {
              const { id } = sosialMedia
              return (
                <SosialMediaComponent
                  id={id}
                  key={id}
                  setSosialMediaList={setSosialMediaList}
                  sosialMediaList={sosialMediaList}
                />
              )
            })}
            <button onClick={tambahSosialMedia}>Tambah Sosial Media</button>
            {hobiList.length > 0 && (
              <button onClick={hapusSosialMedia}>Hapus Sosial Media</button>
            )}
          </div>
        </form>
      </div>

      <button onClick={handleSubmitPersonal}>Next</button>
    </>
  )
}

const HobiComponent = ({ id, hobiList, setHobiList }) => {
  const handleHobiValue = (e) => {
    const newHobiList = [...hobiList]
    newHobiList[id].value = e.target.value
    setHobiList(newHobiList)
  }

  return (
    <div>
      <label htmlFor={`hobi-${id}`}>Hobi {id + 1}</label>
      <input
        type='text'
        id={`hobi-${id}`}
        onChange={(e) => handleHobiValue(e)}
        value={hobiList[id].value}
      />
    </div>
  )
}

const SosialMediaComponent = ({ id, sosialMediaList, setSosialMediaList }) => {
  const handleSosialMediaValue = (e) => {
    const newSosialMediaList = [...sosialMediaList]
    newSosialMediaList[id].value = e.target.value
    setSosialMediaList(newSosialMediaList)
  }

  return (
    <div>
      <label htmlFor={`sosial-media-${id}`}>Sosial Media {id + 1}</label>
      <input
        type='text'
        id={`sosial-media-${id}`}
        onChange={(e) => handleSosialMediaValue(e)}
        value={sosialMediaList[id].value}
      />
    </div>
  )
}

export default FormPersonal
