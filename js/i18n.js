/* Bilingual EN/ES toggle — loads locale JSON and replaces data-i18n elements */

const DEFAULT_LANG = 'es';
const STORAGE_KEY = 'hablagood_lang';

let currentLang = DEFAULT_LANG;
let locales = {};

async function loadLocale(lang) {
  if (locales[lang]) return locales[lang];
  const res = await fetch(`locales/${lang}.json`);
  locales[lang] = await res.json();
  return locales[lang];
}

function getNestedValue(obj, keyPath) {
  return keyPath.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);
}

function applyLocale(strings) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(strings, key);
    if (value === null) return;

    if (el.hasAttribute('data-i18n-attr')) {
      el.setAttribute(el.getAttribute('data-i18n-attr'), value);
    } else {
      el.textContent = value;
    }
  });

  document.documentElement.lang = currentLang === 'es' ? 'es' : 'en';
}

async function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  const strings = await loadLocale(lang);
  applyLocale(strings);

  const toggleKey = getNestedValue(strings, 'nav.lang_toggle');
  if (toggleKey) {
    document.querySelectorAll('.lang-toggle').forEach(btn => { btn.textContent = toggleKey; });
  }
}

async function initI18n() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const lang = saved || DEFAULT_LANG;
  await setLang(lang);
}

function toggleLang() {
  const next = currentLang === 'es' ? 'en' : 'es';
  setLang(next);
}

export { initI18n, toggleLang, setLang, currentLang };
