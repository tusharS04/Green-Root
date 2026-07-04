import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function BrandMark(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M31.4 9.2c-9.1 0-16.5 7-16.5 15.6 0 4.5 1.9 8.5 5 11.4-4.4 2.1-7.5 6.4-7.5 11.4 0 7 5.8 12.7 13 12.7 5.2 0 9.7-2.9 11.8-7.2 2.8 1.8 6.2 2.9 9.8 2.9 9.1 0 16.5-7 16.5-15.6 0-7-4.9-12.8-11.7-14.9.2-.9.3-1.8.3-2.8 0-7.6-6.2-13.7-13.9-13.7-2.5 0-4.8.7-6.8 1.9Z"
        fill="currentColor"
        opacity=".16"
      />
      <path
        d="M24.5 19.8c4.2-4.8 12.6-7.2 19.1-3.4 6.9 4 8.9 13.7 4.6 20.1-3 4.4-7.8 5.8-12.6 7.4-5 1.7-9.8 4.2-12.4 8.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.2"
      />
      <path
        d="M21.8 26.5c-3.2 2.4-5.2 6.1-5.2 10.3 0 7 5.6 12.7 12.5 12.7 3.6 0 6.8-1.5 9.1-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.2"
      />
      <path
        d="M39.2 15.8c1.4 6.9-1 15.7-8.7 20.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.2"
      />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 17 17 7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.9 3.8h2.7c.4 0 .8.3.9.7l1.1 4.3c.1.4 0 .9-.4 1.1l-1.9 1.4a16.2 16.2 0 0 0 4.9 4.9l1.4-1.9c.3-.4.7-.5 1.1-.4l4.3 1.1c.4.1.7.5.7.9v2.7c0 .6-.4 1.1-1 1.2-1 .1-2 .2-3 .2-8.3 0-15-6.7-15-15 0-1 .1-2 .2-3 .1-.6.6-1 1.2-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13.2 20v-7h2.4l.4-2.8h-2.8V8.5c0-.8.2-1.4 1.4-1.4H16V4.6c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v2.1H8.3V13h2.3v7h2.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="9" width="3" height="11" fill="currentColor" />
      <rect x="4" y="4" width="3" height="3" fill="currentColor" />
      <path d="M10 20V9h2.9v1.5h.1c.4-.8 1.4-1.8 3-1.8 3.2 0 3.8 2.1 3.8 4.8V20H17v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20H10Z" fill="currentColor" />
    </svg>
  );
}
