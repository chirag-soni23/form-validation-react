import React from "react";
import { useForm } from "react-hook-form";

function Forms() {
  const passwordRegex = /[@#$%^&*()]/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
    reset();
  };
  const handleError = (errors) => {};
  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password should be atleast 8 characters",
      },
    },
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          {...register("name", registerOptions.name)}
        />
        <small>{errors?.name && errors.name.message}</small>
        <br /> <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          {...register("email", registerOptions.email)}
        />
        <small>{errors?.email && errors.email.message}</small>
        <br /> <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          {...register("password", {
            ...registerOptions.password,
            pattern: {
              value: passwordRegex,
              message:
                "Password should contain at least one letter and be at least 8 characters long",
            },
          })}
        />
        <small>{errors?.password && errors.password.message}</small>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Forms;
