import React from "react";
import {assert} from "chai";

describe('Testing Functions', function () {
    describe('Array & multiplication', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal(-1, [1, 2, 3].indexOf(4));
      });

      it('should return 0 when the value is 1', function () {
        assert.equal(0, [1, 2, 3].indexOf(1));
      });

      it('should test if 3*3 = 9', function () {
        assert.equal(9, 3 * 3);
      });

      it('should test if (3-4)*8 = -8', function () {
        assert.equal(-8, (3 - 4) * 8);
      });
      
    });
  });