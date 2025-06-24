import React, { useState } from "react";

// Example product data (replace with real data or props)
const product = {
  name: "Elegant Ceramic Vase",
  price: 2499,
  rating: 4.5,
  images: [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
  ],
  description: `This elegant ceramic vase is a perfect blend of luxury and minimalism. Handcrafted by skilled artisans, it adds a touch of sophistication to any space. Ideal for home decor or as a thoughtful gift.`,
  colors: [
    { name: "Ivory", code: "#f8f6f0" },
    { name: "Gold", code: "#bfa76a" },
    { name: "Charcoal", code: "#444" }
  ],
  variants: [
    { name: "Small", size: "20cm" },
    { name: "Medium", size: "30cm" },
    { name: "Large", size: "40cm" }
  ]
};

// Helper for star ratings
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <span style={{ color: "#FFD700", fontSize: "1.2rem", fontWeight: 700 }}>
      {'★'.repeat(fullStars)}
      {halfStar ? '½' : ''}
      {'☆'.repeat(5 - fullStars - (halfStar ? 1 : 0))}
      <span style={{ color: "#888", fontWeight: 500, marginLeft: 6, fontSize: "1rem" }}>{rating.toFixed(1)}</span>
    </span>
  );
}

function ProductDetailPage() {
  const [mainImg, setMainImg] = useState(product.images[0]);
  const [zoom, setZoom] = useState(false);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product.colors[0].name);
  const [variant, setVariant] = useState(product.variants[0].name);

  return (
    <div style={{
      background: "linear-gradient(120deg, #fffbe6 0%, #f8f6f0 100%)",
      minHeight: "100vh",
      fontFamily: "Montserrat, sans-serif",
      padding: 0,
      margin: 0
    }}>
      <style>
        {`
          .lux-detail-container {
            display: flex;
            gap: 3vw;
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 2vw 2rem 2vw;
            background: #fff;
            border-radius: 24px;
            box-shadow: 0 4px 32px #bfa76a22;
          }
          .lux-detail-images {
            flex: 1.2;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .lux-main-img-box {
            width: 100%;
            max-width: 420px;
            aspect-ratio: 1/1.1;
            overflow: hidden;
            border-radius: 18px;
            box-shadow: 0 2px 16px #bfa76a33;
            background: #f8f6f0;
            border: 2px solid #bfa76a;
            position: relative;
            cursor: zoom-in;
          }
          .lux-main-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.35s cubic-bezier(.4,2,.6,1);
          }
          .lux-main-img.zoomed {
            transform: scale(1.25);
            cursor: zoom-out;
          }
          .lux-thumbs {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }
          .lux-thumb-img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 10px;
            border: 2px solid #bfa76a55;
            cursor: pointer;
            transition: border 0.2s;
          }
          .lux-thumb-img.selected {
            border: 2.5px solid #bfa76a;
          }
          .lux-detail-info {
            flex: 1.5;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
          }
          .lux-color-dot {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 2.5px solid #bfa76a;
            margin-right: 12px;
            cursor: pointer;
            display: inline-block;
            transition: box-shadow 0.2s;
          }
          .lux-color-dot.selected {
            box-shadow: 0 0 0 3px #e7c87399;
            border: 3.5px solid #bfa76a;
          }
          .lux-variant-btn {
            padding: 0.5rem 1.2rem;
            border-radius: 16px;
            border: 2px solid #bfa76a;
            background: #fffbe6;
            color: #222;
            font-weight: 700;
            margin-right: 10px;
            cursor: pointer;
            transition: background 0.2s, border 0.2s;
          }
          .lux-variant-btn.selected {
            background: linear-gradient(90deg, #bfa76a 0%, #e7c873 100%);
            color: #222;
            border: 2.5px solid #bfa76a;
          }
          .lux-qty-box {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            margin-top: 0.5rem;
          }
          .lux-qty-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(90deg, #bfa76a 0%, #e7c873 100%);
            color: #222;
            font-size: 1.3rem;
            font-weight: 700;
            cursor: pointer;
            transition: background 0.2s;
          }
          .lux-action-btns {
            display: flex;
            gap: 1.5rem;
            margin-top: 2rem;
          }
          .lux-buy-btn, .lux-cart-btn {
            padding: 0.9rem 2.2rem;
            border-radius: 24px;
            font-size: 1.15rem;
            font-weight: 800;
            border: none;
            cursor: pointer;
            letter-spacing: 1px;
            box-shadow: 0 2px 8px #bfa76a33;
            transition: background 0.2s, color 0.2s;
          }
          .lux-buy-btn {
            background: linear-gradient(90deg, #bfa76a 0%, #e7c873 100%);
            color: #222;
          }
          .lux-cart-btn {
            background: #fffbe6;
            color: #bfa76a;
            border: 2px solid #bfa76a;
          }
          @media (max-width: 900px) {
            .lux-detail-container {
              flex-direction: column;
              padding: 2rem 1vw;
              gap: 2.5rem;
            }
            .lux-detail-images, .lux-detail-info {
              width: 100%;
              max-width: 100%;
            }
            .lux-main-img-box {
              max-width: 100%;
            }
          }
          @media (max-width: 600px) {
            .lux-detail-container {
              padding: 1rem 0.5vw;
              border-radius: 0;
            }
            .lux-main-img-box {
              max-width: 98vw;
            }
          }
        `}
      </style>
      <div className="lux-detail-container">
        {/* Images */}
        <div className="lux-detail-images">
          <div
            className="lux-main-img-box"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onClick={() => setZoom(z => !z)}
            style={{ cursor: zoom ? "zoom-out" : "zoom-in" }}
          >
            <img
              src={mainImg}
              alt={product.name}
              className={`lux-main-img${zoom ? " zoomed" : ""}`}
              draggable={false}
            />
          </div>
          <div className="lux-thumbs">
            {product.images.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`thumb-${idx}`}
                className={`lux-thumb-img${mainImg === img ? " selected" : ""}`}
                onClick={() => setMainImg(img)}
                draggable={false}
              />
            ))}
          </div>
        </div>
        {/* Info */}
        <div className="lux-detail-info">
          <div>
            <h2 style={{ fontWeight: 900, fontSize: "2.2rem", color: "#bfa76a", margin: 0 }}>
              {product.name}
            </h2>
            <div style={{ margin: "0.7rem 0 0.5rem 0" }}>
              <StarRating rating={product.rating} />
            </div>
            <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#222", margin: "0.7rem 0" }}>
              ₹{product.price}
            </div>
          </div>
          <div>
            {/* Color */}
            <div>
              <div style={{ fontWeight: 700, marginBottom: 8, color: "#bfa76a" }}>Color:</div>
              <div className="lux-color-row" style={{ gap: 0, marginBottom: 12 }}>
                {product.colors.map((c, idx) => (
                  <span
                    key={c.name}
                    className={`lux-color-dot${color === c.name ? " selected" : ""}`}
                    style={{
                      background: c.code,
                      marginRight: idx === product.colors.length - 1 ? 0 : 12
                    }}
                    title={c.name}
                    onClick={() => setColor(c.name)}
                  />
                ))}
                <span className="lux-color-label" style={{
                  marginLeft: 18,
                  minWidth: 70,
                  fontWeight: 600,
                  color: "#222",
                  fontSize: "1.08rem"
                }}>{color}</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 8, color: "#bfa76a" }}>Variant:</div>
              <div>
                {product.variants.map(v => (
                  <button
                    key={v.name}
                    className={`lux-variant-btn${variant === v.name ? " selected" : ""}`}
                    onClick={() => setVariant(v.name)}
                  >
                    {v.name} <span style={{ fontWeight: 400, fontSize: "0.95rem" }}>({v.size})</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Quantity */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", margin: "18px 0 12px 0" }}>
              <span className="lux-qty-label" style={{ minWidth: 90, textAlign: "left" }}>Quantity:</span>
              <div className="lux-qty-box" style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#f8f6f0",
                borderRadius: 18,
                padding: "0.3rem 1rem",
                border: "1.5px solid #e7c873",
                minWidth: 120,
                justifyContent: "center"
              }}>
                <button
                  className="lux-qty-btn"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "none",
                    background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
                    color: "#222",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >-</button>
                <span className="lux-qty-value" style={{
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  minWidth: 32,
                  textAlign: "center",
                  color: "#222"
                }}>{qty}</span>
                <button
                  className="lux-qty-btn"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "none",
                    background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
                    color: "#222",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onClick={() => setQty(q => q + 1)}
                  aria-label="Increase quantity"
                >+</button>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 8, color: "#bfa76a" }}>Description:</div>
              <div style={{ color: "#444", fontSize: "1.08rem", lineHeight: 1.7 }}>
                {product.description}
              </div>
            </div>
            <div className="lux-action-btns">
              <button className="lux-buy-btn">Buy Now</button>
              <button className="lux-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage