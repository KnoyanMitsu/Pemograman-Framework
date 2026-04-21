import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './Navbar.module.css'

const Navbar = () => {
    const {data} = useSession();
    return (
        <div className={styles.navbar}>
            <div className="big">navbar Component</div>
            {data ? (
                <button onClick={() => signOut()}>Sign Out</button>
            ) : (
                <button onClick={() => signIn()}>Sign In</button>
            )}
        </div>

        
    )
}

export default Navbar;