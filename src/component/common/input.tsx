export { Button } from './button';
export interface InputProp {
    name: string,
    placeholder: string,
    value: string | number,
    type: 'text' | 'number',
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export function InputBox({ name, placeholder, value, type, onChange }: Partial<InputProp>) {
    return (
        <input
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type} />
    )
}