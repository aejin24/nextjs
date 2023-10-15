"use client";

import styles from "./style.module.scss";

import { FormProvider, useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { TInput } from "@/types/login";
import { ModalType, TDialogProps } from "@/types/common";

import { Text, Button } from "@/components/other";
import Input from "./atoms/Input";

import useModal from "@/hooks/useModal";

export default function Login() {
  const formMethod = useForm<TInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { show, hide } = useModal();

  const router = useRouter();

  const handleSubmitClick = async (data: TInput) => {
    const response = await signIn("credentials", { ...data, redirect: false });

    if (response?.status === 200) {
      router.push("/");
    }

    if (response?.status === 401) {
      show<TDialogProps>(ModalType.DIALOG, {
        type: "ALERT",
        title: "아이디 및 비밀번호가 일치하지 않습니다.",
        submitText: "확인",
        handleSubmitBtnClick: hide,
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Image src="/images/logo.svg" alt="logo" width={150} height={150} loading="eager" priority />
      <p className={styles.title}>로그인</p>

      <FormProvider {...formMethod}>
        <form onSubmit={formMethod.handleSubmit(handleSubmitClick)}>
          <Input type="text" registerName="email" text="이메일" required />
          <Input type="password" registerName="password" text="비밀번호" required autoComplete="off" />

          <Text className={styles.forgot}>비밀번호를 잊으셨나요&#63;</Text>

          <Button type="submit" className={styles.submit}>
            로그인
          </Button>

          <Text className={styles.signup}>
            새로운 뉴스레터를 만나보세요&#33; <Link href="/register">회원가입</Link>
          </Text>
        </form>
      </FormProvider>
    </div>
  );
}
