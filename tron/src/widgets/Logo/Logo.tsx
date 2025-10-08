import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Tron logo mark"
      width={155}
      height={34}
      className="w-full h-full object-contain select-none"
      priority
      draggable={false}
    />
  );
}
