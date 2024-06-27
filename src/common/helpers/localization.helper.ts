const Languages = [
  { title: 'English', code: 'en-us' },
  { title: 'Русский', code: 'ru' },
  { title: 'Azərbaycan', code: 'aze' },
  { title: 'Español', code: 'esp' },
  {
    title: 'Қазақстан',
    code: 'kaz',
  },
];

const getLanguageCode = (language: string) =>
  Languages.find((item) => item.title === language)?.code ?? 'en-us';

const getLanguageTitle = (code: string) =>
  Languages.find((item) => item.code === code)?.title ?? 'English';

export { Languages, getLanguageCode, getLanguageTitle };
