//alert(data[0]["rows"][3][4]); //data[everything]["rows"][index][data on class]

// This will be for gathering the names from the data file
function getCsciName(index){
    return data[0]["rows"][index][0];
}

//Get the Short Hand Name
function getShortName(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] == '.'){
            return i;
        }
    }
}

function createShortName(str){
    let i = getShortName(str);
    let newStr = "";
    for(let j = 0; j < i; j++){
        newStr += str[j];
    }
    return newStr;
}

//Get the Rest of the Name
function createClassName(str){
    let i = getShortName(str) + 2;
    let newStr = "";
    for(i; i < str.length; i++){
        newStr += str[i];
    }
    return newStr;
}

// Gathers units from data file
function getUnits(index){
    return data[0]["rows"][index][1];
}

// Gathers the semester they are usually offered in
function getOfferedIn(index){
    return data[0]["rows"][index][2];
}

// Gathers any additional information related to the course
function getAdditionalInfo(index){
    return data[0]["rows"][index][3];
}

// Gathers the description of the class
function getDescription(index){
    return data[0]["rows"][index][4];
}

function getCsciSyllabus(index){
    return data[0]["rows"][index][5];
}