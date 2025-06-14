import { useEffect, useRef, useState } from "react";

const frameCount = 150;
const getImagePath = (index) =>
  `/images/animated_logo/${String(index + 1).padStart(4, "0")}.png`;

const LogoAnimation = ({width}) => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const images = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getImagePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount && isMounted) {
          imagesRef.current = images;
          setLoaded(true);
        }
      };
      images.push(img);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame = 0;
    const fps = 24;
    const interval = 1000 / fps;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const img = imagesRef.current[frame];
      if (img) ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      frame = (frame + 1) % frameCount;
    };

    const loop = setInterval(draw, interval);
    return () => clearInterval(loop);
  }, [loaded]);

  return (
    <canvas
      ref={canvasRef}
      width={320}
      height={180}
      style={{
        width,
        height: "auto",
        aspectRatio: "16 / 9",
        objectFit: "contain",
        justifySelf: "center"
      }}
    />
  );
};

export default LogoAnimation;
