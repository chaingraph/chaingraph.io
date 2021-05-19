import React from 'react'
import { Box } from 'rebass'
import { Button } from './index'
import { Trans } from 'gatsby-plugin-react-i18next'

export const Modal = React.memo(({ children, show, modalClosed }) => (
  <React.Fragment>
    {show && (
      <Box
        onClick={modalClosed}
        sx={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: 9998,
          left: 0,
          top: 0,
          bg: 'rgba(23, 23, 23, .5)',
          cursor: 'pointer',
        }}
      />
    )}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'fixed',
        top: '33vh',
        zIndex: 9999,
        bg: '#fff',
        width: '91.666%',
        maxWidth: 600,
        height: 300,
        p: 32,
        left: ['4.1666%', 'calc(50% - 300px)', 'calc(50% - 300px)'],
        transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.16) 200ms',
        transform: show ? 'translateY(0)' : 'translateY(-120vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
      <Button.PrimaryBtn
        onClick={modalClosed}
        style={{
          marginTop: 'auto',
          marginLeft: 'auto',
          cursor: 'pointer',
        }}
      >
        <Trans>Close</Trans>
      </Button.PrimaryBtn>
    </Box>
  </React.Fragment>
))
