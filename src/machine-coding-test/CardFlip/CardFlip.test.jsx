import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CardFlip from "../../Assignments/CardFlip/Components/CardFlip";

describe("CardFlip (state-driven)", () => {
  const user = userEvent.setup();

  test("renders card with front content initially", () => {
    render(<CardFlip front="Front 1" back="Back 1" />);

    const card = screen.getByTestId("card");

    expect(card).not.toHaveClass("flipped");
    expect(screen.getByText("Front 1")).toBeInTheDocument();
    expect(screen.getByText("Back 1")).toBeInTheDocument();
  });

  test("hover flips the card (adds flipped class)", async () => {
    render(<CardFlip front="Front 1" back="Back 1" />);

    const card = screen.getByTestId("card");

    await user.hover(card);

    expect(card).toHaveClass("flipped");
  });

  test("mouse leave unflips the card (removes flipped class)", async () => {
    render(<CardFlip front="Front 1" back="Back 1" />);

    const card = screen.getByTestId("card");

    await user.hover(card);
    expect(card).toHaveClass("flipped");

    await user.unhover(card);
    expect(card).not.toHaveClass("flipped");
  });

  test("multiple cards behave independently", async () => {
    render(
      <>
        <CardFlip front="Front A" back="Back A" />
        <CardFlip front="Front B" back="Back B" />
      </>
    );

    const cards = screen.getAllByTestId("card");

    await user.hover(cards[0]);

    expect(cards[0]).toHaveClass("flipped");
    expect(cards[1]).not.toHaveClass("flipped");
  });

  test("content is rendered correctly for each card", () => {
    render(
      <>
        <CardFlip front="A Front" back="A Back" />
        <CardFlip front="B Front" back="B Back" />
      </>
    );

    expect(screen.getByText("A Front")).toBeInTheDocument();
    expect(screen.getByText("A Back")).toBeInTheDocument();
    expect(screen.getByText("B Front")).toBeInTheDocument();
    expect(screen.getByText("B Back")).toBeInTheDocument();
  });
});