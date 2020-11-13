import React, { useState } from 'react'
import { Flex, Box } from 'rebass'
import { GlobalContainer } from 'store'
import { checkValidity, updateObject } from 'utils/utility'
import { Input, Button, Icon } from 'components/UI'
import { SubscriptionContainer } from 'store'
import { IconSpinner } from 'components/UI/icon'

export function Subscribe() {
  const { user_theme } = GlobalContainer.useContainer()
  const {
    sendSubscriptionRequest,
    s_loading,
  } = SubscriptionContainer.useContainer()
  const [email, setEmail] = useState({
    elementType: 'email',
    elementConfig: {
      type: 'text',
    },
    label: 'Email',
    value: '',
    validation: {
      required: true,
      valid: false,
      touched: false,
      emailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
  })
  const [emailValid, setEmailValid] = useState(false)

  function onChangeHandler(e) {
    let isValid = true
    const updatedEmail = updateObject(email, {
      value: e.target.value,
      validation: {
        ...email.validation,
        valid: checkValidity(e.target.value, email.validation),
        touched: true,
      },
    })

    for (const inputIds in updatedEmail) {
      if (inputIds) {
        isValid = email.validation.valid && isValid
      }
    }

    setEmail(updatedEmail)
    setEmailValid(isValid)
  }

  function sendEmailHandler(e) {
    e.preventDefault()

    return sendSubscriptionRequest(email.value, {}, true)
  }

  return (
    <Flex
      as="form"
      justifyContent="space-between"
      alignItems="center"
      width={1}
      onSubmit={sendEmailHandler}
      mb={6}
    >
      <Box width={9 / 12}>
        <Input
          {...email}
          {...email.elementConfig}
          elementType={email.elementType}
          shouldValidate={email.validation}
          changed={(e) => onChangeHandler(e, 'email')}
          invalid={!email.validation.valid}
          touched={email.validation.touched}
        />
      </Box>
      <Box width={2 / 12}>
        <Button.SecondaryBtn
          type="submit"
          userTheme={user_theme}
          icon
          disabled={!emailValid}
        >
          {s_loading ? <IconSpinner /> : <Icon.arrowRight size="32px" />}
        </Button.SecondaryBtn>
      </Box>
    </Flex>
  )
}
