"use client";
import { useState } from "react";
import { companyData } from "@/data/companyData";

export default function CompanyDetailsBlock() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border border-[#D8DEE6] mt-12">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-4 font-bold text-[#001B4D]"
      >
        <span>Dane spółki</span>
        <span
          className={`text-xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="border-[#D8DEE6] px-6 py-5 text-sm leading-relaxed text-[#001B4D]">
            <p>
              <strong>{companyData.name}</strong>, {companyData.address}
            </p>
            <p>{companyData.court}</p>
            <p>
              KRS: {companyData.krs} &nbsp;•&nbsp; NIP: {companyData.nip}{" "}
              &nbsp;•&nbsp; Kapitał zakładowy: {companyData.shareCapital}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
