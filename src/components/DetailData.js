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
      <h1>Detail Data</h1>
      <div>
        <h3>Personal</h3>
        <div>
          <p>Nama</p>
          <p>{personal.nama}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{personal.email}</p>
        </div>
        <div>
          <p>Telepon</p>
          <p>{personal.telepon}</p>
        </div>
        <div>
          <p>Tempat Lahir</p>
          <p>{personal.tempatLahir}</p>
        </div>
        <div>
          <p>Tanggal Lahir</p>
          <p>{personal.tanggalLahir}</p>
        </div>
        <div>
          <p>Alamat</p>
          <p>{personal.alamat}</p>
        </div>
        <div>
          <p>Hobi</p>
          {personal.hobi.length > 0 ? (
            <>
              {personal.hobi.map((hobi) => {
                const { id, value } = hobi
                return <p key={id}>{value}</p>
              })}
            </>
          ) : (
            <p>-</p>
          )}
        </div>
        <div>
          <p>Sosial Media</p>
          {personal.sosialMedia.length > 0 ? (
            <>
              {personal.sosialMedia.map((sosialMedia) => {
                const { id, value } = sosialMedia
                return <p key={id}>{value}</p>
              })}
            </>
          ) : (
            <p>-</p>
          )}
        </div>
        <p></p>
      </div>
      <div>
        <h3>Riwayat Pendidikan</h3>
        <div>
          {riwayat.riwayatList.length > 0 ? (
            <>
              {riwayat.riwayatList.map((riwayat) => {
                const { id, namaInstitusi, jurusan, tahunMasuk, tahunKeluar } =
                  riwayat
                return (
                  <div key={id}>
                    <div>
                      <p>Nama Sekolah/Universitas</p>
                      <p>{namaInstitusi}</p>
                    </div>
                    <div>
                      <p>Jurusan</p>
                      <p>{jurusan}</p>
                    </div>
                    <div>
                      <p>Tahun Masuk</p>
                      <p>{tahunMasuk}</p>
                    </div>
                    <div>
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
        </div>
      </div>
      <div>
        <h3>Pengalaman Kerja</h3>
        <div>
          {pengalaman.pengalamanList.length > 0 ? (
            <>
              {pengalaman.pengalamanList.map((pengalaman) => {
                const { id, namaPerusahaan, jabatan, tahunMasuk, tahunKeluar } =
                  pengalaman
                return (
                  <div key={id}>
                    <div>
                      <p>Nama Perusahaan</p>
                      <p>{namaPerusahaan}</p>
                    </div>
                    <div>
                      <p>Jabatan</p>
                      <p>{jabatan}</p>
                    </div>
                    <div>
                      <p>Tahun Masuk</p>
                      <p>{tahunMasuk}</p>
                    </div>
                    <div>
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
        </div>
      </div>
      <div>
        <h3>Keahlian</h3>
        <div>
          {keahlian.keahlianList.length > 0 ? (
            <>
              {keahlian.keahlianList.map((keahlian) => {
                const { id, value } = keahlian
                return (
                  <div key={id}>
                    <p>{value}</p>
                  </div>
                )
              })}
            </>
          ) : (
            <p>-</p>
          )}
        </div>
      </div>
      <button onClick={handleKembali}>Kembali</button>
    </div>
  )
}

export default DetailData
