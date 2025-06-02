"use client";

import style from "./style.module.scss";

import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";

import { Button, PageTransition } from "@/components/other";
import Input from "./atoms/Input";

import { ModalType, TDialogProps } from "@/types/common";
import { TRegisterInput } from "@/types/login";

import useModal from "@/hooks/useModal";

export default function Page() {
  const formMethod = useForm<TRegisterInput>({
    defaultValues: {
      email: "",
      nickname: "",
      birth: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const { show, hide } = useModal();

  const handleSubmitClick = (data: TRegisterInput) => {
    if (data.password !== data.passwordConfirm) {
      show<TDialogProps>(ModalType.DIALOG, {
        type: "ALERT",
        title: "비밀번호가 일치하지 않습니다.",
        submitText: "확인",
        handleSubmitBtnClick: hide,
      });

      return;
    }

    // do something

    show(ModalType.LOADING);
  };

  return (
    <div className={style.wrapper}>
      <Image src="/images/logo.svg" alt="logo" width={150} height={150} loading="eager" priority />
      <p className={style.title}>회원가입</p>

      <PageTransition>
        <FormProvider {...formMethod}>
          <form action="POST" onSubmit={formMethod.handleSubmit(handleSubmitClick)}>
            <Input registerName="email" label="이메일" type="text" name="email" id="email" required />
            <Input registerName="nickname" label="닉네임" type="text" name="nickname" id="nickname" required />
            <Input
              registerName="birth"
              label="생년월일"
              type="date"
              name="birth"
              id="birth"
              placeholder="숫자만 입력해주세요 :)"
              required
            />
            <Input registerName="password" label="비밀번호" type="password" name="password" id="password" required />
            <Input registerName="passwordConfirm" label="비밀번호 확인" type="password" id="passwordConfirm" required />

            <Button type="submit" className={style.submit}>
              회원가입
            </Button>
          </form>
        </FormProvider>

        <p className={style.signup}>
          계정이 있으신가요&#63; <Link href="/login">로그인</Link>
        </p>
      </PageTransition>
    </div>
  );
}
