import Link from "next/link";
import Styles from "./styles.modules.scss";

export function Submenu() {
  return (
    <section className={Styles.submenu}>
      <ul>
        <li>
          <Link href="/post/pg1"></Link>
          <Link href="/post/pg2"></Link>
          <Link href="/post/pg3"></Link>
        </li>
      </ul>
    </section>
  );
}
