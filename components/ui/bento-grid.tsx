// // it is making the website slow 

// 'use client'

// import { cn } from "@/lib/utils";
// import { useState } from "react";
// import { IoCopyOutline } from "react-icons/io5";
// // import WorldMap from "./world-map";
// import { sampleDots } from "@/Data/Index";
// // import { Vortex } from "./vortex";

// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   id,
//   img,
//   imgClassName,
//   titleClassName,
//   spareImg,
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: React.ReactNode;
//   icon?: React.ReactNode;
//   id?: number;
//   img?: string;
//   imgClassName?: string;
//   titleClassName?: string;
//   spareImg?: string;
// }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy=()=>{
//     navigator.clipboard.writeText('ashmes16@gmail.com');

//     setCopied(true);
//   }

//   return (
//     <div
//       className={cn(
//         "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] bg-[#050a17]",
//         className
//       )}
//     >
//       <div className={`${id === 6 && 'flex justify-center'} h-full`}>
//         <div className="w-full h-full absolute">
//           {img && (
//             <img
//               src={img}
//               alt={img}
//               className={cn(imgClassName, `object-cover, object-center`)}
//             />
//           )}
//         </div>
//         <div
//           className={`absolute right-0 -bottom-5 ${
//             id === 5 && "w-full opacity-80"
//           }`}
//         >
//           {spareImg && (
//             <img
//               src={spareImg}
//               alt={spareImg}
//               className={"object-cover, object-center w-full h-full"}
//             />
//           )}
//         </div>
//         {id === 6 && (
//             <Vortex>
//             <div className="relative z-50 flex items-center justify-center text-white font-bold" />
//             </Vortex>
//         )}

//         <div
//           className={cn(
//             titleClassName,
//             "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
//           )}
//         >
//           <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
//             {description}
//           </div>
//           <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
//             {title}
//           </div>
//         {id===2 && <WorldMap dots={sampleDots} />}

//         {id===3 && (
//           <div className="flex gap-1 g:gap-5 w-fit absolute -right-3 lg:-right-2">
//            <div className="flex flex-col gap-3 lg:gap-8">
//              {['React.js','Next.js','TypeScript'].map((item)=>(
//               <span key={item} className="py-2 lg:py4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10132E]">
//                 {item}
//                 </span>
//              ))}
//              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
//            </div>
//            <div className="flex flex-col gap-3 lg:gap-8">
//            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
//              {['Node.js','Express.js','MongoDb'].map((item)=>(
//               <span key={item} className="py-2 lg:py4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg bg-[#10132E]">
//                 {item}
//                 </span>
//              ))}
//            </div>
//           </div>
//         )}

//         {id===6 && (
//           <div className="mt-5 relative">
//             <div className={`absolute -bottom-5 right-0`}>
             
//             </div>
//             <button
//       onClick={handleCopy}
//       className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
//         copied 
//           ? 'bg-blue-900 text-white' 
//           : 'bg-[#161a31] hover:bg-[#1e2247] text-gray-200'
//       }`}
//       aria-label={copied ? 'Email copied' : 'Copy email to clipboard'}
//     >
//       <IoCopyOutline className="text-lg" />
//       <span>{copied ? 'Copied!' : 'ashmes16@gmail.com'}</span>
//     </button>
//           </div>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// };
