import About from "@/components/About";
import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}
