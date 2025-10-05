"use client";

import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { forwardRef, SVGProps, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { Dropdown } from "@/app/components/Dropdown";
import { CircularButton } from "@/app/components/CircleButton";
import { StarButton } from "@/app/components/StarButton";
import { NextUnitButton } from "@/app/components/NextUnitButton";
import { usePathname, useRouter } from "next/navigation";
import next from "next";

export default function LessonPath() {
  const { unit } = useParams();
  const router = useRouter();
  const buttonOffsets = [0, -60, 60, -60, 60];
  const [selectedItem, setSelectedItem] = useState(0); // current page number
  const [direction, setDirection] = useState(0);
  const directionRef = useRef(1);
  const items = [1, 2, 3];

  const setSlide = (newDirection) => {
    directionRef.current = newDirection;
    setDirection(newDirection);
    const nextPage = +unit + newDirection;
    console.log(direction);
    setSelectedItem(nextPage);

    router.push(`/app/lessons/${nextPage}`, undefined, { scroll: false });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // Variants for sliding

  return (
    <main className="relative p-8 min-h-screen">
      <p>h</p>
      <AnimatePresence custom={directionRef.current}>
        <motion.div
          key={selectedItem}
          custom={directionRef.current} // passes direction to variants
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <div
            style={{
              marginTop: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button onClick={() => setSlide(-1)}>Prev</button>
            <button onClick={() => setSlide(1)}>Next</button>
          </div>
          <Dropdown className="inline-block bg-sky-400 px-6 py-2 border-sky-500 border-b-6 rounded-2xl text-white text-lg cursor-pointer">
            <h1 className="text-4xl">Unit {unit}</h1>
          </Dropdown>

          <div className="relative flex justify-center items-center h-[300px]">
            <svg
              className="absolute w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 100 150 Q 250 90, 400 150 Q 550 210, 700 150 Q 850 90, 1000 150"
                className="stroke-neutral-400"
                strokeWidth="6"
                fill="transparent"
              />
            </svg>

            <div className="relative flex justify-between w-full max-w-[1100px]">
              {buttonOffsets.map((offset, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{ top: `${offset}px` }}
                >
                  <CircularButton active={i === 0}>
                    <span>{i + 1}</span>
                  </CircularButton>
                </div>
              ))}
              <div className="relative" style={{ top: "0px" }}>
                <StarButton active={false} />
              </div>
            </div>
          </div>

          <div className="right-8 bottom-8 fixed">
            <NextUnitButton onClick={() => console.log("Next unit")} />
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
