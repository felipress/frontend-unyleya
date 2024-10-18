import {useState} from "react"
import inputsHandler from "../../functions/inputsHandler"

const Museum = () => {
    let museumMock = {
        type: "",
        name: "",
        acronym: "",
        foundation: "",
        address: {
            street: "",
            number: "",
            complement: "",
            neighborhood: "",
            city: "",
            state: "",
            zipcode: ""
        },
        phone: "",
        email: "",
        website: "",
        accountable: {
            name: "",
            position: "",
            email: ""
        }
    }

    const [museum, setMuseum] = useState(museumMock)

    const onChangeHandle = (event) => {
        inputsHandler(event, museum, setMuseum)
    }

    return (
        <div>
            <form className="block mx-auto max-w-lg">
                <div className="my-3 flex flex-col">
                    <label htmlFor="name" className="font-semibold py-1 text-gray-500">Nome</label>
                    <input type="text" name="name" required="required" placeholder="" onChange={onChangeHandle} value={museum.name} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-3 flex gap-4">
                    <div className="flex flex-col grow">
                        <label htmlFor="type" className="font-semibold py-1 text-gray-500">Tipo de musueu</label>
                        <select name="type" onChange={onChangeHandle} value={museum.type} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500">
                            <option>Selecione</option>
                            <option value="HISTORICO">Museu Histórico</option>
                            <option value="HISTORIA_NATURAL">Museu de História Natural</option>
                            <option value="CIENCIA_TECNICA">Museu de Ciência e Técnica</option>
                            <option value="ETNOGRAFICO">Museu Etnográfico</option>
                            <option value="ARTE">Museu de Arte</option>
                            <option value="TEMATICO">Museu temático, monográfico</option>
                            <option value="VIRTUAL">Museu virtual, digital, cibermuseu</option>
                            <option value="PLANETARIO">Museu planetário</option>
                        </select>
                    </div>
                    <div className="flex flex-col grow">
                        <label htmlFor="acronym" className="font-semibold py-1 text-gray-500">Sigla</label>
                        <input type="text" name="acronym" onChange={onChangeHandle} value={museum.acronym} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                </div>

                <div className="my-3 flex gap-4">
                    <div className="flex flex-col grow">
                        <label htmlFor="foundation" className="font-semibold py-1 text-gray-500">Data de fundação</label>
                        <input type="date" name="foundation" required="required" placeholder="" onChange={onChangeHandle} value={museum.foundation} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                    <div className="flex flex-col grow">
                        <label htmlFor="phone" className="font-semibold py-1 text-gray-500">Telefone</label>
                        <input type="text" name="phone" required="required" placeholder="(99) 9999-9999" onChange={onChangeHandle} value={museum.phone} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                </div>
            
                <div className="my-3 flex flex-col">
                    <label htmlFor="email" className="font-semibold py-1 text-gray-500">E-mail</label>
                    <input type="text" name="email" required="required" placeholder="" onChange={onChangeHandle} value={museum.email} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-3 flex flex-col">
                    <label htmlFor="website" className="font-semibold py-1 text-gray-500">Website</label>
                    <input type="text" name="website" placeholder="http://www.site.com.br" onChange={onChangeHandle} value={museum.website} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <h4 className="font-bold text-gray-700 text-lg">Endereço</h4>
                <div className="my-3 flex gap-4">
                    <div className="flex flex-col grow">
                        <label htmlFor="address.street" className="font-semibold py-1 text-gray-500">Rua</label>
                        <input type="text" name="address.street" required="required" placeholder="" onChange={onChangeHandle} value={museum.address.street} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                    <div className="flex flex-col w-16">
                        <label htmlFor="address.number" className="font-semibold py-1 text-gray-500">Número</label>
                        <input type="number" name="address.number" placeholder="" onChange={onChangeHandle} value={museum.address.number} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                </div>
                <div className="my-3 flex flex-col">
                    <label htmlFor="address.complement" className="font-semibold py-1 text-gray-500">Complemento</label>
                    <input type="text" name="address.complement" placeholder="" onChange={onChangeHandle} value={museum.address.complement} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>
                <div className="my-3 flex flex-col grow">
                    <label htmlFor="address.neighborhood" className="font-semibold py-1 text-gray-500">Bairro</label>
                    <input type="text" name="address.neighborhood" required="required" placeholder="" onChange={onChangeHandle} value={museum.address.neighborhood} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>
                <div className="my-3 flex flex-col grow">
                    <label htmlFor="address.city" className="font-semibold py-1 text-gray-500">Cidade</label>
                    <input type="text" name="address.city" required="required" placeholder="" onChange={onChangeHandle} value={museum.address.city} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>
                <div className="my-3 flex gap-4">
                    <div className="flex flex-col grow">
                        <label htmlFor="address.state" className="font-semibold py-1 text-gray-500">Estado</label>
                        <select name="address.state" onChange={onChangeHandle} value={museum.address.state} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500">
                            <option value="">Selecione</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espirito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address.zipcode" className="font-semibold py-1 text-gray-500">CEP</label>
                        <input type="number" name="address.zipcode" required="required" onChange={onChangeHandle} value={museum.address.zipcode} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                </div>
                
                <h4 className="font-bold text-gray-700 text-lg">Informações do responsável</h4>
                <div className="my-3 flex flex-col">
                    <label htmlFor="accountable.name" className="font-semibold py-1 text-gray-500">Nome do responsável</label>
                    <input type="text" name="accountable.name" required="required" onChange={onChangeHandle} value={museum.accountable.name} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>
                <div className="my-3 flex flex-col">
                    <label htmlFor="accountable.position" className="font-semibold py-1 text-gray-500">Cargo</label>
                    <input type="text" name="accountable.position" required="required" onChange={onChangeHandle} value={museum.accountable.position} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>
                <div className="my-3 flex flex-col">
                    <label htmlFor="accountable.email" className="font-semibold py-1 text-gray-500">E-mail</label>
                    <input type="email" name="accountable.email" required="required" onChange={onChangeHandle} value={museum.accountable.email} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-6 flex justify-end gap-4">
                    <button className="block px-5 py-3 rounded text-center font-semibold text-white bg-orange-500 hover:bg-orange-600">Salvar alterações</button>
                </div>
            </form>
        </div>
    )
}

export default Museum 