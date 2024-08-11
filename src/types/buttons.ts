import { type TitleType } from "./navigation";

export interface NavbarButtonProps {
    titleType: TitleType;
    navigateFn: (element: TitleType) => void;
    children: React.ReactNode;
}