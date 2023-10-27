import { IAvatar } from "./IAvatar";
import { IDepartment } from "./IDepartment";
import { IManager } from "./IManager";
import { ISubDepartment } from "./ISubDepartment";
import { IDivision } from "./IDivision";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  phone: string;
  roleId: number;
  managerId: string | null;
  address: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
  subDepartment: ISubDepartment | null;
  avatar: IAvatar | null;
  manager: IManager | null;
  department: IDepartment | null;
  group: string | null;
  division: IDivision | null;
}
