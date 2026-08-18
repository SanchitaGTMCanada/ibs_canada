import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      {/* Temporary next section */}

      <section className="ibs-section bg-[#F6F4EF]">
        <div className="ibs-container">

          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.22em] text-[#087F8C]">
            About IBS
          </p>

          <h2 className="ibs-h2 max-w-[700px] text-[#0B1F3A]">
            Professional solutions built
            around people, purpose and
            long-term impact.
          </h2>

        </div>
      </section>
    </main>
  );
}