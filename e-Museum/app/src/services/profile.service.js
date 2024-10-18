import api from "./api"

const findUserById = async (id) => {
    try{
        return await api.get(`/user/findById/${id}`)
    }
    catch (error){
        console.error("Ocorreu um erro na requisição: ", error)
    }
}

const update = async (id, data) => {
    try{
        return await api.put(`/user/update/${id}`, data)
    }
    catch (error){
        console.error("Ocorreu um erro na requisição: ", error)
    }
}

export {
    findUserById
}