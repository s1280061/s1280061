(function () {
  const list = document.getElementById('quotesList');
  const filterBar = document.getElementById('filterBar');

  const avatarColors = {
    'Elon Musk':          '#2563eb',
    'Steve Jobs':         '#7c3aed',
    'Barack Obama':       '#0284c7',
    'Malala Yousafzai':   '#d97706',
    'Nelson Mandela':     '#16a34a',
    'Bill Gates':         '#0f766e',
  };

  function initials(name) {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  }

  function getColor(name) {
    return avatarColors[name] || '#64748b';
  }

  // Build speaker filter buttons
  const speakers = ['all', ...new Set(quotes.map(q => q.speaker))];
  filterBar.innerHTML = speakers.map(s =>
    `<button class="filter-btn${s === 'all' ? ' active' : ''}" data-filter="${s}">
      ${s === 'all' ? 'すべて' : s}
    </button>`
  ).join('');

  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderQuotes(btn.dataset.filter);
  });

  function renderQuotes(filter) {
    const filtered = filter === 'all' ? quotes : quotes.filter(q => q.speaker === filter);
    list.innerHTML = filtered.map(buildCard).join('');

    list.querySelectorAll('.collapsible-header').forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const chevron = header.querySelector('.chevron');
        const open = body.classList.toggle('open');
        chevron.classList.toggle('open', open);
      });
    });
  }

  function buildCard(q) {
    const color = getColor(q.speaker);

    const grammarHTML = q.grammar.map(g => `
      <div class="grammar-item">
        <div class="grammar-point">${g.point}</div>
        <div class="grammar-explanation">${g.explanation}</div>
        <div class="grammar-example">${g.example}</div>
      </div>
    `).join('');

    const vocabHTML = `
      <div class="vocab-grid">
        ${q.vocabulary.map(v => `
          <div class="vocab-item">
            <div class="vocab-word">${v.word}</div>
            <div class="vocab-reading">${v.reading}</div>
            <span class="vocab-pos">${v.pos}</span>
            <div class="vocab-meaning">${v.meaning}</div>
          </div>
        `).join('')}
      </div>
    `;

    const chevronSVG = `
      <svg class="chevron" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `;

    return `
      <article class="quote-card">

        <div class="quote-speaker">
          <div class="speaker-avatar" style="background:${color}">${initials(q.speaker)}</div>
          <div class="speaker-info">
            <div class="speaker-name">${q.speaker}</div>
            <div class="speaker-context">${q.context}</div>
          </div>
        </div>

        <div class="quote-section">
          <div class="section-label label-en">🇺🇸 English</div>
          <p class="english-text">${q.english}</p>
        </div>

        <div class="quote-section">
          <div class="section-label label-ja">🇯🇵 日本語訳</div>
          <p class="japanese-text">${q.japanese}</p>
        </div>

        <div class="collapsible-header">
          <span class="section-label label-gram" style="margin:0">📖 文法解説</span>
          ${chevronSVG}
        </div>
        <div class="collapsible-body">${grammarHTML}</div>

        <div class="collapsible-header">
          <span class="section-label label-vocab" style="margin:0">💡 単語解説</span>
          ${chevronSVG}
        </div>
        <div class="collapsible-body">${vocabHTML}</div>

      </article>
    `;
  }

  renderQuotes('all');
})();
