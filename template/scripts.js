//These will let us move through all pages
let classIndex = 0;
let profIndex = 0;


let allCSCINames = [];
for(let i = 0; i < data[0]["rows"].length; i++){
    allCSCINames.push(data[0]["rows"][i][0]);
}
for(let i = 0; i < nameProfArr.length; i++){
    allCSCINames.push(nameProfArr[i]);
}

//This is the auto complete search bar functions. It takes an array and will help auto fill the info based on input
function autocomplete(inp, arr) {
	/*the autocomplete function takes two arguments,
	the text field element and an array of possible autocompleted values:*/
	var currentFocus;
	/*execute a function when someone writes in the text field:*/
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		/*close any already open lists of autocompleted values*/
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		/*create a DIV element that will contain the items (values):*/
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		/*append the DIV element as a child of the autocomplete container:*/
		this.parentNode.appendChild(a);
		/*for each item in the array...*/
		for (i = 0; i < arr.length; i++) {
			/*check if the item starts with the same letters as the text field value:*/
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				/*create a DIV element for each matching element:*/
				b = document.createElement("DIV");
				/*make the matching letters bold:*/
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				/*insert a input field that will hold the current array item's value:*/
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				/*execute a function when someone clicks on the item value (DIV element):*/
					b.addEventListener("click", function(e) {
					/*insert the value for the autocomplete text field:*/
					inp.value = this.getElementsByTagName("input")[0].value;
					/*close the list of autocompleted values,
					(or any other open lists of autocompleted values:*/
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});

	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
			/*If the arrow DOWN key is pressed,
			increase the currentFocus variable:*/
			currentFocus++;
			/*and and make the current item more visible:*/
			addActive(x);
			} else if (e.keyCode == 38) { //up
			/*If the arrow UP key is pressed,
			decrease the currentFocus variable:*/
			currentFocus--;
			/*and and make the current item more visible:*/
			addActive(x);
			} else if (e.keyCode == 13) {
			/*If the ENTER key is pressed, prevent the form from being submitted,*/
			e.preventDefault();
			if (currentFocus > -1) {
				/*and simulate a click on the "active" item:*/
				if (x) x[currentFocus].click();
			}
		}
	});

	function addActive(x) {
		/*a function to classify an item as "active":*/
		if (!x) return false;
		/*start by removing the "active" class on all items:*/
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		/*add class "autocomplete-active":*/
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		/*a function to remove the "active" class from all autocomplete items:*/
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	function closeAllLists(elmnt) {
		/*close all autocomplete lists in the document,
		except the one passed as an argument:*/
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
  	/*execute a function when someone clicks somewhere else in the document:*/
  	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
  	});
}


//This will display our about us page dynamically. Auto starts with Eric
let aboutUsIndex = "Eric";

function deleteAllAboutPerson(){
	let bod = document.getElementById("aboutPerson");
	if(typeof(bod) != 'undefined' && bod != null){
		let name = document.getElementById("AboutUsName");
		let role = document.getElementById("AboutUsRole");
		let email = document.getElementById("AboutUsEmail");
		let pic2 = document.getElementById("AboutUsPic2");
		let quote = document.getElementById("AboutUsQuote");
		let Contributions = document.getElementById("AboutUsContributions");
		let bod2 = document.getElementById("aboutCons");

		name.remove();
		role.remove();
		email.remove();
		pic2.remove();
		quote.remove();
		Contributions.innerHTML = '';
		Contributions.remove();
		bod.innerHTML = '';
		bod.remove();
		bod2.innerHTML = '';
		bod2.remove();
	}
}

