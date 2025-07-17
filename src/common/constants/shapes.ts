/* core */
import * as yup from 'yup';

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const nameShape = (t: (key: string) => string) => ({
  first_name: yup
    .string()
    .required(t('auth.shema.firstNameRequired'))
    .min(2, t('auth.shema.firstNameMin'))
    .max(30, t('auth.shema.firstNameMax'))
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ]+([ '-][a-zA-Zа-яА-ЯіІїЇєЄ]+)*$/,
      t('auth.shema.firstNamePattern'),
    ),
  last_name: yup
    .string()
    .required(t('auth.shema.lastNameRequired'))
    .min(2, t('auth.shema.lastNameMin'))
    .max(30, t('auth.shema.lastNameMax'))
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ]+([ '-][a-zA-Zа-яА-ЯіІїЇєЄ]+)*$/,
      t('auth.shema.lastNamePattern'),
    ),
});

export const RegPasswordShape = (t: (key: string) => string) => ({
  password: yup
    .string()
    .required(t('auth.shema.passwordRequired'))
    .min(8, t('auth.shema.passwordMin'))
    .matches(/[A-Z]/, t('auth.shema.passwordUpper'))
    .matches(/[a-z]/, t('auth.shema.passwordLower'))
    .matches(/[0-9]/, t('auth.shema.passwordDigit')),
  confirmPassword: yup
    .string()
    .required(t('auth.shema.confirmPasswordRequired'))
    .oneOf([yup.ref('password')], t('auth.shema.passwordsMatch')),
});

export const passwordShape = (t: (key: string) => string) => ({
  password: yup
    .string()
    .required(t('auth.shema.passwordRequired'))
    .min(8, t('auth.shema.passwordMin'))
    .matches(/[A-Z]/, t('auth.shema.passwordUpper'))
    .matches(/[a-z]/, t('auth.shema.passwordLower'))
    .matches(/[0-9]/, t('auth.shema.passwordDigit')),
});

export const phoneShape = (t: (key: string) => string) => ({
  phone: yup
    .string()
    .required(t('auth.shema.phoneRequired'))
    .test('valid-ukraine-phone-format', t('auth.shema.phonePattern'), (value) => {
      if (!value) return false;

      const internationalFormat = /^\+380\d{9}$/;
      const nationalFormat = /^0\d{9}$/;

      return internationalFormat.test(value) || nationalFormat.test(value);
    }),
});

export const emailShape = (t: (key: string) => string) => ({
  email: yup
    .string()
    .required(t('auth.shema.emailRequired'))
    .matches(emailRegex, t('auth.shema.emailInvalid')),
});

export const termsShape = (t: (key: string) => string) => ({
  terms: yup
    .boolean()
    .oneOf([true], t('auth.shema.termsRequired'))
    .required(t('auth.shema.termsConfirm')),
});

export const checkoutShape = (t: (key: string) => string) => ({
  deliveryMethod: yup
    .mixed<'nova' | 'ukr' | 'pickup'>()
    .oneOf(['nova', 'ukr', 'pickup'], t('schema.deliveryMethodRequired'))
    .required(t('schema.deliveryMethodRequired')),

  paymentMethod: yup
    .mixed<'cod' | 'card'>()
    .oneOf(['cod', 'card'], t('schema.paymentMethodRequired'))
    .required(t('schema.paymentMethodRequired')),

  comment: yup.string().max(500, t('schema.commentMax')).nullable(),
});
