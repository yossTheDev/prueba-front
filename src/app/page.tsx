/* eslint-disable @next/next/no-img-element */

import { Hero } from "./sections/hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col">
        <Hero></Hero>
      </main>
    </div>
  );
}
