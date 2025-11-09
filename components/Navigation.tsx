'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import './Navigation.css'

export default function Navigation() {
  const pathname = usePathname()
  const [cartCount, setCartCount] = useState(0)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    // Load cart count from localStorage
    const updateCartCount = () => {
      if (typeof window !== 'undefined') {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        setCartCount(cart.length)
      }
    }

    updateCartCount()

    // Listen for cart updates
    window.addEventListener('cartUpdated', updateCartCount)
    window.addEventListener('storage', updateCartCount)

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount)
      window.removeEventListener('storage', updateCartCount)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          {!logoError ? (
            <Image
              src="/capanna-logo.png"
              alt="Capanna Restaurant"
              width={180}
              height={60}
              priority
              className="logo-image"
              onError={() => setLogoError(true)}
            />
          ) : (
            <h1 className="logo-text">Capanna</h1>
          )}
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link href="/menu" className={pathname === '/menu' ? 'active' : ''}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/booking" className={pathname === '/booking' ? 'active' : ''}>
              Joy band qilish
            </Link>
          </li>
          <li>
            <Link href="/menu" className="cart-link">
              Dastafka 🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

