import React from 'react'
import axios from 'axios'

const api = "http://simple-grocery-store-api.online/products";
let data = null;

export const getGrocery = async () => {
    await axios.get(api)
    .then((res) => {
        console.log("Res ", res)
        data = res.data
    })
    .catch((err) => {
        console.log(err)
    })
    return data
}
