import { OrderModelType } from '../../models/OrderModel/OrderType';
import { UserModelType } from '../../models/UserModel/UserType';

export interface AccountOrdersProps {
  orders: OrderModelType[];
}

// export interface AccountPermissionsProps {
//   id: string;
// }

export type SetUsersType = UserModelType[];

export interface UserPermissionProps {
  user: UserModelType;
}
