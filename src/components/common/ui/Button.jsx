const skins = {
  primary:
    'bg-darkBlue inline-block text-center py-2 px-4 text-white rounded transition-colors hover:bg-midnight hover:text-brightBlue shadow-lg shadow-brightBlue/10 hover:shadow-brightBlue/70',
  primaryInverted:
    'border border-darkBlue text-grayBlue inline-block text-center py-2 px-4 text-white rounded transition-colors hover:bg-midnight hover:text-brightBlue shadow-lg shadow-brightBlue/10 hover:shadow-brightBlue/70',
};

export const Button = ({
  element = 'button',
  skin = 'primary',
  children,
  ...props
}) => {
  const Element = element;

  return (
    <Element {...props} className={skins[skin]}>
      {children}
    </Element>
  );
};
