import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
configure({
   adapter: new Adapter()
});

describe("Testin <App /> Component", () => {
   it("App renders a message", () => {
      const wrapper = shallow(<App />);
      const message = <p>Mocha Test</p>;
      expect(wrapper).to.contain(message);
   });
   chai.use(chaiEnzyme());
});


