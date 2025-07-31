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

  const url = `http://localhost:1337/api/home?${query}`;

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
    return json;
  } catch (error) {
    console.error("Falha ao buscar dados home:", error);
    throw error;
  }
}
