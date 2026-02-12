'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { useState } from 'react';
import { loginSchema, type LoginFormData } from '../schemas';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please try again.');
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

      <Button type="submit" isLoading={isLoading} className="w-full">
        Login
      </Button>
    </form>
  );
};
