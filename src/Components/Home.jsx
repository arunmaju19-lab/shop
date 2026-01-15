import React from "react";
import girl from "../assets/girl.png";
import img1 from "../assets/freeshipping.svg";
import img2 from "../assets/moneyback.svg";
import img3 from "../assets/payment.svg";
import img4 from "../assets/twentfour.svg";

const icons = [
  { id: 1, src: img1, alt: "free shipping", description: "on orders over $2000" },
  { id: 2, src: img2, alt: "money back", description: "money back guarantee" },
  { id: 3, src: img3, alt: "payment", description: "online consultation" },
  { id: 4, src: img4, alt: "24 support", description: "safe shopping guarantee" },
];

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${girl})` }}
     className="
  relative bg-no-repeat bg-cover bg-center
  min-h-screen md:h-[858px]
  w-full overflow-hidden
  flex flex-col 
"

    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ===== TEXT ===== */}
      <div className="relative z-10 font-solway px-4 md:px-28 pt-20 md:pt-0 h-full">
        <div className="max-w-xl text-white">

          {/* Heading */}
          <h1
            className="
              text-2xl sm:text-3xl md:text-4xl
              leading-snug font-semibold mb-4
              md:absolute md:top-30
            "
          >
            The World First Jewellery <br />
            E Commerce Platform <br />
            Explore The Future Talent
          </h1>

          {/* Paragraph */}
          <p
            className="
              text-sm leading-relaxed text-white/90
              md:absolute md:top-70
            "
          >
            Discover the future of jewelry shopping with our <br />
            innovative e-commerce platform, showcasing <br />
            exceptional talent and unique designs.
          </p>
        </div>
      </div>
{/* ===== BLUR SECTION WITH ICONS ===== */}
<div
  className="
    mt-auto
    relative md:absolute
    md:bottom-0 md:left-0
    w-full
    backdrop-blur-md bg-black/30
    px-4 py-6
    z-10
  "
>
  <div
    className="
      grid grid-cols-2 gap-6
      sm:grid-cols-4
      md:flex md:items-center md:justify-center md:gap-24
    "
  >
    {icons.map((icon) => (
      <div
        key={icon.id}
        className="flex flex-col items-center text-center gap-2"
      >
        <img
          src={icon.src}
          alt={icon.alt}
          className="h-10 w-10 md:h-12 md:w-12"
        />

        <p className="text-white text-sm font-medium capitalize">
          {icon.alt}
        </p>

        <p className="text-xs md:text-sm text-white/80">
          {icon.description}
        </p>
      </div>
    ))}
  </div>
</div>

</div>

  );
}

export default Home;
