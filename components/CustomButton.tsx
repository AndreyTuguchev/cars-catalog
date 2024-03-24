'use client';

import { CustomButtonProps } from '@/types';
import React from 'react';

let CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;
