// Do not forget to define IIFE to scope code to avoid global variables affect the code.
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function() {
    const navigationHeaderContainer = document.getElementById("[Property field="name" type="auto" context="autofill"]");
    // Header Data component reference to include data.
    [Element type="auto" context="autofill" key="data-collection"]
    // Header Config component reference to include specific component configuration.
    [Element type="auto" context="autofill" key="json-config"]
    const navigationHeaderArgs = {
      navigationItems: data.items,
      navigationImage: "https://base22.com/wp-content/uploads/2022/06/Base22-1.svg"
    }

    ReactDOM.render(
        React.createElement(TRF.DXNavigationHeader, navigationHeaderArgs, null),
        navigationHeaderContainer
    )
  })();
