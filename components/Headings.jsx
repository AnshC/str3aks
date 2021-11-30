/** @jsxImportSource theme-ui */

export function H1 (props) {
    const styles = {
        fontWeight: 900,
        fontSize: '80px'
    }
    return (
        <h1 style={styles}>
            <span sx={props.SX}>
                {props.children}
            </span>  
        </h1>
    )
}

export function H2 (props) {
    const styles = {
        fontWeight: 900,
        fontSize: '60px'
    }
    return (
        <h1 style={styles}>
            <span sx={props.SX}>
                {props.children}
            </span>  
        </h1>
    )
}

export function H3 (props) {
    const styles = {
        fontWeight: 700,
        fontSize: '30px'
    }
    return (
        <h1 style={styles}>
            <span sx={props.SX}>
                {props.children}
            </span>  
        </h1>
    )
}