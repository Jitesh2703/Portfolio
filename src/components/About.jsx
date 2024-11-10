import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        I am Jitesh Kamble, an Android developer from Mumbai, currently pursuing my B.Tech
         in Electronics and Communication Engineering at the Indian Institute of Information Technology, Nagpur.
         My primary focus is on building user-friendly mobile applications using Java, Kotlin, and the Android SDK.
         I have developed projects like a crypto tracker and a notes app, leveraging Firebase and third-party APIs to 
         enhance user experience and performance.</p>

        <br />

        <p className="text-xl">
        Driven by a deep interest in problem-solving and collaboration, I am constantly seeking 
        new opportunities to grow as a developer. My goal is to contribute to impactful projects that 
        push the boundaries of mobile technology. I am eager to continue expanding my skills and 
        making meaningful contributions to the field of Android development.
        </p>
      </div>
    </div>
  );
};

export default About;
