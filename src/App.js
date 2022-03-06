import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formActions } from './store/form-slice'
import DataList from './components/DataList'
import Form from './components/Form'
import './App.css'

import DetailData from './components/DetailData'

const App = () => {
  const [selectedData, setSelectedData] = useState(0)
  const form = useSelector((state) => state.form)
  const dispatch = useDispatch()

  const handleShowForm = () => {
    dispatch(formActions.setShowForm())
  }

  return (
    <div className='app'>
      {!form.showForm && !form.showDetailData && (
        <>
          <h1 className='app-title'>Teravin Test React.JS</h1>
          <button
            onClick={handleShowForm}
            className='btn btn-primary flex-center'
          >
            <span className='bold'>+</span>
            Add data
          </button>
          <DataList setSelectedData={setSelectedData} />
        </>
      )}
      {form.showForm && !form.showDetailData && (
        <>
          <Form />
        </>
      )}
      {form.showDetailData && <DetailData selectedData={selectedData} />}
    </div>
  )
}

export default App
