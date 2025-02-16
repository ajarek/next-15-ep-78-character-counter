'use client'

import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <Textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="border border-gray-300"
      />
      <div className="flex justify-between items-center gap-4">
        <span>Number of characters: {text.length}</span>
        <Button onClick={() => setText('')}>Clear</Button>
      </div>
    </div>
  );
};

export default CharacterCounter; 