(function() {
  // component Carousel Data
  [Element type="auto" context="autofill" key="data-collection"]
  // component Carousel Config
  [Element type="auto" context="autofill" key="json-config"]
  
  const dxHomeCarouselContainer = document.getElementById("[Property field="name" type="auto" context="autofill"]");
  const homeCarouselArgs = {
    "items": [...data.items]
  }
  console.log("Data: ", data);
  ReactDOM.render(
    React.createElement(TRF.DXCarousel, homeCarouselArgs, null),
    dxHomeCarouselContainer
  )
  })();