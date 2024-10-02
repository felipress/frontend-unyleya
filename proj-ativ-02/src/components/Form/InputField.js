import "./InputField.css"

const InputField = ({type, name, label, placeholder = "", required = ""}) => {
    return (
        <div className="field input">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} required={required} />
        </div>
    )
}

export default InputField