import { useState } from "react";

export default function HoverCard({
  title,
  content,
  image,
  bgColor = "var(--yellow)",
  textColor = "var(--red)",
  imageWidth = "w-40",
  imageHeight = "h-28",
  className = "",
}) {
  const [whenHover, setWhenHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setWhenHover(true)}
      onMouseLeave={() => setWhenHover(false)}
      className={`transition-all duration-500 w-full rounded-xl flex flex-col justify-start p-5 cursor-pointer overflow-hidden ${className}`}
      style={{
        backgroundColor: bgColor,
        maxHeight: whenHover ? "24rem" : "7rem", // smooth expand
        transition: "max-height 0.6s ease, background-color 0.3s ease",
      }}
    >
      <div className="flex justify-between items-start gap-4">
        {/* LEFT SIDE — Title + Content */}
        <div className="flex flex-col w-[70%]">
          <h1
            className="text-4xl my-font transition-colors duration-300"
            style={{ color: textColor }}
          >
            {title}
          </h1>

          <p
            className={`text-lg mt-3 transition-all duration-500 ease-in-out ${
              whenHover
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3"
            }`}
            style={{
              color: textColor,
              transitionDelay: whenHover ? "0.1s" : "0s", // syncs timing
            }}
          >
            {content}
          </p>
        </div>

        {/* RIGHT SIDE — Image */}
        {image && (
          <div
            className={`flex justify-end items-center transition-all duration-700 ease-in-out ${
              whenHover
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-5 scale-95"
            }`}
            style={{
              transitionDelay: whenHover ? "0.1s" : "0s", // matches text fade
            }}
          >
            <img
              src={image}
              alt={title}
              className={`rounded-xl object-cover ${imageWidth} ${imageHeight}`}
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
