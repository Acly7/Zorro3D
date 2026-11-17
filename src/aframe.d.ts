import type { DetailedHTMLProps, HTMLAttributes } from 'react'
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { arjs?: string; embedded?: boolean; renderer?: string; 'vr-mode-ui'?: string }
      'a-marker': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { preset?: string }
      'a-entity': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { camera?: boolean; animation?: string; scale?: string }
      'a-gltf-model': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { src?: string; position?: string; scale?: string }
      'a-box': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { position?: string; color?: string }
    }
  }
}
