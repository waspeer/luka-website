import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import { Stack, Text, TextInput } from '@sanity/ui';
import { useMemo, useState } from 'react';
import * as icons from 'react-icons/fa';
import { set, unset } from 'sanity';

import type { StringInputProps } from 'sanity';

import '@reach/combobox/styles.css';

const createPatchFrom = (value: string) => (value === '' ? unset() : set(value));

const getResults = (term: string) => {
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

export function IconPicker(properties: StringInputProps) {
  const { value, onChange: pushChange, elementProps } = properties;

  const [term, setTerm] = useState('');

  const results = getResults(term);
  const SelectedIcon = icons[value as keyof typeof icons];

  const handleChange = (newValue: string) => {
    setTerm('');
    pushChange(createPatchFrom(newValue));
  };

  return (
    <Stack space={3}>
      <Combobox aria-label="icon" onSelect={handleChange}>
        <ComboboxInput
          {...elementProps}
          as={TextInput}
          value={term}
          onChange={(event: any) => setTerm(event.target.value)}
        />

        {results && (
          <ComboboxPopover portal={false}>
            {results.length > 0 ? (
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
        <Text size={1}>
          Selected icon: <SelectedIcon />
        </Text>
      )}
    </Stack>
  );
}
