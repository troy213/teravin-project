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
    dispatch(formActions.setCurrentFormPosition(2))
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
    const newSosialMedia = sosialMediaList.filter((sosialMedia) => {
      return sosialMedia.id !== sosialMediaList[sosialMediaList.length - 1].id
    })
    setSosialMediaList(newSosialMedia)
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
            placeholder='Masukan Nama Lengkap'
          />
          <label htmlFor='tempat-lahir'>Tempat Lahir</label>
          <input
            type='text'
            id='tempat-lahir'
            onChange={(e) => handleChange('tempatLahir', e)}
            value={personal.tempatLahir}
            placeholder='Masukan Tempat Lahir'
          />
          <label htmlFor='tanggal-lahir'>Tanggal Lahir</label>
          <input
            type='date'
            id='tanggal-lahir'
            onChange={(e) => handleChange('tanggalLahir', e)}
            value={personal.tanggalLahir}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            onChange={(e) => handleChange('email', e)}
            value={personal.email}
            placeholder='Masukan Email'
          />
          <label htmlFor='phone-number'>Telepon</label>
          <input
            type='text'
            id='phone-number'
            onChange={(e) => handleChange('telepon', e)}
            value={personal.telepon}
            placeholder='Masukan Nomor Telepon'
          />
          <label htmlFor='alamat'>Alamat</label>
          <textarea
            type='text'
            id='alamat'
            onChange={(e) => handleChange('alamat', e)}
            value={personal.alamat}
            placeholder='Masukan Alamat'
          />
          <div className='hobi-container'>
            <p className='bold mb-1'>Hobi</p>
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
            <div className='btn-wrapper'>
              <button onClick={tambahHobi} className='btn btn-secondary'>
                Tambah
              </button>
              {hobiList.length > 0 && (
                <button onClick={hapusHobi} className='btn btn-danger ml-1'>
                  Hapus
                </button>
              )}
            </div>
          </div>
          <div className='sosial-media-container'>
            <p className='bold mb-1'>Sosial Media</p>
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
            <div className='btn-wrapper'>
              <button onClick={tambahSosialMedia} className='btn btn-secondary'>
                Tambah
              </button>
              {sosialMediaList.length > 0 && (
                <button
                  onClick={hapusSosialMedia}
                  className='btn btn-danger ml-1'
                >
                  Hapus
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      <button
        onClick={handleSubmitPersonal}
        className='btn btn-primary p-1-2 mt-1'
      >
        Next
      </button>
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
    <div className='hobi-input'>
      <label htmlFor={`hobi-${id}`}>Hobi {id + 1}</label>
      <input
        type='text'
        id={`hobi-${id}`}
        onChange={(e) => handleHobiValue(e)}
        value={hobiList[id].value}
        placeholder={`Masukan Hobi ${id + 1}`}
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
    <div className='sosial-media-input'>
      <label htmlFor={`sosial-media-${id}`}>Sosial Media {id + 1}</label>
      <input
        type='text'
        id={`sosial-media-${id}`}
        onChange={(e) => handleSosialMediaValue(e)}
        value={sosialMediaList[id].value}
        placeholder={`Masukan Link URL Sosial Media ${id + 1}`}
      />
    </div>
  )
}

export default FormPersonal
