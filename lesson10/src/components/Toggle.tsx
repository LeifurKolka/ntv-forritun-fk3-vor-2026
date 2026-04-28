import { useState, type ReactNode } from 'react';

// TODO: Type this render-props component so that:
// 1. `children` is NOT ReactNode — it must be a function (render prop)
// 2. The function receives a typed object: { isOpen: boolean; toggle: () => void; open: () => void; close: () => void }
// 3. The function must return a valid ReactNode
// 4. `initialOpen` is an optional boolean
// If a consumer passes a plain JSX element as children (not a function), TypeScript should error.

type ToggleProps = {
  initialOpen: boolean
  children: (childrenProps: ChildrenProps) => ReactNode
}

type ChildrenProps = {
  isOpen: boolean
  toggle: () => void
  open: () => void
  close: () => void
}

function Toggle({ children, initialOpen }: ToggleProps) {
  const [isOpen, setIsOpen] = useState(initialOpen ?? false);

  const toggle = () => setIsOpen((prev: boolean) => !prev);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return children({ isOpen, toggle, open, close });
}

const Example = () => {
  return (<Toggle initialOpen={false}>
    {({ isOpen, toggle, open, close }) => (
      <div>
        <button onClick={toggle}>
          {isOpen ? 'Hide' : 'Show'} content
        </button>
        {isOpen && (
          <div>
            <p>This content is togglable!</p>
            <button onClick={close}>Close</button>
          </div>
        )}
        {!isOpen && (
          <div>
            <p>This content is togglable!</p>
            <button onClick={open}>Open</button>
          </div>
        )}
      </div>
    )}
  </Toggle>)
}

export { Toggle, Foo };