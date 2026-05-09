import Image from "next/image";

export function getPlaceholderImage(src: string) {
  // If no image exists during development, we'll return the src.
  // In production it will fail if it doesn't exist, which is expected.
  // Alternatively, we can export a component that handles errors and renders a gray box.
  return src;
}
