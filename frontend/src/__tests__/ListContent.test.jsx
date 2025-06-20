import { render, screen, waitFor } from "@testing-library/react";
import ListContent from "../components/ListContent/ListContent";
import { MemoryRouter } from "react-router-dom";
import { describe, afterEach, vi, it, expect } from "vitest";

describe("<ListContent />", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders items fetched from API", async () => {
    const fakeItems = [
      { id: 1, title: "Title 1", thumbnail_url: "thumb1.png", alt: "Title 1" },
      { id: 2, title: "Title 2", thumbnail_url: "thumb2.png", alt: "Title 2" },
    ];

    vi.spyOn(window, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ results: fakeItems }),
    });

    render(
      <MemoryRouter>
        <ListContent contentType={1} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText("Cargando contenido...")).not.toBeInTheDocument();
    });

    expect(screen.getByAltText("Title 1")).toHaveAttribute("src", "thumb1.png");
    expect(screen.getByAltText("Title 2")).toHaveAttribute("src", "thumb2.png");
  });

  it("shows no content message if results empty", async () => {
    vi.spyOn(window, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ results: [] }),
    });

    render(
      <MemoryRouter>
        <ListContent contentType={2} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText("Cargando contenido...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("No hay contenido en esta categoría.")).toBeInTheDocument();
  });
});
