import { FC, ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'svg'> & {
  color?: string;
};

export const Buble: FC<Props> = ({ color, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%" // Замість фіксованого розміру
      height="100%"
      viewBox="0 0 325 230"
      preserveAspectRatio="none" 
      fill={color}
      {...rest}
    >
      <path
        d="M245.152 252C341.327 89.2526 361.431 19.5322 245.152 -8L-15 -8L-15 252L245.152 252Z"
        fill={color}
      />
    </svg>
  );
};
