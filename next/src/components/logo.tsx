import clsx from "clsx";
import React from "react";

type LogoProps = {
  caption?: string;
  classNames?: { caption?: string };
};

export default function Logo(props: LogoProps) {
  return (
    <div className='flex items-center gap-2'>
      <img src='/logo/logo.png' />
      {props.caption && <p className={clsx("text-logo whitespace-break-spaces", props.classNames?.caption)}>{props.caption}</p>}
    </div>
  );
}
