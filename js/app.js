(function () {
  const listEl      = document.getElementById('quotesList');
  const speakerBar  = document.getElementById('speakerFilter');
  const categoryBar = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const quizBtn     = document.getElementById('quizBtn');
  const studiedCountEl = document.getElementById('studiedCount');
  const totalCountEl   = document.getElementById('totalCount');
  const statsFillEl    = document.getElementById('statsFill');
  const resultsInfo    = document.getElementById('resultsInfo');
  const emptyState     = document.getElementById('emptyState');
  const resetBtn       = document.getElementById('resetBtn');

  const state = {
    speakerFilter: 'all',
    categoryFilter: 'all',
    search: '',
    quizMode: false,
    studied: new Set(JSON.parse(localStorage.getItem('el_studied') || '[]'))
  };

  const avatarColors = {
    'Elon Musk':          '#2563eb',
    'Steve Jobs':         '#7c3aed',
    'Barack Obama':       '#0284c7',
    'Malala Yousafzai':   '#d97706',
    'Nelson Mandela':     '#16a34a',
    'Bill Gates':         '#0f766e',
    'Jeff Bezos':         '#b45309',
    'Oprah Winfrey':      '#be185d',
    'Albert Einstein':    '#4338ca',
    'Winston Churchill':  '#374151',
    'Martin Luther King Jr.': '#dc2626',
  };

  function initials(name) {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  }

  // ---- Build filter buttons ----
  function buildFilters() {
    const speakers = ['all', ...new Set(quotes.map(q => q.speaker))];
    const categories = ['all', ...new Set(quotes.map(q => q.category))];

    speakerBar.innerHTML = speakers.map(s =>
      `<button class="filter-btn${s === 'all' ? ' active' : ''}" data-filter="${s}" data-type="speaker">
        ${s === 'all' ? 'すべて' : s}
      </button>`
    ).join('');

    categoryBar.innerHTML = categories.map(c =>
      `<button class="filter-btn${c === 'all' ? ' active' : ''}" data-filter="${c}" data-type="category">
        ${c === 'all' ? 'すべてのカテゴリ' : c}
      </button>`
    ).join('');
  }

  // ---- Filter & search logic ----
  function getFiltered() {
    return quotes.filter(q => {
      const matchSpeaker  = state.speakerFilter === 'all' || q.speaker === state.speakerFilter;
      const matchCategory = state.categoryFilter === 'all' || q.category === state.categoryFilter;
      const s = state.search.toLowerCase();
      const matchSearch   = !s ||
        q.english.toLowerCase().includes(s) ||
        q.japanese.includes(s) ||
        q.speaker.toLowerCase().includes(s) ||
        q.category.includes(s);
      return matchSpeaker && matchCategory && matchSearch;
    });
  }

  // ---- Stats update ----
  function updateStats() {
    const total = quotes.length;
    const done  = state.studied.size;
    studiedCountEl.textContent = done;
    totalCountEl.textContent   = total;
    statsFillEl.style.width    = total ? (done / total * 100) + '%' : '0%';
  }

  // ---- Render ----
  function render() {
    const filtered = getFiltered();
    listEl.innerHTML = filtered.map(buildCard).join('');

    const total = quotes.length;
    if (filtered.length === 0) {
      emptyState.classList.add('visible');
      resultsInfo.textContent = '';
    } else {
      emptyState.classList.remove('visible');
      resultsInfo.textContent = filtered.length < total
        ? `${filtered.length} 件表示中（全 ${total} 件）`
        : `全 ${total} 件`;
    }

    // Bind events on rendered cards
    listEl.querySelectorAll('.btn-listen').forEach(btn => {
      btn.addEventListener('click', () => speak(btn.dataset.id));
    });
    listEl.querySelectorAll('.btn-studied').forEach(btn => {
      btn.addEventListener('click', () => toggleStudied(+btn.dataset.id));
    });
    listEl.querySelectorAll('.quiz-hint-bar').forEach(bar => {
      bar.addEventListener('click', () => {
        bar.closest('.quote-card').classList.toggle('revealed');
      });
    });

    updateStats();
  }

  // ---- Build one card ----
  function buildCard(q) {
    const color    = avatarColors[q.speaker] || '#64748b';
    const isStudied = state.studied.has(q.id);

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

    return `
      <article class="quote-card${isStudied ? ' studied' : ''}" data-id="${q.id}">

        <div class="quote-speaker">
          <div class="speaker-avatar" style="background:${color}">${initials(q.speaker)}</div>
          <div class="speaker-info">
            <div class="speaker-name">${q.speaker}</div>
            <div class="speaker-context">${q.context}</div>
            <div class="speaker-tags">
              <span class="tag tag-category">${q.category}</span>
              <span class="tag tag-diff-${q.difficulty}">${q.difficulty}</span>
            </div>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn-listen" data-id="${q.id}" title="英語を読み上げる">
            🔊 聴く
          </button>
          <button class="btn-studied${isStudied ? ' done' : ''}" data-id="${q.id}">
            ${isStudied ? '✓ 学習済み' : '○ 未学習'}
          </button>
        </div>

        <div class="quote-section">
          <div class="section-label label-en">🇺🇸 English</div>
          <p class="english-text">${q.english}</p>
        </div>

        <div class="quiz-hint-bar">
          📝 タップして日本語訳・解説を表示
        </div>

        <div class="quiz-answer">
          <div class="quote-section">
            <div class="section-label label-ja">🇯🇵 日本語訳</div>
            <p class="japanese-text">${q.japanese}</p>
          </div>

          <div class="grammar-section">
            <div class="section-label label-gram">📖 文法解説</div>
            ${grammarHTML}
          </div>

          <div class="vocab-section">
            <div class="section-label label-vocab">💡 単語解説</div>
            ${vocabHTML}
          </div>
        </div>

      </article>
    `;
  }

  // ---- TTS ----
  let currentUtterance = null;
  function speak(id) {
    const q = quotes.find(q => q.id === +id);
    if (!q) return;
    const btn = listEl.querySelector(`.btn-listen[data-id="${id}"]`);

    if (currentUtterance) {
      speechSynthesis.cancel();
      currentUtterance = null;
      listEl.querySelectorAll('.btn-listen').forEach(b => b.classList.remove('playing'));
      if (btn && btn.classList.contains('playing')) return;
    }

    if (!('speechSynthesis' in window)) {
      alert('このブラウザはテキスト読み上げに対応していません');
      return;
    }

    const utter = new SpeechSynthesisUtterance(q.english);
    utter.lang = 'en-US';
    utter.rate = 0.9;

    btn && btn.classList.add('playing');
    btn && (btn.textContent = '⏹ 停止');

    utter.onend = utter.onerror = () => {
      currentUtterance = null;
      if (btn) { btn.classList.remove('playing'); btn.textContent = '🔊 聴く'; }
    };

    currentUtterance = utter;
    speechSynthesis.speak(utter);
  }

  // ---- Studied toggle ----
  function toggleStudied(id) {
    if (state.studied.has(id)) {
      state.studied.delete(id);
    } else {
      state.studied.add(id);
    }
    localStorage.setItem('el_studied', JSON.stringify([...state.studied]));

    const card = listEl.querySelector(`.quote-card[data-id="${id}"]`);
    const btn  = listEl.querySelector(`.btn-studied[data-id="${id}"]`);
    if (card) card.classList.toggle('studied', state.studied.has(id));
    if (btn) {
      btn.classList.toggle('done', state.studied.has(id));
      btn.textContent = state.studied.has(id) ? '✓ 学習済み' : '○ 未学習';
    }
    updateStats();
  }

  // ---- Quiz mode ----
  function toggleQuiz() {
    state.quizMode = !state.quizMode;
    document.body.classList.toggle('quiz-mode', state.quizMode);
    quizBtn.classList.toggle('active', state.quizMode);
    quizBtn.textContent = state.quizMode ? '📖 通常モード' : '📝 クイズモード';
    // Reset all revealed cards when exiting quiz mode
    if (!state.quizMode) {
      listEl.querySelectorAll('.quote-card.revealed').forEach(c => c.classList.remove('revealed'));
    }
  }

  // ---- Events ----
  speakerBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    speakerBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.speakerFilter = btn.dataset.filter;
    render();
  });

  categoryBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    categoryBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.categoryFilter = btn.dataset.filter;
    render();
  });

  searchInput.addEventListener('input', () => {
    state.search = searchInput.value;
    searchClear.classList.toggle('visible', state.search.length > 0);
    render();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    searchClear.classList.remove('visible');
    render();
  });

  quizBtn.addEventListener('click', toggleQuiz);

  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    state.speakerFilter = 'all';
    state.categoryFilter = 'all';
    searchClear.classList.remove('visible');
    speakerBar.querySelectorAll('.filter-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
    categoryBar.querySelectorAll('.filter-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
    render();
  });

  // ---- Init ----
  buildFilters();
  render();
})();
