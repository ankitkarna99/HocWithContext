import React from "react";
import AppContext, { AppContextProps } from "../Contexts/AppContext";

const withContext = (Component: React.ComponentType<any>) => {
  return function ContextComponent(props: any) {
    const appContext: AppContextProps = React.useContext(AppContext);
    return <Component context={appContext} {...props} />;
  };
};

export default withContext;
