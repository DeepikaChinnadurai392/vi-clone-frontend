import React, { useEffect, useState } from "react";

export default function Footer() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div>
      <footer
        style={{
          backgroundColor: "#001f3f",
          color: "white",
          padding: mobile ? "30px 20px" : "30px 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: mobile ? "center" : "flex-start",
            gap: mobile ? "40px" : "60px",
          }}
        >
          {/* Logos */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: mobile ? "center" : "flex-start",
              gap: "18px",
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: mobile ? "180px" : "250px",
                height: "auto",
              }}
            />

            <img
              src="/logo2.png"
              alt="Logo2"
              style={{
                width: mobile ? "150px" : "190px",
                height: "auto",
              }}
            />

            <img
              src="/logo3.png"
              alt="Logo3"
              style={{
                width: mobile ? "150px" : "190px",
                height: "auto",
              }}
            />

            <img
              src="/logo4.png"
              alt="Logo4"
              style={{
                width: mobile ? "150px" : "190px",
                height: "auto",
              }}
            />

            <img
              src="/logo5.png"
              alt="Logo5"
              style={{
                width: mobile ? "150px" : "190px",
                height: "auto",
              }}
            />

            <img
              src="/logo6.png"
              alt="Logo6"
              style={{
                width: mobile ? "150px" : "190px",
                height: "auto",
              }}
            />
          </div>

          {/* Footer Links */}
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: mobile ? "center" : "space-evenly",
              flexWrap: "wrap",
              gap: mobile ? "35px" : "70px",
              width: "100%",
            }}
          >
                        {/* Column 1 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: mobile ? "18px" : "35px",
              }}
            >
              <a href="https://www.virtualinternships.com/companies/" style={{ color: "white", textDecoration: "none" }}>
                Companies
              </a>

              <a href="https://www.virtualinternships.com/universities/" style={{ color: "white", textDecoration: "none" }}>
                Educators
              </a>

              <a href="https://www.virtualinternships.com/interns/" style={{ color: "white", textDecoration: "none" }}>
                Interns
              </a>
            </div>

            {/* Column 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: mobile ? "18px" : "35px",
              }}
            >
              <a href="https://www.virtualinternships.com/our-mission/" style={{ color: "white", textDecoration: "none" }}>
                Our Mission
              </a>

              <a href="https://www.virtualinternships.com/our-team/" style={{ color: "white", textDecoration: "none" }}>
                Our Team
              </a>

              <a href="https://www.virtualinternships.com/join-us/" style={{ color: "white", textDecoration: "none" }}>
                Join Us
              </a>

              <a href="https://www.virtualinternships.com/press/" style={{ color: "white", textDecoration: "none" }}>
                Press
              </a>

              <a href="https://blog.virtualinternships.com/" style={{ color: "white", textDecoration: "none" }}>
                Blog
              </a>

              <a href="https://www.virtualinternships.com/contact-us/" style={{ color: "white", textDecoration: "none" }}>
                Contact Us
              </a>
            </div>

            {/* Column 3 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: mobile ? "18px" : "35px",
              }}
            >
              <a href="https://www.facebook.com/virtualintern/" style={{ color: "white", textDecoration: "none" }}>
                Facebook
              </a>

              <a href="https://www.instagram.com/virtualinternships/" style={{ color: "white", textDecoration: "none" }}>
                Instagram
              </a>

              <a href="https://x.com/onlineinterns" style={{ color: "white", textDecoration: "none" }}>
                Twitter
              </a>

              <a href="https://www.linkedin.com/company/virtual-internships" style={{ color: "white", textDecoration: "none" }}>
                LinkedIn
              </a>

              <a href="https://www.tiktok.com/@virtual_internships" style={{ color: "white", textDecoration: "none" }}>
                TikTok
              </a>

              <a href="https://www.youtube.com/VirtualInternships" style={{ color: "white", textDecoration: "none" }}>
                YouTube
              </a>
            </div>

          </div>
        </div>
      </footer>
            <div
        style={{
          backgroundColor: "#001f3f",
          color: "white",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          padding: mobile ? "20px" : "25px 40px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: mobile ? "15px" : "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: mobile ? "0.95rem" : "1.1rem",
            }}
          >
            © 2025 Virtual Internships. All rights reserved.
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: mobile ? "15px" : "30px",
              fontSize: mobile ? "0.95rem" : "1rem",
            }}
          >
            <a
              href="https://www.virtualinternships.com/policies/privacy"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="https://www.virtualinternships.com/policies/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Terms of Service
            </a>

            <a
              href="https://www.virtualinternships.com/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}