import React from "react";

export interface AppState {
  counter: number;
}

export interface AppContextProps {
  counter: number;
  increaseCount: Function;
}

const AppContext = React.createContext<AppContextProps>({
  counter: 0,
  increaseCount: () => {}
});

export const AppProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<AppState>({ counter: 0 });

  const increaseCount = () => {
    setState({ counter: state.counter + 1 });
  };

  return (
    <AppContext.Provider value={{ ...state, increaseCount }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
