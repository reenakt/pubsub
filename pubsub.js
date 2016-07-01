"use strict";

( function(){


var observer = {

Subscribe: function(callback){
	this.subscribers[this.subscribers.length] = callback;
},
unsubscribe: function(callback){
	for (var i =0; i<this.subscribers.length;i++){
		if(this.subscribers[i]===callback){
			(this.subscribers.splice(i,1));
		}
	}
},

publish: function (massage) {
	for(var i=0;i<this.subscribers.length;i++){
		if(typeof this.subscribers[i]==='function'){

     this.subscribers[i](massage);

	}
}

},
//turns an object into publisher

make: function(o) { 
for(var i in this) {
o[i] = this[i];
o.subscribers = [];
}
}
};
//create some publisher
var blogger = {

writeBlogPost:function(){

	var content = 'Today is' + new Date();

	this.publish(content);
}

};

var la_times = {
newIssue: function() {
	var paper = 'Every one is working on pub sub';

	this.publish(paper);
}

};

// turning object into publisher

observer.make(blogger);
observer.make(la_times);




var john ={
 read: function(massage) {

 	console.log('I just read that ' + massage)
 }
};


var alex ={
 gossip: function(massage) {

 	console.log(' Good to know that ' + massage)
 }
};




blogger.Subscribe(john.read);

blogger.Subscribe(alex.gossip);


blogger.writeBlogPost();

blogger.unsubscribe(alex.gossip);

blogger.writeBlogPost();

la_times.Subscribe(alex.gossip);

la_times.newIssue();

debugger;

})();
