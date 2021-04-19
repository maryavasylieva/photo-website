
// import styled from "styled-components";

import css from "./ContactForm.module.css";

const ContactForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <div className={css.parallaxWrapper}>
      <div className={css.container}>
        <h1 className={css.title}>Contact Us</h1>
        <p className={css.subtitle}>Feel free to drop us a line.</p>

        <form method="post" className={css.form} onSubmit={handleSubmit}>
          <div className={css.order}>
            <input
              type="text"
              className={css.input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
              placeholder="Your name"
              autoComplete="false"
              required
            />

            {/* <label className={css.labelValid} htmlFor="name">
              Enter valid Name
            </label> */}

            <input
              type="text"
              className={css.input}
              value={values.email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              minLength="2"
              maxLength="100"
              placeholder="Your email"
              required
            />
            {/* <label className={css.labelValid} htmlFor="email">
              Enter valid Email
            </label> */}
            <input
              type="text"
              className={css.input}
              value={values.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              minLength="2"
              maxLength="60"
              placeholder="subject"
              id="name"
              required
            />
          </div>
          <div className={css.area}>
            <textarea
              className={css.textarea}
              value={values.message}
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              rows="25"
              cols="50"
              placeholder="Write Something"
              required
            ></textarea>
          </div>
        </form>
        <button type="submit" className={css.button}>
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
