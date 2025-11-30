document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let q = document.getElementById("searchInput").value.trim();
    if (!q) return;

    // Your corrected domain list
    let sites = [
      "modded-1.com",
      "mxapk.in",
      "modyolo.com",
      "getmodsapp.com",
      "9mod.com",
      "modder.me",
      "apkdone.com",
      "apkmody.com",
      "adescargar.online"
    ];

    let siteQuery = sites.map(s => `${s}`).join("/ ");

    // Add automatic suffix "mod app"
    let finalQuery = `${q}  ${siteQuery}`;

    let url = "https://www.google.com/search?q=" + encodeURIComponent(finalQuery);
    window.open(url, "_blank");
  });