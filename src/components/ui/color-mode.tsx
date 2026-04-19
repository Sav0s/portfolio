"use client"

import type { IconButtonProps, SpanProps } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

const ColorModeContext = React.createContext<UseColorModeReturn>({
  colorMode: "light",
  setColorMode: () => {},
  toggleColorMode: () => {},
})

function applyColorMode(mode: ColorMode) {
  const root = document.documentElement
  root.classList.toggle("dark", mode === "dark")
  root.setAttribute("data-theme", mode)
}

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorModeState] = React.useState<ColorMode>("light")

  React.useEffect(() => {
    const stored = localStorage.getItem("theme") as ColorMode | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = stored ?? (prefersDark ? "dark" : "light")
    setColorModeState(initial)
    applyColorMode(initial)
  }, [])

  const setColorMode = React.useCallback((mode: ColorMode) => {
    setColorModeState(mode)
    localStorage.setItem("theme", mode)
    applyColorMode(mode)
  }, [])

  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === "light" ? "dark" : "light")
  }, [colorMode, setColorMode])

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  )
}

export function useColorMode(): UseColorModeReturn {
  return React.useContext(ColorModeContext)
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  )
})

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        ref={ref}
        {...props}
      />
    )
  },
)

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        ref={ref}
        {...props}
      />
    )
  },
)
