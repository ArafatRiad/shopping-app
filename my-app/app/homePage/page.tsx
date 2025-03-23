import Link from "next/link";

import Header from "../component/header";
import Footer from "../component/footer";
import getProducts from "@/sub/getProducts";
const HomePage = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <main>
      <Header />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Items List</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-60 h-70 object-cover rounded-md"
              />

              <div className="p-4 border rounded-md flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <p className="text-lg font-semibold">
                    Price : {product.price}
                  </p>
                </div>

                <Link href={`/homePage/${product.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href="/about">About Us</Link>
      <Footer />
    </main>
  );
};

export default HomePage;
