const stringifyArray = require('../stringifyArray');
const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

async function asyncTestFunction(array) {
  return await stringifyArray(array);
}

let arr1 = [1,2,3,4,5,6,7,8];
let arr2 = [1,3,4,5,6,7,8];
let arr3 = [1,3,4,5,6,7,8,10,11,12];
let arr4 = [1,2,3];
let arr5 = [1,2];
let arr6 = [1,2,4];
let arr7 = [1,2,4,5,6];
let arr8 = [1,2,3,7,8,9,15,17,19,20,21];
let arr9 = [1,2,3,4,5,6,100,1091,1999,2000,2001,2002];
let arr10 = [1];
let arr11 = [1,3,5,7,9,11];

describe("test async function", () => {
  it("returns string", async () => {

    const result1 = await asyncTestFunction(arr1);
    expect(result1).to.equal("1-8");

    const result2 = await asyncTestFunction(arr2);
    expect(result2).to.equal("1,3-8");

    const result3 = await asyncTestFunction(arr3);
    expect(result3).to.equal("1,3-8,10-12");

    const result4 = await asyncTestFunction(arr4);
    expect(result4).to.equal("1-3");

    const result5 = await asyncTestFunction(arr5);
    expect(result5).to.equal("1,2");

    const result6 = await asyncTestFunction(arr6);
    expect(result6).to.equal("1,2,4");

    const result7 = await asyncTestFunction(arr7);
    expect(result7).to.equal("1,2,4-6");

    const result8 = await asyncTestFunction(arr8);
    expect(result8).to.equal("1-3,7-9,15,17,19-21");

    const result9 = await asyncTestFunction(arr9);
    expect(result9).to.equal("1-6,100,1091,1999-2002");

    const result10 = await asyncTestFunction(arr10);
    expect(result10).to.equal("1");

    const result11 = await asyncTestFunction(arr11);
    expect(result11).to.equal("1,3,5,7,9,11");

  })
})