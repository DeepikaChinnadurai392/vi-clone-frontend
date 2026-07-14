import { useRef, useEffect, useState } from "react";

export default function MediaCards() {
  const mediaRef = useRef(null);
  const [mobile, setMobile] = useState(false);

  const mediaCards = [
    { title: "Company A", image: "/image copy 3.png" },
    { title: "Company B", image: "/image copy.png" },
    { title: "Educator C", image: "/image3.png" },
    { title: "Intern D", image: "/image4.png" },
    { title: "Intern E", image: "/image5.png" },
    { title: "Intern G", image: "/image7.png" },
    { title: "Intern H", image: "/image8.png" },
    { title: "Intern I", image: "/image9.png" },
    { title: "Intern J", image: "/image10.png" },
    { title: "Intern K", image: "/image11.png" },
    { title: "Intern L", image: "/image12.png" },
  ];

  useEffect(() => {
    const checkScreen = () => {
      setMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const container = mediaRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const mouseLeaveHandler = () => {
      isDown = false;
      container.style.cursor = "grab";
    };

    const mouseUpHandler = () => {
      isDown = false;
      container.style.cursor = "grab";
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();

      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", mouseDownHandler);
    container.addEventListener("mouseleave", mouseLeaveHandler);
    container.addEventListener("mouseup", mouseUpHandler);
    container.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      container.removeEventListener("mousedown", mouseDownHandler);
      container.removeEventListener("mouseleave", mouseLeaveHandler);
      container.removeEventListener("mouseup", mouseUpHandler);
      container.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <section
      style={{
        padding: mobile ? "70px 20px" : "180px 100px",
        backgroundColor: "#186a75ff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: mobile ? "2rem" : "2.9rem",
          color: "#e6eff1ff",
          marginBottom: "40px",
          lineHeight: "1.3",
        }}
      >
        Trusted by Educators and Employers Worldwide
      </h2>

      <div
        ref={mediaRef}
        style={{
          display: "flex",
          gap: mobile ? "20px" : "50px",
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          cursor: "grab",
          paddingBottom: "15px",
        }}
      >
        {mediaCards.map((card, index) => (
          <div
            key={index}
            style={{
              minWidth: mobile ? "260px" : "400px",
              height: mobile ? "220px" : "300px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "0 0 auto",
              padding: "20px",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                maxWidth: mobile ? "200px" : "300px",
                maxHeight: mobile ? "180px" : "260px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}