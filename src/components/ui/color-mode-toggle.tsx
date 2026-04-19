'use client';

import { IconButton } from '@chakra-ui/react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { useColorMode } from './color-mode';

export function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="toggle color mode"
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? <LuMoon /> : <LuSun />}
    </IconButton>
  );
}
