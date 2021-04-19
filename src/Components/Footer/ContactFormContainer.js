import { Formik } from "formik";
import * as Yup from "yup";

import ContactForm from "./ContactForm";

const FORM_VALUE_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string(),
  message: Yup.string(),
});

const ContactFormContainer = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        message: "",
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          // const { email, name, message} = values;
          console.log(JSON.stringify(values));
          // dispatch(signIn({ email, password }));
          resetForm();
          setSubmitting(false);
        }, 100);
      }}
      validationSchema={FORM_VALUE_SCHEMA}
    >
      {(props) => <ContactForm {...props} />}
    </Formik>
  );
};
export default ContactFormContainer;
