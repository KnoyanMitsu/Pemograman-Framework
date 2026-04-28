import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";

export default function TampilanLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  // Mengambil url tujuan setelah login berhasil (default ke "/")
  const callbackUrl = query.callbackUrl || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);

        // Ambil data session terbaru setelah login sukses
        const session = await getSession();

        // Cek Role: Kalau Admin, paksa ke /admin. Kalau bukan, ke callbackUrl.
        if (session?.user?.role === "admin") {
          push("/admin");
        } else {
          push(callbackUrl);
        }
      } else {
        setIsLoading(false);
        setError(
          res.error === "CredentialsSignin"
            ? "Email or Password wrong"
            : res.error,
        );
      }
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong, please try again");
    }
  };

  return (
    <div className={style.login}>
      <h1 className={style.login__title}>Halaman Login</h1>
      <div className={style.login__form}>
        {error && (
          <p
            style={{ color: "red", textAlign: "center", marginBottom: "10px" }}
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className={style.login__form__item}>
            <label htmlFor="email" className={style.login__form__item__label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={style.login__form__item__input}
              required
            />
          </div>
          <div className={style.login__form__item}>
            <label
              htmlFor="password"
              className={style.login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              minLength={6}
              className={style.login__form__item__input}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={style.login__form__button}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          {""}
          <br /> <br />
          <button
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            className={style.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "sign in with google"}
          </button>
          <br /> <br />
          <button
            onClick={() => signIn("github", { callbackUrl, redirect: false })}
            className={style.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "sign in with github"}
          </button>
        </form>
        <p className={style.login__link}>
          Tidak punya akun?{" "}
          <Link href="/auth/register">Ke Halaman Register</Link>
        </p>
      </div>
    </div>
  );
}
