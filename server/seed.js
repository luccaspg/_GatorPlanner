var mongoose = require("mongoose");
var ParkingLot = require("./models/parkinglot.server.model.js");
/*

*/
var data = [
	{
		name: "Black Hall",
		coordinates: {
			latitude: 29.642349,
			longitude: -82.348025, 
		},
		decal: "orange,disabled",
		rating: 1
	},
		{
		name: "Bledsoe SWR",
		coordinates: {
			latitude: 29.638695,
			longitude: -82.369903, 
		},
		decal: "all,disabled",
		rating: 1
	},
	{
		name: "Corry Village",
		coordinates: {
			latitude: 29.646356,
			longitude: -82.361264, 
		},
		decal: "brown,green,disabled",
		rating: 1
	},
	{
		name: "Criser Lot",
		coordinates: {
			latitude: 29.650012,
			longitude: -82.340809, 
		},
		decal: "gated,disabled,meter",
		rating: 1
	},
	{
		name: "Cultural Plaza",
		coordinates: {
			latitude: 29.63761,
			longitude: -82.368790, 
		},
		decal: "all,visitor,orange,meter,disabled",
		rating: 1
	},
	{
		name: "Diamond Village",
		coordinates: {
			latitude: 29.642824,
			longitude: -82.340654, 
		},
		decal: "brown,disabled",
		rating: 1
	},
	{
		name: "Division of Housing",
		coordinates: {
			latitude: 29.643747,
			longitude: -82.340504, 
		},
		decal: "red1,orange,disabled",
		rating: 1
	},
	{
		name: "East Hall",
		coordinates: {
			latitude: 29.646310,
			longitude: -82.350471, 
		},
		decal: "orange",
		rating: 1
	},
	{
		name: "Engineering Lot",
		coordinates: {
			latitude: 29.644480,
			longitude: -82.347600, 
		},
		decal: "orange,disabled",
		rating: 1
	},
	{
		name: "Fifield Hall",
		coordinates: {
			latitude: 29.637809,
			longitude: -82.361263, 
		},
		decal: "green,orange,disabled,meter",
		rating: 1
	},
	{
		name: "Fraizer-Rogers Hall",
		coordinates: {
			latitude: 29.644613,
			longitude: -82.346434, 
		},
		decal: "orange,disabled",
		rating: 1
	},
	{
		name: "Frat Row",
		coordinates: {
			latitude: 29.647197,
			longitude: -82.357755, 
		},
		decal: "any,red1,red3,disabled",
		rating: 1
	},
	{
		name: "Garage I",
		coordinates: {
			latitude: 29.641061,
			longitude: -82.342049, 
		},
		decal: "gated",
		rating: 1
	},
	{
		name: "Garage II",
		coordinates: {
			latitude: 29.638638,
			longitude: -82.347725, 
		},
		decal: "visitor,gated,disabled",
		rating: 1
	},
	{
		name: "Garage III",
		coordinates: {
			latitude: 29.638617,
			longitude: -82.347754, 
		},
		decal: "med,visitor,gated",
		rating: 1
	},
	{
		name: "Garage IV",
		coordinates: {
			latitude: 29.645237,
			longitude: -82.342963
		},
		decal: "orange",
		rating: 1
	},
	{
		name: "Garage V",
		coordinates: {
			latitude: 29.643293,
			longitude: -82.3513
		},
		decal: "red1,red3,green",
		rating: 1
	},
	{
		name: "Garage VI",
		coordinates: {
			latitude: 29.636540,
			longitude: -82.342285
		},
		decal: "gated,blue,meter",
		rating: 1
	},
	{
		name: "Garage VII",
		coordinates: {
			latitude: 29.650651,
			longitude: -82.351556
		},
		decal: "green",
		rating: 1
	},
	{
		name: "Garage VIII",
		coordinates: {
			latitude: 29.645505,
			longitude: -82.337558
		},
		decal: "red1,red3,orange,disabled",
		rating: 1
	},
	{
		name: "Garage IX",
		coordinates: {
			latitude: 29.636454,
			longitude: -82.349130
		},
		decal: "blue,green",
		rating: 1
	},
	{
		name: "Garage X",
		coordinates: {
			latitude: 29.640630,
			longitude: -82.341685
		},
		decal: "gated",
		rating: 1
	},
	{
		name: "Garage XI",
		coordinates: {
			latitude: 29.636284,
			longitude: -82.368436
		},
		decal: "all,disabled",
		rating: 1
	},
	{
		name: "Garage XII",
		coordinates: {
			latitude: 29.645370,
			longitude: -82.338201
		},
		decal: "gated,visitor,disabled",
		rating: 1
	},
	{
		name: "Garage XIII",
		coordinates: {
			latitude: 29.640402,
			longitude: -82.349660
		},
		decal: "orange,disabled,meter",
		rating: 1
	},
	{
		name: "Hume North",
		coordinates: {
			latitude: 29.645939,
			longitude: -82.255133
		},
		decal: "red1,red3,diabled",
		rating: 1
	},
	{
		name: "IFAS Area",
		coordinates: {
			latitude: 29.638522,
			longitude: -82.356692
		},
		decal: "orange,disabled,green",
		rating: 1
	},
	{
		name: "Infirmary",
		coordinates: {
			latitude: 29.648868,
			longitude: -82.346402
		},
		decal: "gated",
		rating: 1
	},
	{
		name: "Inner Road",
		coordinates: {
			latitude: 29.647420,
			longitude: -82.341272
		},
		decal: "gated,disabled",
		rating: 1
	},
	{
		name: "Keys",
		coordinates: {
			latitude: 29.648202,
			longitude: -82.354173
		},
		decal: "red1",
		rating: 1
	},
	{
		name: "Lakeside",
		coordinates: {
			latitude: 29.641673,
			longitude: -82.365930
		},
		decal: "red1,red3",
		rating: 1
	},
	{
		name: "Large Commuter",
		coordinates: {
			latitude: 29.641989,
			longitude: -82.351269
		},
		decal: "green",
		rating: 1
	},
	{
		name: "Law School",
		coordinates: {
			latitude: 29.648710,
			longitude: -82.358959
		},
		decal: "green,orange,disabled",
		rating: 1
	},
	{
		name: "Maguire Village",
		coordinates: {
			latitude: 29.640008,
			longitude: -82.370620
		},
		decal: "brown,red1,red3",
		rating: 1
	},
	{
		name: "McCarty South",
		coordinates: {
			latitude: 29.646273,
			longitude: -82.344284
		},
		decal: "orange",
		rating: 1
	},
	{
		name: "Murphree Area",
		coordinates: {
			latitude: 29.651796,
			longitude: -82.345574
		},
		decal: "red1,orange,gated,disabled",
		rating: 1
	},
	{
		name: "O'Connell Center",
		coordinates: {
			latitude: 29.651297,
			longitude: -82.350910
		},
		decal: "orange",
		rating: 1
	},
	{
		name: "Pony Field",
		coordinates: {
			latitude: 29.639199,
			longitude: -82.350934
		},
		decal: "med,gated,green",
		rating: 1
	},
	{
		name: "Rhines Hall",
		coordinates: {
			latitude: 29.647716,
			longitude: -82.349297
		},
		decal: "orange,disabled",
		rating: 1
	},
	{
		name: "Sorority Row and Bog Lot",
		coordinates: {
			latitude: 29.644544,
			longitude: -82.338459
		},
		decal: "red1,red3",
		rating: 1
	},
	{
		name: "Tigert Lot",
		coordinates: {
			latitude: 29.649368,
			longitude: -82.340611
		},
		decal: "gated",
		rating: 1
	},
	{
		name: "Track Lot",
		coordinates: {
			latitude: 29.645912,
			longitude: -82.355275
		},
		decal: "red1,red3",
		rating: 1
	}
]

function seedDB(){
	ParkingLot.count(function(err, count){
		if(count == 0){

		data.forEach(function(seed){
			ParkingLot.create(seed, function(err, parkinglot){
				if(err){
					console.log(err);
				}else{
					console.log("Added parkinglot");
				}
			});
		});
		}
	});
}

module.exports = seedDB;
