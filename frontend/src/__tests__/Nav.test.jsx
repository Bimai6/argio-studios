import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Nav from "../components/Nav/Nav"
import { describe, it, expect } from "vitest"

describe("<Nav />", () => {
    it("does not show 'Principal' link on home path '/'", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Nav />
            </MemoryRouter>
        )
        expect(screen.queryByText(/principal/i)).toBeNull()
    })

    it("shows navigation links on other paths", () => {
        render(
            <MemoryRouter initialEntries={["/about-us"]}>
                <Nav />
            </MemoryRouter>
        )
        expect(screen.getByText(/argio/i)).toHaveAttribute("href", "/about-us")
        expect(screen.getByText(/principal/i)).toHaveAttribute("href", "/")
        expect(screen.getByText(/contacto/i)).toHaveAttribute("href", "/contact")
    })
})
