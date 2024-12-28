import { useState } from "react";
import Select from "react-select";
import { CopyToClipboard } from "react-copy-to-clipboard";
import conversationStartersData from "./contents/conversationStarter.json";

const ConversationStarters = () => {
  const conversationStarters: any = conversationStartersData;
  const [selectedPrompt, setSelectedPrompt] = useState<any>(null);

  const handleSelectChange = (selectedOption: any) => {
    setSelectedPrompt(selectedOption);
  };

  const customStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: 40,
      fontSize: "14px",
    }),
    option: (base: any) => ({
      ...base,
      fontSize: "14px",
    }),
  };

  return (
    <div className="w-screen max-w-md h-screen bg-gray-50 items-center py-10 px-4">
      <h1 className="text-2xl font-bold text-green-600 mb-5">
        Conversation Starters
      </h1>

      {/* Searchable Dropdown */}
      <Select
        options={conversationStarters.map((item: any) => ({
          value: item.prompt,
          label: item.prompt,
        }))}
        onChange={handleSelectChange}
        styles={customStyles}
        isSearchable
        placeholder="Search and select a prompt..."
      />

      {/* Display selected prompt and suggested replies */}
      {selectedPrompt && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg">{selectedPrompt.value}</h3>
          <p className="italic text-gray-600">
            Their Answer:{" "}
            {
              conversationStarters.find(
                (item: any) => item.prompt === selectedPrompt.value
              ).theirAnswer
            }
          </p>

          <div className="mt-4">
            <h4 className="font-medium">Suggested Replies:</h4>
            <ul className="list-disc pl-5 mt-2">
              {conversationStarters
                .find((item: any) => item.prompt === selectedPrompt.value)
                .suggestedReplies.map((reply: any, idx: any) => (
                  <li
                    key={idx}
                    className="mt-1 flex items-center justify-between"
                  >
                    <span>{reply}</span>
                    <CopyToClipboard text={reply}>
                      <button className="ml-2 text-blue-500 hover:text-blue-700">
                        Copy
                      </button>
                    </CopyToClipboard>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationStarters;
