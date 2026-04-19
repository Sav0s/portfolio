"use client"

import type { SpanProps } from "@chakra-ui/react"
import { Span } from "@chakra-ui/react"
import * as React from "react"

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

const ColorModeContext = React.createContext<UseColorModeReturn>({
  colorMode: "dark",
  setColorMode: () => {},
  toggleColorMode: () => {},
})

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const setColorMode = React.useCallback((_mode: ColorMode) => {}, [])
  const toggleColorMode = React.useCallback(() => {}, [])

  return (
    <ColorModeContext.Provider
      value={{ colorMode: "dark", setColorMode, toggleColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

export function useColorMode(): UseColorModeReturn {
  return React.useContext(ColorModeContext)
}

export function useColorModeValue<T>(_light: T, dark: T) {
  return dark
}

export function ColorModeIcon() {
  return null
}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function ColorModeButton(_props, _ref) {
  return null
})

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return <Span display="contents" ref={ref} {...props} />
  },
)

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return <Span display="contents" ref={ref} {...props} />
  },
)
