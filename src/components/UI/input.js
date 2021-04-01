/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { themeGet } from 'utils/styles'
import { getColors } from 'utils/utility'
import { GlobalContainer } from 'store'
import { Flex } from 'rebass'

const InputWrapper = styled(Flex)`
  position: relative;

  input,
  textarea,
  select {
    width: 100%;
    padding: ${themeGet('space.3')} ${themeGet('space.4')};
    border-radius: 47px;
    border: 3px solid
      ${({ success, userTheme }) =>
    getColors('input', success ? 'success' : 'background', userTheme)};
    background-color: ${({ userTheme }) =>
    getColors('input', 'background', userTheme)};
    transition: border-color 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 25ms;
    color: ${({ userTheme }) =>
    userTheme === 'dark'
      ? getColors('main', 'white', '200')
      : getColors('main', 'black', '400')};

    &::placeholder {
      color: ${({ userTheme }) =>
    userTheme === 'dark'
      ? getColors('main', 'white', '200')
      : getColors('main', 'black', '400')};
      opacity: 0.4;
    }

    &:hover,
    &:focus {
      border-color: ${({ userTheme }) =>
    getColors('main', 'background', userTheme)};
    }
  }
`

const Error = styled.span`
  position: absolute;
  top: 64px;
  color: ${getColors('input', 'error', '')};
  font-size: ${themeGet('fontSizes.2')};
  padding-left: ${themeGet('space.3')};

  + input,
  + textarea,
  + select {
    border-color: ${getColors('input', 'error', '')} !important;
  }
`

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
  const { user_theme } = GlobalContainer.useContainer()
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
    <InputWrapper
      userTheme={user_theme}
      success={!invalid && touched}
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column-reverse"
      width={1}
      my={3}
    >
      {errorHelperText}
      {inputElement}
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
