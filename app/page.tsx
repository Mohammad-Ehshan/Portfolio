import AboutMe from "@/components/aboutme";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import TechStack from "@/components/techstack";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/Data/Index";

export default function Home() {
  return (
   <>
   <HeroParallax products={products}/>
   <AboutMe/>
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
