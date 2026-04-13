// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Schedule() {
//   const scheduleBlocks = [
//     {
//       time: '10:00 AM - 11:30 AM',
//       title: 'OPENING CEREMONY',
//       location: 'Main Stage',
//       activities: [
//         { name: 'WELCOME ADDRESS', description: 'Introduction to CIT Open House 2026' },
//         { name: 'INAUGURAL ADDRESS', description: 'By the Chairman of AICTE' },
//         { name: 'KEYNOTE SESSION', description: 'Future of Technology & Innovation' }
//       ],
//       color: 'from-[#67B044] to-[#9EE666]',
//       bgColor: 'bg-[#9EE666]/10',
//       borderColor: 'border-[#9EE666]/30'
//     },
//     {
//       time: '11:30 AM - 1:30 PM',
//       title: 'INNOVATION SHOWCASE',
//       location: 'College Lawn',
//       activities: [
//         { name: '130+ STUDENT PROJECTS', description: 'Student-led project exhibitions' },
//         { name: 'R&D SHOWCASE', description: 'Research & Development demonstrations and campus tour' },
//         { name: 'STUDENT STARTUPS', description: 'Presentations by entrepreneurial students' },
//         { name: 'INTERACTIVE DEMOS', description: 'Hands-on Technology Experience' }
//       ],
//       color: 'from-[#FFE600] to-[#FFE600]',
//       bgColor: 'bg-[#FFE600]/10',
//       borderColor: 'border-[#FFE600]/30'
//     },
//     {
//       time: '1:30 PM - 2:30 PM',
//       title: 'LUNCH & ENTERTAINMENT',
//       location: 'College Lawn',
//       activities: [
//         { name: 'NETWORKING LUNCH', description: 'Connect with Students and Faculty' },
//         { name: 'CULTURAL PERFORMANCES', description: 'Live bands and student performances' },
//         { name: 'FLEA MARKET & FOOD STALLS', description: 'Variety of food and merchandise options' }
//       ],
//       color: 'from-[#67B044] to-[#9EE666]',
//       bgColor: 'bg-[#9EE666]/10',
//       borderColor: 'border-[#9EE666]/30'
//     },
//     {
//       time: '2:30 PM - 4:00 PM',
//       title: 'TECHNICAL SESSIONS',
//       location: 'Main Stage',
//       activities: [
//         { name: 'CAREER GUIDANCE', description: 'Sessions for CET & COMED-K aspirants' },
//         { name: 'EXPERT PANELS', description: 'Discussions on emerging technologies' },
//         { name: 'TECHNICAL COMPETITIONS', description: 'Exciting hands-on activities and challenges' }
//       ],
//       color: 'from-[#FFE600] to-[#FFE600]',
//       bgColor: 'bg-[#FFE600]/10',
//       borderColor: 'border-[#FFE600]/30'
//     },
//     {
//       time: '4:00 PM - 5:30 PM',
//       title: 'GRAND FINALE',
//       location: 'Main Stage',
//       activities: [
//         { name: 'AWARDS & RECOGNITION', description: 'Celebrating Excellence' },
//         { name: 'CLOSING REMARKS', description: 'Vote of Thanks' }
//       ],
//       color: 'from-[#67B044] to-[#9EE666]',
//       bgColor: 'bg-[#9EE666]/10',
//       borderColor: 'border-[#9EE666]/30'
//     }
//   ];

//   return (
//     <div className="relative py-10 sm:py-16 md:py-20">
//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6">
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-10 sm:mb-16 md:mb-20"
//         >
//           <h1 className="font-['BS'] max-sm:text-[8vw] max-sm:leading-[15vw] text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-[#141414] mb-3 sm:mb-6">
//             Event Schedule
//           </h1>
//           <p className="font-['OSK'] tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto px-2">
//             A day filled with innovation, learning, and networking opportunities
//           </p>
//         </motion.div>

//         {/* Schedule Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-20">
//           {scheduleBlocks.map((block, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-[#9EE666]/30 hover:border-[#9EE666]/50 transition-all duration-300 shadow-sm hover:shadow-md"
//             >
//               {/* Header Section */}
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
//                 <div>
//                   <div className={`font-['OSK'] tracking-wide text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r ${block.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
//                     {block.time}
//                   </div>
//                   <h3 className="font-['OSK'] tracking-wide text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
//                     {block.title}
//                   </h3>
//                 </div>

