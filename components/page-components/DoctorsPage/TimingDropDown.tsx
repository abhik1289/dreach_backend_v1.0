import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TimingDropDown: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timeSlotContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scroll = (
    direction: "left" | "right",
    ref: { current: HTMLDivElement | null }
  ) => {
    if (ref.current) {
      const distance = direction === "left" ? -200 : 200;
      ref.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  const timeSlots = ["Morning", "Afternoon", "Evening"];
  const slotData = Array(5).fill({ day: "Today", slots: "11 slots available" });

  return (
    <div className="sm:p-4 p-5">
      <div className="flex items-center">
        <button
          className="bg-white border border-blue-500 text-blue-500 h-[40px] w-[40px] rounded-full flex justify-center items-center"
          onClick={() => scroll("left", scrollContainerRef as React.RefObject<HTMLDivElement>)}
          title="Scroll Left"
        >
          <FaChevronLeft />
        </button>
        <div
          className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide"
          ref={scrollContainerRef}
        >
          {slotData.map((slot, index) => (
            <div
              key={index}
              className={`w-[200px] p-2 inline-block border-b-4 ${
                index === 0 ? "border-blue-500" : "border-gray-500"
              }`}
            >
              <div className="flex justify-center items-center flex-col">
                <p className="text-sm font-bold">{slot.day}</p>
                <p className="text-xs text-green-500">{slot.slots}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-white border border-blue-500 text-blue-500 h-[40px] w-[40px] rounded-full flex justify-center items-center"
          onClick={() => scroll("right", scrollContainerRef as React.RefObject<HTMLDivElement>)}
          title="Scroll Right"
        >
          <FaChevronRight />
        </button>
      </div>

      {timeSlots.map((timeSlot, index) => (
        <div
          key={timeSlot}
          className=" px-5 py-5 border-b flex gap-6 items-center"
        >
          <p className="text-sm font-semibold xl:w-[85px]">{timeSlot}</p>
          <div className="flex items-center w-[82%]">
            <button
              className="bg-blue-200 border border-blue-500 text-blue-500 h-[22px] w-[22px] mx-2 rounded-full flex justify-center items-center"
              onClick={() =>
                scroll("left", {
                  current: timeSlotContainerRefs.current[index],
                } as React.RefObject<HTMLDivElement>)
              }
              title="Scroll Left"
            >
              <FaChevronLeft size={15} />
            </button>
            <div
              className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide"
              ref={(el) => {
                timeSlotContainerRefs.current[index] = el;
              }} // Just assign the value without returning it
            >
              {Array(6)
                .fill(null)
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="border border-blue-500 py-1 px-4 rounded-sm cursor-pointer"
                  >
                    <p className="text-xs text-blue-500">11.30 AM</p>
                  </div>
                ))}
            </div>
            <button
              className="bg-blue-200 border border-blue-500 text-blue-500 mx-2 h-[20px] w-[20px] rounded-full flex justify-center items-center"
              onClick={() =>
                scroll("right", {
                  current: timeSlotContainerRefs.current[index],
                } as React.RefObject<HTMLDivElement>)
              }
              title="Scroll Right"
            >
              <FaChevronRight size={15} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimingDropDown;
