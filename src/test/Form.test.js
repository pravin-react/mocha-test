import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "../Form";

describe('Testing <Form/> Component', () => {
    it('check if form has input tag and button text"', () => {
      const wrapper = shallow(<Form />);
      const button = wrapper.find('.button');
      const input = wrapper.find('.name');
      const email = wrapper.find('.email');
      expect(button.text()).to.be.eql('Submit');
      expect(input.type()).to.be.eql('input');
      expect(email.type()).to.be.eql('input');
      expect(input.getElement().props.type).to.be.eql('text');
      expect(email.getElement().props.type).to.be.eql('email');
      console.log('test', input.at(0).getElement());
      expect(input.at(0).getElement().props.value).to.equal('testValue');
    });
    chai.use(chaiEnzyme());
  });