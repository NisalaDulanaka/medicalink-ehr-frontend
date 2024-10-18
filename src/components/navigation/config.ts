import RegisterNewPatient from "../../pages/addNePatient/AddNewPatient";
import HomePage from "../../pages/HomePage";
import PatientHome from "../../pages/PatientHome";
import SearchPatient from "../../pages/SearchPatient"
import SchedulingTaskFlow from "../../pages/SchedulingTaskFlow";
import ResearchForms from "../../pages/ResearchForms";
import CCDForm from "../../components/medical-form/CCDForm";
import IBDForm from "../../components/medical-form/IBDForm";
import NotFound from "./NotFound";

export interface IAppRoute {
    title: string;
    path: string;
    index?: boolean;
    Component: React.ComponentType | null | undefined;
    standAlone?: boolean;
}

export const routes: IAppRoute[] = [
    {
        title: "Home",
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
        path: "/patient-new",
        Component: RegisterNewPatient,
    },
    {
        title: "Patient Search",
        path: "/patient-search",
        Component: SearchPatient,
    },
    {
        title: "Scheduling / Task Flow",
        path: "/scheduling",
        Component: SchedulingTaskFlow,
    },
    {
        title: "Patient Search",
        path: "/patient-search",
        Component: SearchPatient,
    },
    {
        title: "Research Forms",
        path: "/research-forms",
        Component: ResearchForms,
    },
    {
        title: "Colorectal Cancer - University of Colombo",
        path: "/research-forms/ccdform",
        Component: CCDForm,
    },
    {
        title: "Infectious Bowel Disease - University of Colombo",
        path: "/research-forms/ibdform",
        Component: IBDForm,
    },
    {
        title: "Not Found",
        path: "*",
        Component: NotFound,
    }
];
