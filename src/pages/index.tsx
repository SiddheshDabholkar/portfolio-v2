import About from "@/components/About";
import Hero from "@/components/Hero";
import RootLayout from "@/components/Layout";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <About />
      <Projects />
    </RootLayout>
  );
}
