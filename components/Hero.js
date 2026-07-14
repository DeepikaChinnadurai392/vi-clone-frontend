import { useEffect, useState } from "react";
import { FaGraduationCap, FaHandsHelping, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
    <section
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* Scale whole desktop layout on mobile */}
      <div
        style={{
          transform: mobile ? "scale(0.42)" : "scale(1)",
          transformOrigin: "top left",
          width: mobile ? "238%" : "100%",
          height: mobile ? "720px" : "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              width: "65%",
              display: "flex",
              alignItems: "center",
              padding: "0 80px",
            }}
          >
            <div
              style={{
                marginTop: "-40px",
                color: "#333",
              }}
            >
              <h1
                style={{
                  fontSize: "4rem",
                  lineHeight: "1.2",
                  fontWeight: "900",
                  marginBottom: "30px",
                  fontFamily: "Poppins,sans-serif",
                }}
              >
                The only platform that
                <br />
                <span style={{ color: "#008B8B" }}>guarantees</span>
                real-world work
                <br />
                experience across the globe
              </h1>

              <p
                style={{
                  fontSize: "1.7rem",
                  color: "#666",
                  marginBottom: "40px",
                }}
              >
                Shaping tomorrow's workforce: one internship at a time
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Link
                    href="https://www.virtualinternships.com/companies/"
                    style={{
                      background: "#FF8C00",
                      color: "#fff",
                      padding: "22px 60px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontWeight: "700",
                      fontSize: "1.3rem",
                    }}
                  >
                    <FaGraduationCap />
                    Company: Hire
                  </Link>

                  <Link
                    href="https://www.virtualinternships.com/universities/"
                    style={{
                      background: "#fff",
                      color: "#333",
                      border: "2px solid #333",
                      padding: "22px 60px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontWeight: "700",
                      fontSize: "1.3rem",
                    }}
                  >
                    <FaHandsHelping />
                    Educators: Partner
                  </Link>
                </div>
                                <Link
                  href="https://www.virtualinternships.com/interns/"
                  style={{
                    background: "#008B8B",
                    color: "#fff",
                    padding: "22px 60px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    width: "fit-content",
                    fontWeight: "700",
                    fontSize: "1.3rem",
                  }}
                >
                  <FaCalendarAlt />
                  Interns: Apply
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              width: "35%",
              height: "100vh",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background Circle */}
            <div
              style={{
                position: "absolute",
                bottom: "180px",
                left: "-110px",
                width: "700px",
                height: "700px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,#00CED1 0%,#008B8B 100%)",
                zIndex: 0,
              }}
            />

            {/* Dark Shape */}
            <svg
              viewBox="0 0 800 1200"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            >
              <path
                d="M800 0
                   C520 140 580 150 480 420
                   C420 600 580 700 340 900
                   C200 1020 150 1080 0 1100
                   L900 1100
                   L1000 0 Z"
                fill="#062b2e"
              />
            </svg>

            {/* Orange Circle 1 */}
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                right: "-180px",
                width: "400px",
                height: "400px",
                border: "8px solid orange",
                borderRadius: "50%",
                zIndex: 0,
              }}
            />

            {/* Orange Circle 2 */}
            <div
              style={{
                position: "absolute",
                top: "120px",
                right: "150px",
                width: "360px",
                height: "360px",
                border: "8px solid orange",
                borderRadius: "50%",
                zIndex: 0,
              }}
            />
                        {/* Hero Image */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "88%",
                height: "97%",
                zIndex: 2,
              }}
            >
              <Image
                src="/image.png"
                alt="Girl studying"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}