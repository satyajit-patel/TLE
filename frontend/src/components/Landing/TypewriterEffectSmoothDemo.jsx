import { TypewriterEffectSmooth } from "./typewriter-effect";

import { Link } from "react-router-dom";

export function TypewriterEffectSmoothDemo() {
  const words = [
    // {
    //   text: "Build",
    // },
    // {
    //   text: "awesome",
    // },
    // {
    //   text: "apps",
    // },
    // {
    //   text: "with",
    // },
    {
        text: "TLE",
    },
    {
      text: "Eliminators.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-black text-xs sm:text-base p-4  ">
        The road to Competitive Programming starts from here.
        On this channel, we offer video solutions to CP contests, helping countless individuals in upsolving contests.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link to="/Home">Explore now</Link>
        </button>
      </div>
    </div>)
  );
}