function displayAboutPerson(){
	deleteAllAboutPerson();
	let bod = document.getElementById("fakeGrid");
		let aboutPerson = document.createElement("div");
			aboutPerson.id = "aboutPerson";
			let name = document.createElement('h1');
				name.appendChild(document.createTextNode(aboutUsIndex));
				name.id = "AboutUsName";
			let role = document.createElement('p');
				role.appendChild(document.createTextNode("Role: " + aboutUsData[aboutUsIndex]["Role"]));
				role.id = "AboutUsRole";
			let email = document.createElement('p');
				email.appendChild(document.createTextNode("Email: " + aboutUsData[aboutUsIndex]["Email"]));
				email.id = "AboutUsEmail";
			let pic2 = document.createElement('img');
				pic2.src = aboutUsData[aboutUsIndex]["Pic2"];
				pic2.id = "AboutUsPic2";
			let quote = document.createElement('p');
				quote.appendChild(document.createTextNode("Quote: " + aboutUsData[aboutUsIndex]["Quote"]));
				quote.id = "AboutUsQuote";
		aboutPerson.appendChild(name);
		aboutPerson.appendChild(pic2);
		aboutPerson.appendChild(email);
		aboutPerson.appendChild(role);
		aboutPerson.appendChild(quote);

	let conList = document.createElement("div");
		conList.id = "aboutCons";
		let contr = document.createElement('h1');
			contr.appendChild(document.createTextNode("Contributions:"));
		let Contributions = document.createElement('ul');
			Contributions.id = "AboutUsContributions";
			for(let i = 0; i < aboutUsData[aboutUsIndex]["Contributions"].length; i++){
				let li = document.createElement('li');
					li.id = "contributionList";
					li.appendChild(document.createTextNode(aboutUsData[aboutUsIndex]["Contributions"][i]));
					Contributions.appendChild(li);
			}
		conList.appendChild(contr);
		conList.appendChild(Contributions);
	bod.appendChild(aboutPerson);
	bod.appendChild(conList);
}

function deleteAll(){
	let bod = document.getElementById("container");
	bod.innerHTML = '';
}


function aboutUs(){
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	deleteAll();
	let bod = document.getElementById("container");
		let tempContainer = document.createElement('div');
			tempContainer.id = "fakeGrid";
		let newDiv = document.createElement('div');
			newDiv.className = "aboutUsPicOne";
			newDiv.style.width = "100px"
			let ericImg1 = document.createElement('img');
				ericImg1.src = aboutUsData["Eric"]["Pic1"];
				ericImg1.id = "aboutUsPic1"
				ericImg1.onclick = function () {
					aboutUsIndex = "Eric";
					displayAboutPerson();
				};
			let gurdevImg1 = document.createElement('img');
				gurdevImg1.src = aboutUsData["Gurdev"]["Pic1"];
				gurdevImg1.id = "aboutUsPic1"
				gurdevImg1.onclick = function () {
					aboutUsIndex = "Gurdev";
					displayAboutPerson();
				};
			let JosephImg1 = document.createElement('img');
				JosephImg1.src = aboutUsData["Joseph"]["Pic1"];
				JosephImg1.id = "aboutUsPic1"
				JosephImg1.onclick = function () {
					aboutUsIndex = "Joseph";
					displayAboutPerson();
				};
			let JonathanImg1 = document.createElement('img');
				JonathanImg1.src = aboutUsData["Jonathan"]["Pic1"];
				JonathanImg1.id = "aboutUsPic1"
				JonathanImg1.onclick = function () {
					aboutUsIndex = "Jonathan";
					displayAboutPerson();
				};
			let romeoImg1 = document.createElement('img');
				romeoImg1.src = aboutUsData["Romeo"]["Pic1"];
				romeoImg1.id = "aboutUsPic1"
				romeoImg1.onclick = function () {
					aboutUsIndex = "Romeo";
					displayAboutPerson();
				};
		newDiv.appendChild(ericImg1);
		newDiv.appendChild(gurdevImg1);
		newDiv.appendChild(JosephImg1);
		newDiv.appendChild(JonathanImg1);
		newDiv.appendChild(romeoImg1);
		tempContainer.appendChild(newDiv)
	bod.appendChild(tempContainer);
	displayAboutPerson();
}

function deleteDisplayCurrentClass(){
	let bod = document.getElementById("lowerBodyClasses");
	if(typeof(bod) != 'undefined' && bod != null){
		bod.innerHTML = '';
	}
}

function deleteDisplayCurrentProf(){
	let bod = document.getElementById("lowerBodProfs");
	if(typeof(bod) != 'undefined' && bod != null){
		bod.innerHTML = '';
	}
}

let lowerBodClasses = document.createElement('div');
lowerBodClasses.id = "lowerBodyClasses";
lowerBodClasses.style.minHeight = "50vh";
lowerBodClasses.style.height = "auto";
let lowerBodProfs = document.createElement('div');
lowerBodProfs.id = "lowerBodProfs";
lowerBodProfs.style.minHeight = "50vh";
lowerBodProfs.style.height = "auto";


