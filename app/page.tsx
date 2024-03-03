import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import image from "@/public/images/image.png";
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Image src={image} alt="planter" />
    </main>
  );
}
