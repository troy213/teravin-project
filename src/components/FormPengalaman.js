import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { formActions } from '../store/form-slice'
import './FormPengalaman.css'

const FormPengalaman = () => {
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

  // TODO: create useSelector pengalaman
  const dispatch = useDispatch()

  // TODO: create validation
  const handleSubmitPengalaman = () => {
    dispatch(formActions.setPengalaman({ pengalamanList }))
    dispatch(formActions.setCurrentFormPosition(4))
    dispatch(formActions.setShowPengalaman())
    dispatch(formActions.setShowKeahlian())
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
            <p className='bold mb-1'>Pengalaman Kerja</p>
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
            <button onClick={tambahPengalaman} className='btn btn-secondary'>
              Tambah
            </button>
            {pengalamanList.length > 0 && (
              <button onClick={hapusPengalaman} className='btn btn-danger ml-1'>
                Hapus
              </button>
            )}
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
        <label htmlFor='nama-perusahaan'>Nama Perusahaan</label>
        <input
          type='text'
          id='nama-perusahaan'
          onChange={(e) => handlePengalamanValue('namaPerusahaan', e)}
          value={pengalamanList[id].namaPerusahaan}
          placeholder='Masukan Nama Perusahaan'
        />
        <label htmlFor='jabatan'>Jabatan</label>
        <input
          type='text'
          id='jabatan'
          onChange={(e) => handlePengalamanValue('jabatan', e)}
          value={pengalamanList[id].jabatan}
          placeholder='Masukan Jabatan'
        />
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
        />
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
        />
      </div>
    </div>
  )
}

export default FormPengalaman
