import About from "@/components/About";
import Hero from "@/components/Hero";
import RootLayout from "@/components/Layout";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <About />
    </RootLayout>
  );
}
