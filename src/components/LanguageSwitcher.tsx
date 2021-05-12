import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, MenuItem, Select } from '@material-ui/core';

const imgStyle ={
  width: '40px',
  height: '25px',
  marginRight: '10px',
}

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLangChange = (e: React.ChangeEvent<{value: unknown}>): void => {
    i18n.changeLanguage(e.target.value as string);
  };

  const languages = ['ru', 'en'];

  const renderLangOptions = () =>
    languages.map((lang) => (
      <MenuItem key={lang} value={lang}>
        <Grid container alignItems="center" justify="flex-start">
          <img
            src={`${process.env.PUBLIC_URL}/icons/${lang.slice(0, 2)}.svg`}
            alt={lang}
            style={imgStyle}
          />
          {lang}
        </Grid>
      </MenuItem>
    ));

  return (
    <Select value={i18n.language || ''} onChange={handleLangChange}>
      {renderLangOptions()}
    </Select>
  );
};

export default LanguageSwitcher;