import React, { useState } from 'react';
import { CreateContextPage } from './apis/00-create-context.jsx';
import { CreatePortalPage } from './apis/01-create-portal';
import { FragmentExample } from './apis/02-fragment.jsx';
import { LazyExample } from './apis/03-lazy';
import { MemoExample } from './apis/04-memo';
import { ProfilerExample } from './apis/05-profiler';

function App() {
  const [currentApi, setCurrentApi] = useState("CreateContextPage");

  const renderApi = () => {



    switch (currentApi) {
      case "CreateContextPage":
        return <CreateContextPage />;

      case "CreatePortalPage":
        return <CreatePortalPage />;
      
      case "CreateFragment":
        return <FragmentExample />
      
        case "CreateLazyLoad":
          return <LazyExample />

          case "CreateMemo":
          return <MemoExample />

          case "CreateProfiler ":
            return <ProfilerExample />

          

      default:
        return <h2>Selecciona una API para mostrar</h2>;
    }
  };

  return (
    <div>
      <header style={{ textAlign: "center", margin: "20px 0" }}>
        <h1>Explorador de APIs</h1>
        <nav>
          <button
            onClick={() => setCurrentApi("CreateContextPage")}
            style={{
              margin: "0 10px",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            API: CreateContext
          </button>
          <button
            onClick={() => setCurrentApi("CreatePortalPage")}
            style={{
              margin: "0 10px",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            API: CreatePortal
          </button>
          <button
            onClick={() => setCurrentApi("CreateFragment")}
            style={{
              margin: "0 10px",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            API: Fragment
          </button>
          <button
            onClick={() => setCurrentApi("CreateLazyLoad")}
            style={{
              margin: "0 10px",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            API: LazyLoad
          </button>
          <button
            onClick={() => setCurrentApi("CreateMemo")}
            style={{
              margin: "0 10px",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            API: Memo
          </button>
          <button
            onClick={() => setCurrentApi("CreateProfiler")}
            style={{
              margin: "0 10px",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            API: Profiler
          </button>
          
        </nav>
      </header>

      <main>{renderApi()}</main>
    </div>
  );
}

export default App;
