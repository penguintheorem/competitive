// global constants
const OPENING_BRACKETS = '([{'
const CLOSING_BRACKETS = ')]}'

type OpeningBracket = '(' | '[' | '{'
type ClosingBracket = ')' | ']' | '}'

const BRACKETS_MAPPING: { [key in ClosingBracket]: OpeningBracket } = {
  ')': '(',
  ']': '[',
  '}': '{',
}

const isOpeningBracket = (char: string): char is OpeningBracket =>
  OPENING_BRACKETS.includes(char)

const isClosingBracket = (char: string): char is ClosingBracket =>
  CLOSING_BRACKETS.includes(char)

export const areBracketsBalanced = (string: string): boolean => {
  const stack: OpeningBracket[] = []

  for (const char of string) {
    if (isOpeningBracket(char)) {
      stack.push(char)
    } else if (isClosingBracket(char)) {
      const top = stack.pop()
      if (!top || top !== BRACKETS_MAPPING[char]) {
        return false
      }
    }
  }

  return stack.length === 0
}
