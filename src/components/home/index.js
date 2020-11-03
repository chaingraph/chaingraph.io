/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, ContentWrapper, Input } from 'components/UI'
import { GlobalContainer } from 'store'
import { Blockchain } from './blockchain'
import { Flex, Text, Box } from 'rebass'
import styled from 'utils/styles'
import { checkValidity, updateObject } from 'utils/utility'

const TitleHero = styled(Text)`
  text-transform: capitalize;
  text-shadow: 0px 5px 80px rgba(255, 255, 255, 0.51);
`

export function Home() {
  const { setUserThemeHandler, user_theme } = GlobalContainer.useContainer()
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

  function changeThemeHandler() {
    if (user_theme === 'light') {
      setUserThemeHandler('dark', false)
    } else {
      setUserThemeHandler('light', false)
    }
  }

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

  const titleHero = 'one graph for all chains'
  const heroSub =
    'Blockchain real-time data without any hassle. ChainGraph provides reliable real-time graphql APIs for blockchain applications.'
  const titleSubscribe = 'Get notice when Beta App is release.'

  return (
    <React.Fragment>
      <Flex
        width={1}
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <ContentWrapper>
          <TitleHero as="h1" fontSize={[7, 7, 7, 7, 8]} mb={[3, 4, 4, 4, 5]}>
            {titleHero}
          </TitleHero>
          <Text
            as="p"
            fontSize={[3, 4, 4, 4, 5]}
            fontWeight="light"
            lineHeight={3}
            maxWidth={670}
          >
            {heroSub}
          </Text>
        </ContentWrapper>
        <Blockchain />
      </Flex>
      <ContentWrapper>
        <Text as="p" fontSize={[3, 4, 4, 4, 5]} fontWeight="medium">
          {titleSubscribe}
        </Text>
        <Input
          {...email}
          {...email.elementConfig}
          elementType={email.elementType}
          shouldValidate={email.validation}
          changed={(e) => onChangeHandler(e, 'email')}
          invalid={!email.validation.valid}
          touched={email.validation.touched}
        />
      </ContentWrapper>
      <b>Your browser has {user_theme} theme active.</b>
      <Button.PrimaryBtn onClick={changeThemeHandler} userTheme={user_theme}>
        change theme
      </Button.PrimaryBtn>
    </React.Fragment>
  )
}
