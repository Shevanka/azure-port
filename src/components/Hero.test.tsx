import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button'

vi.mock('@/components/ParticleBackground', () => ({
  default: () => <div data-testid="particle-background" />,
}))

vi.mock('@/components/FloatingElements', () => ({
  default: () => <div data-testid="floating-elements" />,
}))

vi.mock('@/components/AnimatedGradient', () => ({
  default: () => <div data-testid="animated-gradient" />,
}))

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    t: {
      hero: {
        greeting: "Hello, I'm a",
        role: 'Developer',
        description:
          'Creative Full-Stack Developer focused on building modern websites and innovative web applications',
        contactMe: 'Contact Me',
        downloadCV: 'Download CV',
      },
    },
  }),
}))

describe('Hero', () => {
  it('renders hero content and background layers', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { name: /hello, i'm a developer/i })).toBeInTheDocument()
    expect(
      screen.getByText(
        /creative full-stack developer focused on building modern websites and innovative web applications/i
      )
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /contact me/i })).toBeInTheDocument()
    const downloadLink = screen.getByRole('link', { name: /download cv/i })
    expect(downloadLink).toBeInTheDocument()
    expect(downloadLink).toHaveAttribute(
      'href',
      'https://drive.google.com/file/d/1eEInBfN23gYciI02wTHKRe_L2tVL_Ug6/view?usp=sharing'
    )
    expect(screen.getByTestId('animated-gradient')).toBeInTheDocument()
    expect(screen.getByTestId('particle-background')).toBeInTheDocument()
    expect(screen.getByTestId('floating-elements')).toBeInTheDocument()
  })

  it('renders the profile image with expected source and alt text', () => {
    render(<Hero />)

    const profileImage = screen.getByRole('img', { name: 'Profile' })
    expect(profileImage).toHaveAttribute('src', '/images/profile.webp')
  })

  it('scrolls to the "contact" section when clicking "Contact Me"', async () => {
    const contactSection = document.createElement('div')
    contactSection.id = 'contact'
    contactSection.getBoundingClientRect = vi.fn(() => ({
      top: 600,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 600,
      toJSON: () => ({}),
    }))
    document.body.appendChild(contactSection)

    Object.defineProperty(window, 'scrollY', {
      value: 100,
      configurable: true,
      writable: true,
    })

    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)

    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /contact me/i }))

    expect(scrollTo).toHaveBeenCalledWith({ top: 636, behavior: 'smooth' })
    contactSection.remove()
  })

  it('renders as Slot when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Click me</a>
      </Button>
    )

    const link = screen.getByRole('link', { name: /click me/i })
    expect(link).toBeInTheDocument()
  })
})
