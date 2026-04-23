'use client';

import React from 'react';

export default function HeroSection() {
    return (
        <>
            <section className="relative h-screen w-full overflow-hidden bg-black">
                {/* Background Image */}
                <img
                    src="/sponsors/s1bg.svg"
                    alt="Background"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.78)_100%)]" />

                {/* Top Logos */}
                <div className="absolute left-0 top-0 z-20 flex w-full items-start justify-between px-8 py-8 md:px-14">

                    {/* Left Raw SVG */}
                    <img
                        src="/sponsors/camlogo.svg"
                        alt="Cambridge Logo"
                        className="h-16 w-auto md:h-24 object-contain"
                    />

                    {/* Right Raw SVG */}
                    <img
                        src="/sponsors/openlogo.svg"
                        alt="Open House Logo"
                        className="h-16 w-auto md:h-24 object-contain"
                    />
                </div>

                {/* Bottom Ribbon */}
                <div className="absolute bottom-8 left-0 z-20">
                    <div className="relative flex items-center bg-blue-700 px-10 py-3 pr-24 md:px-20 md:py-4 md:pr-32">
                        <span className="text-sm italic tracking-wide text-white md:text-2xl">
                            www.cambrianopenhouse.com
                        </span>

                        {/* Arrow Cut */}
                        <div className="absolute right-[-38px] top-0 h-full w-0 border-y-[24px] border-y-transparent border-l-[38px] border-l-blue-700 md:right-[-48px] md:border-y-[32px] md:border-l-[48px]" />
                    </div>
                </div>
            </section>


            <section className="relative h-screen w-full overflow-hidden bg-black text-white">
  {/* Top Left Logo */}
  <div className="absolute left-10 top-8 z-30">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto"
    />
  </div>

  {/* Main Wrapper */}
  <div className="relative flex h-full w-full items-center justify-between px-10 md:px-20">
    
    {/* LEFT SIDE */}
    <div className="z-20 flex relative w-[48%] left-[6%] top-[8%] flex-col justify-center pl-4">
      
      {/* Our Vision SVG */}
      <img
        src="/sponsors/vision.svg"
        alt="Our Vision"
        className="mb-8 w-[680px] max-w-full"
      />

      {/* Red Line */}
      <div className="mb-10 ml-[6vw] h-[2px] w-[520px] bg-red-700" />

      {/* Text Block */}
      <div className="max-w-[760px] text-center md:text-center">
        <p className="text-[34px] font-light leading-tight tracking-tight">
          To bring
        </p>

        <p className="text-[34px] font-light leading-tight tracking-tight">
          Cambridge Group of Institutions,
        </p>

        <p className="text-[34px] font-light leading-tight tracking-tight">
          to a <span className="font-extrabold">global event</span> that{" "}
          <span className="font-extrabold">celebrates</span>
        </p>

        <p className="text-[34px] font-extrabold leading-tight tracking-tight">
          ideas!
        </p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative flex h-full w-[42%] items-center justify-end">
      
      {/* Eye Graphic */}
      <img
        src="/sponsors/eye.svg"
        alt="Eye Graphic"
        className="relative z-20 w-[760px] max-w-none translate-x-20"
      />

      {/* Shadow */}
      <div className="absolute bottom-16 right-32 h-10 w-52 rounded-full bg-white/10 blur-2xl" />
    </div>
  </div>
</section>

<section className="relative h-screen w-full overflow-hidden bg-black text-white">
  {/* Background Image */}
  <img
    src="/sponsors/bg3.svg"
    alt="Mission Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark + Blur Overlay */}
  <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

  {/* Top Left Logo */}
  <div className="absolute left-10 top-8 z-30">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto"
    />
  </div>

  {/* Center Content */}
  <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
    
    {/* Title SVG */}
    <img
      src="/sponsors/mission.svg"
      alt="Our Mission"
      className="mb-8 w-[760px] max-w-full"
    />

    {/* Red Line */}
    <div className="mb-10 h-[2px] w-[520px] max-w-full bg-red-700" />

    {/* Text */}
    <div className="max-w-[1100px] leading-tight">
      <p className="text-[42px] font-light md:text-[58px]">
        A <span className="font-extrabold">culture</span> that can be carried
      </p>

      <p className="text-[42px] font-light md:text-[58px]">
        <span className="font-extrabold">forward, as an integral part</span> of
      </p>

      <p className="text-[42px] font-light md:text-[58px]">
        Cambridge Group of Institutions
      </p>
    </div>
  </div>
</section>

