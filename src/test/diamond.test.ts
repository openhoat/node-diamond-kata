import { printDiamond } from '../main/diamond'

const withoutEmptyLines = (s: string): string =>
  s
    .split('\n')
    .filter((line) => line.length > 0)
    .join('\n')

describe('Diamond Kata tests', () => {
  describe('Diamond', () => {
    describe('printDiamond', () => {
      test('should return a diamond with A given letter is A', () => {
        // When
        const result = printDiamond('A')
        const expectedResult = 'A'
        // Then
        expect(result).toEqual(expectedResult)
      })
      test('should return a diamond with A and B given letter is B', () => {
        // When
        const result = printDiamond('B')
        const expectedResult = withoutEmptyLines(`
 A 
B B
 A 
`)
        // Then
        expect(result).toEqual(expectedResult)
      })
      test('should return a diamond with A, B and C given letter is C', () => {
        // When
        const result = printDiamond('C')
        const expectedResult = withoutEmptyLines(`
  A  
 B B 
C   C
 B B 
  A  
`)
        // Then
        expect(result).toEqual(expectedResult)
      })
      xtest('should return a diamond with A, B, C and D given letter is D', () => {
        // When
        const result = printDiamond('D')
        const expectedResult = withoutEmptyLines(`
   A
  B B
 C   C
D     D
 C   C
  B B
   A
`)
        // Then
        expect(result).toEqual(expectedResult)
      })
      xtest('should return a diamond with A TO Z given letter is Z', () => {
        // When
        const result = printDiamond('Z')
        const expectedResult = withoutEmptyLines(`
                          A
                         B B
                        C   C
                       D     D
                      E       E
                     F         F
                    G           G
                   H             H
                  I               I
                 J                 J
                K                   K
               L                     L
              M                       M
             N                         N
            O                           O
           P                             P
          Q                               Q
         R                                 R
        S                                   S
       T                                     T
      U                                       U
     V                                         V
    W                                           W
  X                                             X
 Y                                               Y
Z                                                 Z
 Y                                               Y
  X                                             X
   W                                           W
    V                                         V
     U                                       U
      T                                     T
       S                                   S
        R                                 R
         Q                               Q
          P                             P
           O                           O
            N                         N
             M                       M
              L                     L
               K                   K
                J                 J
                 I               I
                  H             H
                   G           G
                    F         F
                     E       E
                      D     D
                       C   C
                        B B
                         A
`)
        // Then
        expect(result).toEqual(expectedResult)
      })
    })
  })
})
