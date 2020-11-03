import * as emotion from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { themeGet } from '@styled-system/theme-get'
import { theme } from './theme'

const { css, Global, keyframes, jsx } = emotion

export { css, Global, keyframes, ThemeProvider, theme, themeGet, jsx }

export * from 'styled-system'
export default styled
