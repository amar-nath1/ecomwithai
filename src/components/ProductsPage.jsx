import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

// Example product data (add ratings)
const allProducts = [
  {
    name: "Elegant Ceramic Vase",
    price: 2499,
    category: "Vases",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Luxury Wall Clock",
    price: 3499,
    category: "Clocks",
    rating: 4.2,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Scented Candle Set",
    price: 1599,
    category: "Candles",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Artistic Wall Painting",
    price: 4999,
    category: "Wall Art",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Decorative Planter",
    price: 1299,
    category: "Planters",
    rating: 4.3,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Crystal Table Lamp",
    price: 3999,
    category: "Lamps",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Premium Gift Box",
    price: 2999,
    category: "Gifts",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Handcrafted Photo Frame",
    price: 1799,
    category: "Frames",
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  }
];

const categories = [
  "All",
  ...Array.from(new Set(allProducts.map(p => p.category)))
];

// Helper for star ratings
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <span style={{ color: "#FFD700", fontSize: "1.1rem", fontWeight: 700 }}>
      {'★'.repeat(fullStars)}
      {halfStar ? '½' : ''}
      {'☆'.repeat(5 - fullStars - (halfStar ? 1 : 0))}
      <span style={{ color: "#888", fontWeight: 500, marginLeft: 6, fontSize: "0.95rem" }}>{rating.toFixed(1)}</span>
    </span>
  );
}

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // Add this line

  // Filter by category and search
  const filtered = allProducts.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "priceLowHigh") return a.price - b.price;
    if (sort === "priceHighLow") return b.price - a.price;
    if (sort === "nameAZ") return a.name.localeCompare(b.name);
    if (sort === "nameZA") return b.name.localeCompare(a.name);
    if (sort === "ratingHighLow") return b.rating - a.rating;
    if (sort === "ratingLowHigh") return a.rating - b.rating;
    return 0;
  });

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
          @media (max-width: 900px) {
            .products-controls {
              flex-direction: column;
              align-items: stretch !important;
              gap: 1rem !important;
            }
            .products-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 1rem !important;
            }
          }
          @media (max-width: 600px) {
            .products-grid {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            .products-controls {
              padding: 1rem !important;
            }
          }
        `}
      </style>
      <div style={{
        width: "100%",
        minHeight: "220px",
        background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem"
      }}>
        <h1 style={{
          color: "#fff",
          background: "rgba(191,167,106,0.85)",
          padding: "1.2rem 2.5rem",
          borderRadius: "18px",
          fontWeight: 900,
          fontSize: "2.5rem",
          letterSpacing: 2,
          boxShadow: "0 4px 32px #bfa76a44"
        }}>
          Discover Our Collection
        </h1>
      </div>
      {/* Filters, Search & Sorting */}
      <div className="products-controls" style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        margin: "0 auto 2.5rem auto",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 1400,
        padding: "1.5rem 2rem",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 2px 16px #bfa76a22"
      }}>
        <div>
          <label style={{ fontWeight: 700, marginRight: 8, color: "#bfa76a" }}>Category:</label>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: 8,
              border: "1.5px solid #bfa76a",
              fontSize: "1rem",
              background: "#f8f6f0"
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ fontWeight: 700, marginRight: 8, color: "#bfa76a" }}>Sort by:</label>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: 8,
              border: "1.5px solid #bfa76a",
              fontSize: "1rem",
              background: "#f8f6f0"
            }}
          >
            <option value="default">Default</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A-Z</option>
            <option value="nameZA">Name: Z-A</option>
            <option value="ratingHighLow">Rating: High to Low</option>
            <option value="ratingLowHigh">Rating: Low to High</option>
          </select>
        </div>
        <div style={{ flex: 1, minWidth: 220, maxWidth: "50%" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "0.6rem 1.2rem",
              borderRadius: 8,
              border: "1.5px solid #bfa76a",
              fontSize: "1rem",
              background: "#f8f6f0"
            }}
          />
        </div>
      </div>
      {/* Product Grid */}
      <div className="products-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
        maxWidth: 1400,
        minWidth: "91vw",
        margin: "0 auto",
        padding: "0 2vw 3rem 2vw",
        minHeight: "60vh"
      }}>
        {sorted.map((prod, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/product/${encodeURIComponent(prod.name)}`)} // Add this for routing
            style={{
              background: "#fff",
              borderRadius: "18px",
              boxShadow: "0 2px 16px #bfa76a22",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px solid #f7e7b7",
              transition: "box-shadow 0.2s",
              cursor: "pointer",
              minHeight: 420
            }}
          >
            <img src={prod.img} alt={prod.name} style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: 12,
              marginBottom: 18,
              border: "2px solid #bfa76a",
              boxShadow: "0 2px 8px #bfa76a22"
            }} />
            <div style={{ fontWeight: 800, fontSize: "1.25rem", color: "#222", marginBottom: 8, textAlign: "center" }}>{prod.name}</div>
            <div style={{ color: "#bfa76a", fontWeight: 700, marginBottom: 10, fontSize: "1.1rem" }}>₹{prod.price}</div>
            <StarRating rating={prod.rating} />
            <button style={{
              marginTop: "1.2rem",
              background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
              color: "#222",
              border: "none",
              borderRadius: "18px",
              padding: "0.7rem 1.8rem",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              letterSpacing: 1,
              boxShadow: "0 2px 8px #bfa76a33"
            }}>
              Add to Bag
            </button>
          </div>
        ))}
        {sorted.length === 0 && (
          <div style={{
            gridColumn: "1/-1",
            textAlign: "center",
            color: "#bfa76a",
            marginTop: "2rem",
            fontWeight: 600,
            fontSize: "1.2rem"
          }}>
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage