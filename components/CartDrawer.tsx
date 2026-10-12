"use client";

import { useUIState } from "./UIState";

const FREE_SHIPPING_THRESHOLD = 5000;

export default function CartDrawer() {
  const {
    cartOpen,
    closeCart,
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalCount,
    isHydrated,
  } = useUIState();

  if (!isHydrated) return null;

  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;

  // WhatsApp order text generation
  const itemsText = cartItems
    .map(
      (item) =>
        `• ${item.product.name} (${item.product.color}, Size ${item.size}) x${item.quantity} - Rs. ${(item.product.price * item.quantity).toLocaleString()}`
    )
    .join("\n");
  const whatsappMessage = encodeURIComponent(
    `Salam HUDUM! I would like to place an order:\n\n${itemsText}\n\n*Subtotal: Rs. ${subtotal.toLocaleString()}*\n\nPlease let me know the delivery details.`
  );
  const whatsappUrl = `https://wa.me/923001234567?text=${whatsappMessage}`;

  return (
    <>
      <div
        className={`cart-overlay${cartOpen ? " open" : ""}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <div
        className={`cart-drawer${cartOpen ? " open" : ""}`}
        role="dialog"
        aria-label="Shopping Bag"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="cart-drawer-top">
          <div className="cart-title-row">
            <h3>Your Bag</h3>
            {totalCount > 0 && <span className="cart-item-count">({totalCount})</span>}
          </div>
          <button
            className="icon-btn"
            aria-label="Close bag"
            onClick={closeCart}
          >
            <svg viewBox="0 0 24 24">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>
        </div>

        {/* Free Shipping Meter */}
        {cartItems.length > 0 && (
          <div className="shipping-meter-box">
            <div className="shipping-meter-text">
              {remainingForFreeShipping > 0 ? (
                <>
                  Add <strong>Rs. {remainingForFreeShipping.toLocaleString()}</strong> more for <strong>Free Delivery</strong>
                </>
              ) : (
                <>✨ You qualify for <strong>Free Standard Delivery</strong>!</>
              )}
            </div>
            <div className="shipping-progress-track">
              <div
                className="shipping-progress-fill"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart Contents */}
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">
              <svg viewBox="0 0 24 24">
                <path d="M6 8h12l-1 12H7L6 8z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
            </div>
            <span className="cart-empty-title">Your bag is empty</span>
            <p className="cart-empty-sub">
              Explore our modern modest staples designed for everyday life.
            </p>
            <a
              href="#drop"
              className="hero-cta"
              style={{
                borderColor: "var(--charcoal)",
                color: "var(--charcoal)",
              }}
              onClick={closeCart}
            >
              Shop the drop
            </a>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="cart-item-row"
                >
                  <div
                    className="cart-item-thumb"
                    style={{ background: item.product.gradientA }}
                  />
                  <div className="cart-item-details">
                    <div className="cart-item-head">
                      <div>
                        <h4 className="cart-item-name">{item.product.name}</h4>
                        <div className="cart-item-meta">
                          {item.product.color} · Size: <strong>{item.size}</strong>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        aria-label={`Remove ${item.product.name} size ${item.size}`}
                      >
                        <svg viewBox="0 0 24 24">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>

                    <div className="cart-item-bottom">
                      <div className="qty-selector">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="qty-number">{item.quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <div className="cart-item-price">
                        Rs. {(item.product.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="cart-footer">
              <div className="cart-subtotal-row">
                <span>Subtotal</span>
                <strong>Rs. {subtotal.toLocaleString()}</strong>
              </div>
              <p className="cart-taxes-note">
                Shipping & taxes calculated at checkout. Cash on Delivery (COD) available nationwide.
              </p>

              <div className="cart-actions">
                <a
                  href="#checkout"
                  className="cart-checkout-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Order placement initiated! You can also complete your order directly via WhatsApp below.");
                  }}
                >
                  Proceed to Checkout · Rs. {subtotal.toLocaleString()}
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cart-whatsapp-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.05 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29z"/>
                  </svg>
                  Order Instantly via WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
