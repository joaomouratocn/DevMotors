export interface HomeProps {
  SAUDACAO: {
    greetText: string;
    greetBanner: {
      url: string;
    };
  };
  SOBRE: {
    description: string;
    aboutImage: {
      url: string;
    };
  };
  SERVICOS: ServiceProps[];
  ACAO: {
    buttonText: string;
    buttonUrl: string;
  };
  CONTATO: {
    phone: string;
    email: string;
  };
}

export interface ServiceProps {
  servicename: string;
  serviceImage: {
    url: string;
  };
}

export interface PageItemProps {
  documentId: string;
  TITLE: string
}
