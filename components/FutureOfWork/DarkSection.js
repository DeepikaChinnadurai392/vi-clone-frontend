import { useEffect, useState } from "react";

export default function DarkSection() {
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
        backgroundColor: "#0D1B2A",
        color: "white",
        padding: mobile ? "90px 20px" : "250px 75px",
        boxSizing: "border-box",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bottom Left Circle */}
      <div
        style={{
          position: "absolute",
          bottom: mobile ? "-70px" : "-165px",
          left: mobile ? "-70px" : "-165px",
          width: mobile ? "170px" : "400px",
          height: mobile ? "170px" : "450px",
          backgroundColor: "#00ccff",
          borderRadius: "50%",
        }}
      />

      {/* Top Right Circle */}
      <div
        style={{
          position: "absolute",
          top: mobile ? "-70px" : "-165px",
          right: mobile ? "-70px" : "-165px",
          width: mobile ? "170px" : "450px",
          height: mobile ? "170px" : "370px",
          backgroundColor: "#FFD700",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: mobile ? "2rem" : "clamp(3rem,5vw,4rem)",
            fontWeight: "900",
            marginBottom: "30px",
            lineHeight: "1.2",
          }}
        >
          The Future of Work is,
          <br />
          Changing.
        </h2>

        <p
          style={{
            fontSize: mobile ? "1.1rem" : "1.7rem",
            lineHeight: mobile ? "1.8" : "2",
            fontWeight: "500",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#ccc",
          }}
        >
          As AI technology reshapes industries, work-based learning is more
          essential than ever. Real-world experience not only empowers learners
          but also equips employers with fresh talent ready to drive innovation.
        </p>
      </div>
    </section>
  );
}