import { Box, TextArea, TextAreaProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj} from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    
  },
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '$2' 
        }}>
          <Text size='sm'>Obserations</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'add any observations'
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}


