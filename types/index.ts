import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string; // ?: means optional
  handleClick?: MouseEventHandler<HTMLButtonElement>; // ?: means optional
  btnType?: 'button' | 'submit';
}
