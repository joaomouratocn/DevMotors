import { NextApiResponse } from "next";
import qs from "qs";

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
      console.log('Estrutura inesperada')
      throw new Error('Resposta inesperada da API')
    }

    const mapedObject = {
      SAUDACAO: {
        greetText: json.data.SAUDACAO.greetText,
        greetBanner: {
          url: json.data.SAUDACAO.greetBanner.url
        }
      },
      SOBRE: {
        description: json.data.SOBRE.description,
        aboutImage: {
          url: json.data.SOBRE.aboutImage.url
        }
      },
      SERVICOS: json.data.SERVICOS.map((item: any) => ({
        servicename: item.servicename,
        serviceImage: {
          url: item.serviceImage.url,
        },
      })),
      ACAO: {
        buttonText: json.data.ACAO.buttonText,
        buttonUrl: json.data.ACAO.buttonUrl
      },
      CONTATO: {
        phone: json.data.CONTATO.phone,
        email: json.data.CONTATO.email
      }
    }

    return mapedObject
  } catch (error) {
    console.error("Falha ao buscar dados home:", error);
    throw error;
  }
}

export async function getSubMenu() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/pages`

    const response = await fetch(
      url, {
      next: { revalidate: 120 },
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_API}`,
        "Content-Type": "application/json",
      },
    }
    )
    if (!response.ok) {
      const errorInfo = await response.text();
      console.error("Erro na requisição Strapi:", response.status, errorInfo);
      throw new Error(`Strapi retornou status ${response.status}`);
    }

    const json = await response.json();

    if (!json.data) {
      console.log('Estrutura inesperada')
      throw new Error('Resposta inesperada da API')
    }

    const mapedObject = json.data.map((item: any) => ({
      documentId: item.documentId,
      TITLE: item.TITLE
    }))

    return mapedObject;
  } catch (error) {
    console.error("Falha ao buscar dados home:", error);
    throw error;
  }
}
