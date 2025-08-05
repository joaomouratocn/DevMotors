export interface HomeProps {
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

export interface AboutProps {
  description: string;
  aboutImage: {
    url: string;
  };
}

export interface PageItemProps {
  documentId: string;
  TITLE: string;
}

export interface PageProps {
  documentId: string;
  TITLE: string;
  BANNER: {
    url: string;
  };
  banner_button: {
    buttonText: string;
    buttonUrl: string;
  };
  CONTENT_PAGE: {
    title: string;
    description: string;
    show_button: boolean;
    content_image: {
      url: string;
    };
  };
}
