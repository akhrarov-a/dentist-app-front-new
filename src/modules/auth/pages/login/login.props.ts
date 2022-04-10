import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { State } from '@store';
import { Login } from '@api';
import { logIn } from '@auth/store';
import { useLoginFormSchema } from '@auth/validation';
import { useTranslation } from 'react-i18next';

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

  return {
    t,
    form,
    isError
  };
};

export { useLoginProps };
