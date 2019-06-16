import React from 'react';
import renderer from 'react-test-renderer';

import { Select } from '../source/components/Select';
import { SelectSkin } from '../source/skins/simple/SelectSkin';
import { renderInSimpleTheme } from './helpers/theming';

const COUNTRIES = [
  { label: 'Frankreich', value: 'France' },
  { label: 'Spanien', value: 'Spain' },
  { label: 'Kroatien', value: 'Croatia' },
  { label: 'Vereinigten Staaten', value: 'United States' },
  { label: 'Österreich', value: 'Austria' }
];

const COUNTRIES_DISABLED_OPTIONS = [
  { value: 'EN-gb', label: 'England' },
  { value: 'ES-es', label: 'Spain', isDisabled: true },
  { value: 'TH-th', label: 'Thailand', isDisabled: true },
  { value: 'EN-en', label: 'USA' }
];

const WALLETS = [
  { value: '100,100 ADA', label: 'Main wallet' },
  { value: '10,100.2 ADA', label: 'Spending money' },
  { value: '500,1000 ADA', label: 'Savings' },
];

test('Select renders correctly', () => {
  const component = renderInSimpleTheme(
    <Select options={COUNTRIES} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select renders with placeholder', () => {
  const component = renderInSimpleTheme(
    <Select
      placeholder="Select your country …"
      options={COUNTRIES}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select renders with an error', () => {
  const component = renderInSimpleTheme(
    <Select
      error="Please select a different option"
      options={COUNTRIES}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select renders with disabled options', () => {
  const component = renderInSimpleTheme(
    <Select options={COUNTRIES_DISABLED_OPTIONS} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select isOpeningUpward={true}', () => {
  const component = renderInSimpleTheme(
    <Select
      isOpeningUpward
      options={COUNTRIES}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select isOpen={true}', () => {
  const component = renderInSimpleTheme(
    <Select
      isOpen
      options={COUNTRIES}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select uses render prop - optionRenderer', () => {
  const component = renderInSimpleTheme(
    <Select
      options={COUNTRIES}
      optionRenderer={option => (
        <div>
          <span>German: {option.label}</span>
          <span>English: {option.value}</span>
        </div>
      )}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Select uses render prop - valueRenderer', () => {
  const component = renderInSimpleTheme(
    <Select
      options={WALLETS}
      optionRenderer={option => (
        <div>
          <div>{option.label}</div>
          <div>{option.value}</div>
        </div>
      )}
      selectionRenderer={option => (
        <div>
          <div>{option.label}</div>
          <div>{option.value}</div>
        </div>
      )}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
