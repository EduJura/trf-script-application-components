(function() {
  // component Gallery Data
  [Element type="auto" context="autofill" key="data-collection"]
  // component Gallery Config
  [Element type="auto" context="autofill" key="json-config"]
  
  const dxHomeGalleryContainer = document.getElementById("[Property field="name" type="auto" context="autofill"]");
  const homeGalleryArgs = {
      "images": [...data.items] 
  };

  // Merge homeGalleryArgs with dxJSONConfig.
  Object.assign(homeGalleryArgs, {...dxJSONConfig});

  ReactDOM.render(
    React.createElement(TRF.DXGallery, homeGalleryArgs, null),
    dxHomeGalleryContainer
  )
  })();