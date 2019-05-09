import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RentalList from './RentalList';
import data from './airbnbs.json';

import { configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const junk = ()=>{
  console.log('test');
}

describe("RentalList", ()=> {
  const wrapper = shallow(<RentalList rentals={data}
                                      onBookRental={junk}
                                      onRemoveRental={junk} />);
  const rental=wrapper.find('RentalList');

  const snapshot = render(
      <RentalList rentals={data}
                  onBookRental={junk}
                  onRemoveRental={junk} />
  );

  it("just pass anything",()=> {
    expect(rental.prop('rentals')).toBeDefined();
  });



});
