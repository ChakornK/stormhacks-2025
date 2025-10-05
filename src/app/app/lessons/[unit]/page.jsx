"use client";
import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { Dropdown } from "@/app/components/Dropdown";
import { CircularButton } from "@/app/components/CircleButton";
import { StarButton } from "@/app/components/StarButton";
import { NextUnitButton } from "@/app/components/NextUnitButton";

export default function LessonPath() {
  const { unit } = useParams();
  const [openLesson, setOpenLesson] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const buttonOffsets = [0, -60, 60, -60, 60];

  return (
    <main className="p-8 relative min-h-screen">
      <Dropdown className="bg-sky-400 px-6 py-2 inline-block border-sky-500 border-b-6 rounded-2xl text-white text-lg cursor-pointer">
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

        <div className="flex justify-between w-full max-w-[1100px] relative">
          {buttonOffsets.map((offset, i) => (
            <div key={i} className="relative" style={{ top: `${offset}px` }}>
              <CircularButton
                active={i === 0}
                onClick={() => {
                  setSelectedLesson(i + 1);
                  setOpenLesson(true);
                }}
              >
                <span>{i + 1}</span>
              </CircularButton>
            </div>
          ))}
          <div className="relative" style={{ top: "0px" }}>
            <StarButton active={false} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8">
        <NextUnitButton onClick={() => console.log("Next unit")} />
      </div>

      <LessonModal
        isOpen={openLesson}
        onClose={() => {
          setOpenLesson(false);
          setSelectedLesson(null);
        }}
        unit={unit}
        lesson={selectedLesson}
      />
    </main>
  );
}
import questionData from "@/questions/1/4/2.js";

export function LessonModal({ isOpen, onClose }) {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const { inputs } = questionData.generateValues();
    const text = questionData.generateText(inputs);
    setQuestion(text);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black/30 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">Lesson Question</h2>
            <div className="text-lg text-gray-700">
              <BlockMath
                math={question
                  .replaceAll("\\(", "")
                  .replaceAll("\\)", "")
                  .replaceAll(",", " \\\\ ")}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
