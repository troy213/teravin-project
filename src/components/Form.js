import DotProgress from './DotProgress'
import FormPersonal from './FormPersonal'
import FormRiwayat from './FormRiwayat'
import FormPengalaman from './FormPengalaman'
import FormKeahlian from './FormKeahlian'
import { useSelector } from 'react-redux'

const Form = () => {
  const showFormContent = useSelector((state) => state.form)

  return (
    <div className='form-container'>
      <DotProgress />
      {showFormContent.personal.showPersonal && <FormPersonal />}
      {showFormContent.riwayat.showRiwayat && <FormRiwayat />}
      {showFormContent.pengalaman.showPengalaman && <FormPengalaman />}
      {showFormContent.keahlian.showKeahlian && <FormKeahlian />}
    </div>
  )
}

export default Form
