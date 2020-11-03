/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { themeGet } from 'utils/styles'
import { getColors } from 'utils/utility'

const InputWrapper = styled.div`
  input,
  textarea,
  select {
  }
`

const Error = styled.span``

export function Input({
  shouldValidate,
  touched,
  invalid,
  label,
  changed,
  value,
  inputRef,
  elementType,
  elementConfig,
  disabled,
}) {
  let inputElement = null
  let errorHelperText = null

  if (invalid && touched) {
    errorHelperText = (
      <Error>
        {`Please, input the ${label.toLowerCase()} correctly.${
          shouldValidate.minLength
            ? `Min Length: ${shouldValidate.minLength}`
            : ''
        }`}
      </Error>
    )
  }

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          id={label}
          placeholder={label}
          onChange={changed}
          ref={inputRef}
          required={shouldValidate.required}
          disabled={disabled}
        />
      )
      break
    case 'email':
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          id={label}
          placeholder={label}
          onChange={changed}
          ref={inputRef}
          required={shouldValidate.required}
          disabled={disabled}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <textarea
          {...elementConfig}
          value={value}
          id={label}
          placeholder={label}
          onChange={changed}
          ref={inputRef}
          required={shouldValidate.required}
          rows="5"
          disabled={disabled}
        />
      )
      break
    case 'select':
      inputElement = (
        <select
          {...elementConfig}
          value={value}
          id={label}
          placeholder={label}
          onBlur={changed}
          ref={inputRef}
          required={shouldValidate.required}
          disabled={disabled}
        >
          {elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break
    case 'password':
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          id={label}
          placeholder={label}
          onChange={changed}
          ref={inputRef}
          required={shouldValidate.required}
          disabled={disabled}
        />
      )
      break
    default:
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          id={label}
          placeholder={label}
          onChange={changed}
          ref={inputRef}
          required={shouldValidate.required}
          disabled={disabled}
        />
      )
  }

  return (
    <InputWrapper>
      {inputElement}
      {errorHelperText}
    </InputWrapper>
  )
}

Input.propTypes = {
  touched: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  elementType: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  shouldValidate: PropTypes.object.isRequired,
  elementConfig: PropTypes.object.isRequired,
  inputRef: PropTypes.func,
  disabled: PropTypes.bool,
}

React.memo(Input)
