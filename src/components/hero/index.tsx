import Image from "next/image";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface HeroProps {
  greetText: string;
  greetUrl: string;
  buttonText: string;
  buttonUrl: string;
  icon: ReactNode;
}

export function Hero({
  greetText,
  greetUrl,
  buttonText,
  buttonUrl,
  icon,
}: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{greetText}</h1>
        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon}
          {buttonText}
        </a>
      </div>
      <div className={styles.contentBanner}>
        <Image
          alt={greetText}
          src={`${process.env.NEXT_PUBLIC_API_URL}${greetUrl}`}
          priority={true}
          quality={100}
          fill={true}
          className={styles.banner}
        />
      </div>
    </main>
  );
}
