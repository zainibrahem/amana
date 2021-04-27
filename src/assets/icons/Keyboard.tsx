import React from 'react';
export const KeyboardIcon = ({
  color = 'currentColor',
  width = '17px',
  height = '18px',
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29.313" height="16" viewBox="0 0 29.313 16">
        <path id="Keyboard" d="M28.313,16H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0H28.313a1,1,0,0,1,1,1V15A1,1,0,0,1,28.313,16ZM2,1.647a.333.333,0,0,0-.333.333V14A.333.333,0,0,0,2,14.333H27.333A.334.334,0,0,0,27.667,14V1.98a.334.334,0,0,0-.334-.333Zm23.667,11h-2v-1.98h2v1.979Zm-3.353,0H7v-1.98H22.314v1.979Zm-16.647,0h-2v-1.98h2v1.979ZM25.667,9h-2V7h2V9ZM22.314,9h-1.98V7h1.98V9ZM19,9H17V7h2V9ZM15.666,9h-2V7h2V9ZM12.334,9h-2V7h2V9ZM9,9H7V7H9V9ZM5.666,9h-2V7h2V9Zm20-3.667h-2v-2h2v2Zm-3.353,0h-1.98v-2h1.98v2ZM19,5.333H17v-2h2v2Zm-3.334,0h-2v-2h2v2Zm-3.333,0h-2v-2h2v2ZM9,5.333H7v-2H9v2Zm-3.334,0h-2v-2h2v2Z" fill="#3f434a"/>
    </svg>

  );
};
