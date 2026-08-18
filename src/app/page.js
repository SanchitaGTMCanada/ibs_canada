import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      {/* =================================================
          TEMPORARY ABOUT SECTION
      ================================================= */}

      <section className="ibs-section bg-[#F6F4EF]">
        <div className="ibs-container">

          <div className="max-w-[760px]">
            <p
              className="
                mb-5
                text-[12px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#087F8C]
              "
            >
              About IBS
            </p>

            <div className="mb-6 h-[2px] w-[45px] bg-[#C6A15B]" />

            <h2
              className="
                ibs-h2
                text-[#0B1F3A]
              "
            >
              Professional solutions built
              around people, purpose and
              long-term impact.
            </h2>

            <p
              className="
                ibs-body
                mt-6
                max-w-[680px]
                text-[#6C7781]
              "
            >
              Innovative Business Solutions
              provides culturally tailored
              professional services designed
              to support organizations,
              communities and entrepreneurs.
            </p>
          </div>

        </div>
      </section>

      {/* =================================================
          TEMPORARY WHITE SPACE
      ================================================= */}

      <section className="h-[500px] bg-white" />
    </main>
  );
}