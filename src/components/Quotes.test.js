import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('quotes component', () => {
  it('renders a list of quotes', () => {
    const quotes = [
      {
        character: 'Fry',
        quote: 'What??',
        image: '/image'
      },
      {
        character: 'Fry',
        quote: 'What??',
        image: '/image'
      }
    ];

    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
