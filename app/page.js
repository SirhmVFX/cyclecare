import Image from "next/image";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between md:p-24 p-4">
      <div className="w-3/4 flex flex-col items-center justify-between py-32">
        <Image
          src="/images/cyclecarelogo.png"
          width={200}
          height={200}
          alt="logo"
        />

        <h2 className="">Welcome to CycleCare</h2>
      </div>
      <Link href="/splash1" className="button bg-secondary">
        Get Started
      </Link>
    </main>
  );
}
