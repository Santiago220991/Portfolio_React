import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GREEN, HOVERGREEN } from "../constants/colors";

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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Full Name" {...register("Name")} />
      <Paragraph>{errors.Name?.message}</Paragraph>
      <Input placeholder="Email Address" {...register("Email")} />
      <Paragraph>{errors.Email?.message}</Paragraph>
      <TextArea placeholder="Enter text here" {...register("Message")} />
      <Paragraph>{errors.Message?.message}</Paragraph>
      <Submit type="submit" value="Get in Touch" />
    </Form>
  );
};

export default ContactForm;
