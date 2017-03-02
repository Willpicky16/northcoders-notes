var expect = require('chai').expect;
var modifyDoctors = require('../modifyDoctors');
var doctors = [
  { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
  { number: 2,  actor: "Patrick Troughton",     begin: 1966, end: 1969 },
  { number: 3,  actor: "Jon Pertwee",           begin: 1970, end: 1974 },
  { number: 4,  actor: "Tom Baker",             begin: 1974, end: 1981 },
  { number: 5,  actor: "Peter Davison",         begin: 1982, end: 1984 },
  { number: 6,  actor: "Colin Baker",           begin: 1984, end: 1986 },
  { number: 7,  actor: "Sylvester McCoy",       begin: 1987, end: 1989 },
  { number: 8,  actor: "Paul McGann",           begin: 1996, end: 1996 },
  { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
  { number: 10, actor: "David Tennant",         begin: 2005, end: 2010 },
  { number: 11, actor: "Matt Smith",            begin: 2010, end: 2013 },
  { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }    
];

describe('modifyDoctors', function () {
  it('should be a function', function () {
    expect(modifyDoctors).to.be.a('function');
  });

  it('should filter out Dr. Whos did not play after 2000', function () {
    var doctors = [
      { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
      { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
      { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }    
    ];
    doctors = modifyDoctors(doctors);
    expect(doctors.length).to.equal(2);
    expect(doctors[0].playedBy).to.equal("Christopher Eccleston");
    expect(doctors[1].playedBy).to.equal("Peter Capaldi");
  });

  it('should contain a doctorNumber property instead of number', function () {
    var doctors = [
      { number: 1,  actor: "William Hartnell",      begin: 1963, end: 1966 },
      { number: 9,  actor: "Christopher Eccleston", begin: 2005, end: 2005 },
      { number: 12, actor: "Peter Capaldi",         begin: 2013, end: 2013 }    
    ];
    doctors = modifyDoctors(doctors);
    expect(doctors[0]).to.have.ownProperty('doctorNumber');
    expect(doctors[0]).to.not.have.ownProperty('number');
  });

  it('should contain a playedBy property instead of actor', function () {
    expect(modifyDoctors(doctors)[0].hasOwnProperty('playedBy')).to.equal(true);
    expect(modifyDoctors(doctors)[0].hasOwnProperty('actor')).to.equal(false);
  });


  it('doctorNumber should be a string on format #num', function () {
    expect(typeof modifyDoctors(doctors)[0].doctorNumber === 'string').to.equal(true);
    expect(modifyDoctors(doctors)[0].doctorNumber).to.equal('#9');
  });

  it('should contain a yearsPlayed property instead of begin and end', function () {
    expect(modifyDoctors(doctors)[0].hasOwnProperty('yearsPlayed')).to.equal(true);
    expect(modifyDoctors(doctors)[0].yearsPlayed).to.equal(1);
  });

});
