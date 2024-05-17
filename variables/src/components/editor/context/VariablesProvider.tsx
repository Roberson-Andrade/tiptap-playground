import { VariablesContext } from "./VariablesContext";
import { useQuery } from "@tanstack/react-query";
import { getVariablesValues } from "@/api";

export function VariablesContextProvider({
  children,
  parseVariables,
}: {
  children: React.ReactNode;
  parseVariables: boolean;
}) {
  const { data: values } = useQuery({
    queryKey: ["variable-values"],
    queryFn: getVariablesValues,
  });

  return (
    <VariablesContext.Provider value={{ values, parseVariables }}>
      {children}
    </VariablesContext.Provider>
  );
}
