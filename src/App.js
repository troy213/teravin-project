import './App.css'
import DataList from './components/DataList'
import Form from './components/Form'
import { useSelector, useDispatch } from 'react-redux'
import { formActions } from './store/form-slice'

const App = () => {
  const showForm = useSelector((state) => state.form.showForm)
  const dispatch = useDispatch()

  const handleShowForm = () => {
    dispatch(formActions.setShowForm())
  }

  return (
    <div className='app'>
      {!showForm ? (
        <>
          <h1>Teravin Test React.JS</h1>
          <button onClick={handleShowForm}>Add data</button>
          <DataList />
        </>
      ) : (
        <Form />
      )}
    </div>
  )
}

export default App
