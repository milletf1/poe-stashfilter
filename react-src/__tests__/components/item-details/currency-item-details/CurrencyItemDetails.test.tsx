import { mount, ReactWrapper, render, shallow } from 'enzyme';
import React from 'react';
import CurrencyItemDetails from '../../../../components/item-details/currency-item-details/CurrencyItemDetails';
import { ICurrency } from '../../../../models/items/ICurrency';
import { assertComponentItemHeader } from '../../../utils';
import testItem from './currency-test-item.json';

/* tslint:disable */
test('Should render correctly', () => {
  const item: ICurrency = (testItem as ICurrency);
  const wrapper: ReactWrapper = mount(<CurrencyItemDetails item={ item }/>);
  const itemHeader: ReactWrapper = wrapper.find('ItemHeader');
  const itemProperties: ReactWrapper = wrapper.find('ItemProperties');
  const itemMods: ReactWrapper = wrapper.find('ItemMods');

  expect(itemHeader.length).toBe(1);
  assertComponentItemHeader(itemHeader, item);

  expect(itemProperties.length).toBe(1);
  expect(itemProperties.find('.name').text().indexOf(item.properties[0].name)).toBe(0);
  expect(itemProperties.find('.value').text()).toBe(item.properties[0].values[0][0]);
  expect(itemMods.length).toBe(2);
  expect(itemMods.at(0).text()).toBe(item.explicitMods[0]);
  expect(itemMods.at(1).childAt(0).hasClass('item-mods')).toBeTruthy();
  expect(itemMods.at(1).text()).toBe(item.descrText);
});
