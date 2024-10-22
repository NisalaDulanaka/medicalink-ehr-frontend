import { z } from "zod";

const registerPatientSchema = z.object({
    nic: z
        .string()
        .min(1, {message: "Nic is required"})
        .regex(/^(\d{9}(v|V)|\d{12})$/, {message: "Not a valid NIC"}),
    givenName: z
        .string()
        .min(1, {message: "Given name is required"}),
    familyName: z
        .string()
        .min(1, {message: "Family name is required"}),
    gender: z
        .enum(["MALE","FEMALE"]),
    dateOfBirth: z
        .string()
        .date("Invalid birth date"),
    telecom: z
        .string()
        .min(1, {message: "A contact number is required"})
        .regex(/^\+94\d{9}/, "Invalid format."),
    district: z
        .string()
        .min(1, {message: "District is required"}),
});

export default registerPatientSchema;