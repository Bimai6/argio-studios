import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import ContactForm from "../components/ContactForm/ContactForm"
import { describe, it, expect, beforeEach, vi } from "vitest"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"

vi.mock("@emailjs/browser", () => ({
  default: {
    sendForm: vi.fn().mockResolvedValue({ status: 200 }),
  }
}))

vi.mock("sweetalert2", () => ({
  default: {
    fire: vi.fn(),
  }
}))

describe("<ContactForm />", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("sends form correctly when valid", async () => {
    render(<ContactForm />)

    fireEvent.change(screen.getByPlaceholderText(/nombre completo/i), {
      target: { value: "User" },
    })
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "user@example.com" },
    })
    fireEvent.change(screen.getByPlaceholderText(/mensaje/i), {
      target: { value: "Hola" },
    })

    fireEvent.submit(screen.getByRole("form"))

    await waitFor(() => {
      expect(emailjs.sendForm).toHaveBeenCalled()
      expect(Swal.fire).toHaveBeenCalledWith(expect.objectContaining({
        icon: "success",
        title: "¡Correo enviado!",
      }))
    })
  })

  it("alerts and does not send if honeypot filled", async () => {
    render(<ContactForm />)

    const form = screen.getByRole("form")
    const websiteInput = form.querySelector('input[name="website"]')

    fireEvent.change(websiteInput, {
      target: { value: "spam" },
    })

    fireEvent.submit(form)

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith(expect.objectContaining({
        icon: "warning",
        title: "Detectado envío automatizado",
      }))
      expect(emailjs.sendForm).not.toHaveBeenCalled()
    })
  })
})
