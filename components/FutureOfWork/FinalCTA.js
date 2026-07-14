import React, { useEffect, useState } from "react";

export default function FinalCTA() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        minHeight: mobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        backgroundColor: "#c7d4d8",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          width: mobile ? "100%" : "55%",
          padding: mobile ? "40px 25px" : "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: mobile ? "2.2rem" : "3.8rem",
            fontWeight: "900",
            color: "#004466",
            lineHeight: "1.2",
            marginBottom: "25px",
          }}
        >
          The only platform that
          <br />
          <span style={{ color: "#008B8B" }}>guarantees</span> real-world work
          <br />
          experience across the globe
        </h2>

        <p
          style={{
            fontSize: mobile ? "1.1rem" : "1.8rem",
            color: "#222",
            marginBottom: "35px",
            lineHeight: "1.6",
          }}
        >
          Shaping tomorrow’s workforce: one internship at a time
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            gap: "18px",
          }}
        >
          <button
            style={{
              padding: mobile ? "16px" : "18px 35px",
              fontSize: mobile ? "1rem" : "1.3rem",
              fontWeight: "700",
              background: "#dd8d16",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Company: Hire
          </button>

          <button
            style={{
              padding: mobile ? "16px" : "18px 35px",
              fontSize: mobile ? "1rem" : "1.3rem",
              fontWeight: "700",
              background: "#ffffff",
              color: "#222",
              border: "2px solid #333",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Educators: Partner
          </button>

          <button
            style={{
              padding: mobile ? "16px" : "18px 35px",
              fontSize: mobile ? "1rem" : "1.3rem",
              fontWeight: "700",
              background: "#008B8B",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Interns: Apply
          </button>
        </div>
      </div>
            {/* RIGHT SIDE */}
      <div
        style={{
          width: mobile ? "100%" : "45%",
          minHeight: mobile ? "500px" : "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Teal Background Circle */}
        <div
          style={{
            position: "absolute",
            bottom: mobile ? "40px" : "180px",
            left: mobile ? "-80px" : "-110px",
            width: mobile ? "350px" : "700px",
            height: mobile ? "350px" : "700px",
            background:
              "radial-gradient(circle at center,#008B8B 0%,#00CED1 100%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        {/* Dark SVG Shape */}
        <svg
          viewBox="0 0 800 1200"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
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
            fill="#044b41"
          />
        </svg>

        {/* Orange Circle 1 */}
        <div
          style={{
            position: "absolute",
            bottom: mobile ? "20px" : "50px",
            right: mobile ? "-80px" : "-200px",
            width: mobile ? "180px" : "400px",
            height: mobile ? "180px" : "400px",
            border: "6px solid orange",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />

        {/* Orange Circle 2 */}
        <div
          style={{
            position: "absolute",
            bottom: mobile ? "220px" : "500px",
            right: mobile ? "60px" : "160px",
            width: mobile ? "180px" : "400px",
            height: mobile ? "180px" : "400px",
            border: "6px solid orange",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />

        {/* Small Orange Circle */}
        <div
          style={{
            position: "absolute",
            bottom: mobile ? "340px" : "800px",
            right: mobile ? "20px" : "-75px",
            width: mobile ? "60px" : "110px",
            height: mobile ? "60px" : "110px",
            border: "4px solid orange",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
                {/* Girl Image */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: mobile ? "100%" : "88%",
            height: mobile ? "90%" : "97%",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <img
            src="/image.png"
            alt="Girl studying"
            style={{
              width: mobile ? "85%" : "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: mobile ? "center bottom" : "center",
            }}
          />
        </div>
      </div>
    </section>
  );
}