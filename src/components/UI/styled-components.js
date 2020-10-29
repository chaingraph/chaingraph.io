import { Flex, Box } from 'rebass'
import styled, { themeGet } from 'utils/styles'

const HeaderComponent = styled(Flex)`
  background-color: ${({ userTheme }) => userTheme === 'light' ? '#fff' : '#151325'};
  position: sticky;
  transform: ${({ scroll, hide }) => scroll === true || !hide  ? 'translateY(0px)' : 'translateY(-109px)'};
  transition: transform 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms;
  z-index: 1500;
  width: 100%;
  top: -1px;
  left: 0;
`

const HeaderLogoContainer = styled(Box)`
  display: ${({ mobile }) => mobile ? 'block' : 'none'};

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    display: ${({ mobile }) => !mobile ? 'block' : 'none'};
  }
`

export {
  HeaderComponent,
  HeaderLogoContainer,
}