<section className="relative h-screen w-full overflow-hidden bg-black text-white">
  {/* Background Blur Image */}
  <img
    src="/sponsors/bg3.svg"
    alt="Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Left Cambridge Logo */}
  <div className="absolute left-10 top-8 z-30">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto"
    />
  </div>

  {/* Right Poster */}
  <div className="absolute right-28 top-0 z-20 h-full flex items-center">
    <img
      src="/sponsors/poster4.svg"
      alt="Poster"
      className="h-[100%] w-auto object-contain"
    />
  </div>

  {/* Far Right EVENT Text */}
  <div className="absolute right-0 top-[54%] z-10 flex h-full   pr-2">
    <img
      src="/sponsors/event4.svg"
      alt="Event"
      className="h-[45%] w-auto object-contain"
    />
  </div>

  {/* Left Text Content */}
  <div className="relative z-20 flex h-full w-full items-center">
    <div className="ml-[13%] -mt-8">
      {/* Present Events */}
      <p className="text-[42px] font-semibold uppercase tracking-wide text-white/85">
        PRESENT EVENTS
      </p>

      {/* COH 2026 */}
      <h1 className="mt-1 text-[110px] font-black leading-none tracking-tight">
        COH 2026
      </h1>

      {/* Red Line */}
      <div className="mt-4 h-[3px] w-[330px] bg-red-700" />

      {/* Date */}
      <p className="mt-3 text-[56px] font-light tracking-tight text-white/90">
        02/06/2026
      </p>
    </div>
  </div>
</section>


<section className="relative h-screen w-full overflow-hidden bg-black text-white">
  {/* Background Portrait Image Centered */}
  <img
    src="/sponsors/poster5.svg"
    alt="Background"
    className="absolute inset-0 h-full w-full object-cover object-center scale-110 brightness-75 contrast-110"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Left Cambridge Logo */}
  <div className="absolute left-10 top-8 z-30">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto"
    />
  </div>

  {/* Right Poster */}
  <div className="absolute right-28 top-0 z-20 flex h-full items-center">
    <img
      src="/sponsors/poster5.svg"
      alt="Poster"
      className="h-[100%] w-auto object-contain"
    />
  </div>

  {/* Far Right EVENT Text */}
  <div className="absolute right-0 top-[54%] z-10 flex h-full pr-2">
    <img
      src="/sponsors/event5.svg"
      alt="Event"
      className="h-[45%] w-auto object-contain"
    />
  </div>

  {/* Left Text Content */}
  <div className="relative z-20 flex h-full w-full items-center">
    <div className="ml-[13%] -mt-8">
      <p className="text-[42px] font-semibold uppercase tracking-wide text-white/85">
        PAST EVENTS
      </p>

      <h1 className="mt-1 text-[110px] font-black leading-none tracking-tight">
        COH 2025
      </h1>

      <div className="mt-4 h-[3px] w-[330px] bg-red-700" />

      <p className="mt-3 text-[56px] font-light tracking-tight text-white/90">
        20/04/2025
      </p>
    </div>
  </div>
</section>


<section className="relative h-screen w-full overflow-hidden bg-black text-white">
  {/* Background */}
  <img
    src="/sponsors/bg5.svg"
    alt="Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Top Center Logo */}
  <div className="absolute top-8 left-1/2 z-30 -translate-x-1/2">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto md:h-24"
    />
  </div>

  {/* Center Content */}
  <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
    
    {/* Sponsorship Benefits SVG */}
    <img
      src="/sponsors/benefits5.svg"
      alt="Sponsorship Benefits"
      className="w-[1100px] max-w-full"
    />

    {/* Blue Underline */}
    <div className="mt-3 h-[2px] w-[220px] bg-blue-500" />

    {/* Subtitle */}
    <p className="mt-6 text-[34px] font-light tracking-tight text-white/95 md:text-[46px]">
      What you <span className="font-extrabold">gain by partnering</span> with us.
    </p>
  </div>
</section>


<section className="relative h-screen w-full overflow-hidden bg-black">
  {/* Background */}
  <img
    src="/sponsors/bg5.svg"
    alt="Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Top Center Logo */}
  <div className="absolute left-10 top-8 z-30">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto md:h-24"
    />
  </div>

  {/* Left Graphic */}
  <div className="absolute left-[70px] top-1/2 z-20 -translate-y-1/2">
    <img
      src="/sponsors/category6.svg"
      alt="Category 1"
      className="h-[520px] w-auto object-contain"
    />
  </div>

  {/* Right Benefits Card */}
  <div className="absolute right-[60px] top-1/2 z-20 -translate-y-1/2">
    <img
      src="/sponsors/table6.svg"
      alt="Tier 1 Benefits"
      className="h-[450px] w-auto object-contain"
    />
  </div>

  {/* Blue Vertical Divider Line */}
  <div className="absolute left-1/2 top-1/2 z-10 h-[340px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.55)]" />
</section>


<section className="relative h-screen w-full overflow-hidden bg-black">
  {/* Background */}
  <img
    src="/sponsors/bg5.svg"
    alt="Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Top Center Logo */}
  <div className="absolute left-10 top-8 z-30">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto md:h-24"
    />
  </div>

  {/* Left Graphic */}
  <div className="absolute left-[70px] top-[55%] z-20 -translate-y-1/2">
    <img
      src="/sponsors/table7.svg"
      alt="Category 1"
      className="h-[520px] w-auto object-contain"
    />
  </div>

  {/* Right Benefits Card */}
  <div className="absolute right-[60px] top-[55%] z-20 -translate-y-1/2">
    <img
      src="/sponsors/category7.svg"
      alt="Tier 1 Benefits"
      className="h-[450px] w-auto object-contain"
    />
  </div>

  {/* Blue Vertical Divider Line */}
  <div className="absolute left-1/2 top-1/2 z-10 h-[340px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.55)]" />
