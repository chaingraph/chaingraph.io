import React, { useState } from 'react'
import styled from 'utils/styles'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'gatsby'
import { Text } from 'rebass'
import { GlobalContainer } from 'store'

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.833;
  }

  + div {
    background-color: ${({ usertheme }) => usertheme === 'light' ? `#111` : `#fafafa`};
    height: 2px;
    width: 0%;
    opacity: 0;
    float: left;
    left: 0;
    position: absolute;
    display: none;

    @media screen and (min-width: 640px) {
      display: block;
    }
  }
`

const LinkComponent = ({ children, logo = false, header = false, to = '#', ...rest }) => {
  const { user_theme } = GlobalContainer.useContainer()
  const [active, setActive] = useState(false)
  const revealX = useAnimation()

  function revealXAnim(state) {
    if (!header)
      return

    if (state === 'open')
      revealX.start({
        opacity: 1,
        width: '100%',
        transition: {
          duration: 0.5,
        }
      })
    
    if (state === 'close')
      revealX.start({
        opacity: 0,
        width: '0%',
        transition: {
          duration: 0.5,
        }
      })
  }

  return !logo ? (
    <motion.div 
      onHoverStart={() => revealXAnim('open')}
      onHoverEnd={() => revealXAnim('close')}
    >
      <Text as={header ? 'b' : 'span'}
        style={{ position: 'relative' }}
        {...rest}
      >
        <LinkWrapper
          activeStyle={{
            opacity: 0.833
          }}
          to={to}
          getProps={({ isCurrent }) => isCurrent && setActive(isCurrent && header)}
          usertheme={user_theme}
        >
          { children }
        </LinkWrapper>
        {
          (header || active) && (
            <motion.div
              animate={!active && revealX}
              initial={active && {
                opacity: 1,
                width: '100%',
              }}
            />
          )
        }
      </Text>
    </motion.div>
  ) : (
    <Link to={to}>
      { children }
    </Link>
  )
}

export default LinkComponent
