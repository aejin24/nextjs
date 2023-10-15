export type TGetAccessToken = {
  email: string;
  password: string;
};

export type TInput = {
  email: string;
  password: string;
};

export type TRegisterInput = {
  nickname: string;
  birth: string;
  passwordConfirm: string;
} & TInput;
