import DotProgress from './DotProgress'
import FormPersonal from './FormPersonal'
import FormRiwayat from './FormRiwayat'
import FormPengalaman from './FormPengalaman'
import FormKeahlian from './FormKeahlian'

const Form = () => {
  return (
    <div className='form-container'>
      <DotProgress />
      <FormPersonal />
      <FormRiwayat />
      <FormPengalaman />
      <FormKeahlian />
    </div>
  )
}

export default Form
