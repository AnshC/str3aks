export default function Button (props) {
    const styles = {
        width: props.width,
        height: props.height || '',
        backgroundColor: props.color,
        color: props.textColor || black,
        padding: props.padding || '5px 10px 5px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}