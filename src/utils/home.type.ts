export interface HomeProps {
  data: {
    SAUDACAO: {
      greetText: string;
      greetBanner: {
        url: string;
      };
    };
    SOBRE: AboutProps;
    SERVICOS: ServiceProps[];
    ACAO: {
      buttonText: string;
      buttonUrl: string;
    };
    CONTATO: ContactProps;
  };
}

export interface ServiceProps {
  servicename: string;
  serviceImage: {
    url: string;
  };
}

export interface AboutProps {
  description: string;
  aboutImage: {
    url: string;
  };
}

export interface ContactProps {
  phone: string;
  email: string;
}
