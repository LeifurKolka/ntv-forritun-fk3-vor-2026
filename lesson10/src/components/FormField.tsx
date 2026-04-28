// TODO: Type this component so that:
// 1. It extends all native <input> props (value, onChange, placeholder, etc.)
// 2. `label` and `error` are added as custom string props
// 3. Bonus: use a discriminated union so that when type="checkbox",
//    the component expects `checked: boolean` and `onChange` receives a boolean,
//    and when type="text" (or default), it expects `value: string` and
//    `onChange` receives a string. This prevents mixing incompatible props.

import type { HTMLInputTypeAttribute } from "react";

type FormFieldProps<T extends React.InputHTMLAttributes<'input'>['type']> = {
  type: T;
  label?: string;
  error?: string;
} & Omit<React.ComponentProps<'input'>, 'type' | 'checked'> & { checked: T extends 'checkbox' ? boolean : undefined }

function FormField<T extends HTMLInputTypeAttribute>({ label, error, type, ...props }: FormFieldProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium">{label}</label>
      )}
      <input
        type={type || 'text'}
        className="rounded border px-3 py-2"
        {...props}
      />
      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}

const Example = () => {
  return (
    <FormField
      type="checkbox"
      checked

    />
  )
}


export { FormField };
