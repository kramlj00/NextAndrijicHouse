import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import LoadingSpinner from '@components/LoadingSpinner';
import styles from './contact.module.scss';
import { toastError, toastSuccess } from '@helpers/toast';
import en from '@locales/en';
import hr from '@locales/hr';

const ContactForm = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const watchAll = watch(['name', 'email', 'message']);

  useEffect(() => {
    const checkIsFieldEmpty = () => {
      for (let i in watchAll) {
        if (!watchAll[i] || watchAll[i].trim() === '') {
          return true;
        }
      }
      return false;
    };

    const isFieldEmpty = checkIsFieldEmpty();
    setIsDisabled(isFieldEmpty);
  }, [watchAll]);

  const onSubmitForm = async (values) => {
    setIsLoading(true);

    try {
      const response = await axios({
        method: 'post',
        url: '/api/contact',
        headers: {
          'Content-Type': 'application/json',
        },
        data: values,
      });
      if (response.status === 200) {
        toastSuccess(t.emailSendSuccess);
        reset();
        setIsLoading(false);
      }
    } catch (err) {
      toastError(t.emailSendError);
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.contactFormContainer}>
      <h3>{t.sendUsEmail}</h3>
      <form
        className={styles.contactForm}
        onSubmit={handleSubmit(onSubmitForm)}>
        <div className={styles.inputContainer}>
          <input
            className={errors?.name?.message && styles.errorInput}
            type="text"
            name="name"
            placeholder={t.name}
            {...register('name', {
              required: `${t.nameRequired}`,
              minLength: {
                value: 3,
                message: `${t.nameTooShort}`,
              },
              maxLength: {
                value: 120,
                message: `${t.nameTooLong}`,
              },
              pattern: {
                value: /^[a-z\u0161\u0111\u010D\u0107\u017E\u00EB\u002D ]*$/gi,
                message: `${t.namePattern}`,
              },
            })}
          />
          <span className={styles.errorMessage}>{errors?.name?.message}</span>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={errors?.email?.message && styles.errorInput}
            type="email"
            name="email"
            placeholder="Email"
            {...register('email', {
              required: `${t.emailRequired}`,
              minLength: {
                value: 8,
                message: `${t.emailTooShort}`,
              },
              maxLength: {
                value: 120,
                message: `${t.emailTooLong}`,
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t.emailPattern}`,
              },
            })}
          />
          <span className={styles.errorMessage}>{errors?.email?.message}</span>
        </div>
        <div className={styles.textareaContainer}>
          <textarea
            className={errors?.message?.message && styles.errorInput}
            type="text"
            cols="60"
            rows="8"
            id="description"
            placeholder={t.message}
            name="message"
            {...register('message', {
              required: `${t.messageRequired}`,
              minLength: {
                value: 10,
                message: `${t.messageTooShort}`,
              },
              maxLength: {
                value: 3000,
                message: `${t.messageTooLong}`,
              },
            })}
          />
          <span className={styles.errorMessage}>
            {errors?.message?.message}
          </span>
        </div>
        <button
          type="submit"
          className={`${styles.sendEmailBtn} ${
            isDisabled || isLoading ? styles.sendDisabled : styles.sendEnabled
          } ${isLoading && styles.loadingBtn}`}>
          {isLoading ? <LoadingSpinner /> : t.send}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
