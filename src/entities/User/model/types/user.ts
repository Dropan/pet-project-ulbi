export interface User {
  id: string;
  userName: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;

}
