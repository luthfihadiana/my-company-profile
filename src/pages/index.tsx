import About from "@/components/About";
import Advantage from "@/components/Advantage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import getProduct from "@/service/getProduct";
import { ProductDetail } from "@/types";
import { GetServerSideProps } from "next";

type PageProps = {
  data: ProductDetail[]
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const { data } = await getProduct();

  return {
    props: {
      data
    },
  };
};

export default function Home({ data }: PageProps) {
  return (
    <div id="app" className="bg-animated-gradient bg-200% animate-gradient">
      <Header />
      <main className="flex-grow w-full h-page overflow-y-auto text-white">
        <Hero />
        <About />
        <Advantage />
        <Products data={data} />
        <Partners />
        <Footer />
      </main>
    </div>
  );
}
