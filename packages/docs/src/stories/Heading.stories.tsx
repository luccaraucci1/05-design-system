import { Heading, HeadingProps } from '@luccaignite-ui/react'
import type { Meta, StoryObj} from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md'
  },
  argTypes: {
    size:  {
      options: [
        'sm',
        'md',
        'lg',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl'
      ],
      control: 'inline-radio'
    } 
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  
}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão, o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`'
      }
    }
  }
}

