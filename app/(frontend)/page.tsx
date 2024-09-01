/** @format */

import Announcement from "@/components/frontend/Announcement";
import CustonLinkButton from "@/components/global/CustonLinkButton";
import SparklesText from "@/components/magicui/sparkles-text";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-4xl py-16 ">
        <div className="mt-2 mb-2  flex md:flex-row gap-5    justify-center items-center flex-col">
          {/* <MovingBorderDemo title="Delicious Bakes, Bakery/Restaurant" />
            <MovingBorderDemo title="Where Flavor Meets Freshness" /> */}
        </div>
        <div className="text-center">
          <SparklesText
            text={" Delicious Bakes Nkambe"}
            className="text-3xl font-normal tracking-tight text-gray-700 sm:text-4xl"
          />
          <SparklesText
            text={"Bakery/Restaurant"}
            className="text-3xl font-normal tracking-tight text-gray-600 sm:text-4xl"
          />
          <div className="mt-2 mb-2  flex md:flex-row gap-5    justify-center items-center flex-col">
            <Announcement title="Go to Dashboard" href="/dashboard" />
            <Announcement title="carry out Sales " href="/sales" />
          </div>
          <div className="text-2xl font-semibold text-slate-600 ">
            Delicious Bakes: Where Flavor Meets Freshness
          </div>
          <CustonLinkButton title={"Dashboard"} href={"/dashboard"} />
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <div className="">
              Visit our storefront at Nkambe commercial avenue, former Nexxtel
              office
            </div>
            At Delicious Bakes, we blend passion with pastry, crafting
            mouthwatering delights that leave you craving more. Here’s why
            you’ll love us: Artisanal Breads and Pastries: Our self-taught
            bakers create fluffy naan breads, sticky buns, and exquisitely-made
            pastries Treat yourself at Delicious Bakes today! 🌟 With any or
            more of these our treats
            <div className="flex-col justify-items-start   text-2xl text-slate-800 ">
              <div> -Chinchin</div>
              <div> -Kwachwa gato</div>
              <div> -Yummy bread</div>
              <div>-Excellent cake,</div>
              <div> -sugar balls</div>
              <div> and much more Yummy treats for your enjoyment</div>
            </div>
          </p>
        </div>
      </div>
    </main>
  );
}
