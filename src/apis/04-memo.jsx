import { useState, memo } from 'react';

// Componente memonizado
export const ChildComponent = memo(({ count }) => {
    console.log('ChildComponent renderizado');
    return (
        <div style={{
            padding: '10px',
            margin: '10px auto',
            maxWidth: '300px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            textAlign: 'center',
        }}>
            <p>Conteo recibido: {count}</p>
        </div>
    );
});

ChildComponent.displayName = 'ChildComponent';

// Componente principal
export const MemoExample = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false); // Corregido el typo en "useState"

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '50px',
        }}>
            <h1>Ejemplo de React.Memo</h1>
            <p>
                React.Memo evita renders innecesarios y envuelve solo lo que necesita renderizar.
                <br/>
                ReactdevTools para ver las diferencias
            </p>
            {/* ChildComponent solo se renderiza si 'count' cambia */}
            <ChildComponent count={count} />

            <button
                onClick={() => setCount(count + 1)} // Corregido el nombre del evento
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    margin: '5px',
                }}
            >
                Incrementar Conteo
            </button>

            <button
                onClick={() => setOtherState(!otherState)} // Corregido el nombre del evento
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    margin: '5px',
                }}
            >
                Cambiar otro estado
            </button>
        </div>
    );
};
