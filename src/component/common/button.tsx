export interface ButtonProp {
    name: string,
    className?: string,
    testId?: string,
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void
}

export function Button({ name, className, testId, onClick }: ButtonProp) {
    return (
        <button className={className} onClick={onClick} data-testid={testId} >{name}</button>
    )
}