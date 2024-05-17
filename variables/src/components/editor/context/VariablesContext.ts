import { VariableValue } from "@/types";
import { createContext } from "react";

interface VariablesContextProps {
  values: VariableValue[] | undefined;
  parseVariables: boolean;
  
}

export const VariablesContext = createContext<
  VariablesContextProps | undefined
>(undefined);

