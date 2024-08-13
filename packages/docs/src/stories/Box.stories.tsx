import { Box, Text, BoxProps } from '@luccaignite-ui/react'
import type { Meta, StoryObj} from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  
}

