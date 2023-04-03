import { useRef, useEffect, MouseEventHandler } from 'react';
import { ComponentMeta } from '@storybook/react';

import { MagicButton } from './MagicButton';

export default {
  title: 'UI/Atoms/MagicButton',
  component: MagicButton,
  argTypes: {
    onClick: {
      action: 'clicked'
    }
  },
} as ComponentMeta<typeof MagicButton>;


export const _MagicButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'red';
      buttonRef.current.style.color = 'white';
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'green';
      buttonRef.current.style.color = 'white';
      // buttonRef.current.classList.add('')
      // buttonRef.current.classList.remove('')
    }
  }

  return (
    <MagicButton ref={buttonRef} handleMouseEnter={handleMouseEnter} />
  );
}
