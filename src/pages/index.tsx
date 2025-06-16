import About from "@/components/About";
import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
