import RegisterNewPatient from "../../pages/AddNewPatient";
import HomePage from "../../pages/HomePage";
import PatientHome from "../../pages/PatientHome";
import NotFound from "./NotFound";

export interface IAppRoute {
    title: string;
    path: string;
    index?: boolean;
    Component: React.ComponentType | null | undefined;
}

export const routes: IAppRoute[] = [
    {
        title: "Home",
        index: true,
        path: "/",
        Component: HomePage,
    },
    {
        title: "Patient",
        path: "/patient",
        Component: PatientHome,
    },
    {
        title: "Add Patient",
        path: "/patient/add",
        Component: RegisterNewPatient,
    },
    {
        title: "Not Found",
        path: "*",
        Component: NotFound,
    }
];
