import { OrderType, UserType } from '../../models/ModelsType';

export interface AccountOrdersProps {
  orders: OrderType[];
}

// export interface AccountPermissionsProps {
//   id: string;
// }

export type SetUsersType = UserType[];

export interface UserPermissionProps {
  user: UserType;
}
