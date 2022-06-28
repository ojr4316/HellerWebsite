import { ReactNode } from "react"
import styles from "../styles/Layout.module.css"
import Link from "next/link"

type Props = {
    children?: ReactNode;
}

export default function Layout(props: Props) {
    return (
        <div>
            <header className={styles.header_main}>
                <div className={styles.header_container}>
                    <Link href="./" >
                        <div className={styles.logo_container}>Heller Website</div>
                    </Link>
                    <div className={styles.pages_container}>
                        <Link href="/about">
                            About
                        </Link>
                        <Link href="/#">
                            Portfolio
                        </Link>
                        <Link href="/blog">
                            Blog
                        </Link>
                        <Link href="/#">
                            Services
                        </Link>
                        <Link href="/#">
                            <div className={styles.contact_button}>Contact</div>
                        </Link>
                    </div>
                </div>
            </header>
            <main>{props.children}</main>
        </div>
    )
}
