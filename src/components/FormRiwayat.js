import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { formActions } from '../store/form-slice'
import './FormRiwayat.css'

const FormRiwayat = ({ onOpen }) => {
  const [riwayatList, setRiwayatList] = useState([
    {
      id: 0,
      namaInstitusi: '',
      jurusan: '',
      tahunMasuk: '',
      tahunKeluar: '',
    },
  ])
  const [riwayatCount, setRiwayatCount] = useState(1)
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

  const handleSubmitRiwayat = (e) => {
    validation()

    if (isEmpty) {
      e.preventDefault()
      dispatch(formActions.setModalValue('Data masih ada yang kosong'))
      onOpen()
    } else {
      dispatch(formActions.setRiwayat({ riwayatList }))
      dispatch(formActions.setCurrentFormPosition(3))
      dispatch(formActions.setShowRiwayat())
      dispatch(formActions.setShowPengalaman())
    }
  }

  const tambahRiwayat = (e) => {
    e.preventDefault()
    setRiwayatList([
      ...riwayatList,
      {
        id: riwayatCount,
        namaInstitusi: '',
        jurusan: '',
        tahunMasuk: '',
        tahunKeluar: '',
      },
    ])
    setRiwayatCount(riwayatList.length + 1)
  }

  const hapusRiwayat = (e) => {
    e.preventDefault()
    const newRiwayat = riwayatList.filter((riwayat) => {
      return riwayat.id !== riwayatList[riwayatList.length - 1].id
    })
    setRiwayatList(newRiwayat)
    setRiwayatCount(riwayatList.length - 1)
  }

  return (
    <>
      <div className='form-riwayat-container'>
        <form>
          <div>
            <p className='form-title bold mb-1'>Riwayat Pendidikan</p>
            {riwayatList.map((riwayat) => {
              const { id } = riwayat
              return (
                <RiwayatComponent
                  id={id}
                  key={id}
                  setRiwayatList={setRiwayatList}
                  riwayatList={riwayatList}
                />
              )
            })}
            <div className='form-wrapper'>
              <div></div>
              <div className='btn-wrapper'>
                <button onClick={tambahRiwayat} className='btn btn-secondary'>
                  Tambah
                </button>
                {riwayatList.length > 1 && (
                  <button
                    onClick={hapusRiwayat}
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
        onClick={handleSubmitRiwayat}
        className='btn btn-primary p-1-2 mt-1'
      >
        Next
      </button>
    </>
  )
}

const RiwayatComponent = ({ id, riwayatList, setRiwayatList }) => {
  const handleRiwayatValue = (input, e) => {
    const newRiwayatList = [...riwayatList]
    newRiwayatList[id][input] = e.target.value
    setRiwayatList(newRiwayatList)
  }

  return (
    <div>
      <p>Riwayat Pendidikan {id + 1}</p>
      <div className='riwayat-container'>
        <div className='form-wrapper'>
          <label htmlFor='nama-institusi'>Nama Institusi</label>
          <input
            type='text'
            id='nama-institusi'
            onChange={(e) => handleRiwayatValue('namaInstitusi', e)}
            value={riwayatList[id].namaInstitusi}
            placeholder='Masukan Nama Sekolah/Universitas'
            className='input'
          />
        </div>
        <div className='form-wrapper'>
          <label htmlFor='jurusan'>Jurusan</label>
          <input
            type='text'
            id='jurusan'
            onChange={(e) => handleRiwayatValue('jurusan', e)}
            value={riwayatList[id].jurusan}
            placeholder='Masukan Jurusan'
            className='input'
          />
        </div>
        <div className='form-wrapper'>
          <label htmlFor='tahun-masuk'>Tahun Masuk</label>
          <input
            type='number'
            id='tahun-masuk'
            onChange={(e) => handleRiwayatValue('tahunMasuk', e)}
            value={riwayatList[id].tahunMasuk}
            placeholder='Masukan Tahun Masuk'
            min='1900'
            max={new Date().getFullYear()}
            step='1'
            className='input'
          />
        </div>
        <div className='form-wrapper'>
          <label htmlFor='tahun-keluar'>Tahun Keluar</label>
          <input
            type='number'
            id='tahun-keluar'
            onChange={(e) => handleRiwayatValue('tahunKeluar', e)}
            value={riwayatList[id].tahunKeluar}
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

export default FormRiwayat
