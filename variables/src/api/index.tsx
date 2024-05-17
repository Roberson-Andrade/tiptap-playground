import { VariableOption, VariableValue } from "@/types";
import { faker } from "@faker-js/faker";

export async function getVariables(): Promise<VariableOption[]> {
  return new Promise<VariableOption[]>((resolve) =>
    setTimeout(
      () =>
        resolve([
          { id: "1", label: "Name" },
          { id: "2", label: "Age" },
          { id: "3", label: "jobTitle" },
        ]),
      1000
    )
  );
}

export async function getVariablesValues(): Promise<VariableValue[]> {
  return new Promise<VariableValue[]>((resolve) =>
    setTimeout(
      () =>
        resolve([
          { id: "1", value: faker.person.fullName() },
          { id: "2", value: faker.number.int({ min: 18, max: 80 }).toString() },
          { id: "3", value: faker.person.jobTitle() },
        ]),
      1000
    )
  );
}
