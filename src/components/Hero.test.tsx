import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Hero from "@/components/Hero";

vi.mock("@/components/ParticleBackground", () => ({
  default: () => <div data-testid="particle-background" />,
}));

vi.mock("@/components/FloatingElements", () => ({
  default: () => <div data-testid="floating-elements" />,
}));

vi.mock("@/components/AnimatedGradient", () => ({
  default: () => <div data-testid="animated-gradient" />,
}));

vi.mock("@/hooks/useLanguage", () => ({
  useLanguage: () => ({
    t: {
      hero: {
        greeting: "Hello, I'm a",
        role: "Developer",
        description:
          "Creative Full-Stack Developer focused on building modern websites and innovative web applications",
        contactMe: "Contact Me",
        downloadCV: "Download CV",
      },
    },
  }),
}));

describe("Hero", () => {
  it("renders hero content and background layers", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { name: /hello, i'm a developer/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /creative full-stack developer focused on building modern websites and innovative web applications/i
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /contact me/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /download cv/i })).toBeInTheDocument();
    expect(screen.getByTestId("animated-gradient")).toBeInTheDocument();
    expect(screen.getByTestId("particle-background")).toBeInTheDocument();
    expect(screen.getByTestId("floating-elements")).toBeInTheDocument();
  });

  it("renders the profile image with expected source and alt text", () => {
    render(<Hero />);

    const profileImage = screen.getByRole("img", { name: "Profile" });
    expect(profileImage).toHaveAttribute("src", "/images/profile.webp");
  });

  it('scrolls to the "contact" section when clicking "Contact Me"', async () => {
    const contactSection = document.createElement("div");
    const scrollIntoView = vi.fn();
    contactSection.id = "contact";
    contactSection.scrollIntoView = scrollIntoView;
    document.body.appendChild(contactSection);

    const user = userEvent.setup();
    render(<Hero />);
    await user.click(screen.getByRole("button", { name: /contact me/i }));

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
    contactSection.remove();
  });
});
