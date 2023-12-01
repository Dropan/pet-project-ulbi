import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/userConsts';
import { JsonSettings } from './jsonSettings';

export interface User {
  id: string;
  userName: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
