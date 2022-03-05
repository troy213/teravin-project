import { useDispatch, useSelector } from 'react-redux'
import { formActions } from '../store/form-slice'

const DataList = ({ setSelectedData }) => {
  const dataArray = useSelector((state) => state.form.dataArray)

  const dispatch = useDispatch()

  const handleDetailData = (index) => {
    setSelectedData(index)
    dispatch(formActions.setShowDetailData())
  }

  return (
    <div className='datalist-container'>
      <table>
        <thead>
          <tr>
            <th>ID No.</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataArray.length > 0 ? (
            <>
              {dataArray.map((value, index) => {
                const { id } = value
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{value.personal.nama}</td>
                    <td>{value.personal.alamat}</td>
                    <td>
                      <button onClick={() => handleDetailData(index)}>z</button>
                    </td>
                  </tr>
                )
              })}
            </>
          ) : (
            <tr>
              <td colSpan={4}>Data Kosong</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DataList
