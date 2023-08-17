/* This is the example of window */

window.alert("This is learnvern");
alert("This is learnVern again");

// <!--  Example of alert -->

function message() {
  alert("This is LearnVern");
}

// <!--  Example of confirm -->
function message1() {
  var temp = confirm("Are you Sure??");

  if (temp == true) {
    alert("the value is true");
  } else {
    alert("the value is false");
  }
}

// <!--  Example of prompt -->
function message2() {
  var temp1 = prompt("Whats is your age?");
  alert("users age is : " + temp1);
}

// <!--  Example of Open -->
function message3() {
  var temp2 = open(
    "https://my.newtonschool.co/course/augybj9bee3q/details?course-hash=88v2rxm2qknh&tab=course&activityTypeTab=assignment&filter_page=3"
  );
  // alert("users age is : "+temp1);
}

// <!--  Example of setTimeOut -->
function message4() {
  setTimeout(function () {
    alert("this is Rani");
  }, 3000);
}

// <!--  Example of close -->
function message5() {
  close();
}

/* This is the example of History */

function goBack() {
  history.back();
}

function goForward() {
  history.forward();
}
