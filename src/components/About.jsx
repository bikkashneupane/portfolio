import React from "react";

function About() {
  return (
    <section className="" id="about">
      <div className="px-6">
        <h2 className="text-3xl text-center font-bold tracking-widest font-mono text-yellow-500">
          About Me
        </h2>
        <div className="my-6 flex gap-6 flex-col lg:flex-row lg:justify-center lg:items-center">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-xl font-bold mb-1">Qualification</h3>
            <p className="">Bachelors Degree, Central Queensland University</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <p className="">My experience details go here...</p>
          </div>
        </div>

        <div className="">
          <p className="text-lg">
            I am a Bachelors of Information Technology graduate with a major in
            application development at Central Queensland University. <br /> I
            am passionate about learning new technologies and programming
            languages. <br />I love planning different projects and enjoy the
            coding part even more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