</section>



<section className="relative h-screen w-full overflow-hidden bg-black">
  {/* Background */}
  <img
    src="/sponsors/bg5.svg"
    alt="Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Top Center Logo */}
  <div className="absolute left-10 top-8 z-30">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto md:h-24"
    />
  </div>

  {/* Left Graphic */}
  <div className="absolute left-[70px] top-1/2 z-20 -translate-y-1/2">
    <img
      src="/sponsors/category8.svg"
      alt="Category 1"
      className="h-[520px] w-auto object-contain"
    />
  </div>

  {/* Right Benefits Card */}
  <div className="absolute right-[60px] top-1/2 z-20 -translate-y-1/2">
    <img
      src="/sponsors/table8.svg"
      alt="Tier 1 Benefits"
      className="h-[450px] w-auto object-contain"
    />
  </div>

  {/* Blue Vertical Divider Line */}
  <div className="absolute left-1/2 top-1/2 z-10 h-[340px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.55)]" />
</section>


<section className="relative h-screen w-full overflow-hidden bg-black">
  {/* Background */}
  <img
    src="/sponsors/bg5.svg"
    alt="Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Top Center Logo */}
  <div className="absolute left-10 top-8 z-30">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto md:h-24"
    />
  </div>

  {/* Left Graphic */}
  <div className="absolute left-[70px] top-[55%] z-20 -translate-y-1/2">
    <img
      src="/sponsors/table9.svg"
      alt="Category 1"
      className="h-[520px] w-auto object-contain"
    />
  </div>

  {/* Right Benefits Card */}
  <div className="absolute right-[60px] top-[55%] z-20 -translate-y-1/2">
    <img
      src="/sponsors/category9.svg"
      alt="Tier 1 Benefits"
      className="h-[450px] w-auto object-contain"
    />
  </div>

  {/* Blue Vertical Divider Line */}
  <div className="absolute left-1/2 top-1/2 z-10 h-[340px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.55)]" />
</section>

<section className="relative h-screen w-full overflow-hidden bg-black">
  {/* Full Background Image */}
  <img
    src="/sponsors/bg5.svg"
    alt="Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Foreground Image with tiny padding */}
  <div className="absolute inset-[6px] z-20 flex items-center justify-center">
    <img
      src="/sponsors/fg10.png"
      alt="Foreground"
      className="h-full w-full object-contain"
    />
  </div>
</section>


<section className="relative h-screen w-full overflow-hidden bg-black text-white">
  {/* Background */}
  <img
    src="/sponsors/bg5.svg"
    alt="Background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Top Left Logo */}
  <div className="absolute left-10 top-8 z-30">
    <img
      src="/sponsors/camlogo.svg"
      alt="Cambridge Logo"
      className="h-20 w-auto"
    />
  </div>

  {/* Bottom Left Open House Logo */}
  <div className="absolute bottom-8 left-8 z-30">
    <img
      src="/sponsors/openlogo.svg"
      alt="Open House Logo"
      className="h-28 w-auto"
    />
  </div>

  {/* Main Center Content */}
  <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
    
    {/* Contact Title */}
    <img
      src="/sponsors/contact11.svg"
      alt="Contact Details"
      className="w-[460px] max-w-full"
    />

    {/* Divider */}
    <div className="mt-8 h-[2px] w-[15vw] bg-blue-500" />

    {/* MOBILE ON TOP */}
    <div className="mt-10">
      <h3 className="text-[30px] font-light uppercase tracking-wide">
        ☎ Mobile
      </h3>

      <div className="mt-4 space-y-2 text-[24px] leading-tight">
        <p>
          <span className="text-blue-500">Bharath Kumar S</span>{" "}
          <span className="text-white">6360146030</span>
        </p>
        <p>
          <span className="text-blue-500">Prof. Aarthi Purushotam</span>{" "}
          <span className="text-white">9008276188</span>
        </p>
      </div>
    </div>

    {/* WEBSITE + EMAIL SIDE BY SIDE */}
    <div className="mt-10 grid grid-cols-2 gap-20">
      
      {/* Website */}
      <div>
        <h3 className="text-[24px] font-light uppercase tracking-wide">
          🌐 Website
        </h3>

        <div className="mt-3 space-y-2 text-[18px] text-blue-500 leading-tight">
          <p>https://www.cambrianopenhouse.com</p>
          <p>https://engg.cambridge.edu.in</p>
        </div>
      </div>

      {/* Email */}
      <div>
        <h3 className="text-[24px] font-light uppercase tracking-wide">
          ✉ Email
        </h3>

        <div className="mt-3 space-y-2 text-[18px] text-blue-500 leading-tight">
          <p>openhouse@cambridge.edu.in</p>
          <p>events@cambridge.edu.in</p>
        </div>
      </div>
    </div>

    {/* Thank You */}
    <div className="mt-20">
      <img
        src="/sponsors/thankyou11.svg"
        alt="Thank You"
        className="w-[260px] max-w-full"
      />
    </div>
  </div>
</section>

        </>
    );
}