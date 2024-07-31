import { cn } from "../utils/cn.js";
// import Image from "next/image";
import { images } from '../constant/index.js';
// import FullCalendar from '@fullcalendar/react';s
// import dayGridPlugin from '@fullcalendar/daygrid';
import GeneralUserCalendar from "../component/GeneralUserCalendar.jsx";

import {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';

const MouseEnterContext = createContext(undefined);

/**--------------calendar------------------*/

/**---------------------------------------- */

export const CardContainer = ({
  children,
  className,
  containerClassName,
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

CardContainer.defaultProps = {
  className: '',
  containerClassName: '',
};

export const CardBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-96 w-96 ",
        className
      )}
    >
      {children}
    </div>
  );
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardBody.defaultProps = {
  className: '',
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

CardItem.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  translateX: PropTypes.number,
  translateY: PropTypes.number,
  translateZ: PropTypes.number,
  rotateX: PropTypes.number,
  rotateY: PropTypes.number,
  rotateZ: PropTypes.number,
};

CardItem.defaultProps = {
  as: 'div',
  className: '',
  translateX: 0,
  translateY: 0,
  translateZ: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

const EventWorkshopPage = () => {
  const events = [
    {
      title: "Event 1",
      image: `${images.Event1}`,
    },
    {
      title: "Event 2",
      image: `${images.Event2}`,
    },
    {
      title: "Event 3",
      image: `${images.Event3}`,
    },
    // Add more events as needed
  ];

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-DGXwhite px-6 py-20 text-center sm:px-16 sm:shadow-sm">
        <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
          Find the Event or Workshop you were looking for...!
        </p>

        <form action="/search">
          <label
            className="mx-auto mt-8 relative bg-DGXwhite min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-[#d1d5db]"
            htmlFor="search-bar"
          >
            <input
              id="search-bar"
              placeholder="your keyword here"
              name="q"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-DGXwhite"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-DGXgreen border-DGXblue text-white active:scale-95 duration-100 border rounded-xl transition-all"
            >
              <div className="flex items-center">
                <span className="text-sm font-semibold mx-auto">Search</span>
              </div>
            </button>
          </label>
        </form>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,DGXwhite,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#ffff" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Example Usage of Card Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-DGXblue">
        {events.map((event, index) => (
          <CardContainer key={index} className="my-12" containerClassName="border-2 border-DGXgreen">
            <CardBody className=" bg-gradient-to-r from-DGXblack via-DGXblue p-8 border border-DGXgreen">
              <CardItem translateX={10} translateY={20} rotateX={10} rotateY={20}>
                <h2 className="text-xl font-bold">{event.title}</h2>
                <img src={event.image} alt={event.title} className="mt-10" />
              </CardItem>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="px-4 py-2 bg-DGXgreen text-DGXwhite shadow-2xl rounded-md">Enroll</button>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="px-4 py-2 bg-[#d1d5db] text-black rounded-md flex items-center gap-2 shadow-2xl">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <button className="px-4 py-2 bg-[#d1d5db] text-black rounded-md flex items-center gap-2 shadow-2xl">
                  <FontAwesomeIcon icon={faShare} />
                </button>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      < GeneralUserCalendar/>
    </div>
  );
};

export default EventWorkshopPage;
