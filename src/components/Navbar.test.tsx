import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '@/components/Navbar'

vi.mock('@/components/ThemeToggle', () => ({
  default: () => <div data-testid="theme-toggle" />,
}))

vi.mock('@/components/LanguageSwitcher', () => ({
  default: () => <div data-testid="language-switcher" />,
}))

vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    t: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
    },
  }),
}))

describe('Navbar', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)
    vi.spyOn(window.history, 'replaceState').mockImplementation(() => undefined)
  })

  it('scrolls to the clicked section with a measured offset', async () => {
    const aboutSection = document.createElement('section')
    aboutSection.id = 'about'
    aboutSection.getBoundingClientRect = vi.fn(() => ({
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
    document.body.appendChild(aboutSection)

    Object.defineProperty(window, 'scrollY', {
      value: 100,
      configurable: true,
      writable: true,
    })

    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('link', { name: 'About' }))

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 636,
      behavior: 'smooth',
    })
    expect(window.history.replaceState).toHaveBeenCalledWith(null, '', '#about')

    aboutSection.remove()
  })

  it('adds blur as soon as the page scrolls', async () => {
    Object.defineProperty(window, 'scrollY', {
      value: 1,
      configurable: true,
      writable: true,
    })

    render(<Navbar />)
    fireEvent.scroll(window)

    await waitFor(() => {
      expect(screen.getByRole('navigation')).toHaveClass('backdrop-blur-md')
    })
  })
})
