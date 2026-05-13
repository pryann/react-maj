import './InputField.css'

function InputField({ type, id, name, value, labelText, onUpdateValue }) {
    return (
        <div className="input-group">
            <label className="input-group__label" htmlFor={id}>
                {labelText}
            </label>
            <input
                className="input-group__field"
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onUpdateValue}
            />
        </div>
    )
}

export default InputField
