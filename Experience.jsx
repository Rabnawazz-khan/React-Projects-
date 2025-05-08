import React from 'react';

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">🌐</span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">🌐</span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">🎨</span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">⚛️</span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">📜</span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">🖌️</span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">🍃</span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl text-4xl">🔴</span>

        </div>

        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-4xl">🔍</span>
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer , Google</h2>
              <p className="text-sm leading-tight font-thin">Dec 2023 - present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE developer</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-4xl">📺</span>
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer , Netflix</h2>
              <p className="text-sm leading-tight font-thin">Dec 2023 - present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE developer</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-4xl">🛒</span>
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer , Amazon</h2>
              <p className="text-sm leading-tight font-thin">Dec 2023 - present</p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
