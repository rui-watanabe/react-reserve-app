import { OrderModelType } from '../../../models/Types/OrderType';
import { UserModelType } from '../../../models/Types/UserType';

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
