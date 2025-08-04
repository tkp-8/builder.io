import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'

// Register the Card component with Builder.io
Builder.registerComponent(
  dynamic(() => import('./components/ui/card').then(mod => ({ default: mod.Card }))),
  {
    name: 'Card',
    inputs: [
      { name: 'className', type: 'text', defaultValue: '' },
      { name: 'children', type: 'blocks', defaultValue: [] }
    ],
    image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a'
  }
)