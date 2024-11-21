import { Fragment } from 'react'
/* <Fragment>, a menudo utilizado a través de la sintaxis <>...</>, te permite agrupar elementos sin hacer uso de un nodo que los envuelva. */

export const FragmentExample = () => {
    return (
        <Fragment>
            <header style={{
                textAlign: 'center',
                paading: '20px',
                backgroundColor: '#00fbff',
                color: '#fff'
            }}
            >
            <h1>Cabacera del sitio</h1>
            </header>
            <main style={{ padding: '20px', textAlign: 'center'}}>
                <p>
                    Este es el contenido principal de la pagina. Aqui se coloca el texto
                    Imagenes o cualquier otro elemento
                </p>
                <p>
                    Los fragmentos permiten devolder multiples elementos  sin crear un nodo 
                    innecesario en el dom
                </p>
            </main>
            <footer
            style={{
                textAlign: 'center',
                padding: '10px',
                backgroundColor: '#00fbff',
                marginTop: '20px'
            }}
            >
            <p>&copy; Ejemplo Fragment</p>
            </footer>
        </Fragment>
    )
}