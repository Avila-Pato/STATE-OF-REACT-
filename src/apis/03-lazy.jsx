import { lazy, Suspense, useState } from 'react';

// Cargar dinámicamente el componente
const LazyLoadedComponent = lazy(() => import('../components/LazyLoadComponent.jsx'));

export const LazyExample = () => {
    const [shouldLoad, setShouldLoad] = useState(false); // Inicialmente false, no cargamos el componente

    const handleLoadComponent = () => {
        setShouldLoad(true); // Cambiamos el estado para cargar el componente al hacer clic en el botón
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Ejemplo de React.Lazy</h1>
            <p>El componente se cargará dinámicamente cuando hagas clic en el botón.</p>
            <button
                onClick={handleLoadComponent} // Cargamos el componente al hacer clic
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginBottom: '20px',
                }}
            >
                Cargar Componente
            </button>
            
            {/* Verificamos si debe cargarse el componente */}
            {shouldLoad && (
                <Suspense fallback={<p>Cargando componente...</p>}>
                    <LazyLoadedComponent />
                </Suspense>
            )}
        </div>
    );
};
