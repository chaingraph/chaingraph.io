import { themeGet } from './styles'

export const updateObject = (oldObj, updatedProps) => ({
  ...oldObj,
  ...updatedProps,
})

export const checkValidity = (value, rules, pw, cpw) => {
  let isValid = true

  if (rules.required) {
    isValid = value.trim() !== '' && isValid
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
  }

  if (rules.emailFormat) {
    isValid = rules.emailFormat.test(value) && isValid
  }

  if (rules.sameAsPW) {
    isValid = value !== rules.value && isValid
  }

  if (rules.confirmPW) {
    isValid = (value === cpw || value === pw) && isValid
  }

  return isValid
}

export const getColors = (pallete, component, key) => {
  const theme_key = key !== '' ? key : 'default'
  return themeGet(`colors.${pallete}.${component}.${theme_key}`)
}

export const debug = (type, value) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('||| ACTION_EXECUTED |||\n———————————————————————\n', {
      type,
      ...value,
    })
  }
}
