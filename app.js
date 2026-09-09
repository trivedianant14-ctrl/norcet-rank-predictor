// NORCET 10 Mains — mock exam config (illustrative, not official data)
const EXAM = {
  max: 160,
  negDiv: 4, // -0.25 per wrong = -1/4
  cuts: { UR: 57, EWS: 54, OBC: 51, SC: 45, ST: 43 },
  pwbdRelax: 8,
  pool: 11500 // mock size of the Mains candidate pool used for percentile shaping
};

const ICONS = {
  shield: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 5-3.4 8.4-7 10-3.6-1.6-7-5-7-10V6l7-3z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  warning: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 4l9 16H3L12 4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1" fill="currentColor"/></svg>',
  trending: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 6h6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5A1.5 1.5 0 014 18.5v-13z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 001.5-1.5v-13z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  people: '<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="17" cy="8" r="2.4" stroke="currentColor" stroke-width="2"/><path d="M15.5 14.2c2.6.5 4.5 2.8 4.5 5.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 3.5h9l3 3V20a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 12h6M9 15.5h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none"><circle cx="18" cy="5" r="2.4" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="12" r="2.4" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="19" r="2.4" stroke="currentColor" stroke-width="2"/><path d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
};

const VERDICTS = {
  low: {
    badge: 'Chances are low', icon: 'shield', badgeBg: '#FCE7E6', badgeFg: '#DC2626',
    dot: '#E5533D', ink: '#B4453A',
    headline: 'This attempt may not go your way.',
    msg: "But one attempt doesn't decide your Nursing Officer dream.",
    actions: [
      { icon: 'book', iconBg: '#FCE7E6', title: 'Next attempt ki tayari shuru karein', desc: 'Is baar ke experience se aur strong preparation karein.', btn: 'Prepare for NORCET 11', btnBg: '#F6D3CE', btnFg: '#B4453A' },
      { icon: 'people', iconBg: '#E9F3FE', title: 'Mentor se baat karein', desc: 'Samjhiye kahan improvement chahiye aur kaise plan karein.', btn: 'Talk to a mentor', btnBg: '#1B8EF2', btnFg: '#fff' }
    ],
    quote: 'One attempt cannot decide your Nursing Officer dream.'
  },
  border: {
    badge: 'Borderline', icon: 'warning', badgeBg: '#FFF1E0', badgeFg: '#C2410C',
    dot: '#FF6B2C', ink: '#C2410C',
    headline: "You're close. It can still go either way.",
    msg: "Hope for the result, but don't stop preparing.",
    actions: [
      { icon: 'book', iconBg: '#FFF1E0', title: 'Preparation continue karein', desc: 'Result ka wait karte hue apni preparation mat rokiye.', btn: 'Continue preparing', btnBg: '#FF6B2C', btnFg: '#fff' },
      { icon: 'people', iconBg: '#E9F3FE', title: 'Apne chances samajhna chahte hain?', desc: 'Marks aur next steps ke liye mentor se baat karein.', btn: 'Talk to a mentor', btnBg: '#1B8EF2', btnFg: '#fff' }
    ],
    quote: 'Result ka wait kijiye. Preparation ka rhythm mat todiye.'
  },
  good: {
    badge: 'Good chance', icon: 'trending', badgeBg: '#E3F8EC', badgeFg: '#15803D',
    dot: '#22C55E', ink: '#15803D',
    headline: 'Your chances are looking good. 🤞',
    msg: "You're in a strong position. The final result is now awaited.",
    actions: [
      { icon: 'people', iconBg: '#E3F8EC', title: 'NPrep community join karein', desc: 'Counselling, document verification aur joining ke liye seniors se judein.', btn: 'Join community', btnBg: '#22C55E', btnFg: '#fff' },
      { icon: 'doc', iconBg: '#E9F3FE', title: 'Practice continue rakhein', desc: 'Jab tak result nahi aata, apni preparation sharp rakhein.', btn: 'Take a quick quiz', btnBg: '#1B8EF2', btnFg: '#fff' }
    ],
    quote: 'Aap dream ke kaafi kareeb hain. Bas final result ka wait hai.'
  },
  strong: {
    badge: 'Very strong chance', icon: 'star', badgeBg: '#E9F3FE', badgeFg: '#1B6FC2',
    dot: '#3B82F6', ink: '#1B6FC2',
    headline: 'Your Nursing Officer dream is looking closer than ever. 🎉',
    msg: "You're in a very strong position. Be proud of how far you've come.",
    actions: [
      { icon: 'people', iconBg: '#E9F3FE', title: 'Next phase ke liye ready rahiye', desc: 'Counselling aur joining process ke liye connected rahiye.', btn: 'Join community', btnBg: '#1B8EF2', btnFg: '#fff' },
      { icon: 'share', iconBg: '#E9F3FE', title: 'Is moment ko share karein', desc: 'Apni mehnat ko celebrate karein aur family ya friends ke saath share karein.', btn: 'Share prediction', btnBg: '#1B8EF2', btnFg: '#fff' }
    ],
    quote: "You've worked hard for this. You deserve to feel proud today."
  }
};

const $ = id => document.getElementById(id);

