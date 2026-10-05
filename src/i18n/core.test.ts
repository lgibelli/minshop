import { describe, expect, it } from 'vitest';
import {
  createI18n,
  escapeHtml,
  formatMessage,
  isLocale,
  LOCALES,
  resolveLocale,
  type Message,
} from './core';
import { en } from './messages/en';

const placeholders = (message: Message): string[] => {
  const forms = typeof message === 'string' ? [message] : Object.values(message);
  return [...new Set(forms.flatMap((f) => [...f.matchAll(/\{(\w+)\}/g)].map((m) => m[1])))].sort();
};

describe('i18n core', () => {
  it('resolves unknown locales to English', () => {
    expect(resolveLocale('pl')).toBe('pl');
    expect(resolveLocale('xx')).toBe('en');
    expect(resolveLocale(undefined)).toBe('en');
    expect(isLocale('toString')).toBe(false);
  });

  it('formats money in the locale, keeping en-US output for English', () => {
    expect(createI18n('en').money(1999, 'usd')).toBe('$19.99');
    expect(createI18n('en').money(1000, 'jpy')).toBe('¥1,000');
    expect(createI18n('pl').money(14900, 'pln')).toBe('149,00 zł');
    expect(createI18n('it').money(14900, 'eur')).toBe('149,00 €');
  });

  it('fills placeholders and leaves unknown ones visible', () => {
    expect(formatMessage('Hi {name}, {name}!', 'en-US', { name: 'Ada' })).toBe('Hi Ada, Ada!');
    expect(formatMessage('Hi {name}', 'en-US', {})).toBe('Hi {name}');
    expect(formatMessage('{n} left', 'en-US', { n: 0 })).toBe('0 left');
  });

  it('picks CLDR plural forms per locale, falling back to `other`', () => {
    const items = { one: '{count} produkt', few: '{count} produkty', many: '{count} produktów', other: '{count} produktu' };
    expect([1, 2, 5, 22, 25].map((count) => formatMessage(items, 'pl-PL', { count }))).toEqual([
      '1 produkt',
      '2 produkty',
      '5 produktów',
      '22 produkty',
      '25 produktów',
    ]);
    expect(formatMessage(items, 'pl-PL', { count: 1.5 })).toBe('1.5 produktu');
    expect(formatMessage({ one: '{count} item', other: '{count} items' }, 'en-US', { count: 1 })).toBe('1 item');
    expect(formatMessage({ other: '{count} articoli' }, 'it-IT', { count: 1 })).toBe('1 articoli');
  });

  it('escapes params for markup messages', () => {
    expect(escapeHtml(`<a href="x">'&'</a>`)).toBe('&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;');
    expect(formatMessage('<b>{name}</b>', 'en-US', { name: '<i>' }, true)).toBe('<b>&lt;i&gt;</b>');
    expect(formatMessage('<b>{name}</b>', 'en-US', { name: '<i>' })).toBe('<b><i></b>');
  });

  it('every bundled catalog uses the same placeholders as English', () => {
    for (const [code, info] of Object.entries(LOCALES)) {
      if (code === 'en') continue;
      for (const [key, message] of Object.entries(info.messages)) {
        const source = (en as Record<string, Message>)[key];
        expect(source, `${code}: ${key} is not an English key`).toBeDefined();
        expect(placeholders(message as Message), `${code}: ${key}`).toEqual(placeholders(source));
      }
    }
  });

  it('every bundled translation is complete, with every plural form its language needs', () => {
    for (const [code, info] of Object.entries(LOCALES)) {
      if (code === 'en') continue;
      const messages = info.messages as Record<string, Message | undefined>;
      const missing = Object.keys(en).filter((key) => messages[key] === undefined);
      expect(missing, `${code} is missing ${missing.length} key(s)`).toEqual([]);
      const forms = new Intl.PluralRules(info.intl).resolvedOptions().pluralCategories;
      for (const [key, source] of Object.entries(en as Record<string, Message>)) {
        if (typeof source === 'string') continue;
        const message = messages[key];
        expect(typeof message, `${code}: ${key} must have plural forms`).toBe('object');
        for (const form of forms) {
          expect((message as Record<string, string>)[form], `${code}: ${key}.${form}`).toBeTypeOf('string');
        }
      }
    }
  });

  it('every English plural message has an `other` form', () => {
    for (const [key, message] of Object.entries(en as Record<string, Message>)) {
      if (typeof message !== 'string') expect(message.other, key).toBeTypeOf('string');
    }
  });

  it('every English key is namespaced by its catalog file', () => {
    for (const key of Object.keys(en)) expect(key).toMatch(/^[a-z][A-Za-z]*\.[\w.]+$/);
  });
});
