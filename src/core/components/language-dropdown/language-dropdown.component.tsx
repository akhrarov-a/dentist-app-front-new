import React from 'react';
import classNames from 'classnames';
import { hoc } from '../../utils';
import { useLanguageDropdownProps } from './language-dropdown.props';
import styles from './language-dropdown.scss';

/**
 * <LanguageDropdown />
 */
const LanguageDropdown = hoc(
  useLanguageDropdownProps,
  ({
    divRef,
    showOptions,
    language,
    languages,
    toggleShowOptions,
    onOptionClick
  }) => (
    <div
      ref={divRef}
      className={classNames(styles.container, {
        [styles.containerOpen]: showOptions
      })}
      onClick={toggleShowOptions}
    >
      <div className={styles.content}>
        <img
          className={styles.languageLogo}
          src={require(`img/${language.logo}`)}
          alt=''
        />
        <p>{language.label}</p>
        <img
          className={classNames(styles.arrow, {
            [styles.arrowToTop]: showOptions
          })}
          src={require('img/arrow.svg')}
          alt=''
        />
      </div>
      {showOptions && (
        <div className={styles.options}>
          {languages.map(option => (
            <div
              key={option.id}
              className={classNames(styles.option, {
                [styles.optionSelected]: option.id === language.id
              })}
              onClick={() => onOptionClick(option.id)}
            >
              <img src={require(`img/${option.logo}`)} alt='' />
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
);

export { LanguageDropdown };
