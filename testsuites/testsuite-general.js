
/*
	Test Scenario
	
	Description:
*/
casper.start( '_URL_' )
.then(function(){
	phantomcss.screenshot('body', 'Site - home');
});