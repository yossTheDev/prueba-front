/* eslint-disable @next/next/no-img-element */

import { Hero } from "./sections/hero";
import { Services } from "./sections/services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col">
        <Hero></Hero>

        <Services></Services>
      </main>
    </div>
  );
}
