import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { formActions } from '../store/form-slice'
import './FormPengalaman.css'

const FormPengalaman = ({ onOpen }) => {
  const [pengalamanList, setPengalamanList] = useState([
    {
      id: 0,
      namaPerusahaan: '',
      jabatan: '',
      tahunMasuk: '',
      tahunKeluar: '',
    },
  ])
  const [pengalamanCount, setPengalamanCount] = useState(1)
  let isEmpty = false

  const dispatch = useDispatch()

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

  const handleSubmitPengalaman = (e) => {
    validation()

    if (isEmpty) {
      e.preventDefault()
      dispatch(formActions.setModalValue('Data masih ada yang kosong'))
      onOpen()
    } else {
      dispatch(formActions.setPengalaman({ pengalamanList }))
      dispatch(formActions.setCurrentFormPosition(4))
      dispatch(formActions.setShowPengalaman())
      dispatch(formActions.setShowKeahlian())
    }
  }

  const tambahPengalaman = (e) => {
    e.preventDefault()
    setPengalamanList([
      ...pengalamanList,
      {
        id: pengalamanCount,
        namaPerusahaan: '',
        jabatan: '',
        tahunMasuk: '',
        tahunKeluar: '',
      },
    ])
    setPengalamanCount(pengalamanList.length + 1)
  }

  const hapusPengalaman = (e) => {
    e.preventDefault()
    const newPengalaman = pengalamanList.filter((pengalaman) => {
      return pengalaman.id !== pengalamanList[pengalamanList.length - 1].id
    })
    setPengalamanList(newPengalaman)
    setPengalamanCount(pengalamanList.length - 1)
  }

  return (
    <>
      <div className='form-pengalaman-container'>
        <form>
          <div>
            <p className='form-title bold mb-1'>Pengalaman Kerja</p>
            {pengalamanList.map((pengalaman) => {
              const { id } = pengalaman
              return (
                <PengalamanComponent
                  id={id}
                  key={id}
                  setPengalamanList={setPengalamanList}
                  pengalamanList={pengalamanList}
                />
              )
            })}
            <div className='form-wrapper'>
              <div></div>
              <div className='btn-wrapper'>
                <button
                  onClick={tambahPengalaman}
                  className='btn btn-secondary'
                >
                  Tambah
                </button>
                {pengalamanList.length > 1 && (
                  <button
                    onClick={hapusPengalaman}
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
        onClick={handleSubmitPengalaman}
        className='btn btn-primary p-1-2 mt-1'
      >
        Next
      </button>
    </>
  )
}

const PengalamanComponent = ({ id, pengalamanList, setPengalamanList }) => {
  const handlePengalamanValue = (input, e) => {
    const newPengalamanList = [...pengalamanList]
    newPengalamanList[id][input] = e.target.value
    setPengalamanList(newPengalamanList)
  }

  return (
    <div>
      <p>Pengalaman {id + 1}</p>
      <div className='pengalaman-container'>
        <div className='form-wrapper'>
          <label htmlFor='nama-perusahaan'>Nama Perusahaan</label>
          <input
            type='text'
            id='nama-perusahaan'
            onChange={(e) => handlePengalamanValue('namaPerusahaan', e)}
            value={pengalamanList[id].namaPerusahaan}
            placeholder='Masukan Nama Perusahaan'
            className='input'
          />
        </div>
        <div className='form-wrapper'>
          <label htmlFor='jabatan'>Jabatan</label>
          <input
            type='text'
            id='jabatan'
            onChange={(e) => handlePengalamanValue('jabatan', e)}
            value={pengalamanList[id].jabatan}
            placeholder='Masukan Jabatan'
            className='input'
          />
        </div>
        <div className='form-wrapper'>
          <label htmlFor='tahun-masuk-kerja'>Tahun Masuk</label>
          <input
            type='number'
            id='tahun-masuk-kerja'
            onChange={(e) => handlePengalamanValue('tahunMasuk', e)}
            value={pengalamanList[id].tahunMasuk}
            placeholder='Masukan Tahun Masuk'
            min='1900'
            max={new Date().getFullYear()}
            step='1'
            className='input'
          />
        </div>
        <div className='form-wrapper'>
          <label htmlFor='tahun-keluar-kerja'>Tahun Keluar</label>
          <input
            type='number'
            id='tahun-keluar-kerja'
            onChange={(e) => handlePengalamanValue('tahunKeluar', e)}
            value={pengalamanList[id].tahunKeluar}
            placeholder='Masukan Tahun Keluar'
            min='1900'
            max={new Date().getFullYear()}
            step='1'
            className='input'
          />
        </div>
      </div>
    </div>
  )
}

export default FormPengalaman
