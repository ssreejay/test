
if (Prototype.BrowserFeatures.ElementExtensions) {
    var disablePrototypeJS = function (method, pluginsToDisable) {
        var handler = function (event) {
            event.target[method] = undefined;
            setTimeout(function () {
                delete event.target[method];
            }, 0);
        };
        pluginsToDisable.each(function (plugin) {
            jQuery(window).on(method + '.bs.' + plugin, handler);
        });
    },

    pluginsToDisable = ['collapse', 'dropdown', 'modal', 'tooltip', 'popover', 'tab'];
    disablePrototypeJS('show', pluginsToDisable);
    disablePrototypeJS('hide', pluginsToDisable);
}


jQuery(document).ready(function(){


	jQuery("[data-toggle='popover']").popover({placement:"top"}); 


	jQuery(document).keyup(function(e){if(e.which==13){checkAnswer();}});



}); //end document ready




function checkThis(){
	//var focused = jQuery(':focus');
	//alert(focused.attr("id"));
}



function checkAnswer(){

	var thisTxtBox="";
	var thisErroMsg="";
	var thisStorkPos="top";
	var correctCount=0;

	//line 1
	var smo_prod=jQuery("#smo_prod").val();
	var smo_unit=jQuery("#smo_unit").val();
	var smo_weeks=jQuery("#smo_weeks").val();
	var smo_totalhost=jQuery("#smo_totalhost").val();
	var smo_total=jQuery("#smo_total").val();

	//line 2
	var ht_prod=jQuery("#ht_prod").val();
	var ht_unit=jQuery("#ht_unit").val();
	var ht_weeks=jQuery("#ht_weeks").val();
	var ht_totalhost=jQuery("#ht_totalhost").val();
	var ht_total=jQuery("#ht_total").val();

	//line 3 - visits
	var smo_visits=jQuery("#smo_visits").val();
	var ht_visits=jQuery("#ht_visits").val();

	//line 4 - cer
	var smo_totalCER=jQuery("#smo_totalCER").val();
	var smo_visitsCER=jQuery("#smo_visitsCER").val();
	var smo_cer=jQuery("#smo_cer").val();

	//line 5 - cer
	var ht_totalCER=jQuery("#ht_totalCER").val();
	var ht_visitsCER=jQuery("#ht_visitsCER").val();
	var ht_cer=jQuery("#ht_cer").val();

	//line 6 - ecr
	var smo_totalECR=jQuery("#smo_totalECR").val();
	var smo_visitsECR=jQuery("#smo_visitsECR").val();
	var smo_ecr=jQuery("#smo_ecr").val();
	
	//line 7 - ecr
	var ht_totalECR=jQuery("#ht_totalECR").val();
	var ht_visitsECR=jQuery("#ht_visitsECR").val();
	var ht_ecr=jQuery("#ht_ecr").val();	
	
	







	// ------------------------------------------- Production Costs  ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_prod").hasClass("complete")){
		if(smo_prod=="1200.00"||smo_prod=="1200"||smo_prod=="1,200"||smo_prod=="1,200.00"||smo_prod=="$1200.00"||smo_prod=="$1200"||smo_prod=="$1,200"||smo_prod=="$1,200.00"){
			
			thisTxtBox=jQuery("#smo_prod");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_prod!=""){
				thisTxtBox=jQuery("#smo_prod");
				addTickCross(thisTxtBox,false);
				thisErroMsg="Incorrect. This is the total cost of production.";
			}
		}
	}

	// ------------------------------------------- Unit cost  ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_unit").hasClass("complete")){
		if(smo_unit=="300.00"||smo_unit=="300"||smo_unit=="$300.00"||smo_unit=="$300"){
			
			thisTxtBox=jQuery("#smo_unit");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_unit!=""){
				thisTxtBox=jQuery("#smo_unit");
				addTickCross(thisTxtBox,false);
				thisErroMsg="Incorrect. This is the cost of hosting per week.";
			}
		}
	}

	// ------------------------------------------- Number of weeks ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_weeks").hasClass("complete")){
		if(smo_weeks=="6"){
			thisTxtBox=jQuery("#smo_weeks");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_weeks!=""){
				thisTxtBox=jQuery("#smo_weeks");
				addTickCross(thisTxtBox,false);
				if(smo_weeks=="4"){
					thisErroMsg="Incorrect. You need to add the trial weeks as well.";
				}if(smo_weeks=="2"){
					thisErroMsg="Incorrect. The trial weeks need to be added to the total weeks for advertisment.";
				}else if(smo_weeks.indexOf(".")!=-1){
					thisErroMsg="Incorrect. There is no need for a decimal point here.";
				}else{
					thisErroMsg="Incorrect. You need to add the total weeks for advertisment to the trial weeks.";
				}
			}
		}
	}

	// ------------------------------------------- Total hosting cost ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_totalhost").hasClass("complete")){
		if(smo_totalhost=="1800.00"||smo_totalhost=="1800"||smo_totalhost=="1,800"||smo_totalhost=="1,800.00"||smo_totalhost=="$1800.00"||smo_totalhost=="$1800"||smo_totalhost=="$1,800"||smo_totalhost=="$1,800.00"||smo_totalhost=="=c3*d3"||smo_totalhost=="=d3*c3"){
			thisTxtBox=jQuery("#smo_totalhost");
			if(smo_totalhost=="=c3*d3"||smo_totalhost=="=d3*c3")thisTxtBox.val("1800.00");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_totalhost!=""){
				thisTxtBox=jQuery("#smo_totalhost");
				addTickCross(thisTxtBox,false);
				thisErroMsg="Incorrect. You need to multiply the unit cost by the number of weeks.";
			}
		}
	}

	// ------------------------------------------- Total Costs  ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_total").hasClass("complete")){
		if(smo_total=="3000.00"||smo_total=="3000"||smo_total=="3,000"||smo_total=="3,000.00"||smo_total=="$3000.00"||smo_total=="$3000"||smo_total=="$3,000"||smo_total=="$3,000.00"||smo_total=="=b3+e3"||smo_total=="=e3+b3"){
			
			thisTxtBox=jQuery("#smo_total");
			if(smo_total=="=b3+e3"||smo_total=="=e3+b3")thisTxtBox.val("3000.00");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_total!=""){
				thisTxtBox=jQuery("#smo_total");
				addTickCross(thisTxtBox,false);
				if(smo_total=="1200.00"||smo_total=="1200"||smo_total=="1,200"||smo_total=="1,200.00"||smo_total=="$1200.00"||smo_total=="$1200"||smo_total=="$1,200"||smo_total=="$1,200.00"){
					thisErroMsg="Incorrect. Did you take this figure directly from the cost of production row? Make sure you multiply the cost of hosting by the number of weeks the advertisment will run, and then add that to the cost of production.";
				}else{
					thisErroMsg="Incorrect. Make sure you multiply the cost of hosting by the number of weeks the advertisment will run, and then add that to the cost of production.";
				}
			}
		}
	}











	// ------------------------------------------- Production Costs  ------------------------------------------- 
	//hi There
	if(!jQuery("#ht_prod").hasClass("complete")){
		if(ht_prod=="2000.00"||ht_prod=="2000"||ht_prod=="2,000"||ht_prod=="2,000.00"||ht_prod=="$2000.00"||ht_prod=="$2000"||ht_prod=="$2,000"||ht_prod=="$2,000.00"){
			
			thisTxtBox=jQuery("#ht_prod");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_prod!=""){
				thisTxtBox=jQuery("#ht_prod");
				thisStorkPos="bottom";
				addTickCross(thisTxtBox,false);
				thisErroMsg="Incorrect. This is the total cost of production.";
			}
		}
	}


	// ------------------------------------------- Unit cost  ------------------------------------------- 
	//hi There
	if(!jQuery("#ht_unit").hasClass("complete")){
		if(ht_unit=="200.00"||ht_unit=="200"||ht_unit=="$200.00"||ht_unit=="$200"){
			
			thisTxtBox=jQuery("#ht_unit");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_unit!=""){
				thisTxtBox=jQuery("#ht_unit");
				thisStorkPos="bottom";
				addTickCross(thisTxtBox,false);
				thisErroMsg="Incorrect. This is the cost of hosting per week.";
			}
		}
	}

	// ------------------------------------------- Number of weeks ------------------------------------------- 
	//hi There
	if(!jQuery("#ht_weeks").hasClass("complete")){
		if(ht_weeks=="6"){
			thisTxtBox=jQuery("#ht_weeks");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_weeks!=""){
				thisTxtBox=jQuery("#ht_weeks");
				addTickCross(thisTxtBox,false);
				thisStorkPos="bottom";
				if(ht_weeks=="4"){
					thisErroMsg="Incorrect. You need to add the trial weeks as well.";
				}if(ht_weeks=="2"){
					thisErroMsg="Incorrect. The trial weeks need to be added to the total weeks for advertisment.";
				}else if(ht_weeks.indexOf(".")!=-1){
					thisErroMsg="Incorrect. There is no need for a decimal point here.";
				}else{
					thisErroMsg="Incorrect. You need to add the total weeks for advertisment to the trial weeks.";
				}
			}
		}
	}


	// ------------------------------------------- Total hosting cost ------------------------------------------- 
	//hi There
	if(!jQuery("#ht_totalhost").hasClass("complete")){
		if(ht_totalhost=="1200.00"||ht_totalhost=="1200"||ht_totalhost=="1,200"||ht_totalhost=="1,200.00"||ht_totalhost=="$1200.00"||ht_totalhost=="$1200"||ht_totalhost=="$1,200"||ht_totalhost=="$1,200.00"||ht_totalhost=="=c4*d4"||ht_totalhost=="=d4*c4"){
			thisTxtBox=jQuery("#ht_totalhost");
			if(ht_totalhost=="=c4*d4"||ht_totalhost=="=d4*c4")thisTxtBox.val("1200.00");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_totalhost!=""){
				thisTxtBox=jQuery("#ht_totalhost");
				thisStorkPos="bottom";
				addTickCross(thisTxtBox,false);
				thisErroMsg="Incorrect. You need to multiply the unit cost by the number of weeks.";
			}
		}
	}
	
	// ------------------------------------------- Total Costs  ------------------------------------------- 
	//Hi There
	if(!jQuery("#ht_total").hasClass("complete")){
		if(ht_total=="3200.00"||ht_total=="3200"||ht_total=="3,200"||ht_total=="3,200.00"||ht_total=="$3200.00"||ht_total=="$3200"||ht_total=="$3,200"||ht_total=="$3,200.00"||ht_total=="=b4+e4"||ht_total=="=e4+b4"){
			thisTxtBox=jQuery("#ht_total");
			if(ht_total=="=b4+e4"||ht_total=="=e4+b4")thisTxtBox.val("3200.00");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_total!=""){
				thisTxtBox=jQuery("#ht_total");
				addTickCross(thisTxtBox,false);
				thisStorkPos="bottom";
				if(ht_total=="2000.00"||ht_total=="2000"||ht_total=="2,000"||ht_total=="2,000.00"||ht_total=="$2000.00"||ht_total=="$2000"||ht_total=="$2,000"||ht_total=="$2,000.00"){
					thisErroMsg="Incorrect. Did you take this figure directly from the cost of production row? Make sure you multiply the cost of hosting by the number of weeks the advertisment will run, and then add that to the cost of production.";
				}else{
					thisErroMsg="Incorrect. Make sure you multiply the cost of hosting by the number of weeks the advertisment will run, and then add that to the cost of production.";
				}	
			}
		}
	}


	







	// ------------------------------------------- Number of visits  ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_visits").hasClass("complete")){
		if(smo_visits=="40000"||smo_visits=="40,000"){
			thisTxtBox=jQuery("#smo_visits");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_visits!=""&&thisErroMsg==""){
				thisTxtBox=jQuery("#smo_visits");
				addTickCross(thisTxtBox,false);
				if(smo_visits=="60000"||smo_total=="60,000"){
					thisErroMsg="Incorrect. You have not prorated the number of expected visits. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else if(smo_visits.indexOf(".")!=-1){
					thisErroMsg="Incorrect. You cannot have a decimal point...there's no such thing as half a visit! You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else{
					thisErroMsg="Incorrect. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}
			}
		}
	}
	//Hi There
	if(!jQuery("#ht_visits").hasClass("complete")){
		if(ht_visits=="30000"||ht_visits=="30,000"){
			thisTxtBox=jQuery("#ht_visits");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_visits!=""&&thisErroMsg==""){
				thisTxtBox=jQuery("#ht_visits");
				addTickCross(thisTxtBox,false);
				thisStorkPos="bottom";
				if(ht_visits=="45000"||ht_visits=="45,000"){
					thisErroMsg="Incorrect. You have not prorated the number of expected visits. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else if(ht_visits.indexOf(".")!=-1){
					thisErroMsg="Incorrect. You cannot have a decimal point...there's no such thing as half a visit! You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else{
					thisErroMsg="Incorrect. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}
			}
		}	
	}










	// ------------------------------------------- Total Costs CER ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_totalCER").hasClass("complete")){
		if(smo_totalCER=="3000.00"||smo_totalCER=="3000"||smo_totalCER=="3,000"||smo_totalCER=="3,000.00"||smo_totalCER=="$3000.00"||smo_totalCER=="$3000"||smo_totalCER=="$3,000"||smo_totalCER=="$3,000.00"||smo_totalCER=="=f3"){
			
			thisTxtBox=jQuery("#smo_totalCER");
			if(smo_totalCER=="=f3")thisTxtBox.val("3000.00");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_totalCER!=""){
				thisTxtBox=jQuery("#smo_totalCER");
				addTickCross(thisTxtBox,false);
				if(smo_totalCER=="1200.00"||smo_totalCER=="1200"||smo_totalCER=="1,200"||smo_totalCER=="1,200.00"||smo_totalCER=="$1200.00"||smo_totalCER=="$1200"||smo_totalCER=="$1,200"||smo_totalCER=="$1,200.00"){
					thisErroMsg="Incorrect. Did you take this figure directly from the cost of production row? Make sure you multiply the the cost of hosting by the number weeks the advertisment will run, and then add that to the cost of production.";
				}else{
					thisErroMsg="Incorrect. Make sure you multiply the the cost of hosting by the number weeks the advertisment will run, and then add that to the cost of production.";
				}
			}
		}
	}

	// ------------------------------------------- Effectiveness CER ------------------------------------------- 
	//See Me Online
		if(!jQuery("#smo_visitsCER").hasClass("complete")){
		if(smo_visitsCER=="40000"||smo_visitsCER=="40,000"||smo_visitsCER=="=b7"){
			thisTxtBox=jQuery("#smo_visitsCER");
			if(smo_visitsCER=="=b7")thisTxtBox.val("40,000");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_visitsCER!=""&&thisErroMsg==""){
				thisTxtBox=jQuery("#smo_visitsCER");
				addTickCross(thisTxtBox,false);
				if(smo_visitsCER=="60000"||smo_total=="60,000"){
					thisErroMsg="Incorrect. You have not prorated the number of expected visits. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else if(smo_visitsCER.indexOf(".")!=-1){
					thisErroMsg="Incorrect. You cannot have a decimal point...there's no such thing as half a visit! You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else{
					thisErroMsg="Incorrect. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}
			}
		}
	}

	// ------------------------------------------- CER ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_cer").hasClass("complete")){
		if(smo_cer=="0.08"||smo_cer=="$0.08"||smo_cer==".08"||smo_cer=="=b11/c11"){
			thisTxtBox=jQuery("#smo_cer");
			if(smo_cer=="=b11/c11")thisTxtBox.val("0.08");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_cer!=""&&thisErroMsg==""){
				thisTxtBox=jQuery("#smo_cer");
				addTickCross(thisTxtBox,false);
				if(smo_cer=="13.33"||smo_cer=="$13.33"){
					thisErroMsg="Incorrect. You have mixed up the CER and the ECR. You need to divide the total cost by the number of visits expected.";
				}else if(smo_cer.substr(smo_cer.indexOf(".")+1).length>2){
					thisErroMsg="Incorrect. You need to divide the total cost by the number of visits expected, and then round the number up to the nearest integer.";
				}else{
					thisErroMsg="Incorrect. You need to divide the total cost by the number of visits expected.";
				}
			}
		}
	}










	// ------------------------------------------- Total Costs CER ------------------------------------------- 
	//Hi There
	if(!jQuery("#ht_totalCER").hasClass("complete")){
		if(ht_totalCER=="3200.00"||ht_totalCER=="3200"||ht_totalCER=="3,200"||ht_totalCER=="3,200.00"||ht_totalCER=="$3200.00"||ht_totalCER=="$3200"||ht_totalCER=="$3,200"||ht_totalCER=="$3,200.00"||ht_totalCER=="=f4"){
			thisTxtBox=jQuery("#ht_totalCER");
			if(ht_totalCER=="=f4")thisTxtBox.val("3200.00");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_totalCER!=""){
				thisTxtBox=jQuery("#ht_totalCER");
				addTickCross(thisTxtBox,false);
				thisStorkPos="bottom";
				if(ht_totalCER=="2000.00"||ht_totalCER=="2000"||ht_totalCER=="2,000"||ht_totalCER=="2,000.00"||ht_totalCER=="$2000.00"||ht_totalCER=="$2000"||ht_totalCER=="$2,000"||ht_totalCER=="$2,000.00"){
					thisErroMsg="Incorrect. Did you take this figure directly from the cost of production row? Make sure you multiply the the cost of hosting by the number weeks the advertisment will run, and then add that to the cost of production.";
				}else{
					thisErroMsg="Incorrect. Make sure you multiply the the cost of hosting by the number weeks the advertisment will run, and then add that to the cost of production.";
				}	
			}
		}
	}

	// ------------------------------------------- Effectiveness CER ------------------------------------------- 
	//Hi There
	if(!jQuery("#ht_visitsCER").hasClass("complete")){
		if(ht_visitsCER=="30000"||ht_visitsCER=="30,000"||ht_visitsCER=="=b8"){
			thisTxtBox=jQuery("#ht_visitsCER");
			if(ht_visitsCER=="=b8")thisTxtBox.val("30,000");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_visitsCER!=""&&thisErroMsg==""){
				thisTxtBox=jQuery("#ht_visits");
				addTickCross(thisTxtBox,false);
				thisStorkPos="bottom";
				if(ht_visitsCER=="45000"||ht_visitsCER=="45,000"){
					thisErroMsg="Incorrect. You have not prorated the number of expected visits. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else if(ht_visitsCER.indexOf(".")!=-1){
					thisErroMsg="Incorrect. You cannot have a decimal point...there's no such thing as half a visit! You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else{
					thisErroMsg="Incorrect. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}
			}
		}	
	}

	
	// ------------------------------------------- CER ------------------------------------------- 
	//Hi There
	if(!jQuery("#ht_cer").hasClass("complete")){
		if(ht_cer=="0.11"||ht_cer=="$0.11"||ht_cer==".11"||ht_cer=="=b12/c12"){
			thisTxtBox=jQuery("#ht_cer");
			if(ht_cer=="=b12/c12")thisTxtBox.val("0.11");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_cer!=""&&thisErroMsg==""){
				thisTxtBox=jQuery("#ht_cer");
				addTickCross(thisTxtBox,false);
				thisStorkPos="bottom";
				if(ht_cer=="9.38"||ht_cer=="$9.38"){
					thisErroMsg="Incorrect. You have mixed up the CER and the ECR. You need to divide the total cost by the number of visits expected.";
				}else if(ht_cer.substr(ht_cer.indexOf(".")+1).length>2){
					thisErroMsg="Incorrect. You need to divide the total cost by the number of visits expected, and then round the number to the nearest integer.";
				}else{
					thisErroMsg="Incorrect. You need to divide the total cost by the number of visits expected.";
				}
			}
		}	
	}
	








	// ------------------------------------------- Total Costs ECR ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_totalECR").hasClass("complete")){
		if(smo_totalECR=="3000.00"||smo_totalECR=="3000"||smo_totalECR=="3,000"||smo_totalECR=="3,000.00"||smo_totalECR=="$3000.00"||smo_totalECR=="$3000"||smo_totalECR=="$3,000"||smo_totalECR=="$3,000.00"||smo_totalECR=="=f3"){
			
			thisTxtBox=jQuery("#smo_totalECR");
			if(smo_totalECR=="=f3")thisTxtBox.val("3000.00");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_totalECR!=""){
				thisTxtBox=jQuery("#smo_totalECR");
				addTickCross(thisTxtBox,false);
				if(smo_totalECR=="1200.00"||smo_totalECR=="1200"||smo_totalECR=="1,200"||smo_totalECR=="1,200.00"||smo_totalECR=="$1200.00"||smo_totalECR=="$1200"||smo_totalECR=="$1,200"||smo_totalECR=="$1,200.00"){
					thisErroMsg="Incorrect. Did you take this figure directly from the cost of production row? Make sure you multiply the the cost of hosting by the number weeks the advertisment will run, and then add that to the cost of production.";
				}else{
					thisErroMsg="Incorrect. Make sure you multiply the the cost of hosting by the number weeks the advertisment will run, and then add that to the cost of production.";
				}
			}
		}
	}

	// ------------------------------------------- Effectiveness ECR ------------------------------------------- 
	//See Me Online
		if(!jQuery("#smo_visitsECR").hasClass("complete")){
		if(smo_visitsECR=="40000"||smo_visitsECR=="40,000"||smo_visitsECR=="=b7"){
			thisTxtBox=jQuery("#smo_visitsECR");
			if(smo_visitsECR=="=b7")thisTxtBox.val("40,000");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_visitsECR!=""&&thisErroMsg==""){
				thisTxtBox=jQuery("#smo_visitsECR");
				addTickCross(thisTxtBox,false);
				if(smo_visitsECR=="60000"||smo_visitsECR=="60,000"){
					thisErroMsg="Incorrect. You have not prorated the number of expected visits. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else if(smo_visitsECR.indexOf(".")!=-1){
					thisErroMsg="Incorrect. You cannot have a decimal point...there's no such thing as half a visit! You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else{
					thisErroMsg="Incorrect. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}
			}
		}
	}

	// ------------------------------------------- ECR ------------------------------------------- 
	//See Me Online
	if(!jQuery("#smo_ecr").hasClass("complete")){
		if(smo_ecr=="13.33"||smo_ecr=="$13.33"||smo_ecr=="=b15/c15"){
			thisTxtBox=jQuery("#smo_ecr");
			if(smo_ecr=="=b15/c15")thisTxtBox.val("13.33");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(smo_ecr!=""&&thisErroMsg==""){
				thisTxtBox=jQuery("#smo_ecr");
				addTickCross(thisTxtBox,false);
				if(smo_ecr=="0.08"||smo_ecr=="$0.08"||smo_ecr==".08"){
					thisErroMsg="Incorrect. You have mixed up the ECR and the CER. You need to divide the number of visits expected by total cost.";
				}else if(smo_ecr.substr(smo_ecr.indexOf(".")+1).length>2){
					thisErroMsg="Incorrect. You need to divide the number of visits expected by total cost, and then round the number to the nearest integer.";
				}else{
					thisErroMsg="Incorrect. You need to divide the number of visits expected by total cost.";
				}
			}
		}
	}







	// ------------------------------------------- Total Costs ECR ------------------------------------------- 
	//Hi There
	if(!jQuery("#ht_totalECR").hasClass("complete")){
		if(ht_totalECR=="3200.00"||ht_totalECR=="3200"||ht_totalECR=="3,200"||ht_totalECR=="3,200.00"||ht_totalECR=="$3200.00"||ht_totalECR=="$3200"||ht_totalECR=="$3,200"||ht_totalECR=="$3,200.00"||ht_totalECR=="=f4"){
			thisTxtBox=jQuery("#ht_totalECR");
			if(ht_totalECR=="=f4")thisTxtBox.val("3200.00");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_totalECR!=""){
				thisTxtBox=jQuery("#ht_totalECR");
				addTickCross(thisTxtBox,false);
				thisStorkPos="bottom";
				if(ht_totalECR=="2000.00"||ht_totalECR=="2000"||ht_totalECR=="2,000"||ht_totalECR=="2,000.00"||ht_totalECR=="$2000.00"||ht_totalECR=="$2000"||ht_totalECR=="$2,000"||ht_totalECR=="$2,000.00"){
					thisErroMsg="Incorrect. Did you take this figure directly from the cost of production row? Make sure you multiply the the cost of hosting by the number weeks the advertisment will run, and then add that to the cost of production.";
				}else{
					thisErroMsg="Incorrect. Make sure you multiply the the cost of hosting by the number weeks the advertisment will run, and then add that to the cost of production.";
				}	
			}
		}
	}



	// ------------------------------------------- Effectiveness ECR ------------------------------------------- 
	//Hi There
	if(!jQuery("#ht_visitsECR").hasClass("complete")){
		if(ht_visitsECR=="30000"||ht_visitsECR=="30,000"||ht_visitsECR=="=b8"){
			thisTxtBox=jQuery("#ht_visitsECR");
			if(ht_visitsECR=="=b8")thisTxtBox.val("30,000");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_visitsECR!=""&&thisErroMsg==""){
				thisTxtBox=jQuery("#ht_visitsECR");
				addTickCross(thisTxtBox,false);
				thisStorkPos="bottom";
				if(ht_visitsECR=="45000"||ht_visitsECR=="45,000"){
					thisErroMsg="Incorrect. You have not prorated the number of expected visits. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else if(ht_visitsCER.indexOf(".")!=-1){
					thisErroMsg="Incorrect. You cannot have a decimal point...there's no such thing as half a visit! You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}else{
					thisErroMsg="Incorrect. You need to divide the number by six and then multiply the result by four to get the correct proportion.";
				}
			}
		}	
	}

	// ------------------------------------------- ECR ------------------------------------------- 
	//Hi There
	if(!jQuery("#ht_ecr").hasClass("complete")){
		if(ht_ecr=="9.38"||ht_ecr=="$9.38"||ht_ecr=="=b16/c16"){
			thisTxtBox=jQuery("#ht_ecr");
			if(ht_ecr=="=b16/c16")thisTxtBox.val("9.38");
			addTickCross(thisTxtBox,true);
			correctCount++;
		}else{
			if(ht_ecr!=""&&thisErroMsg==""){
				thisStorkPos="bottom";
				thisTxtBox=jQuery("#ht_ecr");
				addTickCross(thisTxtBox,false);
				if(ht_ecr=="0.11"||ht_ecr=="$0.11"||ht_ecr==".11"){
					thisErroMsg="Incorrect. You have mixed up the ECR and the CER. You need to divide the number of visits expected by total cost.";
				}else if(ht_ecr.substr(ht_ecr.indexOf(".")+1).length>2){
					thisErroMsg="Incorrect. You need to divide the number of visits expected by total cost, and then round the number up to the nearest integer.";
				}else{
					thisErroMsg="Incorrect. You need to divide the number of visits expected by total cost.";
				}
			}
		}	
	}
	
	
	
	
	
	
	
	
	
	if(thisErroMsg!="")showErrorMsg(thisTxtBox,thisErroMsg,thisStorkPos);
	
	

}



