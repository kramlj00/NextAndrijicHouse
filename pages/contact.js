import Head from "next/head";
import { useRouter } from "next/router";
import ContactForm from "../components/ContactForm";
import Layout from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";

export default function Contact() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <Layout activeTab={t.contact}>
      <Head>
        <title>{t.contact}</title>
      </Head>
      <ContactForm/>
    </Layout>
  );
}
