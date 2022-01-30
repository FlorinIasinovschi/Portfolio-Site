import React, { useState } from "react";
import './form.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import Botpoison from "@botpoison/browser";

const botpoisonPblKey = process.env.REACT_APP_BOTPOISON_PBL
const botpoison = new Botpoison({
  publicKey: botpoisonPblKey
})


export default function Form() {

  const [submitting, setSumbmitting] = useState(false)
  const [success, setSucces] = useState(false)
  const [failed, setFailed] = useState(false)

  const postRequest = async (data) => {
    try {
      const { solution } = await botpoison.challenge();
      await axios.post(`https://submit-form.com/${process.env.REACT_APP_FORM_ID}`, { data, _botpoison: solution, })
      formik.resetForm()
      setSumbmitting(false)
      setFailed(false)
      setSucces(true)

    } catch (err) {
      setSumbmitting(false)
      setSucces(false)
      setFailed(true)
      console.log(err)
    }
  }


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .min(5, 'Message is too short')
        .max(500, 'Must be 500 characters or less')
        .required('Required')
    }),
    onSubmit: async values => {
      setSumbmitting(true);
      postRequest(values)
      // alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <div>

      <form className="contact-form" action={`https://submit-form.com/${process.env.REACT_APP_FORM_ID}`} onSubmit={formik.handleSubmit}>
        <div className="wrapper">
          <div className="name">
            <h3>Name</h3>
            <input
              name="name"
              id="name"
              type="text"
              {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name ? (
              <div className="errors" >{formik.errors.name}</div>
            ) : null}

          </div>
          <div className="email">
            <h3>Email</h3>
            <input name="email" id="email" type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div className="errors" >{formik.errors.email}</div>
            ) : null}

          </div>
          <div className="message">
            <h3>Message</h3>
            <textarea name="message" rows="8" id="message" type="text" {...formik.getFieldProps('message')} />
            {formik.touched.message && formik.errors.message ? (
              <div className="errors" >{formik.errors.message}</div>
            ) : null}

          </div>
          <div className="btn">
            <button disabled={submitting} type="submit">Send</button>
            <div className="submitState">
              {submitting ? 'Submitting...' : success ? "Message submitted!" : failed ? 'Something went wrong...' : ''}
            </div>
          </div>

        </div>
      </form>
    </div>
  )





}