export default function FormField({ title, name, placeholder }) {
    return (
        <div className="form-field">
            <label>
                {title}
            </label>
            <input
                type="text"
                name={name}
                autoComplete="off"
                placeholder={placeholder}
            />
        </div>
    )
}

