export type TAxiosReturn<T> = {
  status: number;
  data: T;
};

export enum ModalType {
  LOADING = 1,
  DIALOG = 2,
}

export type TDialogProps = {
  type: "ALERT" | "CONFIRM" | "SUBMIT";
  title: string;
  cancelText?: string;
  submitText: string;
  handleSubmitBtnClick: () => void;
  handleCancelBtnClick?: () => void;
};
