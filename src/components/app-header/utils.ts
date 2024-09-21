import { MouseEventHandler } from "react";

export interface AppMenuOption {
    label: string;
    onClick: MouseEventHandler<HTMLLIElement>;
}