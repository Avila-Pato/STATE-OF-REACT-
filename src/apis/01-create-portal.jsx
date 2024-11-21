import { useState } from "react";
import { createPortal } from "react-dom";


// createPortal permite renderizar componentes hijos o elementos en otra parte del DOM
// de esa manera llo renderiza desde la raiz y no habria problemas ocn z-index

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          color: "black",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cerrar
        </button>
      </div>
    </div>,
    document.body // Renderiza en el body
  );
};

export const CreatePortalPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ejemplo de createPortal</h1>
      <button
        onClick={() => setModalOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Abrir Portal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Este es un modal</h2>
        <p>El contenido de este modal está renderizado con createPortal.</p>
      </Modal>
    </div>
  );
};
