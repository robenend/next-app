// "use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";
import image from "@/public/images/image.png";
// import HeavyComponent from "./components/HeavyComponent";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Metadata } from "next";
// import _ from "lodash";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>loading...</p>,
// });

export default function Home() {
  // const session = await getServerSession(authOptions);
  // const [isVisible, setVisible] = useState(false);

  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      {/* <Image
        src="https://bit.ly/react-cover"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768) 50vw, 33vw"
        quality={100}
        alt="planter"
        priority
      /> */}
      {/* <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />} */}
      {/* <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "a" }, { name: "b" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button> */}
    </main>
  );
}

export const metadata: Metadata = {
  title: "...",
  description: "...",
};
