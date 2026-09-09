// NORCET 10 Mains — mock exam config (illustrative, not official data)
const EXAM = {
  max: 160,
  negDiv: 4, // -0.25 per wrong = -1/4
  cuts: { UR: 51, EWS: 48, OBC: 45, SC: 39, ST: 37 },
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
  share: '<svg viewBox="0 0 24 24" fill="none"><circle cx="18" cy="5" r="2.4" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="12" r="2.4" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="19" r="2.4" stroke="currentColor" stroke-width="2"/><path d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 5.5h16a1 1 0 011 1V15a1 1 0 01-1 1H9l-4.5 4V16H4a1 1 0 01-1-1V6.5a1 1 0 011-1z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 10h8M8 13h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
};

// Each band carries exactly one suggestion. Only its `primary` action gets
// a full text CTA; `secondary` collapses to an icon-only button (alongside
// the universal "talk to a counsellor" icon) so one CTA keeps priority.
const VERDICTS = {
  low: {
    badge: 'Chances are low', icon: 'shield', tint: '#FDEEEC', tintLine: '#F6D3CE',
    dot: '#E5533D', ink: '#B4453A',
    headline: 'This attempt may not go your way.',
    msg: "But one attempt doesn't decide your Nursing Officer dream.",
    suggestion: {
      icon: 'book', iconBg: '#FCE7E6',
      title: 'Next attempt ki tayari shuru karein',
      desc: 'Is baar ka experience aapko aur strong banayega.',
      primary: 'Prepare for NORCET 12',
      secondary: 'Talk to a mentor', secondaryIcon: 'people'
    },
    quote: 'Bahut se Nursing Officers ka selection first attempt mein nahi hua tha.'
  },
  border: {
    badge: 'Borderline', icon: 'warning', tint: '#FFF7E4', tintLine: '#F5DFA6',
    dot: '#D98324', ink: '#B4630F',
    headline: "You're close. It can still go either way.",
    msg: "Hope for the result, but don't stop preparing.",
    suggestion: {
      icon: 'book', iconBg: '#FFF1E0',
      title: 'Preparation continue karein',
      desc: 'Result ka wait karte hue preparation mat rokiye.',
      primary: 'Continue preparing',
      secondary: 'Talk to a mentor', secondaryIcon: 'people'
    },
    quote: 'Hope rakhiye. Lekin preparation ka rhythm mat todiye.'
  },
  good: {
    badge: 'Good chance', icon: 'trending', tint: '#EAFBF1', tintLine: '#BFEDD3',
    dot: '#22C55E', ink: '#15803D',
    headline: 'Your chances are looking good. 🤞',
    msg: "You're in a strong position. The final result is now awaited.",
    suggestion: {
      icon: 'people', iconBg: '#E3F8EC',
      title: 'NPrep community join karein',
      desc: 'Seniors aur fellow aspirants se connected rahiye.',
      primary: 'Join community',
      secondary: 'Take a quick quiz', secondaryIcon: 'doc'
    },
    quote: 'Aap dream ke kaafi kareeb hain. Bas final result ka wait hai.'
  },
  strong: {
    badge: 'Very strong chance', icon: 'star', tint: '#EAF3FE', tintLine: '#BFDCFA',
    dot: '#1B8EF2', ink: '#1B6FC2',
    headline: 'Your Nursing Officer dream is looking closer than ever. 🎉',
    msg: "You're in a very strong position. Be proud of how far you've come.",
    suggestion: {
      icon: 'people', iconBg: '#E9F3FE',
      title: 'Next phase ke liye ready rahiye',
      desc: 'Counselling, document verification and joining ke liye guidance paayein.',
      primary: 'Join community',
      secondary: 'Share prediction', secondaryIcon: 'share'
    },
    quote: "You've worked hard for this. You deserve to feel proud today."
  }
};

const $ = id => document.getElementById(id);

let state = { mode: 'rw', correct: 58, wrong: 20, marks: 53, cat: 'UR', pwbd: false };

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
  $('marksVal').textContent = `${marks.toFixed(2)} / ${EXAM.max}`;
  $('unansVal').textContent = EXAM.max - attempted;

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
  const { marks, attempted, chance, pctl, v } = computeVerdict();

  $('emptyHint').style.display = 'none';
  $('resultBody').style.display = '';

  $('resultTint').style.background = v.tint;
  $('resultTint').style.boxShadow = `inset 0 0 0 1px ${v.tintLine}`;

  $('ring').style.background = `conic-gradient(${v.dot} ${chance}%, #EDF0F4 ${chance}%)`;
  $('pctBig').textContent = chance + '%';
  $('pctBig').style.color = v.ink;

  $('badge').style.color = v.ink;
  $('badge').innerHTML = ICONS[v.icon] + '<span>' + v.badge + '</span>';
  $('headline').textContent = v.headline;
  $('subtext').textContent = v.msg;
  $('caption').textContent = 'Quick estimate from your details.';
  $('caption').style.color = v.ink;

  $('statScore').textContent = `${marks.toFixed(2)} / ${EXAM.max}`;
  $('statPctl').textContent = `${pctl.toFixed(1)}%ile`;
  $('statAtt').textContent = `${attempted} / ${EXAM.max}`;

  const s = v.suggestion;
  $('suggIcon').style.background = s.iconBg;
  $('suggIcon').style.color = v.ink;
  $('suggIcon').innerHTML = ICONS[s.icon];
  $('suggTitle').textContent = s.title;
  $('suggDesc').textContent = s.desc;

  const primaryBtn = $('ctaPrimary');
  primaryBtn.textContent = '';
  primaryBtn.style.background = v.dot;
  primaryBtn.append(s.primary + ' ');
  const arrow1 = document.createElement('span'); arrow1.textContent = '→'; primaryBtn.append(arrow1);

  // secondary + a universal "talk to a counsellor" option ride along as
  // icon-only buttons so the primary CTA keeps the visual priority.
  const iconActions = [
    { icon: s.secondaryIcon, label: s.secondary },
    { icon: 'chat', label: 'Talk to a counsellor' }
  ];
  $('iconCtas').innerHTML = iconActions.map(a => `
    <button type="button" class="icon-cta" data-label="${a.label}" aria-label="${a.label}">${ICONS[a.icon]}</button>
  `).join('');

  $('quoteMark').style.color = v.ink;
  $('quoteBody').textContent = v.quote;

  $('resultCard').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
