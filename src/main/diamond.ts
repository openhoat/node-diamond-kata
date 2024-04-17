const centerLines = (s: string): string => {
  const lines = s
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
  const width = maxLength(lines)
  return lines.map((line) => padCenter(line.trim(), width)).join('\n')
}

const maxLength = (lines: string[]): number =>
  lines.reduce((max, line) => Math.max(max, line.trim().length), 0)

const padCenter = (s: string, maxLen: number): string =>
  s.padStart((s.length + maxLen) / 2).padEnd(maxLen)

export const printDiamond = (letter: string) => {
  const baseCharCode = 'A'.charCodeAt(0)
  const letterCharCodeDelta = letter.charCodeAt(0) - baseCharCode
  const indexes = Array.from(Array(letterCharCodeDelta + 1).keys())
  const lines = indexes.reduce((lines, index) => {
    const charCodeDelta = letterCharCodeDelta - index
    const noSpaces = charCodeDelta * 2 - 1
    const spaces = ''.padStart(noSpaces, ' ')
    const char = String.fromCharCode(charCodeDelta + baseCharCode)
    const line = spaces.length ? `${char}${spaces}${char}` : char
    return index > 0 ? [line, ...lines, line] : [...lines, line]
  }, [] as string[])
  return centerLines(lines.join('\n'))
}