function displayProfInfo() {
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	let newProf = document.createElement('div');
		newProf.id = "professor";
		newProf.className = "tabcontent";

	let newH3F = document.createElement('h3');
		newH3F.appendChild(document.createTextNode(getProfDepartment(profIndex)));
	newProf.appendChild(newH3F);

	let newH3A = document.createElement('p');
		newH3A.appendChild(document.createTextNode("Staff/Faculty Role: " + getProfRole(profIndex)));
	newProf.appendChild(newH3A);

	let newH3B = document.createElement('p');
		newH3B.appendChild(document.createTextNode("Desk Phone Number: " + getProfDeskPhone(profIndex)));
	newProf.appendChild(newH3B);

	let newH3C = document.createElement('p');
		newH3C.appendChild(document.createTextNode("Department Phone Number: " + getProfDepartMentPhone(profIndex)));
	newProf.appendChild(newH3C);

	let newH3D = document.createElement('p');
		newH3D.appendChild(document.createTextNode("Email: " + getProfEmail(profIndex)));
	newProf.appendChild(newH3D);

	let newH3E = document.createElement('p');
		newH3E.appendChild(document.createTextNode("Office Location: " + getProfOfficeLoc(profIndex)));
	newProf.appendChild(newH3E);

	let newH3G = document.createElement('p');
		newH3G.appendChild(document.createTextNode("Mail Stop Location: " + getProfMailStop(profIndex)));
	newProf.appendChild(newH3G);

	lowerBodProfs.appendChild(newProf);
}

function displaySyllabusClass() {
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	let newEmbSyll = document.createElement('embed');
		newEmbSyll.src = getCsciSyllabus(classIndex);
	if (newEmbSyll.src.substring(newEmbSyll.src.length-9, newEmbSyll.src.length) != "undefined") {
		let newSyll = document.createElement('div');
			newSyll.id = "syllabus";
			newSyll.className = "tabcontent";
				newEmbSyll.style.width = "100%";
				newEmbSyll.style.height = "800px";
				newEmbSyll.style.alignContent = "center";
			newSyll.appendChild(newEmbSyll);
		lowerBodClasses.appendChild(newSyll);
	}
	else {
		let newSyll = document.createElement('div');
			newSyll.id = "syllabus";
			newSyll.className = "tabcontent";
			let unavailable = document.createElement('p');
			unavailable.appendChild(document.createTextNode("Syllabus unavailable at this time"));
			newSyll.appendChild(unavailable);
			lowerBodClasses.appendChild(newSyll);
	}
}

function displaySyllabusProf() {
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	let newSyll = document.createElement('div');
		newSyll.id = "syllabus";
		newSyll.className = "tabcontent";
	let newPSyll = document.createElement('embed');
		//newPSyll.src = "SyllabusData\Syllabus CSCI 166 - Principles of Artificial Intelligence - Fall 2022.pdf";
	newSyll.appendChild(newPSyll);
	//<embed src="file_name.pdf" width="800px" height="2100px" />
	lowerBodProfs.appendChild(newSyll);
}


function displayClassInfoClass(){
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	let classUnits = document.createElement('p');
		classUnits.id = "classDescript";
		classUnits.appendChild(document.createTextNode(getUnits(classIndex)));

	let classOffered = document.createElement('p');
		classOffered.id = "classDescript";
		if(getOfferedIn(classIndex) == ""){
			classOffered.appendChild(document.createTextNode("Only Offered Occasionally"));
		}
		else{
			classOffered.appendChild(document.createTextNode("Typically Offered in: " + getOfferedIn(classIndex)));
		}

	let classAddInfo = document.createElement('p');
		classAddInfo.id = "classDescript";
		classAddInfo.appendChild(document.createTextNode("Additional Information: " + getAdditionalInfo(classIndex)));

	let classDescript = document.createElement('p');
		classDescript.id = "classDescript";
		classDescript.appendChild(document.createTextNode("Description: " + getDescription(classIndex)));

	lowerBodClasses.appendChild(classUnits);
	lowerBodClasses.appendChild(classOffered);
	lowerBodClasses.appendChild(classAddInfo);
	if(getAdditionalInfo(classIndex) == ""){
		classAddInfo.remove();
	}
	lowerBodClasses.appendChild(classDescript);
}

