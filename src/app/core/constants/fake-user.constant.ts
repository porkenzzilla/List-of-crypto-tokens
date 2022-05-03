import {IUser, USER_ROLE} from '../interfaces/user.interface';

export const AdminUser: IUser = {
  id: '1231238912313A',
  name: 'MisterX',
  role: USER_ROLE.ADMIN,
}

export const BaseUser: IUser = {
  id: '12312381123123B',
  name: 'MisterBase',
  role: USER_ROLE.USER,
}
