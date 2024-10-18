const inputsHandler = (event, inputs, setInputs) => {
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
}

export default inputsHandler