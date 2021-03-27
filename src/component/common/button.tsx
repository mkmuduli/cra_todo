export interface ButtonProp {
    name: string,
    className?: string,
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void
}

export function Button({ name, className, onClick }: ButtonProp) {
    return (
        <button className={className} onClick={onClick}>{name}</button>
    )
}