for(var i = 1; i <= 5; i++){
     
    var pattern = '';
    for(var k =1;k<=5-i;k++){
        pattern+=' ';
    }
    for(var j = 0; j != (2 * i - 1); j++){
      pattern += '*';
    }
    
    
    console.log(pattern);
}

