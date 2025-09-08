const About = () => {
  return (
    <div className="min-h-screen bg-black px-8 py-20">
      <h1 className="lg:text-8xl text-5xl text-white font-bold">I AM A FUTURE</h1>
      <h1 className="lg:text-8xl text-5xl text-white font-bold">FULL STACK DEV.</h1>
      <button className="mt-12 font-semibold clip-menu bg-white text-black uppercase px-6 py-2">
        View My Cv
      </button>
      <div className="w-full lg:max-w-[50%] mt-16 flex flex-col space-y-16 ">
        <div>
          <div className="text-2xl font-semibold text-white">ABOUT ME</div>
          <p className="text-xl uppercase text-gray-400 font-semibold tracking-[3px] text-justify mt-6">I'm on the cutting edge of modern web and mobile development tools, enabling me to build robust, scalable, and creative applications from front-end to back-end. Though my methods may be unconventional, my dedication to clean, efficient, and maintainable code is unparalleled. I thrive on solving complex problems and believe that with the right approach, any technical challenge can be overcome.</p>
        </div>
        <div>
          <div className="text-2xl font-semibold text-white">CHALLENGES & APPROACH</div>
          <p className="text-xl uppercase text-gray-400 font-semibold tracking-[3px] text-justify mt-6">I focus on full stack development principles, ensuring both the client-side and server-side of applications work seamlessly together. I employ responsive and dynamic front-end techniques while building scalable back-end architectures. I optimize performance, security, and maintainability to deliver fast, reliable, and user-friendly applications across all platforms.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
