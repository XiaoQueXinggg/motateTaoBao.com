<script text='text/javascript'> 
var a = 0;
function set(){
    var arr = []，
    for(var i=0;i<arguments.length;i++) {
	    if(!arguments[i] in arr) {
		console.log(arguments[i]);
             arr.push(arguments[i]);
		} 
	}
	console.log(arr)
}
</script>