import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError, // TODO: добить два тест-кейса
  getArticleDetailsIsLoading, // TODO: добить два тест-кейса
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
