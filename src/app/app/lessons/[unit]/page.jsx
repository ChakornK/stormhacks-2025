"use client";
import { useState, useEffect, useContext } from "react";
import "katex/dist/katex.min.css";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { Dropdown } from "@/app/components/Dropdown";
import { CircularButton } from "@/app/components/CircleButton";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  Cancel01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons/index";
import { UserContext } from "@/app/context";
import ReactKatex from "@pkasila/react-katex";
import { PrimaryButton } from "@/app/components/Button";
import { Chatbot } from "@/app/components/Chatbot";

export default function LessonPath() {
  const { token, progressTracker } = useContext(UserContext);

  const { unit } = useParams();
  const [openLesson, setOpenLesson] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const router = useRouter();
  const buttonOffsets = [0, -60, 60, -60, 60];
  const pgClamp = [1, 5];

  const [problemText, setProblemText] = useState("");

  const paginate = (newDirection) => {
    router.push(
      `/app/lessons/${Math.max(
        pgClamp[0],
        Math.min(pgClamp[1], +unit + newDirection)
      )}`,
      undefined,
      {
        scroll: false,
      }
    );
  };

  return (
    <main className="p-8">
      <div>
        <Dropdown
          className="inline-block bg-sky-400 px-6 py-2 border-sky-500 border-b-6 rounded-2xl text-white text-lg cursor-pointer"
          options={Array(5)
            .fill(0)
            .map((_, i) => `Unit ${i + 1}`)}
          current={`Unit ${unit}`}
          onSelect={(e) => router.push(`/app/lessons/${e.split(" ")[1]}`)}
        >
          <h1 className="text-4xl">Unit {unit}</h1>
        </Dropdown>

        <div className="relative flex justify-center items-center h-[300px]">
          <svg
            className="absolute w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 180 150 Q 350 95, 540 160 Q 650 200, 770 150 Q 920 88, 1150 200"
              className="stroke-neutral-400"
              strokeWidth="6"
              fill="transparent"
            />
          </svg>

          <div className="relative flex justify-between w-full max-w-[1100px]">
            {buttonOffsets.map((offset, i) => {
              return (
                <div
                  key={i}
                  className="relative"
                  style={{ top: `${offset}px` }}
                >
                  <CircularButton
                    active={((progressTracker ?? {})[unit] ?? 0) >= i}
                    onClick={() => {
                      (async () => {
                        const { text, progress } = await (
                          await fetch(
                            `/api/question?unit=${unit}&lesson=${i + 1}`,
                            {
                              headers: {
                                authorization: `Bearer ${token}`,
                              },
                            }
                          )
                        ).json();
                        setProblemText(text);
                      })();

                      setSelectedLesson(i + 1);
                      setOpenLesson(true);
                    }}
                  >
                    <span>{i + 1}</span>
                  </CircularButton>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => paginate(-1)}
          style={
            +unit === pgClamp[0]
              ? {
                  filter: "saturate(0)",
                  pointerEvents: "none",
                }
              : {}
          }
          className="group bottom-8 left-8 fixed flex justify-center items-center bg-sky-500 active:mt-3 border-sky-600 border-b-6 active:border-b-0 rounded-full w-18 hover:w-48 h-18 active:h-15 overflow-hidden text-white transition-all duration-200 ease-out cursor-pointer"
        >
          <div className="flex justify-center items-center overflow-clip">
            <HugeiconsIcon icon={ArrowLeft02Icon} strokeWidth={3} />
            <span className="opacity-0 group-hover:opacity-100 pl-0 group-hover:pl-2 w-0 group-hover:w-auto font-semibold text-lg text-nowrap transition-opacity duration-150">
              Previous Unit
            </span>
          </div>
        </button>

        <button
          onClick={() => paginate(1)}
          style={
            +unit === pgClamp[1]
              ? {
                  filter: "saturate(0)",
                  pointerEvents: "none",
                }
              : {}
          }
          className="group right-8 bottom-8 fixed flex justify-center items-center bg-sky-500 active:mt-3 border-sky-600 border-b-6 active:border-b-0 rounded-full w-18 hover:w-40 h-18 active:h-15 overflow-hidden text-white transition-all duration-200 ease-out cursor-pointer"
        >
          <div className="flex justify-center items-center overflow-clip">
            <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={3} />
            <span className="opacity-0 group-hover:opacity-100 pl-0 group-hover:pl-2 w-0 group-hover:w-auto font-semibold text-lg text-nowrap transition-opacity duration-150">
              Next Unit
            </span>
          </div>
        </button>
      </div>

      <LessonModal
        isOpen={openLesson}
        onClose={() => {
          setOpenLesson(false);
          setSelectedLesson(null);
        }}
        unit={unit}
        lesson={selectedLesson}
        text={problemText}
        setProblemText={setProblemText}
      />
    </main>
  );
}

export function LessonModal({
  isOpen,
  text = "",
  onClose,
  setProblemText,
  unit,
  lesson,
}) {
  const { token, updateUserState } = useContext(UserContext);

  const [qnum, setQnum] = useState(1);
  useEffect(() => {
    if (isOpen) {
      setQnum(1);
      setCorrectStatus(1);
    }
  }, [isOpen]);

  const [answer, setAnswer] = useState("");
  // 0 = wrong
  // 1 = not displayed
  // 2 = correct
  const [correctStatus, setCorrectStatus] = useState(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white shadow-2xl p-8 pr-84 rounded-2xl w-[calc(100vw-4rem)] max-w-4xl h-full max-h-[calc(100vh-4rem)]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="top-8 right-8 z-50 absolute cursor-pointer"
            >
              <HugeiconsIcon icon={Cancel01Icon} />
            </button>
            <h2 className="mb-4 font-semibold text-2xl">
              Question {qnum} of 10
            </h2>
            <div className="text-gray-700 text-lg">
              <ReactKatex>
                {text.replaceAll("\\(", "$").replaceAll("\\)", "$")}
              </ReactKatex>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <input
                className="px-2 py-1.5 border-2 border-neutral-300 rounded-lg font-xl"
                value={answer}
                disabled={correctStatus === 2}
                onChange={(e) => {
                  setAnswer(
                    e.target.value.replaceAll(
                      /([^\d.-]|(?<=\d)-|(?<=\..*)\.)/g,
                      ""
                    )
                  );
                }}
              />

              {
                [
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    strokeWidth={3}
                    className="text-red-500"
                  />,
                  null,
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    strokeWidth={3}
                    className="text-emerald-500"
                  />,
                ][correctStatus]
              }
            </div>

            <div className="right-8 bottom-8 absolute flex items-center gap-4">
              <PrimaryButton
                disabled={correctStatus === 2}
                onClick={async () => {
                  const res = await (
                    await fetch("/api/question", {
                      method: "POST",
                      headers: {
                        authorization: `Bearer ${token}`,
                      },
                      body: JSON.stringify({
                        answer: [+answer],
                      }),
                    })
                  ).json();
                  if (res.correct) {
                    setCorrectStatus(2);
                  } else {
                    setCorrectStatus(0);
                  }
                }}
              >
                Check answer
              </PrimaryButton>
              <PrimaryButton
                onClick={async () => {
                  const { text } = await (
                    await fetch("/api/question", {
                      headers: {
                        authorization: `Bearer ${token}`,
                      },
                    })
                  ).json();
                  setProblemText(text);
                  if (qnum === 10 && correctStatus === 2) {
                    updateUserState(
                      await (
                        await fetch("/api/completion", {
                          method: "POST",
                          headers: {
                            authorization: `Bearer ${token}`,
                          },
                          body: JSON.stringify({
                            unit,
                            lesson,
                          }),
                        })
                      ).json()
                    );
                  }
                  if (correctStatus === 2) {
                    setQnum(qnum + 1);
                  }
                  setCorrectStatus(1);
                }}
              >
                {correctStatus === 2
                  ? qnum === 10
                    ? "Finish"
                    : "Next question"
                  : "Skip question"}
              </PrimaryButton>
            </div>
            <div className="top-20 right-8 bottom-28 absolute w-72">
              <Chatbot />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
