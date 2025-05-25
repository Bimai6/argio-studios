import { describe, it, expect } from "vitest"
import { isEven } from "../utils/Functions"

describe("isEven utility", () => {
    it.each([
        [0, true],
        [1, false],
        [2, true],
        [-3, false],
    ])("isEven(%i) should return %s", (input, expected) => {
        expect(isEven(input)).toBe(expected)
    })
})
