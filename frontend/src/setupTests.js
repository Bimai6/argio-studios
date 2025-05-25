import '@testing-library/jest-dom'
import fetch from 'cross-fetch'
window.fetch = fetch
import { afterEach, vi } from 'vitest'

afterEach(() => {
    vi.restoreAllMocks()
})
