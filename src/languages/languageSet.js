'use strict';

module.exports = () => {
  const definedLanguage = process.env.ENV_LANG_TYPE;

  console.log('definedLanguage', definedLanguage);

  switch (definedLanguage) {
    case 'ptBR':
      return require('./Translations/ptBR');
    default:
      return require('./Translations/enUS');
  }
};
