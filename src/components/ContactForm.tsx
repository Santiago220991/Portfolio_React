import { useEffect } from "react";
import { useSubmit } from "@formspree/react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GREEN, HOVERGREEN } from "../constants/colors";

const FORM_KEY = import.meta.env.VITE_FORM_KEY;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  margin-top: 12px;
  margin-bottom: 24px;
  border-radius: 4px;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    transition-property: transform;
    transition-duration: 1s;
  }
  &:hover::placeholder {
    transform: translate(10px);
    transition-property: transform;
    transition-duration: 1s;
  }
`;

const TextArea = styled.textarea`
  border-radius: 4px;
  border: 2px solid ${GREEN};
  height: 100px;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 24px;
  margin-top: 12px;
  &::placeholder {
    transition-property: transform;
    transition-duration: 1s;
  }
  &:hover::placeholder {
    transform: translate(10px);
    transition-property: transform;
    transition-duration: 1s;
  }
`;

const Submit = styled.input`
  border: none;
  border-radius: 4px;
  padding: 6px 8px 6px 8px;
  color: white;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  text-transform: none;
  background-color: ${GREEN};
  margin-top: 24px;
  margin-bottom: 24px;
  color: "white";
  &:hover {
    background-color: ${HOVERGREEN};
  }
  cursor: pointer;
`;

const Paragraph = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 0px;
  width: 100%;
  text-align: left;
`;

const schema = yup
  .object({
    Name: yup.string().required(),
    Email: yup.string().email().required(),
    Message: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const data = localStorage.getItem("session");
    if (data) {
      const savedData: FormData = JSON.parse(data);
      setValue("Name", savedData.Name);
      setValue("Email", savedData.Email);
      setValue("Message", savedData.Message);
    }
  }, [setValue]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    const existingData = localStorage.getItem("session");
    const formData: FormData = existingData
      ? JSON.parse(existingData)
      : { name: "", email: "", message: "" };

    formData[field] = value;

    localStorage.setItem("session", JSON.stringify(formData));
  };

  const onSubmit = useSubmit(FORM_KEY ? FORM_KEY : "", {
    onSuccess: () => {
      setTimeout(() => {
        reset(undefined, { keepDirtyValues: true });
      }, 4000);
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isSubmitSuccessful && <h3>Your message has been sent successfully!</h3>}
      <Input
        placeholder="Full Name"
        {...register("Name")}
        onChange={(e) => handleInputChange("Name", e.target.value)}
      />
      <Paragraph>{errors.Name?.message}</Paragraph>
      <Input
        placeholder="Email Address"
        {...register("Email")}
        onChange={(e) => handleInputChange("Email", e.target.value)}
      />
      <Paragraph>{errors.Email?.message}</Paragraph>
      <TextArea
        placeholder="Enter text here"
        {...register("Message")}
        onChange={(e) => handleInputChange("Message", e.target.value)}
      />
      <Paragraph>{errors.Message?.message}</Paragraph>
      <Submit
        type="submit"
        value={`${isSubmitting ? "Submitting" : "Get in Touch"}`}
        disabled={isSubmitting}
      />
    </Form>
  );
};

export default ContactForm;
