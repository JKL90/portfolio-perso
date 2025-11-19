// app/blog/page.js
// @flow strict

import { projects } from "@/utils/data/projects"; // adapte le chemin si ton data est ailleurs
import Blog from "../components/homepage/blog"; // import du composant index.jsx

export default function Page() {
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Toutes mes réalisations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
        <Blog blogs={projects} />
    </div>
  );
}
