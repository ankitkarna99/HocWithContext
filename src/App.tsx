import React from "react";
import "./App.css";
import SampleComponent from "./Components/SampleComponent";
import { AppProvider } from "./Contexts/AppContext";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <SampleComponent title="Basic Counter" />
      </div>
    </AppProvider>
  );
};

export default App;
