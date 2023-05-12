// Do not forget to define IIFE to scope code to avoid global variables affect the code.
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function() {
  // Home - Catalog Data component reference to include data.
  [Element type="auto" context="autofill" key="data-collection"]
  // Home - Catalog Config component reference to include specific component configuration.
  [Element type="auto" context="autofill" key="json-config"]
  // Global - Components Config component reference to include global component configuration.
  [Component name="design/design-system/global/global-components-config"]

  const dxHomeCatalogContainer = document.getElementById("[Property field="name" type="auto" context="autofill"]");
  let homeCatalogArgs = {
    items: [...data.items], // data.items was defiend in Home - Catalog Data
    totalItems: 10,
    filterType: "select",
    categories: ["subject", "country", "scope"],
  }
  
  // Merge homeCatalogConfig and globalComponentsConfig with homeCatalogArgs.
  Object.assign(homeCatalogArgs, {...homeCatalogConfig}, {...globalComponentsConfig});

  // Render Component instance.
  ReactDOM.render(
    React.createElement(TRF.DXCatalog, homeCatalogArgs, null),
    dxHomeCatalogContainer
  )
})();
