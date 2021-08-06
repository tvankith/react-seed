/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

export const InputBoxMobile = (props: any) => {
  const [field, meta] = useField(props);
  const {
    label,
    type,
    placeholder,
    name,
    righticon,
    onClickRionghtButton,
    disabled,
    value,
    onchange
  } = props;
  const isInError = (meta.touched && meta.error && true) || false;

  return (
    <div className="w-full flex flex-col items-start relative">
      <div className={`form-item w-full`}>
        <input
          {...field}
          {...props}
          autoComplete="off"
          required
          disabled={disabled}
          name={name}
          type={type}
          readOnly={disabled === true}
          placeholder={placeholder}
          value={props.value}
          onchange={(e) => onChange(e.target.value)}
          className={`bg-white rounded-lg focus:outline-none py-3 block w-full appearance-none  mb-1 ${isInError ? "border-b-error text-error placeholder::text-red-500" : "border-b-2 text-secondary"}`}
        />

        <label className={meta.touched && meta.error ? 'text-error' : 'text-black font-normal text-xs table-text-color'} htmlFor={label}>{label}</label>
      </div>
      {righticon && (
        <div onClick={onClickRionghtButton} className="absolute top-0 right-0 h-full flex items-center">
          {righticon()}
        </div>
      )}
      {meta.touched && meta.error && (
        <div className="absolute text-right text-xs mt-10 right-0 text-error">{meta.error}</div>
      )}
    </div>
  );
};

export default InputBoxMobile;

InputBoxMobile.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  righticon: PropTypes.func,
  disabled: PropTypes.bool,
};

InputBoxMobile.defaultProps = {
  label: '',
  type: '',
  placeholder: '',
  name: '',
  righticon: null,
  disabled: false,
};
