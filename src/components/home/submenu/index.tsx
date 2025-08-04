"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { PageItemProps } from "@/utils/home.type";

interface ReceivedProps {
  data: PageItemProps[]
}

export function Submenu(props: ReceivedProps) {
  const [isOpen, setIsOpen] = useState(false);

  props.data.map((item) => {
    console.log(item)
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Serviços
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button className={styles.closeButton} onClick={toggleMenu}>
            <X size={34} color="#121212" />
          </button>
        )}
        {props.data.map((page) => (
          <li>
            <Link href={`/pages/${page.documentId}`}>{page.TITLE}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