//                 <div className="mt-3 md:mt-0">
//                   <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#9EE666]/20 border border-[#9EE666]/30">
//                     <span className="font-['OSK'] tracking-wide text-sm sm:text-base md:text-lg font-semibold text-gray-700">
//                       {block.location}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Activities Section */}
//               <div className={`p-3 sm:p-4 md:p-6 rounded-lg ${block.bgColor} border ${block.borderColor}`}>
//                 <h4 className="font-['OSK'] tracking-wide text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">
//                   Activities:
//                 </h4>
//                 <div className="space-y-3 sm:space-y-4 md:space-y-6">
//                   {block.activities.map((activity, idx) => (
//                     <div key={idx} className="flex">
//                       <div className="mr-3 sm:mr-4 mt-1">
//                         <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${block.color}`}></div>
//                       </div>
//                       <div>
//                         <div className="font-['OSK'] tracking-wide text-base sm:text-lg md:text-xl font-bold text-gray-800">
//                           {activity.name}
//                         </div>
//                         <div className="font-['OSK'] tracking-wide text-sm sm:text-base text-gray-600">
//                           {activity.description}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




















'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Schedule() {
  const scheduleBlocks = [
    {
      time: '10:00 AM - 11:30 AM',
      title: 'OPENING CEREMONY',
      location: 'Main Stage',
      activities: [
        { name: 'WELCOME ADDRESS', description: 'Introduction to CIT Open House 2026' },
        { name: 'INAUGURAL ADDRESS', description: 'By the Chairman of AICTE' },
        { name: 'KEYNOTE SESSION', description: 'Future of Technology & Innovation' }
      ]
    },
    {
      time: '11:30 AM - 1:30 PM',
      title: 'INNOVATION SHOWCASE',
      location: 'College Lawn',
      activities: [
        { name: '130+ STUDENT PROJECTS', description: 'Student-led project exhibitions' },
        { name: 'R&D SHOWCASE', description: 'Research & Development demonstrations' },
        { name: 'STUDENT STARTUPS', description: 'Presentations by entrepreneurial students' }
      ]
    },
    {
      time: '1:30 PM - 2:30 PM',
      title: 'LUNCH & ENTERTAINMENT',
      location: 'College Lawn',
      activities: [
        { name: 'NETWORKING LUNCH', description: 'Connect with Students and Faculty' },
        { name: 'CULTURAL PERFORMANCES', description: 'Live bands and student performances' }
      ]
    },
    {
      time: '2:30 PM - 4:00 PM',
      title: 'TECHNICAL SESSIONS',
      location: 'Main Stage',
      activities: [
        { name: 'CAREER GUIDANCE', description: 'Sessions for CET & COMED-K aspirants' },
        { name: 'EXPERT PANELS', description: 'Discussions on emerging technologies' }
      ]
    }
  ];

  return (
    <section className="relative py-32 sm:py-48 px-6 lg:px-12 bg-[#FAF9F6] overflow-hidden font-sans">
      
      {/* SEAMLESS BLEED: Ambient background depth */}
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-[#9EE666]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER: Soft Typographic Sculpture */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-6">/ System.Core.Timeline</span>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tight text-[#1A1A1A] leading-[0.85]">
              Event <br /> 
              <span className="italic font-serif font-light text-zinc-400">Schedule.</span>
            </h2>
          </motion.div>
        </div>

        {/* TIMELINE LIST: Based on FAQ UI */}
        <div className="space-y-6">
          {scheduleBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white/50 hover:bg-white transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-transparent hover:border-zinc-100"
            >
              <div className="py-12 px-8 md:px-12">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div className="flex items-center gap-8">
                    <span className="text-xs font-mono text-[#9EE666]">
                      0{index + 1}
                    </span>
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-zinc-400 block mb-2">
                        {block.time}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-black">
                        {block.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Location Tag */}
                  <div className="inline-flex items-center self-start md:self-center px-6 py-2 rounded-full border border-zinc-200 text-sm font-bold text-zinc-500 uppercase tracking-tighter">
                    {block.location}
                  </div>
                </div>

                {/* Activities: Replacing the FAQ Answer area */}
                <div className="md:pl-[5.5rem] space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {block.activities.map((activity, idx) => (
                      <div key={idx} className="relative">
                        <div className="h-1 w-8 bg-[#9EE666]/30 rounded-full mb-4 group-hover:w-12 transition-all duration-500" />
                        <h4 className="text-lg font-bold text-black mb-1">{activity.name}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER: Integrated Signal */}
        <motion.div 
          className="mt-32 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 font-medium italic">Timings are subject to minor adjustments.</p>
          <div className="flex gap-4">
             <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-xs font-black">2026</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}