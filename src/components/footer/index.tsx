import { Container, Link, Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system'

const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        py: 3,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: theme.palette.divider,
      }}
    >
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography color='text.secondary'>Made with ❤️</Typography>
          <Link
            color='text.secondary'
            target='_blank'
            href='https://twitter.com/NinjaNuur_'
            rel='noreferrer noopener'
          >
            NinjaNuur
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
