import { memo } from "react";

const charToUrl = (c) => `https://registry.npmmirror.com/@lobehub/fluent-emoji-modern/1.0.0/files/assets/${c}.svg`;

export const FluentEmoji = memo(({ emoji, size }) => {
  return (
    <img
      src={charToUrl(emoji.codePointAt(0).toString(16))}
      draggable={false}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
      }}
    />
  );
}, true);
