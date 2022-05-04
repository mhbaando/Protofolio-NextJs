import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
interface IformInput {
  name: string;
  phone: number;
  email: string;
  subject: string;
  message: string;
}
const ContactFrom: React.FC = () => {
  const [isSubmited, setIsSubmitted] = useState({
    send: false,
    success: undefined,
  });

  const contactForm = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = async (data: any, e: any) => {
    setIsSubmitted((prev) => {
      return {
        ...prev,
        send: true,
      };
    });

    await emailjs
      .sendForm(
        'gmail',
        'template_w1jd3rl',
        contactForm.current!,
        'user_aZUlxr77j4b0Vq1hWXrFl'
      )
      .then(
        (res) => {
          setIsSubmitted((prev: any) => {
            return {
              ...prev,
              send: false,
              success: true,
            };
          });
        },
        (err) => {
          setIsSubmitted((prev: any) => {
            return {
              ...prev,
              send: false,
              success: false,
            };
          });
        }
      );
    e!.target.reset();
  };
  return (
    <div className="form">
      <form ref={contactForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('name', { required: 'Please Provide a Name' })}
          placeholder="Your Full Name"
        />
        <input
          type="number"
          {...register('phone', {
            required: 'Please Provide a Phone Number',
          })}
          placeholder="Your Phone Number"
        />
        <input
          type="email"
          {...register('email', { required: 'Pleae Provide an Email' })}
          placeholder="Your Email"
        />
        <input
          type="text"
          {...register('subject', {
            required: 'Please Provide a Subject',
          })}
          placeholder="Subject"
        />
        <textarea
          placeholder="Your Message"
          {...register('message', {
            required: 'Please Provide a Message',
          })}
        ></textarea>
        <p>
          {errors.name
            ? errors.name?.message
            : errors.phone
            ? errors.phone?.message
            : errors.email
            ? errors.email?.message
            : errors.subject
            ? errors.subject?.message
            : errors.message
            ? errors.message?.message
            : ''}
        </p>
        <p className="success">
          {isSubmited.success && 'Your message has been sent successfully'}
        </p>

        <button type="submit">
          {isSubmited.send ? 'Sending ...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ContactFrom;
