import Image from "next/image";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { TracingBeam } from "@/app/components/ui/tracing-beam";

export default function Home() {
  return (
    <>
        <Hero />
        <TracingBeam className="">
          <AboutMe />
          <Projects />
          <Courses/>
          <Contact />
        </TracingBeam>
    </>
  );
}