let state = { mode: 'rw', correct: 86, wrong: 18, marks: 82, cat: 'UR', pwbd: false };

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function rwMarks() {
  return clamp(state.correct - state.wrong / EXAM.negDiv, 0, EXAM.max);
}

function currentMarks() {
  return state.mode === 'rw' ? rwMarks() : state.marks;
}

function currentAttempted() {
  return state.mode === 'rw'
    ? clamp(state.correct + state.wrong, 0, EXAM.max)
    : Math.round((state.marks / EXAM.max) * EXAM.max); // direct-marks mode has no attempt count; approximate 1:1
}

function renderInputs() {
  $('inpC').value = state.correct;
  $('inpW').value = state.wrong;
  const marks = rwMarks();
  const attempted = clamp(state.correct + state.wrong, 0, EXAM.max);
  $('marksLine').textContent = `Marks: ${marks.toFixed(2)} / ${EXAM.max}`;
  $('unansLine').textContent = `Unanswered: ${EXAM.max - attempted} · NORCET 10 Mains · 160 questions`;
  $('scoreBig').textContent = marks.toFixed(2);

  $('inpMarks').value = state.marks;
  $('rangeMarks').value = state.marks;
  const pct = (state.marks / EXAM.max) * 100;
  $('fillBar').style.width = pct + '%';
  $('thumbDot').style.left = pct + '%';
}

function computeVerdict() {
  const marks = currentMarks();
  const attempted = currentAttempted();
  const cutoff = EXAM.cuts[state.cat] - (state.pwbd ? EXAM.pwbdRelax : 0);
  const margin = marks - cutoff;

  const chance = Math.round(clamp(50 + margin * 3.4, 1, 99));
  const band = chance <= 50 ? 'low' : chance <= 70 ? 'border' : chance <= 90 ? 'good' : 'strong';
  const pctl = clamp(50 + margin * 2.25 + Math.log10(EXAM.pool) - 4.8, 1, 99);

  return { marks, attempted, chance, band, pctl, v: VERDICTS[band] };
}

function renderResult() {
  const { marks, attempted, chance, band, pctl, v } = computeVerdict();

  $('ring').style.background = `conic-gradient(${v.dot} ${chance}%, #EDF0F4 ${chance}%)`;
  $('pctBig').textContent = chance + '%';
  $('pctBig').style.color = v.ink;

  $('badge').style.background = v.badgeBg;
  $('badge').style.color = v.badgeFg;
  $('badge').innerHTML = ICONS[v.icon] + '<span>' + v.badge + '</span>';

  $('headline').textContent = v.headline;
  $('subtext').textContent = v.msg;

  $('statScore').textContent = `${marks.toFixed(2)} / ${EXAM.max}`;
  $('statPctl').textContent = `${pctl.toFixed(1)}%ile`;
  $('statAtt').textContent = `${attempted} / ${EXAM.max}`;

  $('actions').innerHTML = v.actions.map(a => `
    <div class="action">
      <div class="icon" style="background:${a.iconBg};color:${v.ink}">${ICONS[a.icon]}</div>
      <div class="atitle">${a.title}</div>
      <div class="adesc">${a.desc}</div>
      <span class="abtn" style="background:${a.btnBg};color:${a.btnFg}">${a.btn} →</span>
    </div>`).join('');

  $('quoteMark').style.color = v.ink;
  $('quoteBody').textContent = v.quote;

  const resultCard = $('result');
  resultCard.classList.add('show');
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ---- wiring ----
document.querySelectorAll('.seg button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.seg button').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
    state.mode = btn.dataset.mode;
    $('rwPanel').style.display = state.mode === 'rw' ? '' : 'none';
    $('marksPanel').style.display = state.mode === 'marks' ? '' : 'none';
  });
});

$('decC').addEventListener('click', () => { state.correct = clamp(state.correct - 1, 0, EXAM.max); renderInputs(); });
$('incC').addEventListener('click', () => { state.correct = clamp(state.correct + 1, 0, EXAM.max); renderInputs(); });
$('decW').addEventListener('click', () => { state.wrong = clamp(state.wrong - 1, 0, EXAM.max); renderInputs(); });
$('incW').addEventListener('click', () => { state.wrong = clamp(state.wrong + 1, 0, EXAM.max); renderInputs(); });
$('inpC').addEventListener('input', e => { state.correct = clamp(parseInt(e.target.value) || 0, 0, EXAM.max); renderInputs(); });
$('inpW').addEventListener('input', e => { state.wrong = clamp(parseInt(e.target.value) || 0, 0, EXAM.max); renderInputs(); });

$('inpMarks').addEventListener('input', e => { state.marks = clamp(parseInt(e.target.value) || 0, 0, EXAM.max); renderInputs(); });
$('rangeMarks').addEventListener('input', e => { state.marks = clamp(parseInt(e.target.value) || 0, 0, EXAM.max); renderInputs(); });

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    state.cat = chip.dataset.cat;
  });
});

$('pwbdCheck').addEventListener('change', e => { state.pwbd = e.target.checked; });

$('predictBtn').addEventListener('click', renderResult);

renderInputs();
