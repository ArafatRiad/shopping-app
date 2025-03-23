import getSingleProduct from "@/sub/getSingleProduct";
import Link from "next/link";

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return (
    <div className="text-accent-foreground px-4 py-2 rounded-md cursor-pointer  transition-transform">
      <h1 className="text-2xl font-bold text-green-800">{product.title}</h1>

      <div key={product.id} className="p-4 border rounded-lg shadow-md">
        <div className="p-4 border rounded-md flex justify-between items-center">
          <div className="flex items-start space-x-6">
            {/* Image Section */}
            <img
              src={product.image}
              alt={product.name}
              className="w-100 h-auto object-cover rounded-md"
            />

            {/* Product Info Section */}
            <div className="space-y-2">
              {/* Price */}
              <p className="text-lg font-bold">Price: ${product.price}</p>

              {/* Rating */}
              <p className="text-lg">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>

              {/* Category */}
              <p className="text-lg">Category: {product.category}</p>

              {/* Description */}
              <p className="text-lg">Description: {product.description}</p>
              <div className="relative p-6">
                {/* Other content like image, price, description */}

                {/* Button at the bottom-right corner */}
                <Link rel="stylesheet" href="/homePage">
                  <button className="absolute right-4 bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700">
                    Back To List
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
