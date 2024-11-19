import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full">
      <Header/>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        {/* Add your content here */}
        <h1 className="text-2xl font-bold">Welcome to Next.js!</h1>
      </main>
      <Footer />
    </div>
  );
}
