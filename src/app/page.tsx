import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full min-h-screen">
        <div className="container mx-auto px-4">
          {/* Add your content here */}
          <h1 className="text-2xl font-bold text-center">Welcome to Next.js!</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
