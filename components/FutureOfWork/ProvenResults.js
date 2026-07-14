import { useEffect, useState } from "react";

export default function ProvenResults() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const results = [
    {
      number: "250k+",
      title: "Global Internships",
      description: "Available now and growing",
      color: "brown",
    },
    {
      number: "80+",
      title: "Countries",
      description: "Offering real world experience",
      color: "blue",
    },
    {
      number: "95%",
      title: "Intern Satisfaction",
      description: "Developing essential career skills",
      color: "red",
    },
    {
      number: "1 in 3",
      title: "Interns Hired",
      description: "Post-program completion",
      color: "goldenrod",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        padding: mobile ? "70px 20px" : "150px 25px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: mobile ? "2rem" : "clamp(2.5rem,5vw,3.5rem)",
          fontWeight: "900",
          marginBottom: mobile ? "45px" : "60px",
          lineHeight: "1.3",
        }}
      >
        <span style={{ color: "#000" }}>Proven Results: </span>
        <span style={{ color: "#008B8B" }}>Global Impact</span>
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: mobile ? "35px" : "90px",
        }}
      >
        {results.map((item, index) => (
          <div
            key={index}
            style={{
              width: mobile ? "100%" : "250px",
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: mobile ? "3rem" : "5.5rem",
                fontWeight: "900",
                color: item.color,
                lineHeight: "1",
                marginBottom: "15px",
              }}
            >
              {item.number}
            </div>

            <div
              style={{
                fontSize: mobile ? "1.4rem" : "2.2rem",
                fontWeight: "700",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                fontSize: mobile ? "1rem" : "1.5rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}