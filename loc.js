var div = document.getElementById("location");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        div.innerHTML = "The Browser Does not Support Geolocation";
    }
}

function showPosition(position) {
    $.post('saver.php', { 'lat': position.coords.latitude, 'lng': position.coords.longitude }, function (res) {
        console.log(res);
    });
}
getLocation();
