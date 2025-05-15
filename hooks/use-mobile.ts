"use client"

import { useState, useEffect } from "react"

export function useIsMobile() {
  // Initialize with null to indicate "not determined yet"
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    // Function to check if the viewport is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize with debounce
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkIfMobile, 100)
    }

    window.addEventListener("resize", handleResize)

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Return false during SSR, then the actual value once determined
  return isMobile === null ? false : isMobile
}
