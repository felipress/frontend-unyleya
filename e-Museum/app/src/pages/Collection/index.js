import { useState } from "react"
import { useParams } from "react-router-dom"

const Collection = () => {
    /* Default object */
    let objectMock = {
        photo: "",
        registerNumber: {
            number: "",
            otherNumbers: ""
        },
        name: "",
        classification: "",
        production: {
            date: "",
            location: ""
        },
        description: "",
        material: "",
        author: "",
        location: "",
        acquisition: {
            type: "",
            comments: ""
        },
        dimension: {
            width: "",
            height: "",
            length: "",
            diameter: ""
        },
        weight: "",
        conservationState: "",
        usageTerms: "",
        catalogedBy: "",
        comments: ""
    }

    const realObject = {
        photo: "",
        registerNumber: {
            number: "12345",
            otherNumbers: "Não há"
        },
        name: "Abaporu",
        classification: "Tela",
        production: {
            date: "",
            location: "Brasil"
        },
        description: "",
        material: "",
        author: "",
        location: "",
        acquisition: {
            type: "COMPRA",
            comments: ""
        },
        dimension: {
            width: "",
            height: "",
            length: "",
            diameter: ""
        },
        weight: "",
        conservationState: "BOM",
        usageTerms: "",
        catalogedBy: "",
        comments: ""
    }

    // Get ID from params and tries to fetch its object from database
    const {id} = useParams()
    if(id){
        objectMock = realObject
    }

    // useState
    const [inputs, setInputs] = useState(objectMock)

    if(id){
        // setInputs()
    }

    const onChangeHandle = (event) => {
        // Getting multiple level elements
        if(event.target.name.includes(".")){
            const [parent, children] = event.target.name.split(".")
            setInputs({
                ...inputs,
                [parent]: {
                    ...inputs[parent],
                    [children]: event.target.value
                }
            })
        }
        else{
            setInputs({
                ...inputs,
                [event.target.name]: event.target.value
            })
        }
        console.log(inputs)
    }

    return (
        <div>
            <form className="block mx-auto max-w-lg">
                <div className="my-3 flex flex-col">
                    <label htmlFor="name" className="font-semibold py-1 text-gray-500">Nome</label>
                    <input type="text" name="name" required="required" placeholder="" onChange={onChangeHandle} value={inputs.name} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-3 flex gap-4">
                    <div className="flex flex-col grow">
                        <label htmlFor="registerNumber.number" className="font-semibold py-1 text-gray-500">Número de Registro</label>
                        <input type="text" name="registerNumber.number" required="required" onChange={onChangeHandle} value={inputs.registerNumber.number} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                    <div className="flex flex-col grow">
                        <label htmlFor="registerNumber.otherNumbers" className="font-semibold py-1 text-gray-500">Outros Números</label>
                        <input type="text" name="registerNumber.otherNumbers" onChange={onChangeHandle} value={inputs.registerNumber.otherNumbers} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                </div>

                <div className="my-3 flex flex-col">
                    <label htmlFor="classification" className="font-semibold py-1 text-gray-500">Classificação</label>
                    <input type="text" name="classification" required="required" placeholder="Ex: Utensílio gráfico" onChange={onChangeHandle} value={inputs.classification} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-3 flex gap-4">
                    <div className="flex flex-col grow">
                        <label htmlFor="production.date" className="font-semibold py-1 text-gray-500">Data de produção</label>
                        <input type="date" name="production.date"  onChange={onChangeHandle} value={inputs.production.date} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                    <div className="flex flex-col grow">
                        <label htmlFor="production.location" className="font-semibold py-1 text-gray-500">Local de produção / Origem</label>
                        <input type="text" name="production.location" onChange={onChangeHandle} value={inputs.production.location} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                </div>

                <div className="my-3 flex flex-col">
                    <label htmlFor="description" className="font-semibold py-1 text-gray-500">Descrição</label>
                    <textarea name="description" required="required" onChange={onChangeHandle} value={inputs.description} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-3 flex flex-col">
                    <label htmlFor="material" className="font-semibold py-1 text-gray-500">Material</label>
                    <input type="text" name="material" placeholder="" onChange={onChangeHandle} value={inputs.material} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-3 flex flex-col">
                    <label htmlFor="author" className="font-semibold py-1 text-gray-500">Autor</label>
                    <input type="text" name="author" placeholder="" onChange={onChangeHandle} value={inputs.author} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-3 flex flex-col">
                    <label htmlFor="location" className="font-semibold py-1 text-gray-500">Localização</label>
                    <textarea name="location" onChange={onChangeHandle} value={inputs.location} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-3 flex gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="acquisition.type" className="font-semibold py-1 text-gray-500">Forma de aquisição</label>
                        <select name="acquisition.type" onChange={onChangeHandle} value={inputs.acquisition.type} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500">
                            <option>Selecione</option>
                            <option value="COLETA">Coleta</option>
                            <option value="DOACAO">Doação</option>
                            <option value="COMPRA">Compra</option>
                            <option value="PERMUTA">Permuta</option>
                            <option value="LEGADO">Legado</option>
                            <option value="CESSAO">Cessão</option>
                        </select>
                    </div>
                    <div className="flex flex-col grow">
                        <label htmlFor="acquisition.comments" className="font-semibold py-1 text-gray-500">Observações</label>
                        <input type="text" name="acquisition.comments" onChange={onChangeHandle} value={inputs.acquisition.comments} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                </div>

                <div className="my-3 flex gap-4">
                    <div className="flex flex-col grow">
                        <label htmlFor="dimension.width" className="font-semibold py-1 text-gray-500">Largura (cm)</label>
                        <input type="number" name="dimension.width" onChange={onChangeHandle} value={inputs.dimension.width} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                    <div className="flex flex-col grow">
                        <label htmlFor="dimension.height" className="font-semibold py-1 text-gray-500">Altura (cm)</label>
                        <input type="number" name="dimension.width" onChange={onChangeHandle} value={inputs.dimension.height} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                </div>

                <div className="my-3 flex gap-4">
                    <div className="flex flex-col grow">
                        <label htmlFor="dimension.length" className="font-semibold py-1 text-gray-500">Comprimento (cm)</label>
                        <input type="number" name="dimension.length" onChange={onChangeHandle} value={inputs.dimension.length} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                    <div className="flex flex-col grow">
                        <label htmlFor="dimension.diameter" className="font-semibold py-1 text-gray-500">Diâmetro (cm)</label>
                        <input type="number" name="dimension.diameter" onChange={onChangeHandle} value={inputs.dimension.diameter} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                </div>

                <div className="my-3 flex gap-4">
                    <div className="flex flex-col grow">
                        <label htmlFor="weigth" className="font-semibold py-1 text-gray-500">Peso (kg)</label>
                        <input type="number" name="weight" onChange={onChangeHandle} value={inputs.weight} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                    <div className="flex flex-col grow">
                        <label htmlFor="conservationState" className="font-semibold py-1 text-gray-500">Estado de conservação</label>
                        <select name="conservationState"  onChange={onChangeHandle} value={inputs.conservationState} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500">
                            <option>Selecione</option>
                            <option value="OTIMO">Ótimo</option>
                            <option value="BOM">Bom</option>
                            <option value="REGULAR">Regular</option>
                            <option value="RUIM">Ruim</option>
                            <option value="PESSIMO">Péssimo</option>
                        </select>
                    </div>
                </div>                    

                <div className="my-3 flex flex-col">
                    <label htmlFor="usageTerms" className="font-semibold py-1 text-gray-500">Termos de uso</label>
                    <textarea name="usageTerms" rows="1" onChange={onChangeHandle} value={inputs.usageTerms} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>
                
                <div className="my-3 flex flex-col">
                    <label htmlFor="catalogedBy" className="font-semibold py-1 text-gray-500">Catalogado por</label>
                    <textarea name="catalogedBy" rows="1" onChange={onChangeHandle} value={inputs.catalogedBy} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>
                
                <div className="my-3 flex flex-col">
                    <label htmlFor="comments" className="font-semibold py-1 text-gray-500">Observações</label>
                    <textarea name="comments" onChange={onChangeHandle} value={inputs.comments} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                </div>

                <div className="my-6 flex justify-end">
                    <button className="block px-5 py-3 rounded text-center font-semibold text-white bg-orange-500 hover:bg-orange-600">Salvar alterações</button>
                </div>
            </form>
        </div>
    )
}

export default Collection