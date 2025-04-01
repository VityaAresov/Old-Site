import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, Input, Subscribe } from './styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { ValidationSchema, validationSchema } from './schema';

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input $error={Boolean(errors.email)} placeholder="Email address" {...register('email')} />
      <Subscribe />
    </Form>
  );
};
