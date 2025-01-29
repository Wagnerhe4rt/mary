import Head from 'next/head';
import styles from '/projetos/mary/src/components/styles/servicos.module.css'; 

const Servicos = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Serviços Prestados</title>
        <meta name="description" content="Serviços prestados pela nossa empresa" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Serviços Prestados</h1>

        <section className={styles.services}>
          <div className={styles.service}>
            <h2>Consultoria em Tecnologia</h2>
            <p>Oferecemos consultoria especializada para otimização de sistemas e infraestrutura tecnológica.</p>
          </div>

          <div className={styles.service}>
            <h2>Desenvolvimento de Software</h2>
            <p>Desenvolvemos soluções personalizadas de software para atender às necessidades específicas de sua empresa.</p>
          </div>

          <div className={styles.service}>
            <h2>Suporte Técnico</h2>
            <p>Prestamos suporte técnico contínuo, garantindo que seus sistemas e dispositivos funcionem sem problemas.</p>
          </div>

          <div className={styles.service}>
            <h2>Treinamento e Capacitação</h2>
            <p>Realizamos treinamentos para sua equipe sobre as melhores práticas e tecnologias do mercado.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Servicos;
