'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { useState } from 'react';
import { registerSchema, type RegisterFormData } from '../schemas';

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      console.log('Register data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
      <FormField
        label="Email"
        type="email"
        id="email"
        placeholder="your@email.com"
        required
        error={errors.email?.message}
        {...register('email')}
      />
      
      <FormField
        label="Password"
        type="password"
        id="password"
        placeholder="••••••••"
        required
        error={errors.password?.message}
        {...register('password')}
      />
      
      <FormField
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        placeholder="••••••••"
        required
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      <Button type="submit" isLoading={isLoading} className="w-full">
        Register
      </Button>
    </form>
  );
};
