import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import FormField from 'part:@sanity/components/formfields/default';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import * as icons from 'react-icons/fa';

import styles from './icon-picker.css';

interface IconPickerProps {
  type: any;
  value: string;
  onChange: (value: string) => void;
}

const createPatchFrom = (value: string) => PatchEvent.from(value === '' ? unset() : set(value));

const getResults = (term: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMemo(
    () =>
      term.trim() === ''
        ? null
        : Object.entries(icons).filter(([iconName]) => {
            const regex = new RegExp(term, 'i');

            return iconName !== term && regex.test(iconName);
          }),
    [term],
  );
};

export const IconPicker = forwardRef(({ type, value, onChange: pushChange }: IconPickerProps) => {
  const [term, setTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = getResults(term);
  const SelectedIcon = icons[value as keyof typeof icons];

  const handleChange = (newValue: string) => {
    setTerm('');
    pushChange(createPatchFrom(newValue));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setAttribute('class', styles.input);
    }
  }, []);

  return (
    <FormField label={type.title} description={type.description}>
      <Combobox aria-label="icon" onSelect={handleChange}>
        <ComboboxInput value={term} onChange={(e) => setTerm(e.target.value)} ref={inputRef} />

        {results && (
          <ComboboxPopover portal={false}>
            {results.length ? (
              <ComboboxList>
                {results.slice(0, 10).map(([iconName, Icon]) => (
                  <ComboboxOption key={iconName} value={iconName}>
                    <Icon style={{ fontSize: '1.1rem' }} />
                  </ComboboxOption>
                ))}
              </ComboboxList>
            ) : (
              <span style={{ display: 'block', margin: 8 }}>No results found</span>
            )}
          </ComboboxPopover>
        )}
      </Combobox>

      {SelectedIcon && (
        <span className={styles.selection}>
          Selected icon: <SelectedIcon />
        </span>
      )}
    </FormField>
  );
});
