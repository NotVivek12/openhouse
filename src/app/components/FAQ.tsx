// 'use client';
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaPlus, FaMinus } from 'react-icons/fa';

// const faqs = [
//     {
//         question: "What is the purpose of this event?",
//         answer: "The event is designed to be a hub of innovation, technology, and creativity, bringing together diverse minds to explore cutting-edge ideas, participate in hands-on activities, and engage in insightful discussions."
//     },
//     {
//         question: "Who can participate?",
//         answer: "This event is open to everyone! Whether you're a student, entrepreneur, professional, or just a keen learner, there's something for you. With a mix of tech and non-tech exhibits, engaging talks, and interactive stalls, it's a space for all to connect, learn, and grow."
//     },
//     {
//         question: "Is there a registration fee?",
//         answer: "No, entry is absolutely free! We believe in making knowledge and innovation accessible to all, so everyone is welcome to attend without any cost."
//     },
//     {
//         question: "Where is the event taking place?",
//         answer: "The event will be held on the lawn of Cambridge Institute of Technology, providing a vibrant and open space for exhibits, discussions, and interactive sessions."
//     },
//     {
//         question: "Do I need to register in advance?",
//         answer: "Yes, registering in advance ensures you make the most of the event. It allows you to receive important updates, secure your participation in workshops and more."
//     },
//     {
//         question: "Will there be prizes for winners?",
//         answer: "Yes! There will be exciting prizes for the best projects and ideas."
//     }
// ];

// const FAQ = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(null);

//     const toggleFAQ = (index: number) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="py-6 sm:py-14 px-4 sm:px-6 relative faq-section">
//             <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
//                 <motion.h1
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="font-['BS'] text-4xl sm:text-5xl mt-10 z-50 font-bold text-[#141414]"
//                 >
//                     FAQ
//                 </motion.h1>
//             </div>

//             <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
//                 {faqs.map((faq, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                         className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-[#9EE666]/30 hover:border-[#9EE666]/50 hover:shadow-md transition duration-300 w-full"
//                     >
//                         <button
//                             className="flex justify-between items-center w-full text-left text-lg sm:text-xl font-bold text-gray-800 focus:outline-none osk-font"
//                             onClick={() => toggleFAQ(index)}
//                         >
//                             <span className="pr-2">{faq.question}</span>
//                             <span className="bg-[#9EE666]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center">
//                                 {openIndex === index ?
//                                     <FaMinus className="text-[#67B044]" /> :
//                                     <FaPlus className="text-[#67B044]" />
//                                 }
//                             </span>
//                         </button>
//                         <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={openIndex === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="overflow-hidden"
//                         >
//                             <p className="text-gray-600 mt-3 pl-1 osk-font">{faq.answer}</p>
//                         </motion.div>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Contact link */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//                 viewport={{ once: true }}
//                 className="text-center mt-12 sm:mt-16 mb-6 sm:mb-10"
//             >
//                 <p className="text-gray-700 mb-4 osk-font text-xl sm:text-2xl font-semibold">Still have questions?</p>
//                 <a
//                     href="mailto:openhouse@cambridge.edu.in"
//                     className="inline-flex items-center px-6 py-3 bg-[#67B044] text-white font-bold rounded-lg hover:bg-[#67B044]/90 transition-all duration-300 osk-font text-lg sm:text-xl tracking-wider"
//                 >
//                     Contact Us
//                 </a>
//             </motion.div>

//             {/* Add inline style for osk-font class */}
//             <style jsx>{`
//                 .faq-section .osk-font {
//                     font-family: 'OSK', sans-serif !important;
//                     letter-spacing: 0.04em;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default FAQ;









