import { Submenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";

export default async function Home() {
  const { data }: HomeProps = await getDataHome();

  return (
    <main>
      <Submenu />
      <Hero
        greetText={data.SAUDACAO.greetText}
        greetUrl={data.SAUDACAO.greetBanner.url}
        buttonText={data.ACAO.buttonText}
        buttonUrl={data.ACAO.buttonUrl}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <Services about={data.SOBRE} services={data.SERVICOS} />
        <Footer contact={data.CONTATO} />
      </Container>
    </main>
  );
}
