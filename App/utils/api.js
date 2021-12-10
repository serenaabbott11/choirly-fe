import axios from "axios";

const choirApi = axios.create({
    baseURL: "https://choirly.herokuapp.com/api"
})

export const getChoirs = () => {
    return choirApi.get("/choirs").then((res) => {
        return res.data.choirs;
    })
}

export const getChoirById = (choirId) => {
    return choirApi.get(`/choirs/${choirId}`).then((res) => {
        return res.data.choir;
    })
}