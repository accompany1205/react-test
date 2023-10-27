import { IAvatar } from "./IAvatar";
export interface IManager {
    id: string;
    firstName: string;
    lastName: string;
    archivedAt: string | null;
    email: string;
    phone: string;
    position: string;
    avatar: IAvatar | null;
}