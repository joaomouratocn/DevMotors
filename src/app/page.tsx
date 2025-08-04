import { Submenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps, PageItemProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";

export default async function Home() {
  const homeProps: HomeProps = await getDataHome();
  const pageItens: PageItemProps[] = await getSubMenu();
  return (
    <main>
      {pageItens && (
        <Submenu data={pageItens} />
      )}
      <Hero
        greeting={homeProps.SAUDACAO}
        actButton={homeProps.ACAO}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <Services about={homeProps.SOBRE} services={homeProps.SERVICOS} />
        <Footer contact={homeProps.CONTATO} />
      </Container>
    </main>
  );
}
