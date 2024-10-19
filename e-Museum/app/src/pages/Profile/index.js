import {useContext, useEffect, useState} from "react"
import inputsHandler from "../../functions/inputsHandler"
import {AuthContext} from "../../context/AuthContext"
import {findUserByIdService, updateUserService} from "../../services/profile.service"
import api from "../../services/api"

const Profile = () => {
    const {userLoggedId} = useContext(AuthContext)

    const [profile, setProfile] = useState({
        _id: "",
        name: "",
        email: "",
        birthday: "",
        CPF: "",
        phoneNumber: ""
    })

    const loadProfile = async () => {
        const response = await findUserByIdService(userLoggedId())
        const data = await response.data
        data.birthday = data.birthday.slice(0, 10)
        setProfile(data)
    }

    const formHandle = async (event) => {
        event.preventDefault()
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        if(userInfo.token){
            api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`
        }
        const response = await updateUserService(profile._id)
        const data = await response.data
        if(data){
            alert("Perfil atualizado", data)
        }
    }

    useEffect(() => {
        loadProfile()
    }, [])

    const onChangeHandle = (event) => {
        inputsHandler(event, profile, setProfile)
    }

    return (
        <div>
            <form className="block mx-auto max-w-lg" onSubmit={formHandle}>
                <div className="my-3 flex flex-col">
                    <label htmlFor="name" className="font-semibold py-1 text-gray-500">Nome</label>
                    <input type="text" name="name" required="required" placeholder="Ex.: John Smith" onChange={onChangeHandle} value={profile.name} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>
                <div className="my-3 flex flex-col">
                    <label htmlFor="email" className="font-semibold py-1 text-gray-500">E-mail</label>
                    <input type="email" name="email" required="required" placeholder="email@server.com" onChange={onChangeHandle} value={profile.email} className="block px-3.5 py-2.5 rounded border border-solid w-full  focus:outline-orange-500"/>
                </div>
                <div className="my-3 flex flex-col">
                    <label htmlFor="birthday" className="font-semibold py-1 text-gray-500">Data de nascimento</label>
                    <input type="date" name="birthday" required="required" onChange={onChangeHandle} value={profile.birthday} className="block px-3.5 py-2.5 rounded border border-solid w-full  focus:outline-orange-500" />
                </div>
                <div className="my-3 flex flex-col">
                    <label htmlFor="CPF" className="font-semibold py-1 text-gray-500">CPF</label>
                    <input type="text" name="CPF" required="required" disabled="disabled" value={profile.CPF} className="block px-3.5 py-2.5 rounded border border-solid w-full  focus:outline-orange-500" />
                </div>
                <div className="my-3 flex flex-col">
                    <label htmlFor="phoneNumber" className="font-semibold py-1 text-gray-500">Número de telefone</label>
                    <input type="text" name="phoneNumber" required="required" onChange={onChangeHandle} value={profile.phoneNumber} className="block px-3.5 py-2.5 rounded border border-solid w-full  focus:outline-orange-500" />
                </div> 
                <div className="my-6 flex justify-end gap-4">
                    <button className="block px-5 py-3 rounded text-center font-semibold text-white bg-orange-500 hover:bg-orange-600">Salvar alterações</button>
                </div>
            </form>
        </div>
    )
}

export default Profile