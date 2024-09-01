import './Styles.scss'
type ButtonProps = {
    label: string
    type: 'button'
    onClick?: () => void;
}

export const Button = (props : ButtonProps) => {
    return(
        <div className="custom-button">
            <button type={props.type} className='custom-btn font-roboto' onClick={props.onClick}>{props.label}</button>
        </div>
    )
}