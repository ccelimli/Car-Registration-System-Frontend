import {createSlice} from "@reduxjs/toolkit";
import data from "./DummyData.json"

const initialState = {
    cars: {
        data: [],
        isLoading: false,
        error: ""
    },
    selectedCar: {
        key: "",
        name: "",
        plaque: "",
        model: "",
        brand: "",
        year: 0
    }
}

export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        loadData: (state) => {
            state.cars.data = data.map((item) => {
                return { ...item, key: String(item.key) }
            })
        },
        setLoading: (state, action) => {
            state.cars.isLoading = action.payload
        },
        setSelectedCar: (state, action) => {
            state.selectedCar = action.payload
        }
    },
    extraReducers: {}
})

export const {setLoading, loadData, setSelectedCar} = carSlice.actions
export default carSlice.reducer