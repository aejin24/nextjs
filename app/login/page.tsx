import styles from "./style.module.scss";
import Image from "next/image";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <Image src="/images/logo.svg" alt="logo" width={150} height={150} />
      <p className={styles.title}>Sign in</p>

      <div className={styles.inputContainer}>
        <input type="text" id="email" required />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
      </div>

      <div className={styles.inputContainer}>
        <input type="password" id="password" required autoComplete="off" />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
      </div>

      <p className={styles.forgot}>Forgot your password?</p>

      <button type="button" className={styles.submit}>
        Sign in
      </button>

      <p className={styles.signup}>
        Don&#39;t have an account&#63; <span>Sign up</span>
      </p>
    </div>
  );
}
