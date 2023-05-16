// Do not forget to define IIFE to scope code to avoid global variables affect the code.
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function () {
    // Common - Catalog Data component reference to include data.
    [Element type="auto" context="autofill" key="data-collection"]
    // Common - Catalog Config component reference to include specific component configuration.
    [Element type="auto" context="autofill" key="json-config"]    

    const dxhomeButtonCatalogContainer = document.getElementById("[Property field="name" type="auto" context="autofill"]");
    let homeButtonCatalogArgs = {
      elements: [...data.items]      
    }

    // Merge homeCatalogConfig and globalComponentsConfig with homeCatalogArgs.
    Object.assign(homeButtonCatalogArgs, { ...dxJSONConfig });
  
    // Render Component instance.
    ReactDOM.render(
      React.createElement(TRF.DXHomeButtonCatalog, homeButtonCatalogArgs, null),
      dxhomeButtonCatalogContainer
    )
  })();
