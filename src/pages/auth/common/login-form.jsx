import React, { useState } from "react";
import Textinput from "@/components/ui/react-hook-form/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/react-hook-form/Checkbox";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "@/store/api/auth/authApiSlice";
import { setUser } from "@/store/api/auth/authSlice";
import { toast } from "react-toastify";
const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const LoginForm = () => {
  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: "all",
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await login(data);

      if (response.error) {
        throw new Error(response.error.message);
      }

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      if (!response.data.token) {
        throw new Error("Invalid credentials");
      }

      dispatch(setUser(data));
      navigate("/dashboard");
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Login Successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [checked, setChecked] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <Textinput
        name="email"
        label="email"
        defaultValue="dashcode@gmail.com"
        type="email"
        register={register}
        error={errors.email}
        className="h-[56px] rounded-md"
      />
      <Textinput
        name="password"
        label="passwrod"
        type="password"
        defaultValue="dashcode"
        register={register}
        error={errors.password}
        className="h-[56px] rounded-md"
        hasicon={true}
      />
      <div className="flex-wrap flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Remember me"
        />
        <Link
          to="/forgot-password"
          className="text-sm text-danger-600 cursor-pointer underline decoration-1"
        >
          Forgot Password?{" "}
        </Link>
      </div>

      <Button
        type="submit"
        text="Login"
        className="bg-secondary-200 block w-full text-center h-[48px] text-black-600 hover:bg-primary-500 hover:text-white"
        isLoading={isLoading}
      />
    </form>
  );
};

export default LoginForm;
