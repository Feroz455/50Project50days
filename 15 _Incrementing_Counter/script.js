const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = function () {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 500;
    if (c < target) {
      counter.innerText = `${Math.round(c + increment)}`;
      setTimeout(updateCounter, 1);
      // console.log(c);
      // console.log(typeof target, target);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
