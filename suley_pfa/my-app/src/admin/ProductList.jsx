export default function ProductList({ products }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow hover:shadow-lg">
            <img src={product.image} alt="Produit" className="h-32 w-full object-cover rounded-md" />
            <h2 className="font-bold mt-2">{product.name}</h2>
            <p>Prix : {product.price} DH</p>
            <p>Quantité : {product.quantity}</p>
            <p>Dernier achat : {product.lastPurchase}</p>
          </div>
        ))}
      </div>
    );
  }
  