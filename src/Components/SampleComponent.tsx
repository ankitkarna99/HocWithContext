import React from "react";
import { AppContextProps } from "../Contexts/AppContext";
import withContext from "./withContext";

interface Props {
  context: AppContextProps;
  title: String;
}

const SampleComponent: React.FC<Props> = ({ title, context }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{context.counter}</h2>
      <button
        style={{
          border: "none",
          padding: "1rem 2rem",
          borderRadius: "0.25rem",
          fontWeight: "bold",
          fontSize: "1.1rem",
          background: "orange",
          color: "white"
        }}
        onClick={() => {
          context.increaseCount();
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default withContext(SampleComponent);
