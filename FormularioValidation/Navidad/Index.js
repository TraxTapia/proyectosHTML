$(document).ready(function () {
  var stateObject = {
    California: {
      Monterey: ["Salinas", "Gonzales"],
      Alameda: ["Berkeley"],
    },
    Oregon: {
      Douglas: ["Roseburg", "Winston"],
    },
  };
  var stateSel = document.getElementById("stateSel");
  var countySel = document.getElementById("countySel");
  var citySel = document.getElementById("citySel");
  for (var state in stateObject) {
    stateSel.options[stateSel.options.length] = new Option(state, state);
  }
  stateSel.onchange = function () {
    countySel.length = 1; // remove all options bar first
    citySel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) {
      countySel.options[0].text = "Please select state first";
      citySel.options[0].text = "Please select county first";
      return; // done
    }
    countySel.options[0].text = "Please select county";
    for (var county in stateObject[this.value]) {
      countySel.options[countySel.options.length] = new Option(county, county);
    }
    if (countySel.options.length == 2) {
      countySel.selectedIndex = 1;
      countySel.onchange();
    }
  };
  stateSel.onchange(); // reset in case page is reloaded
  countySel.onchange = function () {
    citySel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) {
      citySel.options[0].text = "Please select county first";
      return; // done
    }
    citySel.options[0].text = "Please select city";

    var cities = stateObject[stateSel.value][this.value];
    for (var i = 0; i < cities.length; i++) {
      citySel.options[citySel.options.length] = new Option(
        cities[i],
        cities[i]
      );
    }
    if (citySel.options.length == 2) {
      citySel.selectedIndex = 1;
      citySel.onchange();
    }
  };
});

function filtrar() {
  var state = $('[name="optone"]').find(":selected").index();

  if (state == 1) {
    $("#California").show();
    $("#Oregon").hide();
  } else if (state == 2) {
    $("#Oregon").show();
    $("#California").hide();
  } else {
    $("#California").hide();
    $("#Oregon").hide();
  }
  var country = $('[name="opttwo"]').find(":selected").index();
  var city = $('[name="optthree"]').find(":selected").index();
  alert(" state: " + state + " country: " + country + " city: " + city);
}
