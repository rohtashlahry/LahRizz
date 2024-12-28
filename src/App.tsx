import { useState } from "react";
import PromptReplies from "./PromptReplies";
import ConversationStarters from "./ConversationStarter";
import prompt from "./contents/prompts.json";
import { FaHome, FaPaperPlane, FaReply } from "react-icons/fa";

export default function App() {
  const [currentView, setCurrentView] = useState("home");

  const RenderHome = () => {
    return (
      <div className="w-screen max-w-md h-screen bg-gradient-to-r from-indigo-300 to-indigo-500 flex flex-col items-center justify-center text-center py-10 px-4">
        <h1 className="text-4xl font-bold text-white mb-5">TempRizz</h1>
        <p className="text-xl text-white mb-10">
          AI Generated suggestions coming soon
        </p>
        <div className="text-white bg-black bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Welcome to TempRizz!</h2>
          <p className="mb-4">
            Discover new connections and exciting conversations. Stay tuned for
            AI-powered suggestions to enhance your dating experience.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow overflow-y-auto">
        {currentView === "home" && <RenderHome />}
        {currentView === "prompt" && (
          <PromptReplies promptSuggestions={prompt} />
        )}
        {currentView === "conversationStarters" && <ConversationStarters />}
      </div>
      <nav className="flex justify-around bg-black bg-opacity-50 text-white py-3 fixed bottom-0 w-full backdrop-blur-lg">
        <button
          className={`px-4 py-2 rounded text-white px-4 py-2 rounded-lg ${
            currentView === "home" ? "bg-blue-500 " : "bg-blue-700"
          }`}
          onClick={() => setCurrentView("home")}
        >
          <FaHome />
        </button>
        <button
          className={`px-4 py-2 rounded text-white px-4 py-2 rounded-lg ${
            currentView === "conversationStarters"
              ? "bg-blue-500"
              : "bg-blue-700"
          }`}
          onClick={() => setCurrentView("conversationStarters")}
        >
          <FaPaperPlane />
        </button>
        <button
          className={`px-4 py-2 rounded text-white px-4 py-2 rounded-lg ${
            currentView === "prompt" ? "bg-blue-500" : "bg-blue-700"
          }`}
          onClick={() => setCurrentView("prompt")}
        >
          <FaReply />
        </button>
      </nav>
    </div>
  );
}
