import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"


describe("<Header />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    })
    it("renders a logo with a src and alt", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      const logo = screen.getByRole("img")
  expect(logo).toHaveAttribute("src", "")
  expect(logo).toHaveAttribute("alt", "")
    })
    it("has clickable links", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    })
  })

