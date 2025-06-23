import React from 'react'

const categories = [
  { name: "Wall Art", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  { name: "Vases", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
  { name: "Candles", img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" },
  { name: "Clocks", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
  { name: "Planters", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" }
];

const products = [
  {
    name: "Elegant Ceramic Vase",
    price: "2499",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Luxury Wall Clock",
    price: "3499",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Scented Candle Set",
    price: "1599",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Artistic Wall Painting",
    price: "4999",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Decorative Planter",
    price: "1299",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Crystal Table Lamp",
    price: "3999",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Premium Gift Box",
    price: "2999",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Handcrafted Photo Frame",
    price: "1799",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  }
];

// Utility hook to detect mobile device
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.innerWidth <= 700
  );
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

// Mobile UI
function MobileHomePage() {
  return (
    <div style={{ background: "#fffdfa", minHeight: "100vh", fontFamily: "Montserrat, sans-serif" }}>
      <header style={{
        background: "#bfa76a",
        color: "#222",
        padding: "1rem",
        textAlign: "center",
        fontWeight: 700,
        fontSize: "1.3rem",
        letterSpacing: 1
      }}>
        Luxuria Decor & Gifts
      </header>

      <div style={{
        background: "linear-gradient(120deg, #fffbe6 60%, #bfa76a22 100%)",
        padding: "1.2rem 1rem 0.5rem 1rem",
        borderRadius: "0 0 18px 18px",
        marginBottom: "1.2rem"
      }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0, color: "#bfa76a" }}>
          Elevate Your Space
        </h2>
        <p style={{ fontSize: "1rem", color: "#6d5c2c", margin: "0.5rem 0 0 0" }}>
          Curated home decor & gifting items for every occasion.
        </p>
        <button style={{
          marginTop: "1rem",
          background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
          color: "#222",
          border: "none",
          borderRadius: "18px",
          padding: "0.6rem 1.5rem",
          fontWeight: 700,
          fontSize: "1rem",
          cursor: "pointer",
          width: "100%"
        }}>
          Shop Now
        </button>
      </div>

      <div style={{ padding: "0 1rem" }}>
        <h3 style={{ color: "#bfa76a", fontWeight: 700, marginBottom: "0.7rem" }}>Categories</h3>
        <div style={{
          display: "flex",
          gap: "0.7rem",
          overflowX: "auto",
          marginBottom: "1.5rem"
        }}>
          {categories.map(cat => (
            <div key={cat.name} style={{
              minWidth: 80,
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 1px 6px #bfa76a22",
              textAlign: "center",
              padding: "0.5rem 0.2rem",
              border: "1.5px solid #f7e7b7"
            }}>
              <img src={cat.img} alt={cat.name} style={{
                width: 48, height: 48, borderRadius: "50%", objectFit: "cover", marginBottom: 6, border: "2px solid #bfa76a"
              }} />
              <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#222" }}>{cat.name}</div>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#bfa76a", fontWeight: 700, marginBottom: "0.7rem" }}>Featured</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.2rem"
        }}>
          {products.slice(0, 5).map((prod, idx) => (
            <div key={idx} style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 1px 8px #bfa76a22",
              padding: "1rem",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              border: "1.5px solid #f7e7b7"
            }}>
              <img src={prod.img} alt={prod.name} style={{
                width: 70, height: 70, borderRadius: "8px", objectFit: "cover", border: "2px solid #bfa76a"
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "#222" }}>{prod.name}</div>
                <div style={{ color: "#bfa76a", fontWeight: 700, margin: "0.3rem 0" }}>₹{prod.price}</div>
                <button style={{
                  background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
                  color: "#222",
                  border: "none",
                  borderRadius: "14px",
                  padding: "0.4rem 1rem",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer"
                }}>
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{
        marginTop: "2rem",
        background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
        color: "#222",
        textAlign: "center",
        padding: "1rem 0",
        fontSize: "1rem",
        fontWeight: 600,
        letterSpacing: 1,
        borderRadius: "14px 14px 0 0"
      }}>
        &copy; {new Date().getFullYear()} Luxuria Decor & Gifts.
      </footer>
    </div>
  );
}

// Desktop UI (your previous design)
function DesktopHomePage() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8f6f0 0%, #fff 100%)",
        minHeight: "100vh",
        fontFamily: "'Montserrat', sans-serif",
        overflowX: "hidden"
      }}
    >
      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 900px) {
            .lux-navbar {
              flex-direction: column;
              align-items: flex-start !important;
              gap: 1rem !important;
              padding: 1rem 4vw !important;
            }
            .lux-navbar .lux-nav-links {
              flex-wrap: wrap;
              gap: 1rem !important;
              font-size: 1rem !important;
            }
            .lux-navbar .lux-search-cart {
              width: 100%;
              gap: 1rem !important;
              margin-top: 0.5rem;
              justify-content: flex-start !important;
            }
          }
          @media (max-width: 700px) {
            .lux-hero {
              flex-direction: column !important;
              padding: 1.5rem 4vw !important;
              min-height: 0 !important;
              gap: 1.5rem;
            }
            .lux-hero img {
              margin-left: 0 !important;
              width: 100% !important;
              height: 180px !important;
              object-fit: cover !important;
            }
            .lux-hero h1 {
              font-size: 2rem !important;
            }
          }
          @media (max-width: 600px) {
            .lux-categories,
            .lux-products {
              padding: 0 2vw !important;
            }
            .lux-categories-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1rem !important;
            }
            .lux-products-grid {
              grid-template-columns: 1fr !important;
              gap: 1.2rem !important;
            }
            .lux-footer {
              font-size: 1rem !important;
              padding: 1rem 0 !important;
            }
          }
        `}
      </style>
      {/* Luxurious Navbar */}
      <nav
        className="lux-navbar"
        style={{
          background: "rgba(30, 30, 30, 0.98)",
          color: "#fff",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.2rem 5vw",
          position: "sticky",
          top: 0,
          zIndex: 10,
          letterSpacing: 1
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Luxury_Gold_Letter_L_Logo.png"
            alt="Logo"
            style={{
              height: 48,
              borderRadius: 8,
              boxShadow: "0 2px 8px #bfa76a55"
            }}
          />
          <div className="lux-nav-links" style={{ display: "flex", gap: "2rem", fontWeight: 700, fontSize: "1.1rem" }}>
            <span style={{ cursor: "pointer", color: "#e7c873" }}>Home Decor</span>
            <span style={{ cursor: "pointer", color: "#e7c873" }}>Gifting</span>
            <span style={{ cursor: "pointer", color: "#e7c873" }}>New Arrivals</span>
            <span style={{ cursor: "pointer", color: "#e7c873" }}>Best Sellers</span>
            <span style={{ cursor: "pointer", color: "#e7c873" }}>Contact</span>
          </div>
        </div>
        <div className="lux-search-cart" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <input
            type="text"
            placeholder="Search decor, gifts..."
            style={{
              background: "#222",
              border: "1px solid #bfa76a",
              borderRadius: "24px",
              padding: "0.6rem 1.5rem",
              width: 260,
              fontSize: "1rem",
              color: "#fff",
              outline: "none"
            }}
          />
          <button
            style={{
              background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
              color: "#222",
              border: "none",
              borderRadius: "24px",
              padding: "0.6rem 1.5rem",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px #bfa76a33"
            }}
          >
            My Bag
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <div
        className="lux-hero"
        style={{
          width: "100%",
          minHeight: "380px",
          background:
            "linear-gradient(120deg, #bfa76a 0%, #fffbe6 100%) url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') right center/cover no-repeat",
          margin: "2.5rem 0 2rem 0",
          borderRadius: "18px",
          boxShadow: "0 4px 32px #bfa76a22",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8vw",
          overflow: "hidden"
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              color: "#222",
              marginBottom: "1.2rem",
              letterSpacing: 2
            }}
          >
            Elevate Your Space <br /> with Luxury Decor & Gifts
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#6d5c2c",
              marginBottom: "2rem",
              maxWidth: 480
            }}
          >
            Discover curated home decor and premium gifting items to add elegance and warmth to every corner.
          </p>
          <button
            style={{
              background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
              color: "#222",
              border: "none",
              borderRadius: "24px",
              padding: "0.8rem 2.2rem",
              fontWeight: 700,
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px #bfa76a33"
            }}
          >
            Shop Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80"
          alt="Luxury Decor Banner"
          style={{
            height: 320,
            borderRadius: "16px",
            boxShadow: "0 4px 32px #bfa76a44",
            marginLeft: "2rem"
          }}
        />
      </div>

      {/* Categories */}
      <div className="lux-categories" style={{ padding: "0 5vw", marginBottom: "2.5rem" }}>
        <h2
          style={{
            fontWeight: 800,
            color: "#bfa76a",
            marginBottom: "1.5rem",
            fontSize: "2rem",
            letterSpacing: 1
          }}
        >
          Shop by Category
        </h2>
        <div
          className="lux-categories-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem"
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 12px #bfa76a22",
                textAlign: "center",
                padding: "1.5rem 0.5rem",
                cursor: "pointer",
                border: "2px solid #f7e7b7",
                transition: "transform 0.2s"
              }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 14,
                  border: "3px solid #bfa76a"
                }}
              />
              <div style={{ fontWeight: 700, color: "#222", fontSize: "1.1rem" }}>{cat.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="lux-products" style={{ padding: "0 5vw" }}>
        <h2
          style={{
            fontWeight: 800,
            color: "#bfa76a",
            marginBottom: "1.5rem",
            fontSize: "2rem",
            letterSpacing: 1
          }}
        >
          Featured Decor & Gifts
        </h2>
        <div
          className="lux-products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.5rem"
          }}
        >
          {products.map((prod, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 2px 16px #bfa76a22",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "2px solid #f7e7b7",
                transition: "box-shadow 0.2s",
                cursor: "pointer"
              }}
            >
              <img
                src={prod.img}
                alt={prod.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "1.2rem",
                  border: "2px solid #bfa76a"
                }}
              />
              <h3
                style={{
                  fontSize: "1.2rem",
                  margin: "0 0 0.7rem 0",
                  fontWeight: 700,
                  color: "#222"
                }}
              >
                {prod.name}
              </h3>
              <p
                style={{
                  fontWeight: 700,
                  color: "#bfa76a",
                  marginBottom: "0.7rem",
                  fontSize: "1.1rem"
                }}
              >
                ₹{prod.price}
              </p>
              <button
                style={{
                  marginTop: "auto",
                  background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
                  color: "#222",
                  border: "none",
                  borderRadius: "24px",
                  padding: "0.7rem 1.8rem",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  letterSpacing: 1,
                  boxShadow: "0 2px 8px #bfa76a33"
                }}
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="lux-footer"
        style={{
          marginTop: "4rem",
          background: "linear-gradient(90deg, #bfa76a 0%, #e7c873 100%)",
          color: "#222",
          textAlign: "center",
          padding: "2rem 0",
          fontSize: "1.1rem",
          fontWeight: 600,
          letterSpacing: 1,
          borderRadius: "18px 18px 0 0"
        }}
      >
        &copy; {new Date().getFullYear()} Luxuria Decor & Gifts. All rights reserved.
      </footer>
    </div>
  );
}

function HomePage() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHomePage /> : <DesktopHomePage />;
}

export default HomePage