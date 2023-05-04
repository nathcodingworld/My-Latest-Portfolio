import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from '@styles/contact.module.scss'
import { useSnackbar } from 'notistack';

export default function ContactForm () {
  const { enqueueSnackbar } = useSnackbar() 
    return (
        <div className={style.ContactForm}> 
          <Formik
            initialValues={{ email: '', fullName: '', message: '', phone: '' }}
            validate={values => {
              const errors: any = {};
              if (!values.email) {
                errors.email = 'Email is Required';
              }  else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
               if(!values.fullName) {
                errors.fullName = 'Full Name is Required'; 
              } 
               if(!values.message) {
                errors.message = 'No message'; 
              } 
              return errors;
            }}
            onSubmit={ async (values, { setSubmitting, resetForm }) => { 
              const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(values, null, 2),
                headers: {
                    'content-Type' : 'application/json'
                } 
              })
              if(!res?.ok) throw Error('oops something went wrong')
              const result = await res.json()
              if(result.success) {
                enqueueSnackbar(result.message, {variant: 'info'}) 
                resetForm({
                  values: { 
                    email: '',
                    fullName: '',
                    message: '',
                    phone: ''
                  },
                })
              } 
              else enqueueSnackbar(result.message, {variant: 'error'}) 
              setSubmitting(false); 
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="text" name="fullName" placeholder='Full Name' />
                <ErrorMessage name="fullName" component="div" />
                <Field type="email" name="email" placeholder='Email Address'/>
                <ErrorMessage name="email" component="div" />
                <Field type="tel" name="phone" placeholder='Phone Number' />
                <ErrorMessage name="phone" component="div" />
                <Field component="textarea" type="text" name="message" placeholder='Your Message' />
                <ErrorMessage name="message" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      ); 
} 