function displayClassesProfs(){
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	let newDesc = document.createElement('div');
		newDesc.id = "description";
		newDesc.className = "tabcontent";
		let list = getCsciList(profIndex);
		for(let i = 0; i < list.length; i++){
			let p = document.createElement('p');
			p.className = "PartOfClassList";
			p.onclick = function () {
				for (let j = 0; j < data[0]["rows"].length; j++) {
					if (list[i] == data[0]["rows"][j][0]) {
						classIndex = j;
						displayClassInfoClass();
						loadClassTemplate();
						break;
					}
				}
			};
			p.appendChild(document.createTextNode(list[i]));
			newDesc.appendChild(p);
		}
	lowerBodProfs.appendChild(newDesc);
}

function displayAdditionalLinksClass(){
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	let newLink = document.createElement('div');
		newLink.id = "addLinks";
		newLink.className = "tabcontent";

		// let list = getCsciLinks(profIndex)
		// for(let i = 0; i < list.length; i++){
		// 	let a = document.createElement('a');
		// 	a.appendChild(document.createTextNode(list[i]));
		// 	a.src = list[i];
		// 	newLink.appendChild(a);
		// }
	lowerBodClasses.appendChild(newLink);
}

function displayAdditionalLinksProf(){
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	let newLink = document.createElement('div');
		newLink.id = "addLinks";
		newLink.className = "tabcontent";
		let newList = document.createElement('ul')
		let list = getCsciLinks(profIndex)
		for(let i = 0; i < list.length; i++){
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.appendChild(document.createTextNode(list[i]));
			a.href = list[i];
			a.target = "_blank";
			li.appendChild(a);
			newList.appendChild(li);
		}
		newLink.appendChild(newList);
	lowerBodProfs.appendChild(newLink);
}


function loadClassTemplate(){
	deleteAll();
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	let bod = document.getElementById("container");

	//Start of flex-container
	let flexContainer = document.createElement('div');
		flexContainer.className = "flex-container";

		//Start of tab
		let tab = document.createElement('div');
			tab.className = "tab";
			let tablink1 = document.createElement('button');
				tablink1.className = "tablinks";
				tablink1.onclick = displayClassInfoClass;
				tablink1.appendChild(document.createTextNode("Class Description"));

			let tablink2 = document.createElement('button');
				tablink2.className = "tablinks";
				tablink2.onclick = displaySyllabusClass;
				tablink2.appendChild(document.createTextNode("Syllabus"));

			let tablink3 = document.createElement('button');
				tablink3.className = "tablinks";
				tablink3.onclick = displayAdditionalLinksClass;
				tablink3.appendChild(document.createTextNode("Additional Links"));

			tab.appendChild(tablink1);
			tab.appendChild(tablink2);
			tab.appendChild(tablink3);
		//End of tab

		 //Start of classInfo
		let classInfo = document.createElement('div');
			classInfo.id = "classInfo";
			let flexContainerRow = document.createElement('div'); //Start of flexContainerRow
				flexContainerRow.className = "flex-containerRow";
				let classTitle = document.createElement('div');
					let temp1H1 = document.createElement('h1');
						temp1H1.appendChild(document.createTextNode(createShortName(data[0]["rows"][classIndex][0])))
					classTitle.className = "classTitle";
					classTitle.appendChild(temp1H1);
				let classTitle2 = document.createElement('div');
					let temp2H1 = document.createElement('h1');
						temp2H1.appendChild(document.createTextNode(createClassName(data[0]["rows"][classIndex][0])))
					classTitle2.className = "classTitle2";
					classTitle2.appendChild(temp2H1);
				flexContainerRow.appendChild(classTitle);
				flexContainerRow.appendChild(classTitle2);
			classInfo.appendChild(flexContainerRow);
		//End of classInfo
		flexContainer.appendChild(tab);
		flexContainer.appendChild(classInfo);
		flexContainer.appendChild(lowerBodClasses);
	//End of flex-container
	bod.appendChild(flexContainer);
}

