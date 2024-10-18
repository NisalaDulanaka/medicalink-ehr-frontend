export interface IRegisterPatientRequest {
    nic: string;
    givenName: string;
    familyName: string;
    gender: string;
    dateOfBirth: string;
    telecom: string;
    district: string;
}

export interface IPatientSearchRequest {
    filters: {
        name?: string;
        nic?: string;
        address?: string;
    };
    sortField?: string;
}
