import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import data from "./DummyData.json"
import axios from "axios";

axios.defaults.withCredentials = true
const baseUrl = "http://localhost:8081"

export const getAllCars = createAsyncThunk(
    'getAllCars',
    async () => {
        const response = await axios.get(
            `${baseUrl}/car/getall`, {withCredentials: true}
        )
        return response.data
    }
)

export const addCar = createAsyncThunk(
    'addCAr',
    async ({name, plaque, model, brand, year, userId}) => {
        const response = await  axios.post(
            `${baseUrl}/car/add`,
            {
                name,
                plaque,
                model,
                brand,
                year,
                userId
            },
            {withCredentials: true}
        )
        return response.data
    }
)

export const editCar = createAsyncThunk(
    'editCar',
    async ({id, name, plaque, model, brand, year, userId}) => {
        const response = await  axios.put(
            `${baseUrl}/car/update`,
            {
                id,
                name,
                plaque,
                model,
                brand,
                year,
                userId
            },
            {withCredentials: true}
        )
        return response.data
    }
)

export const deleteCar = createAsyncThunk(
    'deleteCar',
    async ({id}) => {
        const response = await axios.delete(
            `${baseUrl}/car/delete/${id}`,
            {withCredentials: true}
        )
        return response.data
    }
)

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
    },
    getAllCars: {
        data: [],
        loading: false,
        error: ""
    },
    addCar: {
        data: [],
        loading: false,
        error: ""
    },
    editCar: {
        data: [],
        loading: false,
        error: ""
    },
    deleteCar: {
        data: [],
        loading: false,
        error: ""
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
    extraReducers: (builder) => {
        // getAllCars
        builder.addCase(getAllCars.pending, (state) => {
            state.getAllCars.loading = true
            state.getAllCars.error = ''
        })
        builder.addCase(getAllCars.fulfilled, (state, action) => {
            state.getAllCars.data = action.payload
            state.getAllCars.loading = false
        })
        builder.addCase(getAllCars.rejected, (state) => {
            state.getAllCars.loading = false
            state.getAllCars.error = 'Request Fetching Error'
        })

        // addCar
        builder.addCase(addCar.pending, (state) => {
            state.addCar.loading = true
            state.addCar.error = ''
        })
        builder.addCase(addCar.fulfilled, (state, action) => {
            state.addCar.data = action.payload
            state.addCar.loading = false
        })
        builder.addCase(addCar.rejected, (state) => {
            state.addCar.loading = false
            state.addCar.error = 'Request Fetching Error'
        })

        // editCar
        builder.addCase(editCar.pending, (state) => {
            state.editCar.loading = true
            state.editCar.error = ''
        })
        builder.addCase(editCar.fulfilled, (state, action) => {
            state.editCar.data = action.payload
            state.editCar.loading = false
        })
        builder.addCase(editCar.rejected, (state) => {
            state.editCar.loading = false
            state.editCar.error = 'Request Fetching Error'
        })

        // deleteCar
        builder.addCase(deleteCar.pending, (state) => {
            state.deleteCar.loading = true
            state.deleteCar.error = ''
        })
        builder.addCase(deleteCar.fulfilled, (state, action) => {
            state.deleteCar.data = action.payload
            state.deleteCar.loading = false
        })
        builder.addCase(deleteCar.rejected, (state) => {
            state.deleteCar.loading = false
            state.deleteCar.error = 'Request Fetching Error'
        })
    }
})

export const {setLoading, loadData, setSelectedCar} = carSlice.actions
export default carSlice.reducer