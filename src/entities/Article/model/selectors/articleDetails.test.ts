import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getArticleDetailsData, // TODO: добить два тест-кейса
} from './articleDetails';

describe('getArticleDetailsData.test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
});
