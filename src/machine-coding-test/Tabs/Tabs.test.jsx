import { render, screen, within  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Tabs from "../../Assignments/Tabs/Component/Tabs";

describe("Tabs component (generic + ReactNode support)", () => {
  const user = userEvent.setup();

  const tabs = [
    {
      id: 1,
      title: (
        <div>
          <span role="img" aria-label="home">🏠</span> Home
        </div>
      ),
      content: <div>Home Content</div>,
    },
    {
      id: 2,
      title: (
        <div>
          <span role="img" aria-label="profile">👤</span> Profile
        </div>
      ),
      content: <div>Profile Content</div>,
    },
    {
      id: 3,
      title: "Settings",
      content: <div>Settings Content</div>,
    },
  ];

  test("renders all tab headers", () => {
    render(<Tabs tabs={tabs} />);
    const tabList = screen.getByRole("tablist");

    expect(within(tabList).getByRole("tab", { name: /home/i })).toBeInTheDocument();
    expect(within(tabList).getByRole("tab", { name: /profile/i })).toBeInTheDocument();
    expect(within(tabList).getByRole("tab", { name: /settings/i })).toBeInTheDocument()
  });

  test("shows first tab content by default", () => {
    render(<Tabs tabs={tabs} />);

    expect(screen.getByText("Home Content")).toBeInTheDocument();
    expect(screen.queryByText("Profile Content")).not.toBeInTheDocument();
    expect(screen.queryByText("Settings Content")).not.toBeInTheDocument();
  });

  test("switches content when clicking a tab", async () => {
    render(<Tabs tabs={tabs} />);

    await user.click(screen.getByText(/Profile/i));

    expect(screen.getByText("Profile Content")).toBeInTheDocument();
    expect(screen.queryByText("Home Content")).not.toBeInTheDocument();
  });

  test("switches between multiple tabs correctly", async () => {
    render(<Tabs tabs={tabs} />);

    await user.click(screen.getByText(/Settings/i));
    expect(screen.getByText("Settings Content")).toBeInTheDocument();

    await user.click(screen.getByText(/Home/i));
    expect(screen.getByText("Home Content")).toBeInTheDocument();
  });


  test("only one tab content visible at a time", async () => {
    render(<Tabs tabs={tabs} />);

    await user.click(screen.getByText(/Profile/i));

    expect(screen.getByText("Profile Content")).toBeInTheDocument();
    expect(screen.queryByText("Home Content")).not.toBeInTheDocument();
    expect(screen.queryByText("Settings Content")).not.toBeInTheDocument();
  });
});