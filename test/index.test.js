const { describe, it } = require("mocha")
const { expect } = require("chai")
const smooth = require("../src/index");

describe("cubic smoothing function", function(){
  it("should be 0 at x = 0", function(){
    expect(smooth(0)).to.equal(0)
  })
  it("should be 1/2 at x = 1/2", function(){
    expect(smooth(1/2)).to.equal(1/2)
  })
  it("should be 1 at x = 1", function(){
    expect(smooth(1)).to.equal(1)
  })
  it("should be 0 at x = 3/2", function(){
    expect(smooth(3/2)).to.equal(0)
  })
})
