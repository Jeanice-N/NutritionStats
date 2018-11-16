var glist = new Array();
var newGroup;

function Group(gname, gimage, dir, serv) {
	this.gname = gname;
	this.gimage = gimage;
	this.dir = dir;
	this.serv = serv;
}

var fruitsvegList = new Array();
var newFruitsveg;


function Fruitsveg(id, gender, age, serving) {
	this.id = id;
	this.gender = gender;
	this.age = age;
	this.serving = serving;
}

var grainList = new Array();
var newGrain;


function Grain(id, gender, age, serving) {
	this.id = id;
	this.gender = gender;
	this.age = age;
	this.serving = serving;
}

var milkList = new Array();
var newMilk;


function Milk(id, gender, age, serving) {
	this.id = id;
	this.gender = gender;
	this.age = age;
	this.serving = serving;
}

var meatList = new Array();
var newMeat;


function Meat(id, gender, age, serving) {
	this.id = id;
	this.gender = gender;
	this.age = age;
	this.serving = serving;
}

var creator = "Jeanice-"; //prefix for data


$(document).on("pagecreate", "#jsonpOut", function() {
	console.log("in jsonpOut");
	
	//getting a3_FoodGroups.json file
	$.getJSON("a3_FoodGroups.json", function(data) {
	 	console.log(data);
					
		//assigning JSON "FoodGroups" object to variable													
		start = data.FoodGroups;
		//assigning JSON "Groups" object to variable	
		groups = data.FoodGroups.Groups;		

		//populating array list with group info
		for(x = 0; x < groups.length; x++){
			newGroup = new Group(groups[x].groupName,
									groups[x].groupimage,	
									groups[x].directions,
									groups[x].servings
								)
			glist.push(newGroup);
		}
		console.log(glist);

		//populating array list with fruitsveg serving info
			for(x = 0; x < groups[0].servings.length; x++){
				newFruitsveg = new Fruitsveg(groups[0].servings[x].fgid,
								groups[0].servings[x].gender,	
								groups[0].servings[x].ages,
								groups[0].servings[x].servings
							)
				fruitsvegList.push(newFruitsveg);
			}
		console.log(fruitsvegList);

		//populating array list with grain serving info
			for(x = 0; x < groups[1].servings.length; x++){
				newGrain = new Grain(groups[1].servings[x].fgid,
								groups[1].servings[x].gender,	
								groups[1].servings[x].ages,
								groups[1].servings[x].servings
							)
				grainList.push(newGrain);
			}
		console.log(grainList);

		//populating array list with milk serving info
			for(x = 0; x < groups[2].servings.length; x++){
				newMilk = new Milk(groups[2].servings[x].fgid,
								groups[2].servings[x].gender,	
								groups[2].servings[x].ages,
								groups[2].servings[x].servings
							)
				milkList.push(newMilk);
			}
		console.log(milkList);

		//populating array list with meat serving info
			for(x = 0; x < groups[3].servings.length; x++){
				newMeat = new Meat(groups[3].servings[x].fgid,
								groups[3].servings[x].gender,	
								groups[3].servings[x].ages,
								groups[3].servings[x].servings
							)
				meatList.push(newMeat);
			}
		console.log(meatList);
	
	
		loadData();

		//populating header with Publisher name and HeaderImage
		$("#publisher").append(start.Publisher);
		$("#header").append("<p style = 'text-align:center;'><img src='images/" + start.HeaderImage + "' width='30%'></p>");


	}); //end of a3_FoodGroups getJSON function

	//getting student.json file
	$.getJSON("student.json", function(data) {
	 	console.log(data);

	 	//assigning JSON "Student" object to variable													
		start = data.Student;

		//populating about popup dialog box
		$("#name").html(start.Name);
		$("#program").html(start.Program);
		$("#image").html("<img src='images/" + start.Image + "' style='width:154px;height:200px;'>");
		$("#quote").html(start.Quote);
		 
	}); //end of student getJSON function


}); //end of page function


