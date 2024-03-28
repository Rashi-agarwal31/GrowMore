function ShowLoginForm(){
	
	SetTitle("Login");

	ShowHideForm("LoginFrom","Show");
	ShowHideForm("RegistrationFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");

	ActiveInactiveBtn("ShowLoginBtn","Active");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");

	ShowHideFromSwitchBtn("Show");
};

function ShowRegistrationForm(){

	SetTitle("Sign Up");

	ShowHideForm("RegistrationFrom","Show");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Active");

	ShowHideFromSwitchBtn("Show");
};

function ShowForgotPasswordForm() {
	
	SetTitle ("Set New Password");

	ShowHideForm("RegistrationFrom","Hide");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Show");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");
	ShowHideFromSwitchBtn("Hide");
}

function SetTitle(Title){
	var formTitle = document.getElementById('formTitle');
	formTitle.innerHTML = Title;
}

function ShowHideForm(FormID,ShowOrHide){
	var Form = document.getElementById(FormID);

	if(ShowOrHide == "Show"){
		Form.style.display = 'block';
	}else{
		Form.style.display = 'none';
	}
}

function ActiveInactiveBtn(ButtonID,ActiveORInactive) {
	
	var Button = document.getElementById(ButtonID);

	if(ActiveORInactive == "Active"){
		Button.classList.add('active');
	}else{
		Button.classList.remove('active');
	}
}

function ShowHideFromSwitchBtn(ShowOrHide) {
	var formSwitchBtn = document.getElementById('formSwitchBtn');
	if(ShowOrHide == 'Show'){
		formSwitchBtn.style.display = '';
	}else{
		formSwitchBtn.style.display = 'none';
	}
}


var swiper = new Swiper(".swiper.product-slider", {
	slidesPerView: 1,
	spaceBetween: 10,
	
	breakpoints: {
	  750: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  1000: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1500: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	},
  });


  var swiper = new Swiper(".swiper.review-slider", {
	slidesPerView: 1,
	spaceBetween: 10,
	
	breakpoints: {
	  750: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  1000: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1500: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	},
  });
  
// end
