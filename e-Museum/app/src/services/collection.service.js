import api from "./api"

const findCollectionById = async (id) => {
    try{
        return await api.get(`/collection/findById/${id}`)
    }
    catch (error){
        console.error(`Ocorreu um erro na requisição: `, error)
    }
}

const findAllCollections = async () => {
    try{
        return await api.get(`/collection/findAll`)
    }
    catch (error){
        console.error(`Ocorreu um erro na requisição: `, error)
    }
}

const createCollection = async (data) => {
    try{
        return await api.post(`/collection/create`, data)
    }
    catch (error){
        console.error(`Ocorreu um erro na requisição: `, error)
    }
}

const updateCollection = async (id, data) => {
    try{
        return await api.put(`/collection/update/${id}`, data)
    }   
    catch (error){
        console.error(`Ocorreu um erro na requisição: `, error)
    }
}

const removeCollection = async (id) => {
    try{
        return await api.delete(`/collection/remove/${id}`)
    }
    catch (error){
        console.error(`Ocorreu um erro na requisição: `, error)
    }
}

export {
    findAllCollections,
    findCollectionById,
    createCollection,
    updateCollection,
    removeCollection
}