function loadData(){
	//populating collapsible set 
	$("#fginfo").html("");
	for(x = 0; x < glist.length; x++){
		$("#fginfo").append(
			"<section data-role='collapsible'>" +
			"<h3>" + 
			"<span id='n" + x + "'>" + 
				glist[x].gname + "</span>" + 
			"</h3>" + 
			"<p>" +
				"<table>" +
					"<tr><th>FOOD GROUP</th><td><a href='#group" + x + "'>" + glist[x].gname + "</a></td></tr>" +
					"<tr><th>IMAGE</th><td><img src='images/" + glist[x].gimage + "' style='width:154px;height:200px;'></td></tr>" +
					"<tr><th>DESCRIPTION</th><td>" + glist[x].dir + "</td></tr>" +									
				"</table>" +
			"</section>"
		); //end of append for block b - forecast info
	} //end of for loop
	$("#fginfo").collapsibleset("refresh");

	// Load up Images & text in form page
	$("#formList").html("");
	for(x = 0 ; x < glist.length; x++){
		$("#formList").append(
			"<label>" + 
			"<input type='radio' name='fgList' value='" +
			glist[x].gname + "'>" + glist[x].gname +
			"<img src='images/" +
			glist[x].gimage + "' width='50px' height='50px'>" +
			"</label>"
		);
	}

	//populating fruits and veg page
		for(x = 0; x < fruitsvegList.length; x++){
			$("#vfServingSpecs").append(
				"<tr>" +
					"<td>" + fruitsvegList[x].gender + "</td>" +
					"<td>" + fruitsvegList[x].age + "</td>" +
					"<td>" + fruitsvegList[x].serving + "</td>" +
				"</tr>"
			);	
		} //end of fruitsveg loop	

	//populating grains page
	for(x = 0; x < grainList.length; x++){
		$("#grServingSpecs").append(
			"<tr>" +
				"<td>" + grainList[x].gender + "</td>" +
				"<td>" + grainList[x].age + "</td>" +
				"<td>" + grainList[x].serving + "</td>" +
			"</tr>"
		);	
	} //end of grains loop

	//populating milk page
	for(x = 0; x < milkList.length; x++){
		$("#miServingSpecs").append(
			"<tr>" +
				"<td>" + milkList[x].gender + "</td>" +
				"<td>" + milkList[x].age + "</td>" +
				"<td>" + milkList[x].serving + "</td>" +
			"</tr>"
		);	
	} //end of milk loop

	//populating meat page
	for(x = 0; x < meatList.length; x++){
		$("#meServingSpecs").append(
			"<tr>" +
				"<td>" + meatList[x].gender + "</td>" +
				"<td>" + meatList[x].age + "</td>" +
				"<td>" + meatList[x].serving + "</td>" +
			"</tr>"
		);	
	} //end of meat loop

}//end of loadData function

// // Save data to localStorage
function updateForm(){
	localStorage.setItem(creator+"email", $("#email").val());
	localStorage.setItem(creator+"question", $("#question").val());

	foodGroup = $("input[name='fgList']:checked").attr("value");
	localStorage.setItem(creator+"foodGroupChoice", foodGroup);

	localStorage.setItem(creator+"canadian", $("#cdn").val());
	localStorage.setItem(creator+"senior", $("#senior").val());
	
	alert("Submit was successful - Jeanice Nguyen");

	$('#myForm').trigger("reset");

	$('#myPanel').empty()

	$("#myPanel").append(
		"<table>" +
			"<tr><th>FOOD GROUP</th><td>" + localStorage.getItem(creator+'foodGroupChoice') + "</td></tr>" + 
			"<tr><th>QUESTION</th><td>" + localStorage.getItem(creator+'question') + "</td></tr>" +
			"<tr><th>EMAIL</th><td>" + localStorage.getItem(creator+'email') + "</td></tr>" + 
			"<tr><th>CANADIAN CITIZEN</th><td>" + localStorage.getItem(creator+'canadian') + "</td></tr>" + 
			"<tr><th>SENIOR CITIZEN</th><td>" + localStorage.getItem(creator+'senior') + "</td></tr>" + 
		"</table>"
		); //end of append panel 
	return false;
}

