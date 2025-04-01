import { useForm, SubmitHandler } from 'react-hook-form';
import { ValidationSchema, validationSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Label, Row, Span, Submit, Textarea, Title, Form, BtnHolder } from './styled';
import { defaultTheme } from '../../theme/defaultTheme';
import { useState } from 'react';

type TContactFormProps = {
  closeModal?: () => void;
  notModal?: boolean;
};

export const ContactForm: React.FC<TContactFormProps> = ({ closeModal, notModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
  const [isFailedEmail, setIsFailedEmail] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    setIsFailedEmail(false);
    setIsSendingEmail(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/email/send-contact`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (res.status !== 201) {
        throw new Error('Email failed');
      }

      reset();
      if (closeModal && !isFailedEmail) closeModal();
    } catch (error) {
      setIsFailedEmail(true);
    } finally {
      setIsSendingEmail(false);
    }
  };

  const maxWidth = defaultTheme.screens.mobile;
  const isMobile = window.matchMedia(`(max-width: ${maxWidth})`).matches;

  const autoGrowTextAreaOnMobile = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const INIT_HEIGHT = '39px';
    const element: HTMLTextAreaElement = event.target;

    if (isMobile && element.scrollHeight <= 126) {
      element.style.height = element.scrollHeight + 'px';

      if (!element.value) {
        element.style.height = INIT_HEIGHT;
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} $notModal={notModal}>
      <Title $notModal={notModal}>Get in touch</Title>

      <Row>
        <Label>
          <Span $error={Boolean(errors.fullName)}>Full name*</Span>
          <Input
            $error={Boolean(errors.fullName)}
            placeholder={isMobile ? 'Full name*' : 'John Snow'}
            {...register('fullName')}
          />
        </Label>

        <Label>
          <Span $error={Boolean(errors.email)}>Email address*</Span>
          <Input
            $error={Boolean(errors.email)}
            placeholder={isMobile ? 'Email address*' : '@netflix.com'}
            {...register('email')}
          />
        </Label>
      </Row>

      <Label>
        <Span $error={Boolean(errors.phone)}>Phone number*</Span>
        <Input
          $error={Boolean(errors.phone)}
          placeholder={isMobile ? 'Phone number*' : '+17654124124'}
          {...register('phone')}
        />
      </Label>

      <Label>
        <Span $error={Boolean(errors.message)}>Message</Span>
        <Textarea
          onInput={autoGrowTextAreaOnMobile}
          $error={Boolean(errors.message)}
          placeholder={isMobile ? 'Message' : 'Tell us what we can help you with'}
          {...register('message')}
        />
      </Label>

      <BtnHolder>
        {isFailedEmail && <p>Email was not delivered. Try again!</p>}
        <Submit $notModal={notModal} $nonClickable={isSendingEmail} />
      </BtnHolder>
    </Form>
  );
};
