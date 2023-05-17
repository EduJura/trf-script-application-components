  (function() {
    const globalFooterContainer =  document.getElementById("[Property field="name" type="auto" context="autofill"]");
    const primaryLinks = [
      { url: "https://base22.com/es/", label:"Base22 Home" },
      { url: "https://base22.com/es/", label:"Maps & Directions" },
      { url: "https://base22.com/es/", label:"Search Base22" },
      { url: "https://base22.com/es/", label:"Emergency info", target: "_blank" },
    ];
    const secondaryLinks =  [
      { url: "https://base22.com/es/", label:"Terms of use" },
      { url: "https://base22.com/es/", label:"Privacy" },
      { url: "https://base22.com/es/", label:"Copyright" },
      { url: "https://base22.com/es/", label:"Trademarks" },
      { url: "https://base22.com/es/", label:"Accessibility" },
    ];
    const globalFooterArgs = {
      logo: "https://i.ibb.co/gW0mtMg/Logo-Wrapper-Desktop.png",
      logoMobile: "https://i.ibb.co/gW0mtMg/Logo-Wrapper-Desktop.png",
      copyright: "Base22, San Pedro Garza García, N.L. 66260",
      primaryLinks: primaryLinks,
      secondaryLinks: secondaryLinks
    }

    ReactDOM.render(
        React.createElement(TRF.DXGlobalFooter, globalFooterArgs, null),
        globalFooterContainer
    )
  })();