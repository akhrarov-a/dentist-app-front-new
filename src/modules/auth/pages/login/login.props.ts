import { KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { State } from '@store';
import { Login } from '@api';
import { logIn } from '@auth/store';
import { useLoginFormSchema } from '@auth/validation';

/**
 * <Login /> props
 */
const useLoginProps = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { isError } = useSelector((state: State) => state.auth);

  const form = useFormik<Login>({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: ({ username, password }) => {
      dispatch(logIn({ username, password }));
    },
    validationSchema: useLoginFormSchema(),
    validateOnChange: true
  });

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    form.submitForm();
  };

  return {
    t,
    form,
    isError,
    onKeyDown
  };
};

export { useLoginProps };
