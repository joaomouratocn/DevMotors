import styles from "./styles.module.scss";
import { getDataPage } from "@/utils/actions/get-data";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import Image from "next/image";
import { Metadata } from "next";
import { PageProps } from "@/utils/types.type";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pageid: string }>;
}): Promise<Metadata> {
  try {
    const dataPage: PageProps = await getDataPage((await params).pageid);

    if (!dataPage) {
      return {
        title: "Dev-Motors - Sua oficina especializada",
        description: "Oficina de carros em São Carlos",
      };
    }

    return {
      title: `Dev-Motors - ${dataPage.TITLE}`,
      description: `${dataPage.CONTENT_PAGE.description}`,
      keywords: [
        "Oficina",
        "Oficina de Carros",
        "Carros",
        "Manutenção de carros",
      ],
      openGraph: {
        title: `Dev-Motors - ${dataPage.TITLE}`,
        images: [`${process.env.NEXT_PUBLIC_API_URL}${dataPage.BANNER.url}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "Dev-Motors - Sua oficina especializada",
      description: "Oficina de carros em São Carlos",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ pageid: string }>;
}) {
  const pageId = (await params).pageid;
  const dataPage = await getDataPage(pageId);

  const formatedGreeting = {
    greetText: dataPage.TITLE,
    greetBanner: {
      url: dataPage.BANNER.url,
    },
  };

  return (
    <>
      <Hero
        greeting={formatedGreeting}
        actButton={dataPage.banner_button}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>{dataPage.CONTENT_PAGE.title}</h1>
            <p>{dataPage.CONTENT_PAGE.description}</p>
            {dataPage.CONTENT_PAGE.show_button && (
              <a
                href={dataPage.CONTENT_PAGE.description}
                target="_blank"
                className={styles.link}
              >
                Detalhes
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={dataPage.TITLE}
              quality={100}
              fill={true}
              priority={true}
              sizes="(max-width: 480px) 100vw (max-width:1024) 75vw, 60vw"
              src={`${process.env.NEXT_PUBLIC_API_URL}${dataPage.CONTENT_PAGE.content_image.url}`}
            />
          </div>
        </section>
      </Container>
    </>
  );
}
