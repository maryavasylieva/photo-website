import styled, { css } from "styled-components";

// import css from "./ContactForm.module.css";

const ContactForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <Container>
      <FormWrapper>
        <Title>Contact Us</Title>
        <Subtitle>Feel free to drop us a line.</Subtitle>

        <Form method="post" onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
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

            <Input
              type="text"
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
            <Input
              type="text"
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
          </InputWrapper>
          <TextareaWrapper>
            <Textarea
              value={values.message}
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              rows="25"
              cols="50"
              placeholder="Write Something"
              required
            ></Textarea>
          </TextareaWrapper>
        </Form>
        <Button type="submit">Say Hello</Button>
      </FormWrapper>
    </Container>
  );
};

const title = css`
  color: #6a6a6a;
  text-align: center;
  font-family: "Lora", sans-serif;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  background-color: #f8f8f8;
  /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed; */
  height: 100vh;
  width: 100%;
`;

const FormWrapper = styled.div`
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    height: 700px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h2`
  ${title}
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  ${title}
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: 940px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    flex-direction: row;
  }
`;

const InputWrapper = styled.div`
  padding-bottom: 30px;
`;

const Input = styled.input`
  width: 290px;
  height: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(204, 204, 204);
  border-radius: 2px;
  background-color: rgb(255, 255, 255);
  outline: none;
  padding-left: 5px;
  &:not(:last-child) {
    margin-bottom: 28px;
    font-size: 14px;
  }

  &::placeholder {
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;
    color: rgb(187, 187, 187);
    font-family: "Raleway", sans-serif;
    line-height: 36px;
    font-size: 12px;
    @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
      &::placeholder {
        font-size: 16px;
      }
    }
  }
  &:focus {
    border: 1px solid #66afe9;
    border-radius: 4px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: 457px;
    height: 50px;
    padding-left: 20px;
    margin-bottom: 28px;
  }
`;
const TextareaWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    margin-left: 30px;
  }
`;

const Textarea = styled.textarea`
  overflow: auto;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(204, 204, 204);
  border-radius: 2px;
  background-color: rgb(255, 255, 255);
  outline: none;
  height: 150px;
  width: 290px;
  padding-top: 10px;
  padding-left: 5px;
  &::placeholder {
    text-transform: uppercase;
    text-align: left;
    color: rgb(187, 187, 187);
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 12px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    height: 200px;
    padding-left: 20px;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

const Button = styled.button`
  display: block;
  background-color: #373a3c;
  color: #fff;
  width: 210px;
  padding: 16px 0;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  border: none;
  cursor: pointer;
  font-family: "Lora", sans-serif;
  font-size: 20px;
  &:hover {
    background-color: #6a6a6a;
    transition: background-color 0.5s ease;
  }
`;

export default ContactForm;