function loadProfTemplate(){
	deleteAll();
	displayProfInfo();
	let container = document.getElementById("container");

	let bod = document.createElement("div");
		bod.className = "flex-container";
		bod.id = "flex-container";

		let newTabBar = document.createElement('div');
			newTabBar.className = "tab";
			newTabBar.style.backgroundColor = "#13284c";
			let profButton = document.createElement('button');
				profButton.className = "profLinks";
				profButton.onclick = displayProfInfo;
				profButton.value = "Professor Information";
				profButton.appendChild(document.createTextNode("Professor Information"));
			let descButton = document.createElement('button');
				descButton.className = "profLinks";
				descButton.onclick = displayClassesProfs;
				descButton.value = "Class List";
				descButton.appendChild(document.createTextNode("Class List"));
			// let syllButton = document.createElement('button');
			// 	syllButton.className = "profLinks";
			// 	syllButton.onclick = displaySyllabusProf;
			// 	syllButton.value = "Syllabus";
			// 	syllButton.appendChild(document.createTextNode("Syllabus"));
			let linkButton = document.createElement('button');
				linkButton.className = "profLinks";
				linkButton.onclick = displayAdditionalLinksProf;
				linkButton.value = "Additional Links";
				linkButton.appendChild(document.createTextNode("Additional Links"));
			newTabBar.appendChild(profButton);
			newTabBar.appendChild(descButton);
			//newTabBar.appendChild(syllButton);
			newTabBar.appendChild(linkButton);
		bod.appendChild(newTabBar);


		let newContent = document.createElement('div');
			newContent.className = "tabContent";
			newContent.id = "professor";
			let newParent = document.createElement('div');
				newParent.className = "parent";
				let newImg = document.createElement('img');
					newImg.src = csciProfImages[profIndex];
					newImg.className = "upload-icon";
				newParent.appendChild(newImg);
			newContent.appendChild(newParent);
		bod.appendChild(newContent);

		let newH1 = document.createElement('h1');
			newH1.appendChild(document.createTextNode(nameProfArr[profIndex]));
			newH1.style.alignContent = "center";
		bod.appendChild(newH1);

		bod.appendChild(lowerBodProfs);
	container.appendChild(bod);
}


function findSearch() {
	let searchInput = document.getElementById("searchBar").value;
	let i = 0
	let max = 0;
	if (data[0]["rows"].length > nameProfArr.length) {
		max = data[0]["rows"].length;
	}
	else {
		max = nameProfArr.length;
	}
	for (i; i < max; i++) {
		if (searchInput == data[0]["rows"][i][0]) {
			classIndex = i;
			displayClassInfoClass();
			loadClassTemplate();
			break;
		}
		if (searchInput == nameProfArr[i]) {
			profIndex = i;
			displayProfInfo();
			loadProfTemplate();
			break;
		}
	}

	if (i == max) {
		alert("Search Not Found!");
	}
}






//Faculty Page creation and onclick events
function displayFacultyPage(){
	deleteDisplayCurrentClass();
	deleteDisplayCurrentProf();
	deleteAll();
	let bod = document.getElementById("container");

	//Start of flex-container
	let flexContainer = document.createElement('div');
		flexContainer.className = "flex-container";

		let pageTitle = document.createElement('h1');
			pageTitle.id = "pageTitle";
			pageTitle.appendChild(document.createTextNode("Fresno State - Computer Science Faculty"));
		flexContainer.appendChild(pageTitle);

		let facultyTable = document.createElement('table');
			facultyTable.id = "faculty";
			let thead = document.createElement('thead');
				let th1 = document.createElement('th');
					th1.appendChild(document.createTextNode("Instructor"));
				let th2 = document.createElement('th');
					th2.appendChild(document.createTextNode("Professor Name"));
				let th3 = document.createElement('th');
					th3.appendChild(document.createTextNode("Faculty Title"));
				let th4 = document.createElement('th');
					th4.appendChild(document.createTextNode("Contact Information"));
			thead.appendChild(th1);
			thead.appendChild(th2);
			thead.appendChild(th3);
			thead.appendChild(th4);
		facultyTable.appendChild(thead);

		for(let i = 0; i < nameProfArr.length; i++){
			let tr = document.createElement('tr');
				tr.onclick = function (){
					profIndex = i;
					loadProfTemplate();
				};
				let tdImg = document.createElement('td');
					if(csciProfImages[i] == "N/A"){
						tdImg.appendChild(document.createTextNode("Image N/A"))
						tdImg.style.paddingTop = "95px";
						tdImg.style.paddingBottom = "95px";
					}
					else{
						let tempImg = document.createElement('img');
						tempImg.src = csciProfImages[i];
						tempImg.alt = "Statistics for player " + i+1;
						tempImg.style.width = "150px";
						tempImg.style.height = "180px";
						tdImg.appendChild(tempImg);
					}

				let tdName = document.createElement('td');
					tdName.appendChild(document.createTextNode(nameProfArr[i]));
				let tdFacultyRole = document.createElement('td');
					tdFacultyRole.appendChild(document.createTextNode(roles[i]));
				let tdContact = document.createElement('td');
					tdContact.innerHTML = emailAdd[i] + "<br>" + officeLoc[i] + "<br>";

			tr.appendChild(tdImg);
			tr.appendChild(tdName);
			tr.appendChild(tdFacultyRole);
			tr.appendChild(tdContact);
			facultyTable.appendChild(tr);
		}

		bod.appendChild(facultyTable);
}











