/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { SvgIcon } from 'components/UI'
import { Box } from 'rebass'
import { useAnimation } from 'framer-motion'
import styled, { themeGet } from 'utils/styles'

const BlockchainWrapper = styled(Box)`
  svg {
    width: 100%;
    height: 100%;
  }
`

export function Blockchain() {
  useEffect(() => {
    const cubes = document.querySelectorAll('g[id^="cube"]')
    const lines = document.querySelectorAll('g[id^="line"]')
  }, [])

  return (
    <BlockchainWrapper as="figure" width="600px" height="600px">
      <SvgIcon icon="hero-landing" />
    </BlockchainWrapper>
  )
}
