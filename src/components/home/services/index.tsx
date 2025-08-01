import Image from "next/image";
import styles from "./styles.module.scss";
import { ServiceProps } from '@/utils/home.type'

interface AboutProps {
  object: {
    description: string;
    aboutImage: {
      url: string
    };
    services: ServiceProps[]
  }
}

export function Services({ object }: AboutProps) {
  return (
    <>
      <section className={styles.containerAbout}>
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.description}</p>
        </article>
        <div className={styles.aboutBanner}>
          <Image
            className={styles.imageAbout}
            alt="Imagem ilustrativa da empresa"
            quality={100}
            fill={true}
            src={`${process.env.NEXT_PUBLIC_API_URL}${object.aboutImage.url}`}
          />
        </div>
      </section>
      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
      <section className={styles.services}>
        {object.services.map((service) => (
          <article key={service.servicename} className={styles.services}>

          </article>
        ))}
      </section >
    </>
  );
}
