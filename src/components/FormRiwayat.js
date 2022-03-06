import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { formActions } from '../store/form-slice'
import './FormRiwayat.css'

const FormRiwayat = () => {
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

  const dispatch = useDispatch()

  // TODO: create validation
  const handleSubmitRiwayat = () => {
    dispatch(formActions.setRiwayat({ riwayatList }))
    dispatch(formActions.setCurrentFormPosition(3))
    dispatch(formActions.setShowRiwayat())
    dispatch(formActions.setShowPengalaman())
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
            <p className='bold mb-1'>Riwayat Pendidikan</p>
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
            <button onClick={tambahRiwayat} className='btn btn-secondary'>
              Tambah
            </button>
            {riwayatList.length > 0 && (
              <button onClick={hapusRiwayat} className='btn btn-danger ml-1'>
                Hapus
              </button>
            )}
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
        <label htmlFor='nama-institusi'>Nama Sekolah/Universitas</label>
        <input
          type='text'
          id='nama-institusi'
          onChange={(e) => handleRiwayatValue('namaInstitusi', e)}
          value={riwayatList[id].namaInstitusi}
          placeholder='Masukan Nama Sekolah/Universitas'
        />
        <label htmlFor='jurusan'>Jurusan</label>
        <input
          type='text'
          id='jurusan'
          onChange={(e) => handleRiwayatValue('jurusan', e)}
          value={riwayatList[id].jurusan}
          placeholder='Masukan Jurusan'
        />
        <label htmlFor='tahun-masuk'>Tahun Masuk</label>
        <input
          type='number'
          id='tahun-masuk'
          onChange={(e) => handleRiwayatValue('tahunMasuk', e)}
          value={riwayatList[id].tahunMasuk}
          placeholder='Masukan Tahun Masuk'
          min='1900'
          max='2022'
          step='1'
        />
        <label htmlFor='tahun-keluar'>Tahun Keluar</label>
        <input
          type='number'
          id='tahun-keluar'
          onChange={(e) => handleRiwayatValue('tahunKeluar', e)}
          value={riwayatList[id].tahunKeluar}
          placeholder='Masukan Tahun Keluar'
          min='1900'
          max='2022'
          step='1'
        />
      </div>
    </div>
  )
}

export default FormRiwayat
