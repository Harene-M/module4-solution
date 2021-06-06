var names = ["Sri","Hari","Krish","Jay","joy"];
for(var i=0;i < names.length;i++){
  var e=names[i];
  if (e.charAt(0)=="J" || e.charAt(0)=="j"){
    console.log("Goodbye "+e);
  }
  else{
    console.log("Hello "+e);
  }
}
