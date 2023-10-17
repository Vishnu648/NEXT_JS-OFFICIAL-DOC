import Image from "next/image";
import profilePic from "../public/author.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      Home page
      <Image
        width={300}
        height={300}
        src={profilePic}
        alt="author"
        placeholder="blur"
      />
    </main>
  );
}
