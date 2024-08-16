import './Styles.scss'
type ButtonProps = {
    label: string
    type: 'button'
}

export const Button = (props : ButtonProps) => {
    return(
        <div className="custom-button">
            <button type={props.type} className='custom-btn font-roboto'>{props.label}</button>
        </div>
    )
}