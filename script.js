// SDG script
	function w3_open() 
	{
	 		document.getElementById("mySidebar").style.display = "block";
	}

	function w3_close() 
	{
			document.getElementById("mySidebar").style.display = "none";
	}

	function sdg1text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 1 - No Poverty";
			document.getElementById("sdgtitle").innerHTML = "Kayaba School - Mukuru, 2014";
			document.getElementById("sdgtext").innerHTML = "A project within Kayaba School to empower parents of children by financing 2 parents to sewing school & providing material and sewing machine. Another 2, we financed their charcoal business. We then built accommodation for the school which they rented out to provide the school with a means to finance themselves outside of school fees (which can be intermittent)";
	}

	function sdg2text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 2 - Zero Hunger";
			document.getElementById("sdgtitle").innerHTML = "Kayaba School - Mukuru, 2014,2015,2016,2017<br> FRANK School - Ngando, 2015";
			document.getElementById("sdgtext").innerHTML = "We financed a lunchtime feeding program within the schools. For some of the 250+ students in each school, this would be the only meal that they have for the day. ";
	}

	function sdg3text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 3 - Good Health and Well-being";
			document.getElementById("sdgtitle").innerHTML = "Safari Doctors - Lamu, 2017, 2018 <br> Project Healthy and Happy - Nairobi, 2014, 2016, 2017, 2018";
			document.getElementById("sdgtext").innerHTML = "In the Lamu islands, notable health-care is only available in the mainland and thus for the islanders marooned by the ocean, the Safari Doctor's monthly visit for consultation, diagnosis and dispensation of medicine by medical volunteers makes a huge difference to the communities. We provided medical volunteers.<br> In Project Healthy and Happy, we ran medical check-ups, diagnosis and treatment for 1000+ students across primary and secondary schools. We also donated fully equipped first aid kits to each school.";
	}
	
	function sdg4text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 4 - Quality Education";
			document.getElementById("sdgtitle").innerHTML = " Chari Project - Kwale, 2017 to present<br> From Kibera with Love - Kibra, 2015-present<br> Kayaba School - Mukuru, 2014-present<br> FRANK SCHOOL 2015,2016";
			document.getElementById("sdgtext").innerHTML = "We provided 5 volunteer teacher assistants every two month cycles in the various schools, thereby increasing the teacher to student ratio and increasing overall performance. <br>We sponsor a girl in Kwale, from a public school which was setting her back educationally to a private school in which she is excelling to date.<br>In Kibra, the quality of education in the community schools (that are affordable to most) is wanting. From Kibera with Love sponsors children to various private schools and provides after school tuition. The students are currently excelling in their studies and to university.";
	}
	
	function sdg5text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 5 - Gender Equality";
			document.getElementById("sdgtitle").innerHTML = "Women empowerment centre - Mathare 2017, Makuyu Empowerment Centre - Makuyu 2016";
			document.getElementById("sdgtext").innerHTML = "In Mathare, a community based Organization known as community transformers helps the vulnerable in the slums particularly women. We helped to build a children's daycare which would bring an income for the women involved<br>In Makuyu we purchased a 100 seater tent for a women's group which they can use for their own meetings and rent it out for events which then earns them an income";
	}
	
	function sdg6text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 6 - Clean Water and Sanitation";
			document.getElementById("sdgtitle").innerHTML = "Kayaba School - Mukuru, 2014, Frank School - Ngando, 2015";
			document.getElementById("sdgtext").innerHTML = "Illness and diseases contribute a big deal to shocks that trap the poor in a vicious (poverty) cycle. We bought 5000 litre water tanks and chlorine for the schools. We also installed washing sinks and provided soap for hand-washing which reduces communicable diseases";
	}
	
	function sdg8text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 8 - Decent work and Economic Growth ";
			document.getElementById("sdgtitle").innerHTML = "Community centre Mathare, 2017";
			document.getElementById("sdgtext").innerHTML = "We built and equipped a day-care centre for women working in Mathare";
	}
	
	function sdg12text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 12 - Responsible Consumption and Production ";
			document.getElementById("sdgtitle").innerHTML = "9 Billion Lives - Nairobi, 2018<br>Project Carbon Food Credit - Nairobi, 2015 ";
			document.getElementById("sdgtext").innerHTML = "I participated in a two day food waste hackathon organized by 9 Billion Lives.This involved coming up with ideas and eventually a business plan along the food value chain.<br> In Project Carbon Food Credit, the aim was to reduce food waste by restaurants and supermarkets by redirecting the food to the needy";
	}
	
	function sdg15text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 15 - Life on Land ";
			document.getElementById("sdgtitle").innerHTML = "Rhino Charge, 2017, 2018, 2019";
			document.getElementById("sdgtext").innerHTML = "The Rhino Charge is an annual off-road motorsport competition held in Kenya in which entrants are required to visit a number of points (Guard Posts) while travelling the shortest possible distance across difficult, trackless terrain, where speed is not a necessity.<br>For over 25 years Rhino Ark has been raising funds for the building and maintenance of an electrified fence that encircles nearly 400 km of the Aberdare ecosystem. The fence is a vital management tool for ensuring the ecosystem's long-term integrity. In 2010 Rhino Ark announced a formal commitment to support conservation of other mountain forest ecosystems in Kenya, starting with Mount Kenya and Mount Mau Eburu. These new initiatives are undertaken in addition to the long term commitment to the Aberdares.";
	}
	
	function sdg17text() 
	{ 
			document.getElementById("sdgname").innerHTML = "SDG 17 - Partnerships for the Goals";
			document.getElementById("sdgtitle").innerHTML = "AIESEC in Kenya, 2014 to 2018";
			document.getElementById("sdgtext").innerHTML = "I worked within AIESEC in Kenya for 5 years, formulating and enacting partnerships. I eventually worked as the National director for incoming exchange in 2017-2018";
	}

// modal script
	function openModal() {
	  document.getElementById('myModal').style.display = "block";
	}

	function closeModal() {
	  document.getElementById('myModal').style.display = "none";
	}

	var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}

	function currentDiv(n) {
	  showDivs(slideIndex = n);
	}

	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("demo");
	  var captionText = document.getElementById("caption");
	  if (n > x.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
	  }
	  x[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " w3-opacity-off";
	  captionText.innerHTML = dots[slideIndex-1].alt;
	}