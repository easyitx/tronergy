"use client";
import Image from "next/image";
import React from "react";
import bgFilterSvg from "@/shared/assets/images/background-filter.svg";
const BgFilter = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[65vh]">
      <Image src={bgFilterSvg} alt="" fill priority className="object-cover" />
    </div>
  );
};

export default BgFilter;
