import { SentIcon } from "@hugeicons/core-free-icons/index";
import { HugeiconsIcon } from "@hugeicons/react";
import ReactKatex from "@pkasila/react-katex";
import { useState } from "react";

export const Chatbot = () => {
  const [hist, setHist] = useState([]);
  const [text, setText] = useState("");
  const [rerender, setRerender] = useState(false);

  const onSendMsg = (msg) => {
    let tempHist = hist;
    tempHist.push({
      role: "user",
      content: msg,
    });
    setHist(tempHist);
    setRerender(!rerender);

    (async () => {
      const res = await fetch("/api/gemini", {
        method: "POST",
        body: JSON.stringify({
          userQuestion: msg,
          history: hist,
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      tempHist.push({
        role: "model",
        content: "",
      });
      setHist(tempHist);

      while (true) {
        const { done, value } = await reader.read();
        console.log(decoder.decode(value).split("data: "));
        try {
          tempHist = [
            ...tempHist.slice(0, tempHist.length - 1),
            {
              role: "model",
              content: JSON.parse(decoder.decode(value).split("data: ")[1])
                .text,
            },
          ];
          setHist(tempHist);
          setRerender(!rerender);
        } catch {}
        if (done) break;
        tempHist = [
          ...tempHist.slice(0, tempHist.length - 1),
          {
            role: "model",
            content: JSON.parse(decoder.decode(value).split("data: ")[1])
              .fullReply,
          },
        ];
        setHist(tempHist);
        setRerender(!rerender);
      }
    })();
  };

  return (
    <div className="flex flex-col bg-sky-50 rounded-xl w-full h-full">
      <div className="flex flex-col justify-start items-stretch gap-1 p-4 overflow-auto grow">
        {hist.map(({ content, role }) => (
          <div key={content} className="flex justify-between items-center">
            {role !== "model" && <div></div>}
            <p
              className={`px-4 py-1.5 rounded-lg text-white ${
                role === "model" ? "bg-neutral-400" : "bg-sky-500"
              }`}
            >
              <ReactKatex>{content}</ReactKatex>
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 p-4">
        <input
          placeholder="Ask anything..."
          className="px-2 outline-none grow"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSendMsg(text);
              setText("");
            }
          }}
        />
        <button
          className="flex justify-center items-center bg-sky-400 rounded-full w-10 h-10 text-white"
          onClick={() => {
            onSendMsg(text);
            setText("");
          }}
        >
          <HugeiconsIcon icon={SentIcon} size={20} />
        </button>
      </div>
    </div>
  );
};
