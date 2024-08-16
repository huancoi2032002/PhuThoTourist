type SvgProps = {
    className: string
}

export const VectorIcon = ({ className }: SvgProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="2" height="288" viewBox="0 0 2 288" fill="none">
            <path d="M1 0V288" stroke="#6698CA" strokeWidth="2" />
        </svg>
    )
}

export const EllipseIcon = ({ className }: SvgProps) => {
    return (
        <svg className={className} width="8" height="9" viewBox="0 0 8 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4.5" r="4" />
        </svg>
    )
}

export const Logo = () => {
    <svg width="142" height="89" viewBox="0 0 142 89" fill=" " xmlns="http://www.w3.org/2000/svg">
        <path d="M115.588 44.5C115.588 69.0767 95.6646 89 71.0879 89C46.5112 89 26.5879 69.0767 26.5879 44.5C26.5879 19.9233 46.5112 0 71.0879 0C95.6646 0 115.588 19.9233 115.588 44.5Z" fill="#0054A6" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.0879 87C94.56 87 113.588 67.9721 113.588 44.5C113.588 21.0279 94.56 2 71.0879 2C47.6158 2 28.5879 21.0279 28.5879 44.5C28.5879 67.9721 47.6158 87 71.0879 87ZM71.0879 89C95.6646 89 115.588 69.0767 115.588 44.5C115.588 19.9233 95.6646 0 71.0879 0C46.5112 0 26.5879 19.9233 26.5879 44.5C26.5879 69.0767 46.5112 89 71.0879 89Z" fill="white" />
        <path d="M51.0625 30.0376L1 56.7376L43.8312 43.3876L90 59.5189L140.619 32.8188L97.2312 46.7251L51.0625 30.0376Z" fill="white" stroke="#0054A6" stroke-linejoin="round" />
    </svg>

}