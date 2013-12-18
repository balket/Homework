$(document).ready(function() {
	var getWeather = function(coords, callback) {
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=Laurel,MD';
		$.ajax({
			dataType: "jsonp",
			url: url,
			jsonCallback: 'jsonp',
			data: {
				lat: coords[0],
				lon: coords[1]
			},
			cache: false,
			success: function(data) {
				callback(data);
			}
		});
	}

	var teams = [{
			Teams: "Laurel, Maryland",
			Long: -0.800299,
			Lat: 51.6306,
			Weather: "http://api.openweathermap.org/data/2.5/weather?q=Laurel,MD"
		}

	];

	$("#btn382").click(function() {

		for (var team in teams) {
			var obj = teams[team];
			(function(team) {
				coords = [team.Lat, team.Long]
				getWeather(coords, function(data) {
					var html = [];
					html.push('<div>')
					html.push('City: ', team.Teams, ', ');
					html.push('Lat: ', data.coord.lat, ', ');
					html.push('Lon: ', data.coord.lon, ', ');
					html.push('Weather: ', data.weather[0].description);
					html.push('</div>')
					$("#div381").append(html.join('')).css("background-color", "orange");
				});
			}(obj));
		}

	});

});