function Button({children, onClick}) {
    return (
        <button key='button-1' className="btn btn-primary" onClick={onClick}>{children}</button>
    )
}

export default Button