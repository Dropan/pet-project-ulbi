import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserAthData = (state: StateSchema) => state.user.authData;
