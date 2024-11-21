// createContext te permite crear un contexto que los componentes pueden proporcionar o leer.
import { createContext, useState, useContext } from "react";
//Provider
const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
 )
};


const useTheme = () => {
    const context = useContext(ThemeContext); //ConsumidorS

    if(!context) {
        throw new Error('useTheme debe usarse dentro de un Themeprovider');
    }
    return context;
};


const CreateContextExample = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div 
        style={{
            backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
            color: theme === 'light' ? '#000000' : '#ffffff',
            padding: '20px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
        }}
        >
            <h1>{`Tema Actual: ${theme}`}</h1>
            <button onClick={toggleTheme}>
                Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
            </button>
        </div>
    )
}

export const CreateContextPage = () => {
    return (
        <ThemeProvider>
            <CreateContextExample />
        </ThemeProvider>
    )
}