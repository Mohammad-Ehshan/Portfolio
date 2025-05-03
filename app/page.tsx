import AboutMe from "@/components/aboutme";
import Contact from "@/components/contact";
import ExperiencePage from "@/components/Experience";
import Projects from "@/components/projects";
import Stats from "@/components/stats";
import TechStack from "@/components/techstack";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { gridItems, products } from "@/Data/Index";
import Link from "next/link";
// import { BentoGrid,BentoGridItem } from "@/components/ui/bento-grid";


export default function Home() {
  return (
   <>
   <HeroParallax products={products}/>
   <Stats/>
   <AboutMe/>
   <ExperiencePage/>
   <div className="text-center ">
   <Link href={"/experience"}><Button className="bg-gradient-to-r from-violet-500 to-blue-500 font-bold px-20 cursor-pointer">See More</Button></Link>
   </div>
   <Projects/>
   <TechStack/> 
   <Contact/>

   {/* it was making teh parallax effect slow  */}
   {/* <BentoGrid className="mx-24">
   {gridItems.map(({id,title,description,className,img,imgClassName,titleClassName,spareImg})=>(
        <BentoGridItem
        id={id}
        key={id}
        title={title}
        description={description}
        className={className}
        img={img}
        imgClassName={imgClassName}
        titleClassName={titleClassName}
        spareImg={spareImg}
        />
      ))}
   </BentoGrid> */}
   </>
  );
}
