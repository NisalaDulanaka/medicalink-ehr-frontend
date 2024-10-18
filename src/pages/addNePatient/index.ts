
export const validateNic = (nic: string): string|undefined => {
    if (nic == "") {
        return "Nic cannot be empty";
    }
    if (!/^\d{12}$/.test(nic)) {
        return "Invalid NIC number";
    }
};

export const validateName = (name: string): string|undefined => {
    if (name == "") {
        return "This field is required";
    }
    if (!/^\D+$/.test(name)) {
        return "Invalid input";
    }
};

export const validateGender = (gender: string): string|undefined => {
    if (gender == "") {
        return "Gender is required";
    }
};

export const validateDOB = (dob: string): string|undefined => {
    if (dob == "") {
        return "Birth date is required";
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
        return "Invalid date format";
    }
};

export const validateTelecom = (tel: string): string|undefined => {
    if (tel == "") {
        return "A contact number is required";
    }
    if (!/^(\+94|0)\d{9}$/.test(tel)) {
        return "Invalid contact number";
    }
};
