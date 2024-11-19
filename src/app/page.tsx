import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        {/* Add your content here */}
        <h1 className="text-2xl font-bold">Welcome to Next.js!</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-4 bg-gray-100 border-t border-gray-300">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            priority
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            priority
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            priority
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
