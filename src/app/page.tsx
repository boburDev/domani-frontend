"use client"
import Team from "@/components/Staff";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import dynamic from "next/dynamic";

import Container from "@/components/Container";
import HomeTop from "@/components/HomeTop";
import HomePartners from "@/components/HomePartners";
import HomeProjects from "@/components/HomeProjects";
import HomeServices from "@/components/HomeServices";
import HomePrinciples from "@/components/HomePrinciples";

// Dynamically import
const WorldMap = dynamic(() => import("@/components/WorldMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const Home = () => {
  return (
    <main>
      {/* home top bg */}
      <HomeTop />
      <Container>
        {/* map and counter  partners*/}
        <section>
          <div className="flex  pt-[42px] md:pt-[150px] lg:pt-[201px]">
            <Counter />
          </div>
          <div className="pt-[42px] md:pt-[150px] lg:pt-[328px]">
            <div className="max-w-[1650px] h-[200px] md:h-[450px] lg:h-[728px] flex justify-center ">
              <WorldMap />
            </div>
          </div>
        </section>
        {/* partners */}
        <HomePartners />
        {/* projects */}
        <HomeProjects />
        {/* about home */}
        {/* services */}
        <HomeServices />
        {/* principles */}
        <HomePrinciples />
        <Team />
        <section>
          <Contact page="/" />
        </section>
      </Container>
    </main>
  );
};

export default Home;
