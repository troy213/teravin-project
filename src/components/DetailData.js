import { useDispatch, useSelector } from 'react-redux'
import { formActions } from '../store/form-slice'
import './DetailData.css'

const DetailData = ({ selectedData }) => {
  const data = useSelector((state) => state.form.dataArray[selectedData])

  const dispatch = useDispatch()

  const handleKembali = () => {
    dispatch(formActions.setShowDetailData())
  }

  const { personal, pengalaman, riwayat, keahlian } = data

  return (
    <div className='detail-data-container'>
      <h1 className='detail-data-title'>Detail Data</h1>
      <section className='detail-data'>
        <h3>Personal</h3>
        <div className='detail-data-wrapper'>
          <p>Nama</p>
          <p>{personal.nama}</p>
        </div>
        <div className='detail-data-wrapper'>
          <p>Email</p>
          <p>{personal.email}</p>
        </div>
        <div className='detail-data-wrapper'>
          <p>Telepon</p>
          <p>{personal.telepon}</p>
        </div>
        <div className='detail-data-wrapper'>
          <p>Tempat Lahir</p>
          <p>{personal.tempatLahir}</p>
        </div>
        <div className='detail-data-wrapper'>
          <p>Tanggal Lahir</p>
          <p>{personal.tanggalLahir}</p>
        </div>
        <div className='detail-data-wrapper'>
          <p>Alamat</p>
          <p>{personal.alamat}</p>
        </div>
        <div className='detail-data-wrapper'>
          <p>Hobi</p>
          {personal.hobi.length > 0 ? (
            <>
              {personal.hobi.map((hobi) => {
                const { id, value } = hobi
                return (
                  <div key={id} className='detail-data-card'>
                    <p>{value}</p>
                  </div>
                )
              })}
            </>
          ) : (
            <p>-</p>
          )}
        </div>
        <div className='detail-data-wrapper'>
          <p>Sosial Media</p>
          {personal.sosialMedia.length > 0 ? (
            <>
              {personal.sosialMedia.map((sosialMedia) => {
                const { id, value } = sosialMedia
                return (
                  <div key={id} className='detail-data-card'>
                    <a href={value} target='_blank' rel='noreferrer noopenner'>
                      {value}
                    </a>
                  </div>
                )
              })}
            </>
          ) : (
            <p>-</p>
          )}
        </div>
      </section>
      <section className='detail-data'>
        <h3>Riwayat Pendidikan</h3>
        <>
          {riwayat.riwayatList.length > 0 ? (
            <>
              {riwayat.riwayatList.map((riwayat) => {
                const { id, namaInstitusi, jurusan, tahunMasuk, tahunKeluar } =
                  riwayat
                return (
                  <div key={id} className='detail-data-card'>
                    <div className='detail-data-wrapper'>
                      <p>Nama Sekolah/Universitas</p>
                      <p>{namaInstitusi}</p>
                    </div>
                    <div className='detail-data-wrapper'>
                      <p>Jurusan</p>
                      <p>{jurusan}</p>
                    </div>
                    <div className='detail-data-wrapper'>
                      <p>Tahun Masuk</p>
                      <p>{tahunMasuk}</p>
                    </div>
                    <div className='detail-data-wrapper'>
                      <p>Tahun Keluar</p>
                      <p>{tahunKeluar}</p>
                    </div>
                  </div>
                )
              })}
            </>
          ) : (
            <p>-</p>
          )}
        </>
      </section>
      <section className='detail-data'>
        <h3>Pengalaman Kerja</h3>
        <>
          {pengalaman.pengalamanList.length > 0 ? (
            <>
              {pengalaman.pengalamanList.map((pengalaman) => {
                const { id, namaPerusahaan, jabatan, tahunMasuk, tahunKeluar } =
                  pengalaman
                return (
                  <div key={id} className='detail-data-card'>
                    <div className='detail-data-wrapper'>
                      <p>Nama Perusahaan</p>
                      <p>{namaPerusahaan}</p>
                    </div>
                    <div className='detail-data-wrapper'>
                      <p>Jabatan</p>
                      <p>{jabatan}</p>
                    </div>
                    <div className='detail-data-wrapper'>
                      <p>Tahun Masuk</p>
                      <p>{tahunMasuk}</p>
                    </div>
                    <div className='detail-data-wrapper'>
                      <p>Tahun Keluar</p>
                      <p>{tahunKeluar}</p>
                    </div>
                  </div>
                )
              })}
            </>
          ) : (
            <p>-</p>
          )}
        </>
      </section>
      <section className='detail-data'>
        <h3>Keahlian</h3>
        <>
          {keahlian.keahlianList.length > 0 ? (
            <>
              {keahlian.keahlianList.map((keahlian) => {
                const { id, value } = keahlian
                return (
                  <div key={id} className='detail-data-card'>
                    <p>{value}</p>
                  </div>
                )
              })}
            </>
          ) : (
            <p>-</p>
          )}
        </>
      </section>
      <button onClick={handleKembali} className='btn btn-primary p-1'>
        Kembali
      </button>
    </div>
  )
}

export default DetailData
