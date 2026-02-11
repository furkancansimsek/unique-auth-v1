import { forwardRef } from 'react';
import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, required, id, ...props }, ref) => {
    return (
      <div className="w-full">
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
        <Input ref={ref} id={id} error={error} {...props} />
      </div>
    );
  }
);

FormField.displayName = 'FormField';
