import Image from "next/image";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface ReceivedProps {
  greeting: {
    greetText: string;
    greetBanner: {
      url: string;
    };
  }
  actButton: {
    buttonText: string;
    buttonUrl: string;
  }
  icon: ReactNode;
}

export function Hero({
  greeting,
  actButton,
  icon,
}: ReceivedProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{greeting.greetText}</h1>
        <a target="_blank" href={actButton.buttonUrl} className={styles.link}>
          {icon}
          {actButton.buttonText}
        </a>
      </div>
      <div className={styles.contentBanner}>
        <Image
          alt={greeting.greetText}
          src={`${process.env.NEXT_PUBLIC_API_URL}${greeting.greetBanner.url}`}
          priority={true}
          quality={100}
          fill={true}
          className={styles.banner}
        />
      </div>
    </main>
  );
}
