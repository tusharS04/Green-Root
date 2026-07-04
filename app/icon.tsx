import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #24452f, #e0b84f)",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50% 45% 55% 45%",
            background: "#f7f1df",
            transform: "rotate(-28deg)",
            boxShadow: "10px 0 0 #406839",
          }}
        />
      </div>
    ),
    size,
  );
}
