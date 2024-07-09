import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import EmojiPicker from 'emoji-picker-react';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { loading, sendMessage } = useSendMessage();

  const handleEmojiClick = (event, emojiObject) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="absolute inset-y-0 end-0 flex items-center pe-3 space-x-2">
          <button 
            type='button' 
            onClick={() => setShowPicker(!showPicker)} 
            className='flex items-center justify-center w-8 h-8 bg-gray-600 text-white rounded-full'
          >
            😊
          </button>
          <button type='submit' className='flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full'>
            {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
          </button>
        </div>
        {showPicker && (
          <div className='absolute bottom-10 right-0'>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </form>
  );
};

export default MessageInput;
