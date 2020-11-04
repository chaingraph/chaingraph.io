import React from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import {
  AiOutlineShareAlt,
  AiFillCaretDown,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineSearch,
} from 'react-icons/ai'
import {
  FiArrowLeftCircle,
  FiNavigation2,
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiX,
  FiXCircle,
  FiLoader,
  FiMoreHorizontal,
  FiCopy,
  FiAtSign,
  FiMenu,
  FiMoon,
  FiSun,
} from 'react-icons/fi'
import { Flex, Box } from 'rebass'
import { motion } from 'framer-motion'
import styled, { themeGet } from 'utils/styles'
import { ReactSVG } from 'react-svg'

const SocialLink = styled(motion.a)`
  filter: grayscale(75%);
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 8px;
  margin: 0 0.5rem;
  height: 42px;
  width: 42px;
`

const SvgIconContainer = styled(Box)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: ${({ size }) => (size ? `${size[0]}px` : '100%')};
  height: ${({ size }) => (size ? `${size[0]}px` : '100%')};
  display: inline-block;

  svg,
  path {
    fill: ${({ color = '' }) =>
    color.match('colors.') ? themeGet(color) : color};
  }

  text {
    display: none;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    width: ${({ size }) => (size ? `${size[1]}px` : '100%')};
    height: ${({ size }) => (size ? `${size[1]}px` : '100%')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    width: ${({ size }) => (size ? `${size[2]}px` : '100%')};
    height: ${({ size }) => (size ? `${size[2]}px` : '100%')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.2')}) {
    width: ${({ size }) => (size ? `${size[2]}px` : '100%')};
    height: ${({ size }) => (size ? `${size[2]}px` : '100%')};
  }
`

const anim = {
  transition: {
    ease: 'circInOut',
    duration: 0.15,
    delay: 0.01,
  },
  whileHover: {
    filter: 'grayscale(0%)',
    scale: 1.05,
  },
  linkHover: {
    letterSpacing: '2px',
  },
}

export const Icon = {
  twitter: (props) => <FaTwitter {...props} />,
  arrowLeftCircle: (props) => <FiArrowLeftCircle {...props} />,
  location: (props) => <FiNavigation2 {...props} />,
  at: (props) => <FiAtSign {...props} />,
  arrowLeft: (props) => <FiArrowLeft {...props} />,
  arrowRight: (props) => <FiArrowRight {...props} />,
  externalLink: (props) => <FiExternalLink {...props} />,
  close: (props) => <FiX {...props} />,
  closeCircle: (props) => <FiXCircle {...props} />,
  load: (props) => <FiLoader {...props} />,
  share: (props) => <AiOutlineShareAlt {...props} />,
  caretDown: (props) => <AiFillCaretDown {...props} />,
  plus: (props) => <AiOutlinePlus {...props} />,
  minus: (props) => <AiOutlineMinus {...props} />,
  search: (props) => <AiOutlineSearch {...props} />,
  more: (props) => <FiMoreHorizontal {...props} />,
  copy: (props) => <FiCopy {...props} />,
  github: (props) => <FaGithub {...props} />,
  menu: (props) => <FiMenu {...props} />,
  light: (props) => <FiSun {...props} />,
  dark: (props) => <FiMoon {...props} />,
}

export const SvgIcon = ({ icon, size, color }) => (
  <SvgIconContainer size={size} color={color}>
    <ReactSVG src={`/icons/${icon}.svg`} />
  </SvgIconContainer>
)

export const SocialIcons = ({ mb }) => (
  <Flex
    width={[10 / 12, 6 / 12, 1 / 2]}
    alignItems="center"
    justifyContent="space-around"
    my={3}
    mb={mb}
  >
    <SocialLink
      href="#"
      transition={anim.transition}
      whileHover={anim.whileHover}
    >
      <Icon.twitter size="24px" color="#fff" />
    </SocialLink>
    <SocialLink
      href="#"
      transition={anim.transition}
      whileHover={anim.whileHover}
    >
      <Icon.github size="24px" color="#fff" />
    </SocialLink>
  </Flex>
)
