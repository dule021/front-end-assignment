import "../css/app.scss";

(() => {
  const baconPage = document.querySelector(".bacon-page");
  const checkoutPage = document.querySelector(".checkout-page");

  if (baconPage) {
    import("./baconFactory").then((baconFactory) => {
      baconFactory.init();
    });
  }

  if (checkoutPage) {
    import("./checkoutPage").then((checkoutPage) => {
      checkoutPage.init();
    });
  }
})();
