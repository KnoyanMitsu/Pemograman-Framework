import { useRouter } from "next/router"

import Footer from "../footer"
import Navbar from "../navbar"

const disableNavbar = ['/auth/login', '/auth/register','/404']

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const { children } = props
    const router = useRouter()
    return (
        <main>
            {!disableNavbar.includes(router.pathname) && <Navbar />}
            {children}
            <Footer />
        </main>
    )
}

export default AppShell