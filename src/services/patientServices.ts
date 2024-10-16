import { IBaseResponse } from "../models";
import { IPatientSearch, IRegisterPatientRequest } from "../models/patientModels";
import { api } from "./config";

/**
 * Adds a new patient to the system
 * @param input - The patient details
 */
export const registerPatient = async (
    input: IRegisterPatientRequest
): Promise<IBaseResponse | undefined> => {
    try {
        const response = await api.post('/patient/add', input);
        if (response.data.data) {
            return response.data.data;
        }
    } catch (error) {
        console.log("registerPatient: ", error);
    }
};

export const searchPatients = async (input: IPatientSearch) => {
    try {
        const response = await api.post('/patient/search', input);
        if (response.data.data) {
            return response.data.data;
        }
    } catch (error) {
        console.log("registerPatient: ", error);
    }
}
