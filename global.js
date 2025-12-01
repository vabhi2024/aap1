const input2 = document.getElementById("searchInput");
const box = document.getElementById("suggestionBox");
const form = document.getElementById("searchForm");

input2.addEventListener("input", () => {
  const q = input2.value.trim();
  if (!q) {
    box.style.display = "none";
    return;
  }

  const cb = "googleSuggestCB";

  window[cb] = function (data) {
    box.innerHTML = "";

    // GLOBAL SUGGESTIONS → data[1]
    data[1].forEach(item => {
      const div = document.createElement("div");
      div.textContent = item;

      div.onclick = () => {
        input2.value = item;
        box.style.display = "none";
      };

      box.appendChild(div);
    });

    box.style.display = data[1].length ? "block" : "none";
  };

  const script = document.createElement("script");
  script.src =
    `https://clients1.google.com/complete/search?client=chrome&q=${encodeURIComponent(q)}&callback=${cb}`;
  document.body.appendChild(script);
  script.remove();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = input2.value.trim();
  if (q) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(q)}`, "_blank");
  }
});