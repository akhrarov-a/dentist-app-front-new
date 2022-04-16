import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { Languages } from '@api';
import { setLanguage } from '@general/actions';
import { useClickOutside } from '@core/hooks';

/**
 * Use language options
 */
const useLanguageOptions = (): {
  id: Languages;
  label: string;
  logo: string;
}[] => [
  {
    id: Languages.EN,
    label: 'English',
    logo: 'england.svg'
  },
  {
    id: Languages.RU,
    label: 'Русский',
    logo: 'russian.svg'
  }
];

/**
 * <LanguageDropdown /> props
 */
const useLanguageDropdownProps = () => {
  const divRef = useRef<HTMLDivElement>();

  const dispatch = useDispatch();
  const languages = useLanguageOptions();

  const { language } = useSelector((state: State) => state.general);

  const [showOptions, setShowOptions] = useState(false);

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const onOptionClick = (language: Languages) => {
    dispatch(setLanguage(language));

    toggleShowOptions();
  };

  useClickOutside(divRef, () => {
    if (showOptions) toggleShowOptions();
  });

  return {
    divRef,
    showOptions,
    language: languages.find(({ id }) => id === language),
    languages,
    toggleShowOptions,
    onOptionClick
  };
};

export { useLanguageDropdownProps, useLanguageOptions };
