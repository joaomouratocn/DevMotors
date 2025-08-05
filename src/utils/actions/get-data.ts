import { NextApiResponse } from "next";
import { redirect } from "next/navigation";
import qs from "qs";
import { PageProps } from "../types.type";

export async function getDataHome() {
  const query = qs.stringify(
    {
      populate: {
        SAUDACAO: { populate: "greetBanner" },
        SOBRE: { populate: "aboutImage" },
        SERVICOS: { populate: "serviceImage" },
        ACAO: "*",
        CONTATO: "*",
      },
    },
    { encodeValuesOnly: true }
  );

  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/home?${query}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_API}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorInfo = await response.text();
      console.error("Erro na requisição Strapi:", response.status, errorInfo);
      throw new Error(`Strapi retornou status ${response.status}`);
    }

    const json = await response.json();

    if (!json.data) {
      throw new Error("Resposta inesperada da API");
    }

    const mapedObject = {
      SAUDACAO: {
        greetText: json.data.SAUDACAO.greetText,
        greetBanner: {
          url: json.data.SAUDACAO.greetBanner.url,
        },
      },
      SOBRE: {
        description: json.data.SOBRE.description,
        aboutImage: {
          url: json.data.SOBRE.aboutImage.url,
        },
      },
      SERVICOS: json.data.SERVICOS.map((item: any) => ({
        servicename: item.servicename,
        serviceImage: {
          url: item.serviceImage.url,
        },
      })),
      ACAO: {
        buttonText: json.data.ACAO.buttonText,
        buttonUrl: json.data.ACAO.buttonUrl,
      },
      CONTATO: {
        phone: json.data.CONTATO.phone,
        email: json.data.CONTATO.email,
      },
    };

    return mapedObject;
  } catch (error) {
    console.error("Falha ao buscar dados home:", error);
    throw error;
  }
}

export async function getSubMenu() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/pages`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 120 },
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_API}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorInfo = await response.text();
      console.error("Erro na requisição Strapi:", response.status, errorInfo);
      throw new Error(`Strapi retornou status ${response.status}`);
    }

    const json = await response.json();

    if (!json.data) {
      console.log("Estrutura inesperada");
      throw new Error("Resposta inesperada da API");
    }

    const mapedObject = json.data.map((item: any) => ({
      documentId: item.documentId,
      TITLE: item.TITLE,
    }));

    return mapedObject;
  } catch (error) {
    console.error("Falha ao buscar dados home:", error);
    throw error;
  }
}

export async function getDataPage(pageid: string) {
  try {
    const query = qs.stringify(
      {
        populate: {
          BANNER: { populate: "*" },
          banner_button: { populate: "*" },
          CONTENT_PAGE: { populate: "content_image" },
        },
      },
      { encodeValuesOnly: true }
    );
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/pages/${pageid}?${query}`;
    const response = await fetch(url, {
      next: { revalidate: 120 },
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_API}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorInfo = await response.text();
      console.error("Erro na requisição Strapi:", response.status, errorInfo);
      throw new Error(`Strapi retornou status ${response.status}`);
    }

    const json = await response.json();

    if (!json.data) {
      console.log("Estrutura inesperada");
      throw new Error("Resposta inesperada da API");
    }

    const mapedObject: PageProps = {
      documentId: json.data.documentId,
      TITLE: json.data.TITLE,
      BANNER: {
        url: json.data.BANNER.url,
      },
      banner_button: {
        buttonText: json.data.banner_button.buttonText,
        buttonUrl: json.data.banner_button.buttonUrl,
      },
      CONTENT_PAGE: {
        title: json.data.CONTENT_PAGE.title,
        description: json.data.CONTENT_PAGE.description,
        content_image: {
          url: json.data.CONTENT_PAGE.content_image.url,
        },
        show_button: json.data.CONTENT_PAGE.show_button,
      },
    };

    return mapedObject;
  } catch (error) {
    console.error("Falha ao buscar dados home:", error);
    redirect("/");
  }
}
