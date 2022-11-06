import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import useSiteConfig from "../shared/hooks/useSiteConfig";
import ContactForm from "../components/ContactForm";
import Layout from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";

export default function Contact() {
  const config = useSiteConfig();
  const router = useRouter();

  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <Layout activeTab={t.contact}>
      <NextSeo
        title={`${config.title} | ${t.contact}`}
        openGraph={{
          title: `${config.title} | ${t.contact}`,
          url: `${config.url}contact`,
          description: config.description
        }}
      />
      <ContactForm />
    </Layout>
  );
}
