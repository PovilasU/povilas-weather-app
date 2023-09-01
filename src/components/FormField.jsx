export default function FormField({ title, name }) {
    return (
        <div className="form-field">
            <label>
                {title}
            </label>
            <input
                type="text"
                name={name}
                autoComplete="off"
            />
        </div>
    )
}

