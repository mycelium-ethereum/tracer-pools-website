// <!-- Matomo -->
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
  _paq.push(["setCookieDomain", "*.tracer.finance"]);
  _paq.push(["setDomains", ["*.tracer.finance","*.docs.tracer.finance","*.pools.tracer.finance","*.vote.tracer.finance/"]]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="/mat";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='/mat-js'; s.parentNode.insertBefore(g,s);
  })();
// <!-- End Matomo Code -->
// <!-- Matomo Tag Manager -->
var _mtm = window._mtm = window._mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.async=true; g.src='/mat-container-js'; s.parentNode.insertBefore(g,s);
// <!-- End Matomo Tag Manager -->