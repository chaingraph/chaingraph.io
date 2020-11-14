import React, { useRef } from 'react'
import styled, { themeGet } from 'utils/styles'
import { motion, useAnimation } from 'framer-motion'
import { Link as GatsbyLink } from 'gatsby'
import { Text } from 'rebass'
import { GlobalContainer } from 'store'

const LinkContainer = styled(GatsbyLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.833;
  }

  + div {
    background-color: ${({ usertheme }) =>
    usertheme === 'light' ? '#111' : '#fafafa'};
    height: 2px;
    width: 0%;
    opacity: 0;
    float: left;
    left: 0;
    position: absolute;
    display: ${({ mobile }) => (mobile ? 'block' : 'none')};

    @media screen and (min-width: ${themeGet('breakpoints.0')}) {
      display: block;
    }
  }
`

const LinkWrapper = styled(motion.div)`
  display: ${({ mobile }) => (mobile ? 'initial' : 'none')};

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    display: ${({ mobile }) => (!mobile ? 'initial' : 'none')};
  }
`

export function Link({
  children,
  mobile = false,
  logo = false,
  header = false,
  to = '#',
  target = '',
  ...rest
}) {
  const { user_theme } = GlobalContainer.useContainer()
  const active = useRef(false)
  const revealX = useAnimation()

  function revealXAnim(state) {
    if (!header) return

    if (state === 'open') {
      revealX.start({
        opacity: 1,
        width: '100%',
        transition: {
          duration: 0.5,
        },
      })
    }

    if (state === 'close') {
      revealX.start({
        opacity: 0,
        width: '0%',
        transition: {
          duration: 0.5,
        },
      })
    }
  }

  return !logo ? (
    <LinkWrapper
      onHoverStart={() => revealXAnim('open')}
      onHoverEnd={() => revealXAnim('close')}
      mobile={mobile ? 1 : 0}
    >
      <Text
        as={header ? 'b' : 'span'}
        style={{ position: 'relative' }}
        {...rest}
      >
        <LinkContainer
          activeStyle={{
            opacity: 0.833,
          }}
          to={to}
          target={target}
          getProps={({ isCurrent }) => {
            if (isCurrent) {
              active.current = isCurrent && header
            }
          }}
          usertheme={user_theme}
          mobile={mobile ? 1 : 0}
        >
          {children}
        </LinkContainer>
        {(header || active.current) && (
          <motion.div
            animate={!active.current && revealX}
            initial={
              active.current && {
                opacity: 1,
                width: '100%',
              }
            }
          />
        )}
      </Text>
    </LinkWrapper>
  ) : (
    <LinkContainer to={to}>{children}</LinkContainer>
  )
}
