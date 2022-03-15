let baconCount = 0;

const baconHolder = document.querySelector(".bacon-holder");
const initBacons = baconHolder.querySelectorAll(".bacon");
const bacon = initBacons[0];

const makeMoreBacon = () => {
  baconCount++;
  renderBacon(baconCount);
};

const reduceBacon = () => {
  if (baconCount >= 1) {
    baconCount--;
  }

  renderBacon(baconCount);
};

const renderBacon = (bacons) => {
  while (baconHolder.firstChild) {
    baconHolder.removeChild(baconHolder.firstChild);
  }

  for (let index = 0; index < bacons; index++) {
    baconHolder.append(bacon.cloneNode());
  }
};

export const init = () => {
  const baconPage = document.querySelector(".bacon-page");
  baconCount = initBacons.length;

  baconPage
    .querySelector(".more-bacon-button")
    .addEventListener("click", makeMoreBacon);

  baconPage
    .querySelector(".less-bacon-button")
    .addEventListener("click", reduceBacon);
};
