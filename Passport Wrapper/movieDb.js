module.exports = {
	api_key:'d1747a754cb5a0a0e9aaa43004ad456d',//api key for movie db
	mongo_api_key:'mS1eukopD5Ulis8iu5qjc7ykx0YpsUYb',//api key for mongodb
	default_directory: "H:/Downloads", //default directory for lookup
	build_directory: function(arg1){
		var extension =["mkv","avi","mp4"];
		for(var e in extension){
			if(extension[e]!=arg1.split(".")[1]){
				console.log(arg1);
			}
		}
	},
	normalize_string : function(arg1){
		var dummy =arg1.replace(/\((.*?)\)/,"");//remove bracket
		var dummy2 = dummy.replace(/ \[(.*?)\]/,"");//remove square bracket
		var dummy3 = dummy2.replace(/\((.*?)\)/,"");//remove another bracket if its just one
		var dummy4 = dummy3.replace(/,.*/,"");//remove ','
		var dummy5 = dummy4.replace(/-/,""); //remove - in the movie title
		var str = dummy4.replace(/^\s+/, '');
   		 for (var i = str.length - 1; i >= 0; i--) {
        	if (/\S/.test(str.charAt(i))) {
            	str = str.substring(0, i + 1);
            break;
        	}
    	}
    	var dummy6 = str.replace(/\s\s/,"");
    	var dummy7 = dummy6.replace(/\s-\s/,"-");
  	return dummy7;
	}
	
};
