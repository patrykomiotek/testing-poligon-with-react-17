type Props = {
  readonly isItalic?: boolean
  readonly children: string;
  // readonly children: React.ReactNode
}

export const Text = ({ children, isItalic }: Props) => {
  // const { children } = props;
  return (
    <p>{children}</p>
  );
}

// export const Text = ({ children }: Props) => (<p>{children}</p>);


// <Text>Dzisiaj jest sroda</Text>
<Text isItalic>
  Dzisiaj jest sroda
  {/* <React.Fragment>
    <div></div>
    <div></div>
  </React.Fragment> */}
  {/* <>
    <div></div>
    <div></div>
  </> */}
</Text>