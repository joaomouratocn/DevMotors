import { ContactProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import { Phone, Mail, Map, Clock } from "lucide-react";

interface ReceivedContact {
  contact: ContactProps;
}

export function Footer({ contact }: ReceivedContact) {
  return (
    <footer id="contacts" className={styles.footer}>
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>
        <div className={styles.content}>
          <div className={styles.item}>
            <Mail size={28} color="#FFF" />
            <div>
              <strong>Email:</strong>
              <p>{contact.email}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Phone size={28} color="#FFF" />
            <div>
              <strong>Telefone:</strong>
              <p>{contact.phone}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Map size={28} color="#FFF" />
            <div>
              <strong>Endereço:</strong>
              <p>Avenida Bela Cintra, 200 - Água Vermelha São Carlos/SP </p>
            </div>
          </div>

          <div className={styles.item}>
            <Clock size={28} color="#FFF" />
            <div>
              <strong>Telefone:</strong>
              <p>Segunda á Sexta 07:30 as 18:00</p>
            </div>
          </div>
        </div>
      </section>
      <a
        href="https://www.google.com.br"
        target="_blank"
        className={styles.link}
      >
        <Phone size={24} color="#FFF" />
        Fale com um atendente
      </a>

      <p className={styles.copyText}>
        Todos direitos resevados a Arthivia Solutions @
        {`${new Date().getFullYear()}`}
      </p>
    </footer>
  );
}
