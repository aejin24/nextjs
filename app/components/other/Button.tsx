import { ComponentProps, PropsWithChildren } from "react";

export default function Button({ children, ...props }: PropsWithChildren<ComponentProps<"button">>) {
  // eslint-disable-next-line react/button-has-type
  return <button {...props}>{children}</button>;
}
