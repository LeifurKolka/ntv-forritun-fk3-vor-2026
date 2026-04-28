// TODO: Type this component so that:
// 1. `children` is properly typed as React.ReactNode
// 2. `maxWidth` only accepts specific size tokens: 'sm' | 'md' | 'lg' | 'xl' | 'full'
// 3. `centered` and `padded` are optional booleans
// 4. All remaining native <div> props (className, id, role, aria-*, etc.) are forwarded and type-checked


const widths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
} as const;

type ContainerProps<T extends React.ElementType = 'div'> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  maxWidth: keyof typeof widths
} & Omit<React.ComponentProps<T>, 'as' | 'className' | 'children'>;

function Container<T extends React.ElementType>({ children, maxWidth, centered, padded, className, ...props }: ContainerProps<T>) {

  return (
    <div
      className={`${centered ? 'mx-auto' : ''} ${padded ? 'p-4' : ''} ${className || ''}`}
      style={{ maxWidth: widths[maxWidth || 'lg'] }}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
