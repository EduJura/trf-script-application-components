(function() {
  // data from Home - Carousel Data menu component
  [Component name="base22-design/design-system/carousels/home-carousel-data" resultsPerPage="" startPage=""]
  // component config from Home - Carousel Config
  [Component name="base22-design/design-system/carousels/home-carousel-config"]
  const dxHomeCarouselContainer = document.getElementById("dxHomeCarousel");
  const homeCarouselArgs = {
    "items": [...data.items]
  }
  console.log("Data: ", data);
  ReactDOM.render(
    React.createElement(TRF.DXCarousel, homeCarouselArgs, null),
    dxHomeCarouselContainer
  )
  })();