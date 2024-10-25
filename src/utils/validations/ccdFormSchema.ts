import { z } from "zod";

const ccdFormSchema = z.object({
    electronicConsent: z
        .string()
        .min(1, {message: "Consent is required"}),
    consentDate: z
        .string()
        .date("Invalid date"),
    contactNumber: z
        .string()
        .min(1, {message: "A contact number is required"})
        .regex(/^\+94\d{9}/, "Invalid format."),
    district: z
        .string(),
    clinicNumber: z
        .string(),
    wardNo: z
        .string(),
    contactName: z
        .string()
        .regex(/^[a-zA-Z .]*/),
    ethnicity: z
        .string(),
    education: z
        .string(),
    occupation: z
        .string(),
    finance: z
        .string(),
});

export default ccdFormSchema;