export interface IRegisterPatientRequest {
    nic: string;
    givenName: string;
    familyName: string;
    gender: string;
    dob: string;
    telecom: string;
    district: string;
}

export interface IPatientSearch {
    familyName?: string;
    givenName?: string;
    nic?: string;
}
