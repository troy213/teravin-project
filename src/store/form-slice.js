import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    showForm: false,
    showDetailData: false,
    personal: {
      showPersonal: true,
      nama: '',
      tempatLahir: '',
      tanggalLahir: '',
      email: '',
      telepon: '',
      alamat: '',
      hobi: [],
      sosialMedia: [],
    },
    riwayat: {
      showRiwayat: false,
      riwayatList: [],
    },
    pengalaman: {
      showPengalaman: false,
      pengalamanList: [],
    },
    keahlian: {
      showKeahlian: false,
      keahlianList: [],
    },
    dataArray: JSON.parse(localStorage.getItem('data')) || [],
    currentFormPosition: 1,
  },
  reducers: {
    setShowForm(state) {
      state.showForm = !state.showForm
    },
    setShowDetailData(state) {
      state.showDetailData = !state.showDetailData
    },
    setShowPersonal(state) {
      state.personal.showPersonal = !state.personal.showPersonal
    },
    setShowRiwayat(state) {
      state.riwayat.showRiwayat = !state.riwayat.showRiwayat
    },
    setShowPengalaman(state) {
      state.pengalaman.showPengalaman = !state.pengalaman.showPengalaman
    },
    setShowKeahlian(state) {
      state.keahlian.showKeahlian = !state.keahlian.showKeahlian
    },
    setPersonal(state, action) {
      state.personal[action.payload.input] = action.payload.value
    },
    setPersonalArray(state, action) {
      const newItem = action.payload

      state.personal.hobi = newItem.hobiList
      state.personal.sosialMedia = newItem.sosialMediaList
    },
    setRiwayat(state, action) {
      const newItem = action.payload

      state.riwayat.riwayatList = newItem.riwayatList
    },
    setPengalaman(state, action) {
      const newItem = action.payload

      state.pengalaman.pengalamanList = newItem.pengalamanList
    },
    setKeahlian(state, action) {
      const newItem = action.payload

      state.keahlian.keahlianList = newItem.keahlianList
    },
    setCurrentFormPosition(state, action) {
      state.currentFormPosition = action.payload
    },
    saveToLocalStorage(state) {
      const newData = {
        personal: state.personal,
        riwayat: state.riwayat,
        pengalaman: state.pengalaman,
        keahlian: state.keahlian,
      }

      if (state.dataArray.length === 0) {
        newData.id = 1
        state.dataArray = []
        state.dataArray.push(newData)
        localStorage.data = JSON.stringify(state.dataArray)
      } else {
        newData.id = state.dataArray[state.dataArray.length - 1].id + 1
        state.dataArray.push(newData)
        localStorage.data = JSON.stringify(state.dataArray)
      }
    },
    clearAllForm(state) {
      state.personal = {
        showPersonal: true,
        nama: '',
        tempatLahir: '',
        tanggalLahir: '',
        email: '',
        telepon: '',
        alamat: '',
        hobi: [],
        sosialMedia: [],
      }
      state.riwayat = {
        showRiwayat: false,
        riwayatList: [],
      }
      state.pengalaman = {
        showPengalaman: false,
        pengalamanList: [],
      }
      state.keahlian = {
        showKeahlian: false,
        keahlianList: [],
      }
    },
  },
})

export const formActions = formSlice.actions

export default formSlice
