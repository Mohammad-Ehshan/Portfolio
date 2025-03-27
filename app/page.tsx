import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";
import TechStack from "@/components/techstack";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { gridItems, products } from "@/Data/Index";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroParallax products={products}/>
   <AboutMe/>
   <TechStack/>
   <Projects/>

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
