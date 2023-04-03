import { MouseEventHandler, forwardRef, Ref } from 'react';

type Props = {
  handleMouseEnter?: MouseEventHandler<HTMLButtonElement>
}

export const MagicButton = forwardRef((
  { handleMouseEnter }: Props,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      style={{ backgroundColor: 'blue' }}
      onMouseEnter={handleMouseEnter}
    >
      Click me
    </button>
  );
});
