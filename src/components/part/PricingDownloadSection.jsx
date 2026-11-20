
import { Download, FileText, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function PricingDownloadSection() {
  return (
    <section className="relative overflow-hidden bg-[#F1F7F7] px-5 py-16 sm:py-20 lg:py-24">
      {/* Decorative background elements */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#087C83]/10" />
      <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border border-[#087C83]/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#102A43] via-[#123B57] to-[#087C83] px-7 py-12 shadow-xl sm:px-12 lg:px-16 lg:py-14">
          
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-14 h-60 w-60 rounded-full border border-white/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C69D50]/40 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E5C77F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C69D50]" />
                Pricing & Information
              </span>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
                Explore Our Pricing
                <br />
                <span className="text-[#A8D9D8]">
                  & Service Details
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Get a clear overview of our pricing and service information.
                Download our pricing document to review the details and find
                the right solution for your organization.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#A8D9D8]" />
                  Clear pricing information
                </span>
                <span className="hidden h-4 w-px bg-white/25 sm:block" />
                <span className="flex items-center gap-2">
                  <FileText size={16} className="text-[#A8D9D8]" />
                  Microsoft Word document
                </span>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-[310px] rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#087C83] shadow-lg">
                  <FileText size={34} strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  Pricing Document
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/65">
                  Download our pricing information in an editable Word format.
                </p>

                <a
                  href="/downloads/pricing.docx"
                  download
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#C69D50] px-5 py-4 text-xs font-bold uppercase tracking-wider text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0B968] hover:shadow-lg"
                >
                  <Download size={17} />
                  Download Pricing
                  <ArrowUpRight size={16} />
                </a>

                <p className="mt-4 text-center text-[10px] text-white/50">
                  Microsoft Word (.docx)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
