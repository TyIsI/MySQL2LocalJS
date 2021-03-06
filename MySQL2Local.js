/*
 * Copyright 2014, Tycho (Ty) Eggen
 */
function MySQL2Local( timestamp ) {
	// Split the MySQL timestamp
	var t = timestamp.split(/[- :]/);

	// Initialize new Date variable
	var d = new Date();

	// Import UTC parts
	d.setUTCFullYear( t[0] );
	d.setUTCMonth( t[1] - 1 );
	d.setUTCDate( t[2] );
	d.setUTCHours( t[3] );
	d.setUTCMinutes( t[4] );
	d.setUTCSeconds( t[5] );

	// Get variables and pad with 0 if it's only 1 character, increase month by 1
	var month = d.getMonth() + 1;
	if( month.toString().length == 1 ) { month = "0" + month; }
	var days = d.getDate();
	if( days.toString().length == 1 ) { days = "0" + days; }
	var hours = d.getHours();
	if( hours.toString().length == 1 ) { hours = "0" + hours; }
	var minutes = d.getMinutes();
	if( minutes.toString().length == 1 ) { minutes = "0" + minutes; }
	var seconds = d.getSeconds();
	if( seconds.toString().length == 1 ) { seconds = "0" + seconds; }
	// Return combined string
	return d.getFullYear() + "-" + month + "-" + days + " " + hours + ":" + minutes + ":" + seconds;
}
