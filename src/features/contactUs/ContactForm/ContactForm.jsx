import React, { useEffect, useState } from 'react';
import styles from './contact.module.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Notification from '@components/Notifications';
import { useRouter } from 'next/router';
import en from '@locales/en';
import hr from '@locales/hr';

const ContactForm = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  const [status, setStatus] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
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

  async function onSubmitForm(values) {
    setStatus('');
    let config = {
      method: 'post',
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        setStatus('success');
        reset();
      }
    } catch (err) {
      console.log(err);
      setStatus('error');
    }
  }

  return (
    <div>
      {status === 'success' && (
        <Notification message={t.emailSendSuccess} type="success" />
      )}
      {status === 'error' && (
        <Notification message={t.emailSendError} type="error" />
      )}
      <div className={styles.container}>
        <h1 data-aos="zoom-in" data-aos-duration="1000">
          {t.contactUs}
        </h1>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="800"
          className={styles.contentWrapper}
        >
          <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfoItem}>
              {t.emailAddress}
              <div className={styles.contactInfoSubitemTwo}>
                tonci.andrijic@gmail.com
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              {t.phoneNumber} (Tonči Andrijić)
              <div className={styles.contactInfoSubitemTwo}>
                +385 98 181 6135
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              {t.address}
              <div className={styles.contactInfoSubitemTwo}>
                Zaglav 27, 20271 Blato Croatia
              </div>
            </div>
          </div>
          <section className={styles.contactFormContainer}>
            <h3>{t.sendUsEmail}</h3>
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <div className={styles.inputContainer}>
                <input
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
                      value:
                        /^[a-z\u0161\u0111\u010D\u0107\u017E\u00EB\u002D ]*$/gi,
                      message: `${t.namePattern}`,
                    },
                  })}
                />
                <span className={styles.errorMessage}>
                  {errors?.name?.message}
                </span>
              </div>
              <div className={styles.inputContainer}>
                <input
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
                <span className={styles.errorMessage}>
                  {errors?.email?.message}
                </span>
              </div>
              <div className={styles.textareaContainer}>
                <textarea
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
                  isDisabled ? styles.sendDisabled : styles.sendEnabled
                }`}
              >
                {t.send}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
