import React from "react";

function HeaderFilter() {
  return (
    <div className="bg-custom-primary h-[80px] p-4 flex flex-wrap justify-around gap-4">
      <h3 className="text-white font-bold text-2xl  ">Discover Project Experts</h3>
      <div className="flex gap-4">
        <select name="subject" id="subject" className="h-[35px] p-[8px] rounded">
          <option value="Technology">Technology</option>
          <option value="Medical">Medical</option>
          <option value="Education">Education</option>
          <option value="Sports">Sports</option>
          <option value="Science">Science</option>
        </select>

        <select name="contentBy" id="contentBy" className="h-[35px] p-[8px] rounded">
          <option value="Students">Students</option>
          <option value="Professional">Professional</option>
          <option value="Anyone">Anyone</option>
        </select>

        <select name="grade" id="grade" className="h-[35px] p-[8px] rounded">
          <option value="All">All</option>
          <option value="Elementary">Elementary</option>
          <option value="Secondary">Secondary</option>
          <option value="University">University</option>
        </select>

        <select name="language" id="language" className="h-[35px] p-[8px] rounded">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
          <option value="Russian">Russian</option>
        </select>
      </div>
    </div>
  );
}

export default HeaderFilter;
