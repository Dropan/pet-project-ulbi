import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileValidateErrors.test', () => {
  test('should work with filled state', () => {
    const validateError = [
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
