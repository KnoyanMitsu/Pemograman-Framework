import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session }: any = useSession();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__brand}>MyApp</div>

      <div className={styles.navbar__right}>
        {session ? (
          <>
            <div className={styles.navbar__user}>
              Welcome, {session.user?.fullname || session.user?.name || "User"}
            </div>
            <button
              className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
