var Unit = function(id, ownerId, name, changeDay, proximity, bedrooms, bathrooms, maxOcc, allowsPets, availOff, availMid, availIn, rentOff, rentMid, rentIn, adminFee, petFee, secDeposit, address, city, state, zip, phone, hasWasherDryer, hasDishwasher, hasCentralHVAC, hasWindowAC, hasHotTub, hasPool, hasOceanViews, hasBoatRamp) {
	this.id = id;
	this.ownerId = ownerId; //owners.index value
	this.name = name;
	this.changeDay = changeDay;
	this.proximity = proximity; //Ocean Proximity
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
	this.maxOcc = maxOcc;
	this.allowsPets = allowsPets;
	this.availOff = availOff;
	this.availMid = availMid;
	this.availIn = availIn;
	this.rentOff = rentOff;
	this.rentMid = rentMid;
	this.rentIn = rentIn;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.phone = phone;
	this.hasWasherDryer = hasWasherDryer;
	this.hasDishwasher = hasDishwasher;
	this.hasCentralHVAC = hasCentralHVAC;
	this.hasWindowAC = hasWindowAC;
	this.hasHotTub = hasHotTub;
	this.hasPool = hasPool;
	this.hasOceanViews = hasOceanViews;
	this.hasBoatRamp = hasBoatRamp;
};

var Owner = function(name, ssNum, address, city, state, zip, homePhone, workPhone, email, notes) {
	this.name = name;
	this.ssNum = ssNum;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.homePhone = homePhone;
	this.workPhone = workPhone;
	this.email = email;
	this.notes = notes;
};

var SeasonYear = function(year, off1Start, off1End, mid1Start, mid1End, inStart, inEnd, mid2Start, mid2End, off2Start, off2End) {
	this.year = year;
	this.off1Start = off1Start;
	this.off1End = off1End;
	this.mid1Start = mid1Start;
	this.mid1End = mid1End;
	this.inStart = inStart;
	this.inEnd = inEnd;
	this.mid2Start = mid2Start;
	this.mid2End = mid2End;
	this.off2Start = off2Start;
	this.off2End = off2End;
};

var Renter = function(firstName, lastName, address, city, state, zip, country, phone, email, favoriteUnit) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.address = address;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.country = country;
	this.phone = phone;
	this.email = email;
	this.favoriteUnit = favoriteUnit;
};

var Rental = function(resDate,isOwner,renter,unit,rentalStart,rentalEnd,baseRent,petFee,adminFee,insurance,secDeposit) {
	this.resDate = resDate;
	this.isOwner = isOwner;
	this.renter = renter;
	this.unit = unit;
	this.rentalStart = rentalStart;
	this.rentalEnd = rentalEnd;
	this.baseRent = baseRent;
	this.petFee = petFee;
	this.adminFee = adminFee;
	this.insurance = insurance;
	this.secDeposit = secDeposit;
};
Rental.prototype.totalRent = function() {
	return (this.baseRent * 1.115) + ((this.petFee + this.adminFee) * 1.065) + this.Insurance;
};
Rental.prototype.advAmtDue = function() {
	return this.baseRent / 2
};
Rental.prototype.advAmtDueDate = function() {
	return this.resDate + 10;
};

var owners = [];
var units = [];
var years = [];
var renters = [];
var rentals = [];