export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface User {
  id: string;
  userName: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;

}
