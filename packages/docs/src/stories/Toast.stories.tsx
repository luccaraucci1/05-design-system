import { Box, Toast, Text } from '@luccaignite-ui/react'
import type { Meta, StoryObj} from '@storybook/react'

export default {
  title: 'Form/ Toast',
  component: Toast,
  args: {

  },
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ 
          display: 'flex',
          flexDirection: 'column', 
          gap: '$2',
          width: '360px',

        }}>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta

export const Primary: StoryObj = {
  args: {

  }
}




