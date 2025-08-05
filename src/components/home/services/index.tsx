import Image from "next/image";
import styles from "./styles.module.scss";
import { AboutProps, ServiceProps } from "@/utils/types.type";

interface ReceivedServiceProps {
  about: AboutProps;
  services: ServiceProps[];
}

export function Services({ about, services }: ReceivedServiceProps) {
  return (
    <>
      <section className={styles.containerAbout} id="services">
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{about.description}</p>
        </article>
        <div className={styles.aboutBanner}>
          <Image
            className={styles.imageAbout}
            alt="Imagem ilustrativa da empresa"
            quality={100}
            fill={true}
            sizes="(max-width: 480px) 100vw (max-width:1024) 75vw, 60vw"
            src={`${process.env.NEXT_PUBLIC_API_URL}${about.aboutImage.url}`}
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
      <section className={styles.services}>
        {services.map((service) => (
          <article key={service.servicename} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt={"Imagem do serviço"}
                quality={100}
                fill={true}
                sizes="(max-width: 480px) 100vw (max-width:1024) 75vw, 60vw"
                src={`${process.env.NEXT_PUBLIC_API_URL}${service.serviceImage.url}`}
              />
            </div>

            <p>{service.servicename}</p>
          </article>
        ))}
      </section>
    </>
  );
}
