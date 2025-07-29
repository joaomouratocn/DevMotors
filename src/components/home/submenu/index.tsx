import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";

export function Submenu() {
  return (
    <section className={styles.submenu}>
      <ul className={styles.ul}>
        <li>
          <Link href="/post/pg1">Página 1</Link>
          <Link href="/post/pg2">Página 2</Link>
          <Link href="/post/pg3">Página 3</Link>
        </li>
      </ul>
    </section>
  );
}
