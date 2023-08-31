export default function Formfield({ title, name }) {
    return (
        <div>
            <label>{title}</label>
            <input type="text" name={name} autoComplete="off" />
        </div>
    )
}

