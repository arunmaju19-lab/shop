import React from "react";
import girl from "../assets/girl.png";
import img1 from "../assets/freeshipping.svg";
import img2 from "../assets/moneyback.svg";
import img3 from "../assets/payment.svg";
import img4 from "../assets/twentfour.svg";

const icons = [
  { id: 1, src: img1, alt: "free shipping", description:"on orders over $2000" },
  { id: 2, src: img2, alt: "money back", description:"money back guarantee" },
  { id: 3, src: img3, alt: "payment", description:"online consultation" },
  { id: 4, src: img4, alt: "24 support", description:"safe shopping guarantee" },
];

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${girl})` }}
      className="relative bg-no-repeat bg-cover bg-center h-[858px] w-full overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* TEXT */}
      <div className="relative h-full flex items-center px-28 z-10 font-solway">
        <div className="max-w-xl text-white ">
          <h1 className="text-4xl leading-snug font-semibold mb-4 absolute top-30">
            The World First Jewellery <br />
            E Commerce Platform <br />
            Explore The Future Talent
          </h1>

          <p className="text-sm leading-relaxed text-white/90 absolute top-70">
            Discover the future of jewelry shopping with our <br />
            innovative e-commerce platform, showcasing <br />
            exceptional talent and unique designs.
          </p>
        </div>
      </div>

     {/* BLUR SECTION WITH ICONS */}
<div
  className="
    absolute bottom-0 left-1/2 -translate-x-1/2
    w-[1440px] h-[200px]
    backdrop-blur-md bg-black/30
    flex items-center justify-center
    gap-24
    z-10
  "
>
  {icons.map((icon) => (
    <div
      key={icon.id}

      className="flex flex-col items-center text-center gap-2"
    >
      <img src={icon.src} alt={icon.alt} className="h-12 w-12" />
    
      <p className="text-white text-sm font-medium">
        {icon.alt}
        <br />
         </p>
        <p className="text-sm">
 {icon.description}
        </p>
       
     
    </div>
  ))}
</div>

    </div>
  );
}

export default Home;
