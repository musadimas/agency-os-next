import clsx from "clsx";
import React from "react";

interface AlertProps {
  type: "info" | "success" | "warning" | "error";
  message?: string;
}

export default function Alert({ type = "info", ...props }: AlertProps) {
  return (
    <div
      className={clsx("p-4 dark:brightness-90 border-2", {
        "border-amber-500 text-amber-800 dark:text-amber-200": type === "warning",
        "border-rose-500 text-rose-800 dark:text-rose-200": type === "error",
        "border-green-500 text-green-800 dark:text-green-200": type === "success",
        "border-blue-500 text-blue-800 dark:text-blue-200": type === "info",
      })}
    >
      <div className='flex items-center'>
        <div className='flex-shrink-0'>
          {/* <Icon
					:name="iconMap[type]"
					className="[
						'w-6 h-6',
						{
							'text-amber-500': type === 'warning',
							'text-rose-500': type === 'error',
							'text-green-500': type === 'success',
							'text-blue-500': type === 'info',
						},
					]"
					aria-hidden="true"
				/> */}
        </div>
        <div className='ml-3'>{props.message}</div>
      </div>
    </div>
  );
}
