"use client";

import styles from "./style.module.scss";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import { TInput } from "@/types/login";

export default function Login() {
  const { register, handleSubmit } = useForm<TInput>();

  const handleSubmitClick = (data: TInput) => {
    signIn("credentials", { ...data, callbackUrl: "/" });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(handleSubmitClick)}>
      <Image src="/images/logo.svg" alt="logo" width={150} height={150} />
      <p className={styles.title}>Sign in</p>

      <div className={styles.inputContainer}>
        <input type="text" required {...register("email")} />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
      </div>

      <div className={styles.inputContainer}>
        <input type="password" required autoComplete="off" {...register("password")} />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
      </div>

      <p className={styles.forgot}>Forgot your password?</p>

      <button type="submit" className={styles.submit}>
        Sign in
      </button>

      <p className={styles.signup}>
        Don&#39;t have an account&#63; <span>Sign up</span>
      </p>
    </form>
  );
}
