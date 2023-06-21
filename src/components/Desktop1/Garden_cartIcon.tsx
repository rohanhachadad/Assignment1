import { memo, SVGProps } from 'react';

const Garden_cartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.3 18C5.66667 18 5.125 17.7708 4.675 17.3125C4.225 16.8542 4 16.3083 4 15.675V6.4L2.175 2H-1.78814e-07V-2.38419e-07H3.525L5.175 4H19.95C20.3333 4 20.625 4.15833 20.825 4.475C21.025 4.79167 21.0333 5.11667 20.85 5.45L18 11.025C18.85 11.1583 19.5625 11.55 20.1375 12.2C20.7125 12.85 21 13.6167 21 14.5C21 15.4667 20.6625 16.2917 19.9875 16.975C19.3125 17.6583 18.4917 18 17.525 18C16.5417 18 15.7125 17.6583 15.0375 16.975C14.3625 16.2917 14.025 15.4667 14.025 14.5C14.025 14.1667 14.0667 13.8583 14.15 13.575C14.2333 13.2917 14.35 13.0167 14.5 12.75L11.225 12.45L8.225 16.95C8.00833 17.2833 7.72917 17.5417 7.3875 17.725C7.04583 17.9083 6.68333 18 6.3 18ZM15.85 10.875L18.325 6L6 6.025L7.25 9C7.38333 9.33333 7.59583 9.6125 7.8875 9.8375C8.17917 10.0625 8.51667 10.1917 8.9 10.225L15.85 10.875ZM6.325 15.975C6.35833 15.975 6.43333 15.9333 6.55 15.85L8.975 12.25C8.15833 12.1667 7.51667 11.9708 7.05 11.6625C6.58333 11.3542 6.23333 11.0333 6 10.7V15.7C6 15.7833 6.03333 15.85 6.1 15.9C6.16667 15.95 6.24167 15.975 6.325 15.975ZM17.5 16C17.9333 16 18.2917 15.8542 18.575 15.5625C18.8583 15.2708 19 14.9167 19 14.5C19 14.0667 18.8583 13.7083 18.575 13.425C18.2917 13.1417 17.9333 13 17.5 13C17.0833 13 16.7292 13.1417 16.4375 13.425C16.1458 13.7083 16 14.0667 16 14.5C16 14.9167 16.1458 15.2708 16.4375 15.5625C16.7292 15.8542 17.0833 16 17.5 16Z'
      fill='#1C1B1F'
      fillOpacity={0.7}
    />
  </svg>
);

const Memo = memo(Garden_cartIcon);
export { Memo as Garden_cartIcon };