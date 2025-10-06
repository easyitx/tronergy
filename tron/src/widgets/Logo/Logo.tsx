import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none flex-shrink-0 w-[155px] h-[30px]">
      <Image
        src="/Logo.png"
        alt="Tron logo mark"
        width={155}
        height={30}
        className="w-[155px] h-[30px] min-w-[155px] min-h-[30px]"
        priority
        draggable={false}
      />
    </div>
  );
}
