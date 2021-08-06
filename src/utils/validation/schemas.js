import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  password: Yup.string().required('Required'),
});
export const CreateClientAdminSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Valid email required'),
  password: Yup.string()
    .min(8)
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters including Alphabet, Number and Special Character',
    ),
    firstName:Yup.string().required('Required'),
    lastName:Yup.string().required('Required'),
});

export const verifyFormSchema = Yup.object().shape({
  otp: Yup.string().required('Required'),
});

export const changetemperorayFormSchema = Yup.object().shape({
  current_password: Yup.string().required('Required'),
  new_password: Yup.string()
    .min(8)
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});

export const emailReqiredSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
});

export const forgoSubmittFormSchema = Yup.object().shape({
  code: Yup.string().required('Required'),
  password: Yup.string()
    .min(8)
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  new_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password confirm is required'),
});
