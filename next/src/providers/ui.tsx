"use client";

import { NextUIProvider, NextUIProviderProps } from "@nextui-org/react";

export default function UI(props: NextUIProviderProps) {
  return <NextUIProvider {...props} />;
}
