import { Text, TextProps } from '@luccaignite-ui/react'
import type { Meta, StoryObj} from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'loren ipsum asdja isodj asoi djai j',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    size: "lg"
  }
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}

