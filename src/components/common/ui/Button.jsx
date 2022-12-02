const skins = {
  primary:
    'bg-darkBlue inline-flex text-center py-2 px-4 text-white rounded transition-colors hover:bg-midnight hover:text-brightBlue shadow-lg shadow-brightBlue/10 hover:shadow-brightBlue/70',
  primaryInverted:
    'border border-darkBlue text-white inline-flex text-center py-2 px-4 text-white rounded transition-colors hover:bg-midnight hover:text-brightBlue shadow-lg shadow-brightBlue/10 hover:shadow-brightBlue/70',
  danger:
    'bg-red-500 inline-flex h-full text-center py-2 px-4 text-white rounded hover:bg-red-700',
};

export const Button = ({
  element = 'button',
  skin = 'primary',
  className = '',
  children,
  ...props
}) => {
  const Element = element;

  return (
    <Element {...props} className={`${skins[skin]} ${className}`}>
      {children}
    </Element>
  );
};
