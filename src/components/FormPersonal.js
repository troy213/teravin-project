import './FormPersonal.css'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formActions } from '../store/form-slice'

const FormPersonal = ({ onOpen }) => {
  const [hobiList, setHobiList] = useState([{ id: 0, value: '' }])
  const [hobiCount, setHobiCount] = useState(1)
  const [sosialMediaList, setSosialMediaList] = useState([{ id: 0, value: '' }])
  const [sosialMediaCount, setSosialMediaCount] = useState(1)
  let isEmpty = false

  const personal = useSelector((state) => state.form.personal)
  const dispatch = useDispatch()

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  const validation = () => {
    const input = document.querySelectorAll('.input')
    input.forEach((input) => {
      if (input.value === '') {
        input.className = 'input is-empty'
        isEmpty = true
      } else {
        input.className = 'input'
      }
    })
  }

  const handleSubmitPersonal = (e) => {
    validation()

    if (isEmpty) {
      e.preventDefault()
      dispatch(formActions.setModalValue('Data masih ada yang kosong'))
      onOpen()
    } else if (validateEmail(personal.email)) {
      dispatch(formActions.setPersonalArray({ hobiList, sosialMediaList }))
      dispatch(formActions.setCurrentFormPosition(2))
      dispatch(formActions.setShowPersonal())
      dispatch(formActions.setShowRiwayat())
    } else {
      e.preventDefault()
      const email = document.getElementById('email')
      email.className = 'input is-empty'
      dispatch(
        formActions.setModalValue('Format email yang anda masukan invalid')
      )
      onOpen()
    }
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
          <p className='form-title bold mb-1'>Data Personal</p>
          <div className='form-wrapper'>
            <label htmlFor='nama-lengkap'>Nama Lengkap</label>
            <input
              type='text'
              id='nama-lengkap'
              onChange={(e) => handleChange('nama', e)}
              value={personal.nama}
              placeholder='Masukan Nama Lengkap'
              className='input'
            />
          </div>
          <div className='form-wrapper'>
            <label htmlFor='tempat-lahir'>Tempat Lahir</label>
            <input
              type='text'
              id='tempat-lahir'
              onChange={(e) => handleChange('tempatLahir', e)}
              value={personal.tempatLahir}
              placeholder='Masukan Tempat Lahir'
              className='input'
            />
          </div>
          <div className='form-wrapper'>
            <label htmlFor='tanggal-lahir'>Tanggal Lahir</label>
            <input
              type='date'
              id='tanggal-lahir'
              onChange={(e) => handleChange('tanggalLahir', e)}
              value={personal.tanggalLahir}
              className='input'
            />
          </div>
          <div className='form-wrapper'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              onChange={(e) => handleChange('email', e)}
              value={personal.email}
              placeholder='Masukan Email'
              className='input'
            />
          </div>
          <div className='form-wrapper'>
            <label htmlFor='phone-number'>Telepon</label>
            <input
              type='tel'
              id='phone-number'
              onChange={(e) => handleChange('telepon', e)}
              value={personal.telepon}
              placeholder='Masukan Nomor Telepon'
              className='input'
            />
          </div>
          <div className='form-wrapper'>
            <label htmlFor='alamat'>Alamat</label>
            <textarea
              type='text'
              id='alamat'
              onChange={(e) => handleChange('alamat', e)}
              value={personal.alamat}
              placeholder='Masukan Alamat'
              className='input'
            />
          </div>
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
            <div className='form-wrapper'>
              <div></div>
              <div className='btn-wrapper'>
                <button onClick={tambahHobi} className='btn btn-secondary'>
                  Tambah
                </button>
                {hobiList.length > 1 && (
                  <button onClick={hapusHobi} className='btn btn-danger ml-1'>
                    Hapus
                  </button>
                )}
              </div>
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
            <div className='form-wrapper'>
              <div></div>
              <div className='btn-wrapper'>
                <button
                  onClick={tambahSosialMedia}
                  className='btn btn-secondary'
                >
                  Tambah
                </button>
                {sosialMediaList.length > 1 && (
                  <button
                    onClick={hapusSosialMedia}
                    className='btn btn-danger ml-1'
                  >
                    Hapus
                  </button>
                )}
              </div>
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
    <div className='form-wrapper hobi-input'>
      <label htmlFor={`hobi-${id}`}>Hobi {id + 1}</label>
      <input
        type='text'
        id={`hobi-${id}`}
        onChange={(e) => handleHobiValue(e)}
        value={hobiList[id].value}
        placeholder={`Masukan Hobi ${id + 1}`}
        className='input'
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
    <div className='form-wrapper sosial-media-input'>
      <label htmlFor={`sosial-media-${id}`}>Sosial Media {id + 1}</label>
      <input
        type='text'
        id={`sosial-media-${id}`}
        onChange={(e) => handleSosialMediaValue(e)}
        value={sosialMediaList[id].value}
        placeholder={`Masukan Link URL Sosial Media ${id + 1}`}
        className='input'
      />
    </div>
  )
}

export default FormPersonal
