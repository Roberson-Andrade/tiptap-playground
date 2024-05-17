import { useContext } from "react";
import { VariablesContext } from "./VariablesContext";

export function useVariablesContext() {
  const values = useContext(VariablesContext);

  if (values === undefined)
    throw new Error("useVariablesContext must be used within a VariablesProvider");

  return values;
}
