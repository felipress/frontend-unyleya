import api from "./api"

const findMuseum = async () => {
    try{
        return await api.get("/museum/findAll")
    }
    catch (error){
        console.error("Ocorreu um erro na requisição: ", error)
    }
}

const updateMuseum = async (id, data) => {
    try{
        return await api.put(`/museum/update/${id}`, data)
    }
    catch (error){
        console.error("Ocorreu um erro na requisição: ", error)
    }
}

export {
    findMuseum,
    updateMuseum
}