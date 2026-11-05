(function () {
  // ---------- Theme (light / dark) ----------
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const saved = (() => { try { return localStorage.getItem("theme"); } catch (e) { return null; } })();
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const setTheme = (t) => {
    root.dataset.theme = t;
    btn.innerHTML = t === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  };
  setTheme(saved || (prefersDark ? "dark" : "light"));
  btn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Collapsible lists (News) ----------
  document.querySelectorAll(".collapsible").forEach((list) => {
    const n = parseInt(list.dataset.visible || "5", 10);
    const items = [...list.children];
    if (items.length <= n) return;
    items.slice(n).forEach((li) => li.classList.add("is-hidden"));
    const toggle = document.createElement("button");
    toggle.className = "link-btn";
    toggle.textContent = `Show more (${items.length - n})`;
    let open = false;
    toggle.addEventListener("click", () => {
      open = !open;
      items.slice(n).forEach((li) => li.classList.toggle("is-hidden", !open));
      toggle.textContent = open ? "Show less" : `Show more (${items.length - n})`;
    });
    list.after(toggle);
  });

  // ---------- Publications ----------
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const boldMe = (authors) => {
    let out = esc(authors);
    ME.forEach((name) => {
      const re = new RegExp(esc(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([*†]*)", "g");
      out = out.replace(re, (m) => `<strong class="me">${m}</strong>`);
    });
    return out;
  };
  const LINK_LABELS = { paper: "Paper", arxiv: "arXiv", code: "Code", project: "Project", slides: "Slides", poster: "Poster", video: "Video", bibtex: "BibTeX" };

  const filtersEl = document.getElementById("pubFilters");
  const listEl = document.getElementById("pubList");
  if (!filtersEl || !listEl || typeof PUBLICATIONS === "undefined") return;

  function render(topic) {
    const pubs = PUBLICATIONS
      .filter((p) => topic === "all" || (topic === "selected" ? p.selected : (p.topics || []).includes(topic)))
      .sort((a, b) => (b.year || 0) - (a.year || 0));

    if (!pubs.length) { listEl.innerHTML = '<p class="note">No publications in this category yet.</p>'; return; }

    let html = "", lastYear = null;
    pubs.forEach((p) => {
      if (p.year !== lastYear) { html += `<h3 class="year">${esc(p.year)}</h3>`; lastYear = p.year; }
      const links = Object.entries(p.links || {})
        .map(([k, v]) => `<a class="pill" href="${esc(v)}">${LINK_LABELS[k] || esc(k)}</a>`).join("");
      const badges = (p.badges || []).map((b) => `<span class="badge">${esc(b)}</span>`).join("");
      const thumb = p.image
        ? `<div class="thumb"><img src="${esc(p.image)}" alt="" loading="lazy" onerror="this.parentElement.classList.add('empty');this.remove()"></div>`
        : `<div class="thumb empty"></div>`;
      html += `
        <article class="paper">
          ${thumb}
          <div class="paper-body">
            <div class="paper-title">${esc(p.title)}</div>
            <div class="paper-authors">${boldMe(p.authors)}</div>
            <div class="paper-venue"><span class="venue">${esc(p.venue)}</span>${badges}</div>
            ${p.tldr ? `<div class="paper-tldr">${esc(p.tldr)}</div>` : ""}
            ${links ? `<div class="paper-links">${links}</div>` : ""}
          </div>
        </article>`;
    });
    listEl.innerHTML = html;
  }

  TOPICS.forEach((t, i) => {
    const b = document.createElement("button");
    b.className = "filter" + (i === 0 ? " active" : "");
    b.textContent = t.label;
    b.addEventListener("click", () => {
      filtersEl.querySelectorAll(".filter").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      render(t.key);
    });
    filtersEl.appendChild(b);
  });
  render(TOPICS[0].key);
})();
