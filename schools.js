$(document).ready(function() {


		function School(name, location, undergradSize, price, acceptanceRate, rank, type, satisfaction) {
		this.name = name;
		this.location = location;
		this.size = undergradSize;
		this.price = price;
		this.acceptanceRate = acceptanceRate;
		this.rank = rank;
		this.type = type;
		this.satisfaction = satisfaction;
	}
	//TODO:
	//write a review for the school 
	//use Twitter's API to get tweets about the school
	//have usernames and passwords - store that data


	var princeton = new School("Princeton", "Princeton, NJ", 5391, 43450, 7.4, 1, "private", 98.6);
	var harvard = new School("Harvard", "Cambridge, MA", 6694, 45278, 5.9, 2, "private", 97.6);
	var yale = new School("Yale", "New Haven, CT", 5477, 47600, 6.3, 3, "private", 99.6);
	var columbia = new School("Columbia", "New York, NY", 6170, 51008, 6.9, 4, "private", 99.8);
	var stanford = new School("Stanford", "Stanford, CA", 7019, 46320, 5.1, 5, "private", 98.5);
	var UChicago = new School("University of Chicago", "Chicago, IL", 5681, 50193, 7.8, 6, "private", 99.7);
	var mit = new School("MIT", 'Cambridge, MA', 4512, 46704, 7.9, 7, 'private', 98.7);
	var duke = new School("Duke", 'Durham, NC', 6626, 49341, 9.4, 8, 'private', 97.7);
	var UPenn = new School("University of Pennsylvania", 'Philadelphia, PA', 9746, 49536, 9.9, 9, 'private', 98.3);
	var calTech = new School("California Institute of Technology", 'Pasedena, CA', 983, 45390, 8.0, 10, 'private', 97.9);
	var johnHopkins = new School("Johns Hopkins University", "Baltimore, MD", 6469, 48710, 12.4, 11, 'private', 97.5);
	var dartmouth = new School("Dartmouth College", 'Hanover, NH', 983, 45390, 10.3, 12, 'private', 98.8);
	var northwestern = new School("Northwestern University", 'Evanston, IL', 8405, 49047, 12.9, 13, 'private', 97.4);
	var brown = new School("Brown University", 'Providence, RI', 6548, 49346, 8.7, 14, 'private', 98.9);
	var cornell = new School("Cornell University", 'Ithaca, NY', 14453, 49116, 14, 15, 'private', 97.8);
	var vanderbilt = new School("Vanderbilt University", 'Nashville, TN', 6851, 43838, 13.1, 16, 'private', 97.04);
	var washU = new School("Washington University in St. Louis", 'St. Louis, MO', 7401, 48093, 15.6, 17, 'private', 97.02);
	var rice = new School("Rice University", 'Houston, TX', 3926, 42253, 14, 18, 'private', 97);
	var notreDame = new School("University of Notre Dame", 'Notre Dame, IN', 8448, 47929, 21.2, 19, 'private', 98.4);
	var berkeley = new School("University of California, Berekeley", 'Berekeley, CA', 27126, 38140, 18.1, 20, 'publix', 97.2);
	var emory = new School("Emory University", 'Atlanta, GA', 7829, 46314, 27, 21, 'private', 95.9);
	var georgetown = new School("Georgetown University", 'Washington, DC', 7595, 48611, 16.4, 22, 'private', 96.5);
	var carnegie = new School("Carnegie Mellon University", 'Pittsburgh, PA', 6309, 50410, 23.6, 23, 'private', 95.7);
	var ucla = new School("UCLA", "Los Angeles, CA", 29585, 35631, 18.6, 24, "public", 97.15);
	var usc = new School("University of Southern California", "Los Angeles, CA", 18740, 50210, 17.8, 25, "private", 97.08);
	var uva = new School("University of Virginia", "Charlottesville, VA", 16483, 43822, 30.1, 26, "public", 97.06);
	var tufts = new School("Tufts University", "Medford, MA", 5177, 50604, 17.2, 27, "private", 96);
	var wakeForest = new School("Wake Forest University", "Winston-Salem, NC", 4867, 47682, 34.4, 28, "private", 94);
	var uMich = new School("University of Michigan, Ann Arbor", "Ann Arbor, MI", 28395, 43377, 26.2, 29, "public", 97.12);
	var bostonCollege = new School("Boston College", "Chestnut Hill, MA", 9154, 49324, 34, 30, "private", 95.8);
	var unc = new School("UNC Chapel-Hill", "Chapel-Hill", 18350, 33644, 29, 31, "public", 97.1);

	var schools = [princeton, harvard, yale, columbia, stanford, UChicago, mit, duke, UPenn, calTech, johnHopkins, dartmouth, northwestern,
	                brown, cornell, vanderbilt, washU, rice, notreDame, berkeley, emory, georgetown, carnegie, ucla, usc, uva, tufts, 
	                wakeForest, uMich, bostonCollege, unc];

	var table = document.getElementById("schools");
	var tBody = document.createElement("tbody");
	table.appendChild(tBody);
	createTable(schools);

	function createTable(schoolArr) {
	
		for (var i = 0; i < schoolArr.length; i++) {	
			var tableRow = document.createElement("tr");
			var school = schoolArr[i];
			for (var key in school) {
				if (school.hasOwnProperty(key)) {
					var tableData = document.createElement("td");
					var msg = school[key];
					if (key === "acceptanceRate") {
						msg+="%";
					}
					else if (key === "size" || key === "price") {
						msg = msg.toLocaleString();
					}
					tableData.innerHTML = msg;
					tableRow.appendChild(tableData);
				}

			}
			tBody.appendChild(tableRow);
				
		}
	}

	/* var changeColor = function() {
		$("#sort").addclass("sortValue");
	}(); */

	$("#sortBtn").on('click', function() {
		var isIncreasing;
		var sortMethod = $("#sort").val();
		var data = [];
		
			switch (sortMethod) {
				case 'price':
					for (var i = schools.length - 1; i >= 0; i--) {
						data.push(schools[i].price);
					}
					break;
				case 'size':
					for (var i = schools.length - 1; i >= 0; i--) {
						data.push(schools[i].size);
					}
					break;
				case 'acceptanceRate':
					for (var i = schools.length - 1; i >= 0; i--) {
						data.push(schools[i].acceptanceRate);
					}
					break;
				case 'rank':
					for (var i = schools.length - 1; i >= 0; i--) {
						data.push(schools[i].rank);
					}
					break;
				case 'satisfaction':
					for (var i = schools.length - 1; i >= 0; i--) {
						data.push(schools[i].satisfaction);
					}
					break;	
				
			}
			if (document.getElementById("increasing").checked === true) {
				data.sort(function(a,b) {return a - b});
			} 
			else 
				data.sort(function(a,b) {return b - a});	
			deleteTableData();          //getting ready for the sort
			var matchSchools = matchingSchools(sortMethod, data);
			createTable(matchSchools);
			
			

		

	});

	function printArr(arr) {
		for (var i = 0; i < arr.length; i++) {
			console.log(arr[i] + " ");
		}
	}

	function deleteTableData() {
		//delete old data from table
		$("#schools tBody tr").remove();
	}


	function matchingSchools(sortParameter, dataArr) {
		//have the sorted data, now want to find the corresponding school
		var j = 0, k = 0;
		var matchingSchools = [];   //trying to sort the schools in order according to my sorted data
		for (j; j < schools.length && k < dataArr.length;) {
			console.log(schools[j].name);
			if (schools[j][sortParameter] === dataArr[k]) {
				//found the matching school
				while (matchingSchools.indexOf(schools[j]) !== -1) {
					j++;
				}  
				matchingSchools.push(schools[j]);
				j = 0;
				k++;      //going through my sorted data
			} else {
				j++;       //finding the next school
			}

		}
		return matchingSchools;

	};

	function sortAscending(a, b) {
		return (a-b); //causes an array to be sorted numerically & ascending
	}


	


});
