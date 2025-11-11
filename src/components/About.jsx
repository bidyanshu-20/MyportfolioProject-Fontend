import React from "react";
import App from "../App";
function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white container mx-auto px-4 md:px-20 py-20 fontC"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Bidyanshu, a passionate Web developer with a keen eye for MERN
          Stack. With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          [BE | INFORMATION tECHNOLOGY], [UIETH | Panjab University], [2023-27],
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in [C++ | Javascript | MySQl] Experienced with [VS CODE | VERSION CONTROL [GIT,GITHUB] ] Strong grasp of [TAILWIND CSS]
          Excellent problem-solving skills Effective [Competitive Programmer , Learning the DSA concept Now. ]
  
        </span>
        <br />
        <br />
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1> */}
        {/* <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span> */}
        {/* <br />
        <br /> */}
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Qualified For SSB interview for NDA], [Solved 300+ Questions on COdeFORCES | 200+ ON CODEchef ], [2023-27] [Highest Rating on CODEFORCES 1000+],
          [2 STAR ON CODEChef]
          [Working on Building my DSA concept Strong.]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Tech & Software Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
