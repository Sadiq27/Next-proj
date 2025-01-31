import { navbar } from "@/data/navbar";
import { items } from "@/data/items";
import { ProductCard } from "@/components/shared/product-card";
import classes from "./product-page.module.css";
import Link from "next/link";

interface PageProps {
  params: {
    category: string;
    href: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { category, href } = await params;

  const categoryData = navbar.find((cat) => cat.category === category);

  if (!categoryData) {
    return (
      <div className="container">
        <h1>Category not found</h1>
      </div>
    );
  }

  const subcategory = categoryData.items.find((item) => item.href === `/docs/${category}/${href}`);

  if (!subcategory) {
    return (
      <div className="container">
        <h1>Subcategory not found</h1>
      </div>
    );
  }

  const filteredProducts = items.filter((item) => item.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="container">
      <div className={classes.product}>
        <h1 className={classes["product-header"]}>
          Category: {category} - {subcategory.title}
        </h1>

        <div className={classes.productsList}>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/docs/${category}/${href}/${product.id}`}>
                  <ProductCard product={product} /> {}
                </Link>
              ))}
            </div>
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
