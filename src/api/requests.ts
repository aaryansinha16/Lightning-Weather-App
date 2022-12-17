import axios from 'axios'

export async function initialGet(){
    let data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=c3abea5cf6b11cb540b6b5583a34fe92`)

    return data.data
}

export async function currentData(){
    let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=25.55&lon=87.55&appid=c3abea5cf6b11cb540b6b5583a34fe92&units=metric`)

    return data.data
}

export async function pollutionData(){
    let data = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=25.55&lon=87.55&appid=c3abea5cf6b11cb540b6b5583a34fe92`)

    return data.data
}