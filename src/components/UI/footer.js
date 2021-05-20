import React from 'react'
import { Text, Flex, Box } from 'rebass'
import { GlobalContainer } from 'store'
import { SvgIcon, Icon, Button, ThemeBtnWrapper } from './index'
import { useTranslation } from 'gatsby-plugin-react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const { mobile, user_theme, setUserThemeHandler } =
    GlobalContainer.useContainer()

  function changeThemeHandler() {
    if (user_theme === 'light') {
      setUserThemeHandler('dark', false)
    } else {
      setUserThemeHandler('light', false)
    }
  }

  return (
    <Box as="footer" width={1} p={3} style={{ position: 'relative' }}>
      <ThemeBtnWrapper>
        <Button.PrimaryBtn
          onClick={changeThemeHandler}
          userTheme={user_theme}
          icon
        >
          {user_theme === 'light' ? (
            <Icon.light size="32px" />
          ) : (
            <Icon.dark size="32px" />
          )}
        </Button.PrimaryBtn>
      </ThemeBtnWrapper>
      <Flex
        justifyContent="space-between"
        flexDirection="column"
        alignItems="center"
        maxWidth="1440px"
        mx="auto"
      >
        <Box as="figure" maxWidth="820px" mb={5} width={1}>
          <SvgIcon
            icon={
              mobile
                ? `chaingraph_logo-${
                  user_theme === 'light' ? 'l' : 'd'
                }-footer-m`
                : `chaingraph_logo-big-${user_theme === 'light' ? 'l' : 'd'}`
            }
          />
        </Box>
        <Text as="span" fontWeight="300" fontSize={1} mx="auto" opacity={0.75}>
          © {new Date().getFullYear()}, {t('allRights')}
        </Text>
      </Flex>
    </Box>
  )
}
