var Ahmedabad = ["Daskroi", "Sanand", "Bavla", "Dholka", "Viramgam", "Maqndal", "Detroj-Rampura", "Dhandhuka", "Ranpur", "Barwala"];
var Amreli = ["Amreli", "Kunkavav Moti", "Babra", "Lathi", "Lilia", "Dhari", "Khambha", "Jafarabad", "Bagasara", "Rajula", "Savar Kundla", "Vadia"];

var Anand = ["Anand", "Aankslav", "Borshad", "Khambhat", "Petlad", "Shojtra", "Tarapur", "Umretha"] 

var Banaskantha =["Vadgam", "Danta", "Amirgadh", "Diyodhar", "Dhanera", "Tharad", "Deesa", "Vav", "Bhabhar", "Dantiwada", "Palanpur", "Kankrej"]

var Bharuch = ["Amod", "Ankleshwar", "Bharuch", "Hansot", "Jambusar", "Jhagadia", "Netrang", "Vagra", "Valia"]

 var Bhavnagar = ["Bhavnagar", "Botad", "Gadhada", "Gariadhar", "Ghogha", "Mahuva", "Palitana", "Sihor", "Talaja", "Umrala", "Vallabhipur"]

var Dahod =["Dahod", "Devgadbaria", "Dhanpur", "Fatepura", "Garbada", "jhalod", "limkheda"]
var Gandhinagar = ["Dehgam", "Mansa", "Gandhinagar", "Kalol", "Gojharia"]

var GirSomnath = ["Veraval", "Sutrapada", "Talala", "Una", "Kodinar and Gir Gadhada"]

var Jamnagar =[  "Jamnagar", "Bhanvad", "Dhrol", "Kalyanpur", "Dwarka", "Jam-jodhpur", "Jam-khambaliya", "Jodiya", "Kalavad", "Lalpur"]

var Junagadh  =[ "Junagadh", "Junagadh city", "Visvadar", "Bhensen", "Mendarada", "Kashod", "Mangrol", "Manavdar", "Vanthali",  "Maliya", "Talala"]

var Kheda  =[ "Balasinor", "Kapadvani", "Kathial", "Kheda", "Mahudha", "Matar", "Mehmedabad", "Nadiyad", "Thasra", "Virpur"]

var Kachchh  =[ "Kachchh", "Lakhapat", "Rapar", "Bhachau", "Bhuj", "Nakhatrana", "Abadasa", "Mandvi", "Anjar", "Gandhidham", "Mundra"]

var Mehsana  =[  "Becharaji", "Kadi", "Kheralu", "Mahesana", "Vadnagar", "Vijapur", "Visnagar", "Satlasana", "Jotana", "Gzaria", "Unjha"]

var Narmada  =[ "Dediapada", "Nandod", "Sagbara", "Tilakwada" ]

var Navsari =[ "Vansada", "Chikhli", "Gandevi", "Jalalpore", "Navsari", "Khergaam"]

var Patan =[ "Patan", "Siddhpur", "Chanasma", "Harij", "Sami", "Radhanpur and Sakul" ]

var Porbandar  =[ "Porbandar", "Ranavav", "Kutiyana" ]

var Rajkot =[ "Maliya", "Morbi", "Tankara", "Wankaner", "Paddhari", "Rajkot", "Lodhika", "Jam Kandorna", "Gondal", "Kotda Sanghani", "Jasdan", "Upleta", "Dhoraji", "Jetpur"]

var Sabarkantha =[ "Khedbrahma", "Vadali", "Vijaynagar", "Ider", "Bhiloda", "Himmatnagar", "Prantij", "Talod", "Bayad", "Dhansura", "Modasa", "Meghrej", "Malpur"]

var Surendranagar =[ "Chotila", "Chuda", "Dhrangdhra", "Halwad", "Lakhtar", "Limbdi", "Muli", "Sayla", "Wadhwan", "Patdi", "Thangadh" ]

var Surat   =[ "Choryasi", "Palsana", "Kamrez", "Bardoli", "Olpad", "Mangrol", "Mandvi", "Umerwada", "Mahua  and Surat city"]

var Tapi  =[  "Vyara", "Songadh", "Uchchal", "Nizar and Valod"]

var Vadodara  =[ "Savli", "Padra", "Vadodara", "Waghodia", "Karjan", "Sinor", "Dabhoi", "Sankheda", "Jetpur", "Pavi", "Naswadi", "Kwant"]

var Valsad  =[ "Valsad", "Pardi", "Dharampur", "Umergam", "Kaprada", "Vapi"] 


// $("#inputDistrict").change(function(){
    
  var DistrictSelected = $(this).val();
  console.log("selected"+DistrictSelected)
  var optionsList;
  var htmlString = "";

  switch (DistrictSelected) {
    case "Ahemdabad":
        optionsList = Ahmedabad;
        break;
    case "Amreli":
        optionsList = Amreli;
        break;
    case "Anand":
        optionsList = Anand;
        break;
    case "Banaskantha":
        optionsList = Banaskantha;
        break;
    case "Bharuch":
        optionsList = Bharuch;
        break;
    case "Bhavnagar":
        optionsList = Bhavnagar;
        break;
    case  "Dahod":
        optionsList = Dahod;
        break;
    case "Gandhinagar":
        optionsList = Gandhinagar;
        break;
    case "Gir Somnath":
        optionsList = GirSomnath;
        break;
    case "Jamnagar":
        optionsList = Jamnagar;
        break;
    case "Junagadh":
        optionsList = Junagadh;
        break;
    case  "Kheda":
        optionsList = Kheda;
        break;
    case "Kachchh":
        optionsList = Kachchh;
        break;
    case  "Mehsana":
        optionsList = Mehsana;
        break;
    case "Narmada":
        optionsList = Narmada;
        break;
    case  "Navsari":
        optionsList = Navsari;
        break;
    case  "Patan":
        optionsList = Patan;
        break;
    case "Porbandar":
        optionsList = Porbandar;
        break;
    case  "Rajkot":
        optionsList = Rajkot;
        break;
    case "Sabarkantha":
        optionsList = Sabarkantha;
        break;
    case  "Surendranagar":
        optionsList = Surendranagar;
        break;
    case "Surat":
        optionsList = Surat;
        break;
    case  "Tapi":
        optionsList = Tapi;
        break;
    case  "Vadodara":
        optionsList = Vadodara;
        break;
    case "Valsad":
        optionsList = Valsad ;
        break;
    
}


  for(var i = 0; i < optionsList.length; i++){
    htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
  }
  $("#inputTaluka").html(htmlString);

;


