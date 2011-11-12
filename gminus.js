var eles = document.getElementsByTagName( 'link' )
var i, l;
for ( i = 0, l = eles.length; i < l; i++ ) {
	if ( eles[i].rel === 'shortcut icon' ) {
		var head = document.getElementsByTagName( 'head' )[0];
		var new_link = document.createElement( 'link' );
		new_link.rel = 'shortcut icon';
		new_link.type = 'image/x-icon';
		new_link.href = 'https://ssl.gstatic.com/s2/oz/images/favicon.ico';
		head.removeChild( eles[i] );
		head.appendChild( new_link );
	}
}