'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is the purpose of this event?",
    answer: "A nexus for radical innovation. We've built a space where tech and creativity collide to spark the next generation of Bengaluru's digital evolution."
  },
  {
    question: "Who can participate?",
    answer: "Inclusive by design. Whether you're a founder, a student, or a creative, if you have a pulse for progress, you belong here."
  },
  {
    question: "Is there a registration fee?",
    answer: "Accessibility is our core protocol. Knowledge is free. Entry is free. The only cost is your curiosity."
  },
  {
    question: "Where is the event taking place?",
    answer: "The Great Lawn at CITech. An open-air campus reimagined as a high-tech arena for hands-on exploration."
  },
  {
    question: "Do I need to register in advance?",
    answer: "Stay ahead of the curve. Pre-registration grants you priority access to exclusive workshops and real-time event telemetry."
  },
  {
    question: "Will there be prizes for winners?",
    answer: "Innovation pays. We are awarding significant capital and resources to the most disruptive projects and visionary ideas."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 sm:py-48 px-6 lg:px-12 bg-[#FAF9F6] overflow-hidden font-sans">
      
      {/* SEAMLESS BLEED: Ambient "Floating" blobs for depth */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#9EE666]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER: Soft Typographic Sculpture */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-6">/ System.Core.Inquiry</span>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tight text-[#1A1A1A] leading-[0.85]">
              Curious <br /> 
              <span className="italic font-serif font-light text-zinc-400">Mindset.</span>
            </h2>
          </motion.div>
        </div>

        {/* ACCORDION: The Seamless Flow */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-700 ${
                  isOpen ? 'bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]' : 'bg-transparent'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-10 px-8 md:px-12 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-8">
                    <span className={`text-xs font-mono transition-colors ${isOpen ? 'text-[#9EE666]' : 'text-zinc-300'}`}>
                      0{index + 1}
                    </span>
                    <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-all duration-500 ${
                      isOpen ? 'text-black' : 'text-zinc-500 hover:text-black'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Minimalist "Bloom" Icon */}
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: isOpen ? 1.5 : 1, opacity: isOpen ? 0 : 1 }}
                      className="absolute inset-0 border border-zinc-200 rounded-full" 
                    />
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isOpen ? 'bg-[#9EE666] scale-[2.5]' : 'bg-black'}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-8 md:px-[6.5rem] pb-12">
                        <motion.p 
                          initial={{ y: 10 }}
                          animate={{ y: 0 }}
                          className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-normal"
                        >
                          {faq.answer}
                        </motion.p>
                        
                        <div className="mt-10 flex gap-2">
                          <div className="h-1 w-12 bg-[#9EE666] rounded-full" />
                          <div className="h-1 w-1 bg-zinc-200 rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER: Integrated Signal */}
        <motion.div 
          className="mt-32 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-zinc-400 font-medium">Haven&apos;t found your answer?</p>
          <a 
            href="mailto:openhouse@cambridge.edu.in"
            className="px-10 py-5 bg-black text-white rounded-full font-bold tracking-tight hover:bg-[#9EE666] hover:text-black transition-all duration-500 shadow-xl shadow-black/5"
          >
            Initiate Real-time Chat
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;










// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const faqs = [
//   {
//     topic: "VISION",
//     question: "The Core Intent",
//     answer: "A radical collision of Bengaluru's tech ecosystem. We've architected a space where engineering discipline meets creative chaos to catalyze the next era of innovation."
//   },
//   {
//     topic: "ACCESS",
//     question: "Participation Protocol",
//     answer: "Open to the visionaries. Students, founders, and the terminally curious. If you are building the future, you are already invited."
//   },
//   {
//     topic: "CAPITAL",
//     question: "Financial Friction",
//     answer: "Zero. Entry is an open protocol. We believe high-level innovation should be accessible without financial gating."
//   },
//   {
//     topic: "GEO",
//     question: "Physical Coordinates",
//     answer: "The Great Lawn @ CITech. An outdoor campus transformed into a high-density sensory and technical arena."
//   },
//   {
//     topic: "SYNC",
//     question: "Pre-Registration",
//     answer: "Essential for workflow. Early sync ensures priority access to workshops and real-time event telemetry via our digital hub."
//   }
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   return (
//     <section className="bg-[#0e0e0e] text-[#e0e0e0] py-32 lg:py-48 px-6 lg:px-20 font-sans selection:bg-[#9EE666] selection:text-black">
//       <div className="max-w-[1800px] mx-auto">
        
//         {/* HEADER: Massive Displacement Typography */}
//         <div className="flex flex-col mb-40 border-l border-zinc-800 pl-8">
//           <motion.p 
//             initial={{ opacity: 0, x: -10 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="text-[10px] font-black tracking-[0.6em] text-zinc-500 mb-6 uppercase"
//           >
//             / Query_Interface_v2.6
//           </motion.p>
//           <h2 className="text-[15vw] lg:text-[12vw] font-black leading-[0.7] uppercase tracking-tighter">
//             Answ<span className="italic font-light text-zinc-600">er</span><br />
//             <span className="text-[#9EE666]">Grid.</span>
//           </h2>
//         </div>

//         {/* FAQ CONTENT: The Monolith Stack */}
//         <div className="flex flex-col">
//           {faqs.map((faq, index) => {
//             const isActive = activeIndex === index;
//             return (
//               <div 
//                 key={index}
//                 className="relative group cursor-pointer"
//                 onMouseEnter={() => setActiveIndex(index)}
//               >
//                 {/* The "Bleed" Background - Appears on Hover/Active */}
//                 <motion.div 
//                   className="absolute inset-0 bg-zinc-900/30 -z-10 origin-left"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: isActive ? 1 : 0 }}
//                   transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//                 />

//                 <div className="py-12 lg:py-20 border-t border-zinc-800 flex flex-col lg:flex-row items-baseline transition-all duration-700 ease-[0.16, 1, 0.3, 1]">
                  
//                   {/* Meta Column */}
//                   <div className="lg:w-1/4 flex items-center gap-6 mb-8 lg:mb-0">
//                     <span className={`text-xs font-mono transition-colors ${isActive ? 'text-[#9EE666]' : 'text-zinc-600'}`}>
//                       (0{index + 1})
//                     </span>
//                     <span className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">
//                       {faq.topic}
//                     </span>
//                   </div>

//                   {/* Question Column */}
//                   <div className="lg:w-3/4">
//                     <h3 className={`text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter transition-all duration-700 ${
//                       isActive ? 'text-white translate-x-4' : 'text-zinc-700 group-hover:text-zinc-400'
//                     }`}>
//                       {faq.question}
//                     </h3>

//                     {/* Integrated Answer Reveal */}
//                     <AnimatePresence>
//                       {isActive && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0, y: 20 }}
//                           animate={{ height: 'auto', opacity: 1, y: 0 }}
//                           exit={{ height: 0, opacity: 0, y: 10 }}
//                           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//                           className="overflow-hidden"
//                         >
//                           <div className="pt-12 pb-6 max-w-3xl">
//                             <p className="text-xl md:text-3xl leading-tight font-medium text-zinc-400 mb-10">
//                               {faq.answer}
//                             </p>
//                             <motion.div 
//                                initial={{ width: 0 }}
//                                animate={{ width: "100%" }}
//                                className="h-[2px] bg-[#9EE666]" 
//                             />
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* FOOTER: Technical Signature */}
//         <div className="mt-40 pt-12 border-t border-zinc-800 flex justify-between items-end">
//           <div className="text-left">
//              <h4 className="text-4xl font-black italic tracking-tighter text-zinc-800 group-hover:text-white transition-colors cursor-default">
//                 CIT<span className="not-italic text-[#9EE666]">ECH.</span>
//              </h4>
//           </div>
//           <a 
//             href="mailto:openhouse@cambridge.edu.in"
//             className="group flex flex-col items-end"
//           >
//              <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase mb-2">Request_Access</span>
//              <span className="text-3xl md:text-5xl font-bold tracking-tighter border-b-4 border-[#9EE666] leading-none group-hover:text-[#9EE666] transition-all">
//                 Send Packet.
//              </span>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FAQ;