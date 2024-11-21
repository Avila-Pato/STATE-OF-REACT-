import React, { useState } from 'react';
import { Profiler } from 'react';

// Componente costoso
const ExpensiveComponent = ({ count }) => {
    let result = 0;

    // Simulando una operación costosa
    for (let i = 0; i < 20; i++) {
        result += i;
    }
    console.log({ result });

    return (
        <div style={{
            padding: '10px',
            margin: '10px auto',
            maxWidth: '300px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            textAlign: 'center',
        }}>
            <p>Conteo Actual: {count}</p>
        </div>
    );
};

// Función de callback del Profiler
const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log(`Component: ${id}`);
    console.log(`Phase: ${phase}`);
    console.log(`Render Time: ${actualDuration}ms`);
    console.log(`Base Duration: ${baseDuration}ms`);
    console.log(`Start Time: ${startTime}`);
    console.log(`Commit Time: ${commitTime}`);
};

// Componente principal
export const ProfilerExample = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '50px',
        }}>
            <h1>Ejemplo de React con Profiler</h1>
            <p>El profiler mide el tiempo que tarda un componente en renderizarse.</p>

            <Profiler id="ExpensiveComponentProfiler" onRender={onRenderCallback}>
                <ExpensiveComponent count={count} />
            </Profiler>

            <button
                onClick={() => setCount(count + 1)}
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
        </div>
    );
};

export default ProfilerExample;
