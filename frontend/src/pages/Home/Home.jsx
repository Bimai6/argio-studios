import { useEffect, useRef, useState } from "react"
import Nav from "@/components/Nav/Nav"
import { Link } from "react-router-dom"
import { filterItems } from "@/utils/Arrays"
import LogoAnimation from "@/components/LogoAnimation/LogoAnimation"
import { videoList } from "@/utils/Arrays"
import { shuffleArray } from "@/utils/Functions"

const Home = () => {
  const videoRef = useRef(null)
  const [shuffledVideos, setShuffledVideos] = useState(shuffleArray(videoList))
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      let nextIndex = currentVideoIndex + 1
      if (nextIndex >= shuffledVideos.length) {
        const newShuffle = shuffleArray(videoList)
        setShuffledVideos(newShuffle)
        nextIndex = 0
      }
      setCurrentVideoIndex(nextIndex)
    }

    video.addEventListener("ended", handleEnded)

    video.src = shuffledVideos[currentVideoIndex]
    video.load()
    video.play()

    return () => video.removeEventListener("ended", handleEnded)
  }, [currentVideoIndex, shuffledVideos])

  return (
    <>
      <video
        data-testid="page-home"
        key={shuffledVideos[currentVideoIndex]}
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        autoPlay
        muted
        playsInline
      >
        <source src={shuffledVideos[currentVideoIndex]} type="video/mp4" />
      </video>

      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 -z-10"/>

      <main className="h-screen text-white relative z-50" role="main">
        <div className="grid grid-cols-3 grid-rows-3 h-full place-items-center text-xl sm:text-2xl md:text-4xl xl:text-5xl">
          {filterItems.map((item, index) => (
            <div
              key={index}
              role="navigation"
              aria-label="Tipos de contenido"
              className={`text-center col-start-${item.col} row-start-${item.row} hover:text-[#343434]`}
            >
              <Link
                to={`/catalogue?content_type=${item.value}`}
                aria-label={`Ir a contenido de tipo ${item.label}`}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <div className="col-start-2 row-start-2">
            <LogoAnimation width={"120%"} />
          </div>
        </div>
        <Nav />
      </main>
    </>
  )
}

export default Home
