import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Signin from "@/components/Signin";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full min-h-screen">
        <div className="container mx-auto px-4 py-10">
          <Signin />
        </div>
      </main>
      <Footer />
    </div>
  );
}
