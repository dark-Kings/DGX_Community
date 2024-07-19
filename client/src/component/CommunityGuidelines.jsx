import React from 'react';
import { images } from "../constant/index.js";

const CommunityGuidelines = () => {

  const handleLearnMoreClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-10 bg-[#dcfce7] rounded-lg shadow-lg border border-DGXgreen font-serif">
      <h1 className="text-center text-6xl font-extrabold text-DGXblack mb-8">DGX Community Policies</h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 p-2">
          <img
            src={images.Team}
            className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
            alt="Team"
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <h2 className="text-2xl font-bold mb-4">We strive for the DGX Community to reflect the best version of your professional life</h2>
          <h2 className="text-2xl font-thin mb-4">In our community, we uphold mutual respect and foster each other's success.</h2>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-4 mb-8">
        <div className="w-full md:w-1/3 p-2 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">Be Safe</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2 ">Do not engage in or promote unlawful or harmful behavior.</li>
            <li className="mb-2">Respect others' rights and privacy.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('be-safe-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
        <div className="w-full md:w-1/3 p-2 border-dashed border-2 rounded-lg border-DGXblue transition-all duration-300 ease-in-out hover:bg-DGXblue/10">
          <h2 className="text-2xl text-DGXblack mt-4">Be Trustworthy</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2 ">Do not lie, misrepresent, or impersonate others.</li>
            <li className="mb-2">Provide accurate information.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('be-trustworthy-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
        <div className="w-full md:w-1/3 p-2 border-2 rounded-lg border-DGXblue transition-all duration-300 ease-in-out hover:bg-DGXblue/10">
          <h2 className="text-2xl text-DGXblack mt-4">Be Professional</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Do not share unprofessional or inappropriate content.</li>
            <li className="mb-2">Behave with integrity and respect.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('be-professional-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </div>
      <div>
        <p className="text-lg text-justify font-medium text-[#0c4a6e]">
          Welcome to the DGX Community, a vibrant hub where professionals and enthusiasts unite to share insights, stay informed, learn new skills, and cultivate meaningful connections. Your contributions should enrich the community in a positive and constructive manner. For further details, please refer to our Community Guidelines. Together, we can foster an environment where everyone can learn, grow, and engage, ultimately creating opportunities for all.
        </p>
      </div>

      <section id="be-safe-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">Be Safe</h2>
        <p className="text-[#374151] mt-4">
          Ensuring safety is crucial to maintaining a positive community environment. This includes:
          <ul className="list-disc pl-5 text-[#374151]">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Avoiding Illegal Activity:</a> Do not engage in or promote any illegal activities or harmful behavior that could jeopardize the well-being of our members.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Respecting Privacy:</a> Protect the privacy of fellow community members. Do not share personal or sensitive information without explicit consent.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Reporting Concerns:</a> If you encounter any behavior or content that seems unsafe or concerning, report it promptly to the appropriate moderators or administrators.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Practicing Online Etiquette:</a> Be mindful of your online behavior. Ensure that your interactions contribute to a positive and safe digital environment.
            </li>
          </ul>
        </p>
      </section>

      <section id="be-trustworthy-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">Be Trustworthy</h2>
        <p className="text-[#374151] mt-4">
          Trust is the foundation of our community. To maintain trustworthiness:
          <ul className="list-disc pl-5 text-[#374151] mt-2">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Honoring Commitments:</a> Follow through on promises and commitments you make to the community. Reliability fosters trust and strengthens relationships.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Avoiding Deception:</a> Engage with others in a manner that demonstrates respect and courtesy, even in disagreement. Professionalism is reflected in how you handle conflicts and differences.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Providing Accurate Information:</a> Share information that is accurate and verified. Misinformation undermines the community’s trust and efficacy.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Supporting Others:</a> Offer help and support to fellow members in a genuine and transparent manner, enhancing the trustworthiness of our collective effort.
            </li>
          </ul>
        </p>
      </section>

      <section id="be-professional-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">Be Professional</h2>
        <p className="text-[#374151] mt-4">
          Professionalism contributes to a respectful and constructive environment. This includes:
          <ul className="list-disc pl-5 text-[#374151] ">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Avoiding Inappropriate Content:</a> Do not post or share content that is offensive, discriminatory, or unprofessional. Ensure that your contributions are respectful and relevant.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Maintaining Respectful Communication:</a> Engage with others in a manner that demonstrates respect and courtesy, even in disagreement. Professionalism is reflected in how you handle conflicts and differences.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Upholding Integrity:</a> Act with honesty and integrity in all interactions. Your actions should reflect the core values of our community and contribute to a positive environment.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Encouraging Constructive Dialogue:</a> Foster discussions that are insightful and constructive. Aim to contribute positively to conversations, promoting growth and learning for all members.
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default CommunityGuidelines;
