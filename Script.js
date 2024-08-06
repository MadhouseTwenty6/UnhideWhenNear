const debounce = (callback) => {
  let animationFrameId;

  return (...args) => {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
      callback.apply(null, args);
    });
  };
};

const $mask = document.querySelector(".Mask");
const $uncensor = document.querySelector(".Uncensor");
const { clientWidth, clientHeight } = $uncensor;

const handleMouseMove = debounce((event) => {
  $mask.style.top = `${event.y - clientHeight / 2}px`;
  $mask.style.left = `${event.x - clientWidth / 2}px`;
});

document.addEventListener("mousemove", handleMouseMove);
