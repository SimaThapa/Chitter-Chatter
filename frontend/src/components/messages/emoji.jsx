import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const Emoji = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('😊'); // Default emoji

  const handleEmojiClick = (event, emojiObject) => {
    setSelectedEmoji(emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div>
      <span 
        style={{ fontSize: '2rem', cursor: 'pointer' }} 
        onClick={() => setShowPicker(!showPicker)}
      >
        {selectedEmoji}
      </span>
      {showPicker && (
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default Emoji;
