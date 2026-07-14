import { useEffect, useState } from "react";

export default function SolutionSection() {
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
        position: "relative",
        backgroundColor: "#fff",
        textAlign: "center",
        padding: mobile ? "70px 20px" : "100px 20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Background Circles */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: mobile ? "-70px" : "-150px",
            right: mobile ? "-70px" : "-150px",
            width: mobile ? "180px" : "400px",
            height: mobile ? "180px" : "400px",
            border: "8px solid orange",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: mobile ? "120px" : "200px",
            left: mobile ? "-90px" : "-150px",
            width: mobile ? "220px" : "450px",
            height: mobile ? "220px" : "450px",
            border: "8px solid orange",
            borderRadius: "50%",
          }}
        />

        {!mobile && (
          <>
            <div
              style={{
                position: "absolute",
                bottom: "600px",
                right: "230px",
                width: "270px",
                height: "270px",
                border: "5px solid orange",
                borderRadius: "50%",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "400px",
                left: "310px",
                width: "270px",
                height: "270px",
                border: "5px solid orange",
                borderRadius: "50%",
              }}
            />
          </>
        )}
      </div>

      <h2
        style={{
          fontSize: mobile ? "2rem" : "clamp(2.9rem,5vw,3.9rem)",
          fontWeight: "900",
          marginBottom: "20px",
          color: "#000",
          position: "relative",
          zIndex: 1,
          lineHeight: "1.3",
        }}
      >
        The Solution:
        <span style={{ color: "#00ccff" }}>
          {" "}
          Virtual <br />
          Internships
        </span>
      </h2>

      <p
        style={{
          fontSize: mobile ? "1.1rem" : "1.8rem",
          lineHeight: "1.8",
          fontWeight: "600",
          maxWidth: "800px",
          margin: "0 auto 60px auto",
          color: "#555",
          position: "relative",
          zIndex: 1,
        }}
      >
        Connecting educators, companies, and interns to create lasting,
        meaningful impact.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: mobile ? "25px" : "30px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        {["Companies", "Educators", "Interns", "Employees"].map(
          (heading, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                width: mobile ? "100%" : "450px",
                maxWidth: "450px",
                minHeight: mobile ? "260px" : "350px",
                borderRadius: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                padding: mobile ? "25px" : "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <h3
                style={{
                  fontSize: mobile ? "1.6rem" : "2rem",
                  fontWeight: "700",
                  color: "blue",
                }}
              >
                {heading}
              </h3>

              <p
                style={{
                  fontSize: mobile ? "1rem" : "1.7rem",
                  lineHeight: "1.7",
                  color: "#0a1118",
                }}
              >
                {heading === "Companies"
                  ? "Access remote, pre-vetted interns to drive growth and strengthen your future talent pipeline."
                  : heading === "Educators"
                  ? "Seamlessly embed internships into your curriculum, enhancing student employability and practical skills."
                  : heading === "Interns"
                  ? "Launch your career with global experience, valuable skills, and professional connections for future careers."
                  : "Students share their personal journeys, challenges, and growth during internships. They talk about real experiences."}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}