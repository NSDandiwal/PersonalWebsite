function calculateDateDiff( date1, date2 ) {
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
};

function totalExp() {
    var firstJob = calculateDateDiff(new Date(), new Date(2015, 2, 2));
    var secondJob = calculateDateDiff(new Date(2014, 10, 31), new Date(2014, 06, 02));
    var thirdJob = calculateDateDiff(new Date(2013, 6, 7), new Date(2012, 2, 6));
    var total =  (firstJob + secondJob + thirdJob)/365;
    document.getElementById('total-years').innerHTML = total.toFixed(1);
};

window.onload = function () {
    totalExp();
};

/****Test Waypoint.js***/
var waypoint = new Waypoint({
  element: document.getElementById('sec-exp'),
  handler: function() {
    notify('Basic waypoint triggered')
  }
})