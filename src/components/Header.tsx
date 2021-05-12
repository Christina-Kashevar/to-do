import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import classes from './Header.module.css';

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.header}>
            <h1>{t('TITLE')}</h1>
            <LanguageSwitcher/>
        </div>
    )
};

export default Header;