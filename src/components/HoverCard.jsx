import { useState } from "react";

export default function HoverAccordion({ color, title, content, image, textColor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <div
  className="transition-all duration-500 ease-in-out 
  w-full rounded-2xl overflow-hidden cursor-pointer relative"
  style={{
    backgroundColor: color,
    color: textColor,
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
      {/* Accordion Header */}
      <div className="px-8 py-6 flex items-center justify-between">
        <h1 className="text-4xl my-font font-bold">{title}</h1>
      </div>

      {/* Accordion Expanded Content */}
      <div
        className={`transition-all duration-500 ease-in-out 
        overflow-hidden px-8`}
        style={{
          maxHeight: isHovered ? "300px" : "0px",
          opacity: isHovered ? 1 : 0,
          paddingBottom: isHovered ? "1.5rem" : "0",
        }}
      >
        <p className="text-lg w-2/3">{content}</p>
        {image && (
          <img
            src={image}
            alt="Accordion Visual"
            className="w-64 h-40 object-cover rounded-xl transition-all duration-500 absolute right-10 top-4"
          />
        )}
      </div>
    </div>
  );
}
