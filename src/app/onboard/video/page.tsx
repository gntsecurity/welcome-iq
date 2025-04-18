'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function SafetyVideoScreen() {
  const router = useRouter()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    const playerOrigin = 'https://www.youtube.com'

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== playerOrigin) return
      const data = JSON.parse(event.data)

      if (data.event === 'onStateChange' && data.info === 0) {
        router.push('/onboard/agreement')
      }
    }

    window.addEventListener('message', handleMessage)

    if (iframe) {
      // Request fullscreen
      const container = iframe.parentElement
      if (container?.requestFullscreen) container.requestFullscreen()

      // Enable API and play
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'playVideo',
          args: []
        }),
        playerOrigin
      )
    }

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [router])

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-6xl aspect-video"
      >
        <div className="w-full h-full">
          <iframe
            ref={iframeRef}
            className="w-full h-full rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/bIKHudof6pc?enablejsapi=1&autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=0"
            title="Contractor Safety Video"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </motion.div>
    </main>
  )
}
