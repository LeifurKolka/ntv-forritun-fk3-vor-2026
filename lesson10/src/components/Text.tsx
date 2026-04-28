// TODO: Make this component polymorphic.
// The `as` prop should accept any valid HTML element type (e.g. 'h1', 'p', 'span').
// The remaining props should be inferred from whatever element `as` resolves to —
// for example, if as="a", then `href` should be valid and autocomplete.
// Default `as` to 'p' when not provided.
type TextProps<T extends React.ElementType = 'p'> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentProps<T>, 'as' | 'className' | 'children'>;

function Text<T extends React.ElementType>({ as, children, className, ...props }: TextProps<T>) {
  const Component = as || 'p';

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

const ArrowText = <T extends React.ElementType>({ as, children, className, ...props }: TextProps<T>) => {
  const Component = as || 'p';

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

export { Text };


// Generic examples from lesson
type Person = {
  age: number
  height: number
  eyeColor: string
}

type FemalePerson = Person & {
  pregnant: boolean
}

const female: FemalePerson = {
  age: 10,
  eyeColor: 'blue',
  height: 100,
  pregnant: false,
}

type Animal<T extends Fish | Person> = {
  type: 'mammal' | 'fish'
  properties: T
  hasColdBlood: boolean
}

const salmon: Animal<Fish> = {
  hasColdBlood: false,
  properties: {
    freshWater: true,
    hasScales: true,
    saltWater: true,
  }
}

type Fish = {
  hasScales: boolean
  freshWater: boolean
  saltWater: boolean
}