import { useState } from "react";
import Select from "react-select";

const PromptReplies = ({ promptSuggestions }: any) => {
  const [suggestedReplies, setSuggestedReplies] = useState<string[]>([]);

  const handlePromptSelect = (selectedOption: any) => {
    if (selectedOption) {
      setSuggestedReplies(promptSuggestions[selectedOption.value] || []);
    } else {
      setSuggestedReplies([]);
    }
  };

  const handleCopy = (reply: string) => {
    navigator.clipboard.writeText(reply);
    alert("Copied to clipboard!");
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minWidth: "100%",
    }),
  };

  return (
    <div className="w-screen max-w-md h-screen bg-gray-50 items-center py-10 px-4">
      <h1 className="text-2xl font-bold text-green-600 mb-5">Prompt Replies</h1>

      <Select
        options={Object.keys(promptSuggestions).map((item) => ({
          value: item,
          label: item,
        }))}
        onChange={handlePromptSelect}
        styles={customStyles}
        isSearchable
        placeholder="Search and select a prompt..."
        className="w-full max-w-md"
      />

      <div className="mt-5 w-full max-w-md">
        {suggestedReplies.length > 0 ? (
          suggestedReplies.map((reply, index) => (
            <div
              key={index}
              className="bg-white p-3 my-2 rounded shadow border flex justify-between items-center"
            >
              <p className="text-gray-700">{reply}</p>
              <button
                className="text-blue-500 underline"
                onClick={() => handleCopy(reply)}
              >
                Copy
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No replies available. Please select a prompt.
          </p>
        )}
      </div>
    </div>
  );
};

export default PromptReplies;
