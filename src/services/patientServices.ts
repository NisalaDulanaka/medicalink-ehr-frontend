import { IBaseResponse } from "../models";
import {
  IPatientSearchRequest,
  IRegisterPatientRequest,
} from "../models/patientModels";
import { api } from "./config";
import { R4 } from "@ahryman40k/ts-fhir-types";
import { either as E } from "fp-ts";

/**
 * Adds a new patient to the system
 * @param input - The patient details
 */
export const registerPatient = async (
  input: IRegisterPatientRequest
): Promise<IBaseResponse | undefined> => {
  try {
    const response = await api.post("/patient/add", input);
    console.log(response);
    if (response.data.data) {
      return response.data.data;
    }
  } catch (error) {
    console.log("registerPatient: ", error);
  }
};

/**
 * Search for patients
 * @param input search parameters
 */
export const searchPatients = async (
  input: IPatientSearchRequest
): Promise<R4.IPatient[] | undefined> => {
  try {
    const response = await api.post("/patient/search", input);
    console.log(response);
    const data = response.data;
    if (!data) return [];

    const resultsArray: R4.IPatient[] = [];
    data.entry.forEach((resource: any) => {
      const result = R4.RTTI_Patient.decode(resource.resource);

      if (!E.isLeft(result)) {
        resultsArray.push(result.right);
      } else {
        console.log("Not a correct resource");
      }
    });
    return resultsArray;
  } catch (error) {
    console.log("registerPatient: ", error);
  }
};
