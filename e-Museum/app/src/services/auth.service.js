import api from "./api"

const loginService = async (credentials) => {
    try{
        return await api.post("/auth/login", credentials)
    }
    catch(error){
        console.error("Ocorreu um erro na requisição: ", error)
    }
}

export {loginService}