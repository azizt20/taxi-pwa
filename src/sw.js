self.addEventListener('sync', function(event) {
    if (event.tag == 'myFirstSync') {
        event.waitUntil(doSomeStuff());
    }
});

function doSomeStuff(){
   alert('dsfsf')
}