import ProductCarousel from "../ui/Carousel";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store", 
  });
  const data = await res.json();
  return data.slice(0, 5); 
}

const Hero = async () => {
  const products = await fetchProducts();

  if (products.length === 0) return null;

  return (
    <div className="relative w-full">
      <ProductCarousel products={products} />
      <div className="absolute top-1/2 left-0 right-0 text-center text-white z-10">
        <h1 className="text-4xl font-bold">Welcome to PrimeBasket</h1>
        <p className="mt-4 text-xl">Shop the best products, only at PrimeBasket.</p>
      </div>
    </div>
  );
};

export default Hero;
