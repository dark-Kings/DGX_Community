import { useState } from "react";
import { images } from '../constant/index.js';
import GeneralUserCalendar from "../component/GeneralUserCalendar.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';

// CardContainer Component
const CardContainer = ({ children, className, containerClassName }) => {
  return (
    <div className={`py-20 flex items-center justify-center ${containerClassName}`}>
      <div className={`flex items-center justify-center relative transition-all duration-200 ease-linear ${className}`}>
        {children}
      </div>
    </div>
  );
};

// CardBody Component
const CardBody = ({ children, className }) => {
  return <div className={`h-70 w-96 ${className}`}>{children}</div>;
};

// CardItem Component
const CardItem = ({ children, className }) => {
  return <div className={`w-fit transition duration-200 ease-linear ${className}`}>{children}</div>;
};

const EventWorkshopPage = () => {
  const [activeTab, setActiveTab] = useState("myCompany");
  const [isAnimating, setIsAnimating] = useState(false);

  const myCompanyEvents = [
    { title: "Company Workshop: AI & Robotics", image: `${images.Event1}` },
    { title: "Company Event: Future of Data Science", image: `${images.Event2}` },
    { title: "Company Workshop: AI & Robotics", image: `${images.Event1}` },
    // { title: "Company Event: Future of Data Science", image: `${images.Event2}` },
  ];

  const nvidiaEvents = [
    { title: "NVIDIA CEO Jensen Huang and Lauren Goode at WIRED", image: `${images.Event1}` },
    { title: "NVIDIA CEO Jensen Huang and Mark Zuckerberg", image: `${images.Event2}` },
    { title: "NVIDIA CEO Jensen Huang and Lauren Goode at WIRED", image: `${images.Event1}` },
    // { title: "NVIDIA CEO Jensen Huang and Mark Zuckerberg", image: `${images.Event2}` },
  ];

  const events = activeTab === "myCompany" ? myCompanyEvents : nvidiaEvents;

  const handleTabChange = (tab) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-DGXwhite px-6 py-20 text-center sm:px-16 sm:shadow-sm">
        <p className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-[#111827] mb-10">
          Find the Event or Workshop You Were Looking For...!
        </p>

        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={() => handleTabChange("myCompany")}
            className={`px-8 py-3 ${activeTab === "myCompany" ? 'bg-DGXgreen text-white' : 'bg-DGXwhite text-black'} border border-DGXgreen rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-DGXgreen`}
          >
            My Company Events
          </button>
          <button
            onClick={() => handleTabChange("nvidia")}
            className={`px-8 py-3 ${activeTab === "nvidia" ? 'bg-DGXgreen text-white' : 'bg-DGXwhite text-black'} border border-DGXgreen rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-DGXgreen`}
          >
            NVIDIA Events
          </button>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {events.map((event, index) => (
            <CardContainer
              key={index}
              className="my-8 w-full" // Ensure the card takes the full width on smaller screens
              containerClassName="border-2 border-DGXgreen bg-DGXblue rounded-lg overflow-hidden shadow-lg"
            >
              <CardBody className="bg-gradient-to-r from-DGXgray via-DGXblue to-DGXblue p-6 border border-DGXgreen flex flex-col justify-between h-full">
                <CardItem>
                  <h2 className="text-xl font-bold text-DGXwhite mb-4">{event.title}</h2>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="mt-4 w-full h-40 object-cover rounded-md shadow-md"
                  />
                </CardItem>

                <div className="flex justify-between mt-8 "> {/* Flex container to position buttons at the bottom */}
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-DGXgreen text-DGXwhite rounded-md hover:bg-green-600 transition">
                      Enroll
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-DGXwhite text-black rounded-md flex items-center gap-2 shadow-md hover:shadow-lg transition">
                      <FontAwesomeIcon icon={faShare} />
                    </button>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

      </div>

      <GeneralUserCalendar />
    </div>
  );
};

export default EventWorkshopPage;
