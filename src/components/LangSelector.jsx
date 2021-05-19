import React, { useState, useContext, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled, { themeGet } from 'utils/styles'
import { Flex } from 'rebass'
import { FaGlobe } from 'react-icons/fa'
import { GlobalContainer } from 'store'
import {
  useI18next,
  I18nextContext,
  useTranslation,
  Link,
} from 'gatsby-plugin-react-i18next'

const WrapperStyled = styled.div`
  margin-left: 64px;
  position: relative;
  & .item-menu {
    margin: 15px 0;
  }
  & .lang-text {
    font-weight: bold;
    font-size: ${themeGet('fontSizes.4')};
  }
  & ul {
    margin: 0;
    list-style-type: none;
    position: absolute;
    width: 150px;
    top: 30px;
    right: ${({ isMobile }) => (isMobile ? '-32px' : '-75px')};
    background-color: ${({ usertheme }) =>
      usertheme === 'light'
        ? 'rgb(255, 255, 255, 0.8)'
        : 'rgba(21, 19, 37, 0.6)'};
    border-radius: 5px;
  }
  & .button-lang,
  & .item-menu a {
    color: ${({ usertheme }) => (usertheme === 'light' ? '#111' : '#fafafa')};
  }

  & .button-lang svg {
    display: none;
    @media screen and (min-width: ${themeGet('breakpoints.1')}) {
      display: block;
    }
  }
`
const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
const LinkStyled = styled(Link)`
  display: flex;
  background-color: transparent;
  text-decoration: none;
  align-items: center;
  margin: 5px 15px !important;
  & img {
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.833;
  }
`
const animOpt = {
  animate: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
  },
  initial: {
    clipPath: 'inset(0% 0% 100% 0%)',
    opacity: 1,
  },
  exit: {
    clipPath: 'inset(0% 0% 100% 0%)',
    opacity: 1,
  },
}

const langs = {
  en: 'English',
  es: 'Español',
  cn: '中文',
}

export function LangSelector({ isMobile }) {
  const { originalPath, languages } = useI18next()
  const { t } = useTranslation()
  const { language } = useContext(I18nextContext)
  const { user_theme } = GlobalContainer.useContainer()
  const [langMenu, setLangMenu] = useState(false)

  const toggleMenu = () => {
    setLangMenu((state) => !state)
  }

  useEffect(() => {
    const hiddenLang = () => setLangMenu(false)

    window.addEventListener('scroll', hiddenLang)
    window.addEventListener('resize', hiddenLang)

    return () => {
      window.addEventListener('scroll', hiddenLang)
      window.addEventListener('resize', hiddenLang)
    }
  }, [])

  return (
    <WrapperStyled usertheme={user_theme} isMobile={isMobile}>
      <Flex justifyContent="center" flexDirection="column">
        <ButtonStyled className="button-lang" onClick={toggleMenu}>
          {isMobile ? (
            <div className="lang-text">
              {t('Languages')} <span>›</span>
            </div>
          ) : (
            <FaGlobe />
          )}
        </ButtonStyled>
        <AnimatePresence>
          {langMenu ? (
            <motion.ul {...animOpt} key="language-menu-list-mobile">
              {languages.map((l) => (
                <li className="item-menu" key={l}>
                  <LinkStyled to={originalPath} language={l}>
                    <img
                      src={`/flags/${l}_flag.svg`}
                      alt={`lang-${language}`}
                    />
                    <span>{langs[l]}</span>
                  </LinkStyled>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </Flex>
    </WrapperStyled>
  )
}
