import { render, screen } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import { Router as appRoutes } from "../router/Router"
import { describe, it, expect, vi } from "vitest"

const routes = [
    { path: "/", name: "Home", testId: "page-home" },
    { path: "/catalogue", name: "Catalogue", testId: "page-catalogue" },
    { path: "/contact", name: "Contact", testId: "page-contact" },
    { path: "/about-us", name: "About Us", testId: "page-about-us" },
]

vi.mock('../pages/Catalogue/Catalogue', () => ({
    default: () => <div data-testid="page-catalogue" />
}))


describe("App routing", () => {
    routes.forEach(({ path, testId }) => {
        it(`renders the correct page on route "${path}"`, () => {
            const router = createMemoryRouter(appRoutes.routes, {
                initialEntries: [path],
            })

            render(<RouterProvider router={router} />)

            expect(screen.getByTestId(testId)).toBeInTheDocument()
        })
    })
})
