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
        overflowX: "hidden",
        overflowY: "hidden",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          minHeight: mobile ? "auto" : "100vh",
          width: "100%",
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            width: mobile ? "100%" : "65%",
            display: "flex",
            alignItems: "center",
            justifyContent: mobile ? "center" : "flex-start",
            padding: mobile ? "40px 22px" : "0 80px",
          }}
        >
          <div
            style={{
              marginTop: mobile ? "20px" : "-40px",
              color: "#333",
              width: "100%",
              textAlign: mobile ? "center" : "left",
            }}
          >
            <h1
              style={{
                fontSize: mobile ? "2.2rem" : "4rem",
                lineHeight: "1.2",
                fontWeight: "900",
                marginBottom: "30px",
                fontFamily: "Poppins,sans-serif",
              }}
            >
              The only platform that
              {!mobile && <br />}
              <span style={{ color: "#008B8B" }}>guarantees</span>
              real-world work
              {!mobile && <br />}
              experience across the globe
            </h1>

            <p
              style={{
                fontSize: mobile ? "1.1rem" : "1.7rem",
                color: "#666",
                marginBottom: "35px",
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
                  flexDirection: mobile ? "column" : "row",
                  gap: "20px",
                }}
              >
                <Link
                  href="https://www.virtualinternships.com/companies/"
                  style={{
                    background: "#FF8C00",
                    color: "#fff",
                    padding: mobile ? "18px" : "22px 60px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: "700",
                    fontSize: mobile ? "1rem" : "1.3rem",
                    width: mobile ? "100%" : "auto",
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
                    padding: mobile ? "18px" : "22px 60px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: "700",
                    fontSize: mobile ? "1rem" : "1.3rem",
                    width: mobile ? "100%" : "auto",
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
                  padding: mobile ? "18px" : "22px 60px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  width: mobile ? "100%" : "fit-content",
                  fontWeight: "700",
                  fontSize: mobile ? "1rem" : "1.3rem",
                  alignSelf: mobile ? "stretch" : "flex-start",
                }}
              >
                <FaCalendarAlt />
                Interns: Apply
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {/* RIGHT SIDE */}

<div
  style={{
    width: mobile ? "100%" : "35%",
    height: mobile ? "420px" : "100vh",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Background Circle */}
  <div
    style={{
      position: "absolute",
      bottom: mobile ? "40px" : "180px",
      left: mobile ? "-80px" : "-110px",
      width: mobile ? "350px" : "700px",
      height: mobile ? "350px" : "700px",
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
      bottom: mobile ? "20px" : "40px",
      right: mobile ? "-100px" : "-180px",
      width: mobile ? "220px" : "400px",
      height: mobile ? "220px" : "400px",
      border: "8px solid orange",
      borderRadius: "50%",
      zIndex: 0,
    }}
  />

  {/* Orange Circle 2 */}
  <div
    style={{
      position: "absolute",
      top: mobile ? "20px" : "120px",
      right: mobile ? "40px" : "150px",
      width: mobile ? "180px" : "360px",
      height: mobile ? "180px" : "360px",
      border: "8px solid orange",
      borderRadius: "50%",
      zIndex: 0,
    }}
  />

  {/* Small Orange Circle */}
  <div
    style={{
      position: "absolute",
      top: mobile ? "10px" : "40px",
      right: mobile ? "15px" : "-30px",
      width: mobile ? "60px" : "110px",
      height: mobile ? "60px" : "110px",
      border: "5px solid orange",
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
      width: mobile ? "100%" : "88%",
      height: mobile ? "95%" : "97%",
      zIndex: 2,
    }}
  >
    <Image
      src="/image.png"
      alt="Girl studying"
      fill
      priority
      style={{
        objectFit: "contain",
        objectPosition: mobile ? "center bottom" : "center",
      }}
    />
  </div>
</div>
      </div>
    </section>
  );
}