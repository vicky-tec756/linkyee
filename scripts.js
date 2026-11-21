(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches) return;

  let frame = 0;
  let pointerX = 50;
  let pointerY = 50;

  const render = () => {
    frame = 0;
    root.style.setProperty("--pointer-x", `${pointerX}%`);
    root.style.setProperty("--pointer-y", `${pointerY}%`);
  };

  const updatePointer = (event) => {
    pointerX = (event.clientX / window.innerWidth) * 100;
    pointerY = (event.clientY / window.innerHeight) * 100;
    if (!frame) frame = requestAnimationFrame(render);
  };

  window.addEventListener("pointermove", updatePointer, { passive: true });
})();