//Loading A-Z Pages for Departments
let departMentPageBody = document.createElement('div');
departMentPageBody.id = "tabDepartmentContent";
departMentPageBody.className = "tabDepartmentContent";

function deleteScrollLinks(){
	let bod = document.getElementById("tabDepartmentContent");
	if(typeof(bod) != 'undefined' && bod != null){
		bod.innerHTML = '';
	}
}

//Function to load in the department Page
function loadDepartmentAtoZ(){
    deleteDisplayCurrentClass();
    deleteDisplayCurrentProf();
	deleteScrollLinks();
    deleteAll();
    let bod = document.getElementById("container");

    //Start of flex-container
    let flexContainer = document.createElement('div');
        flexContainer.className = "flex-containerAtoZ";

        let flexTab = document.createElement('div');
            flexTab.className = "flexTab";
        for(let i = 0; i < 26; i++){
            let newBtn = document.createElement('button');
            newBtn.className = "scrollLinks";
            newBtn.onclick = function(){
                departMentPageBody.innerHTML = "";
                    for(let j = 0; j < departmentNames[0][String.fromCharCode(i+65)].length; j++){
                        let dep = document.createElement('h3');
                        dep.appendChild(document.createTextNode(departmentNames[0][String.fromCharCode(i+65)][j]));
                        departMentPageBody.appendChild(dep);
						if(String.fromCharCode(i+65) == 'C'){
							for(let k = 0; k < data[0]["rows"].length; k++){
								let p = document.createElement('p');
								p.appendChild(document.createTextNode(data[0]["rows"][k][0]));
								p.onclick = function () {
									for (let j = 0; j < data[0]["rows"].length; j++) {
										if (p.innerHTML == data[0]["rows"][j][0]) {
											classIndex = j;
											displayClassInfoClass();
											loadClassTemplate();
											break;
										}
									}
								};
								departMentPageBody.appendChild(p);
							}
						}
                    }
                flexContainer.appendChild(departMentPageBody);
            };
            newBtn.appendChild(document.createTextNode(String.fromCharCode(i+65)));
            flexTab.appendChild(newBtn);
        }
        departMentPageBody.innerHTML = "";
		for(let j = 0; j < departmentNames[0]['A'].length; j++){
			let dep = document.createElement('h3');
			dep.appendChild(document.createTextNode(departmentNames[0]['A'][j]));
			departMentPageBody.appendChild(dep);
		}
        flexContainer.appendChild(flexTab);
        flexContainer.appendChild(departMentPageBody);
    bod.appendChild(flexContainer);
}
function loadData(table,info){
	var temp;
	var url ="data.php?table="+table+"&serach="+info+"&column=Name";
	fetch(url)
	.then(result => result.json())
	.then((data) => {
		temp = data;
		//console.log(temp);	
		return pushInfo(JSON.parse(temp));
		})
	.catch(error => {
		console.log("DataBase Down");
		});
	
}

function pushInfo(data){
	return data;
}
