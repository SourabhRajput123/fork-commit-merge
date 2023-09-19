// NextJS - Easy

export default function Home() {
  interface product {
    name: string;
    price: number;
  }

  const sampleProducts: product[] = [
    // TODO: Create a sample product list with names and prices
    {
      name: "Denim Tshirt",
      price: 100,
    },
    {
      name: "Gucci Belt",
      price: 200,
    },
    {
      name: "LV Jeans",
      price: 100,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to XYZ Store!</h1>
      <p className="text-lg mb-8">
        Your one-stop shop for the best products in town.
      </p>

      <div className="w-1/2 flex flex-col space-y-4">
        {sampleProducts.map((product, index) => (
          <div
            key={index}
            className="flex justify-between p-4 border rounded shadow"
          >
            <span>{product.name}</span>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
