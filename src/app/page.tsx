import Hero from "@/sections/Hero";
import Categories from "@/components/Categories";
import ProductByCategorySection from "@/sections/ProductByCategorySection";
import Link from "next/link";
import CTAButton from "../ui/CTAButtonLight"; // Assuming you're using the CTAButton here

export default function Home() {
  return (
    <div className="px-16 flex flex-col py-5 gap-y-5">
      <Categories />
      <Hero />

      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-lg p-10 flex flex-col items-center text-center text-white shadow-lg">
        <h2 className="text-3xl font-extrabold mb-4 drop-shadow-lg">
          Explore Our Entire Collection
        </h2>
        <p className="max-w-xl mb-6 text-lg drop-shadow-md">
          Discover thousands of products from all categories, carefully curated just for you.
        </p>

        <Link href="/plp" passHref>
          <CTAButton
            text="Browse All Products"
            className="bg-white text-green-700 hover:bg-gray-100 shadow-md"
            icon={undefined}
          />
        </Link>
      </section>

      <ProductByCategorySection />l
    </div>
  );
}