function addTickCross(obj,bln){
	console.log("addTickCross");
	
	obj.parent().find(".fa").remove();
	if(bln){
		//correct
		obj.parent().append("<i class='fa fa-check fa-fw form-control-feedback'></i>");
		obj.attr("disabled","true");
		obj.addClass("complete");
		thisNextInput(obj);
		hideErrorMsg();
	}else{
		//incorrect
		obj.parent().append("<i class='fa fa-times fa-fw form-control-feedback'></i>");
	}
}

function thisNextInput(obj){
	
	var objIndex=obj.index(":text");
    var nextInputBox=jQuery(":text:eq("+(objIndex+1)+")");
    if(nextInputBox.length==0){
		//console.log("finished");
		jQuery("#q2").show();
		jQuery("input[name=choice]").on("click",checkQ2);
	}
     nextInputBox.removeAttr("disabled").focus();
}


function checkQ2(){
	jQuery("input[name=choice]").attr("disabled","true");
	var checkedRdo=jQuery("input[name=choice]:checked").attr("id");
	if(checkedRdo=="choice2"){
		jQuery("#finalTxt").addClass("incorrectTxt");
		jQuery("#finalTxt").html("Incorrect");
	}
	jQuery("#final").show();
}


function showErrorMsg(obj,txt,stork){	

	//default to "top"
	jQuery("#errorMsg").css("top",obj.offset().top-84);
	jQuery("#errorMsg").css("left",obj.offset().left+obj.width()/2);
	
	

	if(stork=="bottom"){
		jQuery("#errorMsg").css("top",obj.offset().top-54);
	}
	
	jQuery("#errorMsg").data('bs.popover').options.content=txt;
	jQuery("#errorMsg").data('bs.popover').options.placement=stork;
	
	//console.log(obj.offset().top+" | "+obj.position().top+" | "+obj.height());
	
	
	jQuery("#errorMsg").popover("show");
}

function hideErrorMsg(){
	jQuery("#errorMsg").popover("hide");
}




