jQuery(document).ready(function(){

var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Nedelja";
  weekday[1] = "Ponedeljak";
  weekday[2] = "Utorak";
  weekday[3] = "Sreda";
  weekday[4] = "Cetvrtak";
  weekday[5] = "Petak";
  weekday[6] = "Subota";

  var dan = weekday[d.getDay()] +  "&nbsp;&nbsp;&nbsp;"
                  + d.getHours() + ":"  
                  + d.getMinutes(); 

var month = new Array();
  month[0] = "Januar";
  month[1] = "Februar";
  month[2] = "Mart";
  month[3] = "April";
  month[4] = "Maj";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Avgust";
  month[8] = "Septembar";
  month[9] = "October";
  month[10] = "Novembar";
  month[11] = "Decembar";

  var d = new Date();
  var n = month[d.getMonth()];

var currentdate = new Date(); 
    var datetime = currentdate.getDate() + ".  "
                + n  + ".  " 
                + currentdate.getFullYear();


jQuery("#dan_u_nedelji").html(dan);
jQuery("#vreme").html(datetime);

    jQuery.get("https://api.openweathermap.org/data/2.5/weather?q=beograd&units=metric&lang=sr&appid=1a662b04aa49c64b2a212ba6ed82c60a",{

	},function(data,status){
         //var data = jQuery.parseJSON(data); 
     //   var data = JSON.stringify(data) ;     	
	        	var ime_grada = "";
	        	var slicica = "";
	        	var opis = "";
	        	var trenutna_temperatura = "";
	        	var maximalna_temperatura = "";
	        	var trenutni_osecaj = "";
	        	var pritisak_vazduha = "";
	        	var vlaznost_vazduha = "";
	        	
	       

            	var ime_grada = data.name;
            	var slicica = '<img src="http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png" class="weather-icon" />';
            	var opis = data.weather[0].description;
	            var trenutna_temperatura = data.main.temp;
	        	var maximalna_temperatura = data.main.temp_max;
	        	var trenutni_osecaj = data.main.feels_like;
	        	var pritisak_vazduha = data.main.pressure;
	        	var vlaznost_vazduha = data.main.humidity;

	         

               jQuery("#ime_grada").html(ime_grada);
               jQuery("#slicica").html(slicica);
               jQuery("#opis").html(opis);
               jQuery("#trenutna_temperatura").html(trenutna_temperatura);
               jQuery("#maximalna_temperatura").html(maximalna_temperatura);
               jQuery("#trenutni_osecaj").html(trenutni_osecaj);
               jQuery("#pritisak_vazduha").html(pritisak_vazduha);
               jQuery("#vlaznost_vazduha").html(vlaznost_vazduha);
	});











     jQuery("#select").change(function(){
     	var grad = jQuery("#select").val();
     	
     

	jQuery.get("https://api.openweathermap.org/data/2.5/weather?q="+ grad +"&units=metric&lang=sr&appid=1a662b04aa49c64b2a212ba6ed82c60a",{

	},function(data,status){
         //var data = jQuery.parseJSON(data); 
     //   var data = JSON.stringify(data) ;     	
	        	var ime_grada = "";
	        	var slicica = "";
	        	var opis = "";
	        	var trenutna_temperatura = "";
	        	var maximalna_temperatura = "";
	        	var trenutni_osecaj = "";
	        	var pritisak_vazduha = "";
	        	var vlaznost_vazduha = "";
	        	
	       

            	var ime_grada = data.name;
            	var slicica = '<img src="http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png" class="weather-icon" />';
            	var opis = data.weather[0].description;
	            var trenutna_temperatura = data.main.temp;
	        	var maximalna_temperatura = data.main.temp_max;
	        	var trenutni_osecaj = data.main.feels_like;
	        	var pritisak_vazduha = data.main.pressure;
	        	var vlaznost_vazduha = data.main.humidity;

	         

               jQuery("#ime_grada").html(ime_grada);
               jQuery("#slicica").html(slicica);
               jQuery("#opis").html(opis);
               jQuery("#trenutna_temperatura").html(trenutna_temperatura);
               jQuery("#maximalna_temperatura").html(maximalna_temperatura);
               jQuery("#trenutni_osecaj").html(trenutni_osecaj);
               jQuery("#pritisak_vazduha").html(pritisak_vazduha);
               jQuery("#vlaznost_vazduha").html(vlaznost_vazduha);
	})
  })
})