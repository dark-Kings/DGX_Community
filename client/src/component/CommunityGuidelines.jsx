// import React from 'react';
import { images } from "../constant/index.js";

const CommunityGuidelines = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 p-10 bg-[#dcfce7] rounded-lg shadow-lg border border-DGXgreen">
      <h1 className="text-center text-6xl font-extrabold text-black mb-8">DGX Community Policies</h1>
      <div className="flex flex-wrap items-center">
  <div className="w-full md:w-1/2 p-2">
    <img
      src={images.Team}
      className="w-full h-auto"
      alt="Team"
    />
  </div>
  <div className="w-full md:w-1/2 p-2">
    <h2 className="text-2xl font-bold mb-4">We strive for the DGX Community to reflect the best version of your professional life</h2>
    <h2 className="text-2xl font-thin mb-4">In our community, we uphold mutual respect and foster each other's success.</h2>
  </div>
</div>


      <section className="mb-8">
        <h2 className="text-2xl text-black mt-8">Be Safe</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">Do not engage in or promote unlawful or harmful behavior.</li>
          <li className="mb-2">Respect others' rights and privacy.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl text-black mt-8">Be Trustworthy</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">Do not lie, misrepresent, or impersonate others.</li>
          <li className="mb-2">Provide accurate information.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl text-black mt-8">Be Professional</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">Do not share unprofessional or inappropriate content.</li>
          <li className="mb-2">Behave with integrity and respect.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl text-black mt-8">Act Appropriately</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">Do not spam or engage in commercial solicitation.</li>
          <li className="mb-2">Communicate respectfully and professionally.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl text-black mt-8">Follow the Law</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">Abide by applicable laws and regulations.</li>
          <li className="mb-2">Do not use LinkedIn for illegal activities.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl text-black mt-8">Contact Us</h2>
        <p className="text-gray-700">If you have any questions or need further assistance, please contact LinkedIn support.</p>
      </section>
      
      <section>
        <button 
          onClick={() => alert('Thank you for agreeing to the guidelines!')}
          className="block mx-auto my-8 px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-colors"
        >
          I Agree
        </button>
      </section>
    </div>
  );
};

export default CommunityGuidelines;
