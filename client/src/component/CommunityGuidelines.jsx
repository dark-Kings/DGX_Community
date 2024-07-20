// import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
          <div className="text-sm text-center mt-2 hover:text-[#2563eb]">
            <i>
            <a href="https://storyset.com/people">People illustrations by Storyset</a>
            </i>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <h2 className="text-2xl font-bold mb-4">We strive for the DGX Community to reflect the best version of your professional life</h2>
          <h2 className="text-2xl font-thin mb-4">In our community, we uphold mutual respect and foster each other&apos;s success.</h2>
        </div>
      </div>

      <Swiper
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 3100,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mb-10 p-12"
    >
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">Be Safe</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Do not engage in or promote unlawful or harmful behavior.</li>
            <li className="mb-2">Respect other&apos;s rights and privacy.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('be-safe-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">Be Trustworthy</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Do not lie, misrepresent, or impersonate others.</li>
            <li className="mb-2">Provide accurate information.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('be-trustworthy-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
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
      </SwiperSlide>
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">Respect and Courtesy</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Treat all members with respect and courtesy.</li>
            <li className="mb-2">Be mindful of different perspectives and cultures.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('respect-and-courtesy-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">Privacy and Confidentiality</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Respect the privacy of other members.</li>
            <li className="mb-2">Avoid posting sensitive or confidential information.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('privacy-and-confidentiality-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">No Spamming or Self-Promotion</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Refrain from spamming the community with irrelevant content.</li>
            <li className="mb-2">Contribute valuable and relevant content to discussions.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('no-spamming-or-self-promotion-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">Intellectual Property</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Respect intellectual property rights.</li>
            <li className="mb-2">Attribute sources appropriately when sharing third-party content.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('intellectual-property-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">Safety and Security</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Do not share malicious links or software.</li>
            <li className="mb-2">Report any suspicious activities or security breaches to the moderators.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('safety-and-security-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">Content Guidelines</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Post content that is relevant to the community’s purpose.</li>
            <li className="mb-2">Use clear and concise language in your posts.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('content-guidelines-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[70%]">
        <div className="w-full p-4 border-dotted border-4 rounded-lg border-[#fb7185] transition-all duration-300 ease-in-out hover:bg-[#fb7185]/10">
          <h2 className="text-2xl text-DGXblack mt-4">Conflict Resolution</h2>
          <ul className="list-disc pl-5 text-[#374151] mt-4">
            <li className="mb-2">Address conflicts constructively and seek to resolve disputes amicably.</li>
            <li className="mb-2">Report unresolved conflicts to community moderators.</li>
          </ul>
          <button
            onClick={() => handleLearnMoreClick('conflict-resolution-details')}
            className="text-[#2563eb] hover:underline focus:outline-none"
          >
            Learn more
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
    <div>
        <p className="text-lg text-justify font-medium text-[#0c4a6e]">
          Welcome to the DGX Community, a vibrant hub where professionals and enthusiasts unite to share insights, stay informed, learn new skills, and cultivate meaningful connections. Your contributions should enrich the community in a positive and constructive manner. For further details, please refer to our Community Guidelines. Together, we can foster an environment where everyone can learn, grow, and engage, ultimately creating opportunities for all.
        </p>
    </div>
    <div className="w-full md:w-full p-8">
      <img
        src={images.Globe}
        className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
        alt="Globe"
      />
      <div className="text-sm text-center mt-2">
        <i>
          <a 
            href="https://www.freepik.com/free-vector/character-illustration-people_3584923.htm?epik=dj0yJnU9M3VmcThFeGlJaHFhaXhXZUs3VGgxUElrck9WcDJrS1cmcD0wJm49WFhkVFRZbEJnSjBSMXMtRl9fVXJ2QSZ0PUFBQUFBR2FiY3I0" 
            className="text-[#2563eb] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image by rawpixel.com on Freepik
          </a>
        </i>
      </div>
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

      <section id="respect-and-courtesy-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">Respect and Courtesy</h2>
        <p className="text-[#374151] mt-4">
          Maintaining a respectful and courteous environment is essential. This involves:
          <ul className="list-disc pl-5 text-[#374151]">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Treating All Members with Respect:</a> Engage with others in a polite and respectful manner, even when you disagree with their viewpoints.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Avoiding Personal Attacks and Harassment:</a> Refrain from making negative comments about someone&apos;s character, appearance, or beliefs. Harassment, hate speech, and discriminatory remarks are strictly prohibited.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Being Mindful of Different Perspectives and Cultures:</a> Remember that the community is diverse. Approach conversations with an open mind and consider cultural sensitivities.
            </li>
          </ul>
        </p>
      </section>

      <section id="privacy-and-confidentiality-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">Privacy and Confidentiality</h2>
        <p className="text-[#374151] mt-4">
          Respecting privacy and confidentiality is crucial. This includes:
          <ul className="list-disc pl-5 text-[#374151]">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Respecting Privacy of Other Members:</a> Do not ask for or share personal information about other members without their explicit permission.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Not Sharing Personal Information Without Consent:</a> Be cautious about sharing personal details like addresses, phone numbers, or private conversations.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Avoiding Posting Sensitive or Confidential Information:</a> Ensure that any information shared is appropriate for a public forum and does not violate privacy or confidentiality agreements.
            </li>
          </ul>
        </p>
      </section>

      <section id="no-spamming-or-self-promotion-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">No Spamming or Self-Promotion</h2>
        <p className="text-[#374151] mt-4">
          To maintain a focused and valuable community, avoid spamming and self-promotion:
          <ul className="list-disc pl-5 text-[#374151]">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Refraining from Spamming:</a> Only post content that is relevant to the community’s interests and purpose.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Avoiding Unsolicited Advertisements:</a> Do not use the platform for unsolicited advertisements or self-promotion unless it&apos;s clearly relevant and permitted by the community guidelines.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Contributing Valuable and Relevant Content:</a> Aim to add meaningful insights and information that benefit the community.
            </li>
          </ul>
        </p>
      </section>

      <section id="intellectual-property-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">Intellectual Property</h2>
        <p className="text-[#374151] mt-4">
          Respect for intellectual property is essential. This includes:
          <ul className="list-disc pl-5 text-[#374151]">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Respecting Intellectual Property Rights:</a> Do not share content that you do not have the rights to distribute.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Not Sharing Infringing Content:</a> Ensure that any materials you post (articles, images, videos, etc.) are either your own or used with proper permission.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Attributing Sources Appropriately:</a> When sharing content created by others, always provide proper attribution and links back to the original source.
            </li>
          </ul>
        </p>
      </section>

      <section id="safety-and-security-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">Safety and Security</h2>
        <p className="text-[#374151] mt-4">
          Safety and security are paramount. This includes:
          <ul className="list-disc pl-5 text-[#374151]">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Reporting Suspicious Activities:</a> If you notice anything that seems out of place or potentially harmful, inform the moderation team immediately.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Not Sharing Malicious Links or Software:</a> Ensure that any links or files you share are safe and free from malware or viruses.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Practicing Online Security:</a> Protect your account by following best practices for online security, such as using strong passwords and enabling two-factor authentication.
            </li>
          </ul>
        </p>
      </section>

      <section id="content-guidelines-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">Content Guidelines</h2>
        <p className="text-[#374151] mt-4">
          Content guidelines help maintain the quality of discussions. This includes:
          <ul className="list-disc pl-5 text-[#374151]">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Posting Relevant Content:</a> Keep your posts focused on topics that are relevant to the community’s interests.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Avoiding Inappropriate Material:</a> Ensure that all content shared is suitable for all members and adheres to community standards.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Using Clear and Concise Language:</a> Make your contributions easy to read and understand.
            </li>
          </ul>
        </p>
      </section>

      <section id="conflict-resolution-details" className="mb-8">
        <h2 className="text-2xl text-DGXblack mt-8 text-center font-bold">Conflict Resolution</h2>
        <p className="text-[#374151] mt-4">
          Effective conflict resolution is vital for maintaining harmony. This includes:
          <ul className="list-disc pl-5 text-[#374151]">
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Addressing Conflicts Constructively:</a> Approach disagreements with a goal of finding a positive resolution.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Using Private Messaging for Personal Conflicts:</a> If you have an issue with another member, try to resolve it through private messaging rather than public posts.
            </li>
            <li className="mb-2">
              <a className="font-bold text-DGXblack">Seeking Mediation if Needed:</a> If conflicts cannot be resolved between members, seek help from the moderation team.
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default CommunityGuidelines;