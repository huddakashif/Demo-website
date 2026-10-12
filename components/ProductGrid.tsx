"use client";

import { useState } from "react";
import { useUIState } from "./UIState";
import { PRODUCTS } from "@/data/products";
import { Product, ProductSize } from "@/types/product";

function ProductCard({ product }: { product: Product }) {
  const { addToCart, openCart } = useUIState();
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [showSizePicker, setShowSizePicker] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  function handleSelectSizeAndAdd(size: ProductSize, e: React.MouseEvent) {
    e.stopPropagation();
    setSelectedSize(size);
    setIsAdding(true);
    addToCart(product, size, 1);

    setTimeout(() => {
      setIsAdding(false);
      setShowSizePicker(false);
      openCart();
    }, 400);
  }

  return (
    <div
      className="product-card"
      onMouseLeave={() => setShowSizePicker(false)}
    >
      <div className="product-media">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: product.gradientA,
          }}
        />
        <div className="layer-b" style={{ background: product.gradientB }} />

        {product.bestseller && (
          <span className="product-tag">BESTSELLER</span>
        )}

        {/* Quick Add Overlay */}
        <div className={`quick-add-container ${showSizePicker ? "active" : ""}`}>
          {!showSizePicker ? (
            <button
              className="quick-add"
              type="button"
              onClick={() => setShowSizePicker(true)}
              aria-label={`Quick add ${product.name}`}
            >
              QUICK ADD
            </button>
          ) : (
            <div className="size-selector-overlay">
              <div className="size-selector-label">SELECT SIZE</div>
              <div className="size-pills">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    className={`size-pill ${selectedSize === sz && isAdding ? "selected" : ""}`}
                    onClick={(e) => handleSelectSizeAndAdd(sz, e)}
                    aria-label={`Add size ${sz}`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="product-info">
        <div>
          <div className="product-name">{product.name}</div>
          <div className="product-color">{product.color}</div>
        </div>
        <div className="product-price">Rs. {product.price.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "SHIRTS", "DRESSES", "OUTERWEAR", "SETS"];

  const filteredProducts =
    activeCategory === "ALL"
      ? PRODUCTS
      : PRODUCTS.filter(
          (p) => p.category.toUpperCase() === activeCategory
        );

  return (
    <section className="drop-section" id="drop">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">The first drop</h2>
          <p className="section-note">
            Ten pieces. No filler. Everything you need for the season, cut for
            coverage without losing shape.
          </p>

          {/* Category Filter Pills */}
          <div className="category-filters" id="shop">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
