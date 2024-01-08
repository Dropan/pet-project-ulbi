import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/AddCommentFormSlice';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/AddCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Input } from '@/shared/ui/deprecated/Input';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        justify="between"
        max
        className={classNames(cls.AddCommentForm, {}, [className])}
        data-testid="AddCommentForm"
      >
        <Input
          className={cls.input}
          placeholder={t('Введите комментарий')}
          value={text}
          onChange={onCommentTextChange}
          data-testid="AddCommentForm.Input"
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
          data-testid="AddCommentForm.Button"
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
