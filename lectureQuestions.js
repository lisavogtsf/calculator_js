// why can't I search for puppies within results?

var puppies = document.getElementsByTagName("img")
// undefined
puppies[0]
// <img id=​"_bapw-icon" style=​"border:​0 !important;​display:​inline !important;​vertical-align:​middle !important;​padding-right:​5px !important;​" src=​"http:​/​/​c.betrad.com/​pub/​icon1.png">​

puppies[5]

// <img style=​"display:​ block;​ margin-left:​ auto;​ margin-right:​ auto;​" src=​"http:​/​/​cdn.sheknows.com/​articles/​2013/​04/​Photo_1.jpg" alt=​"Heart melting puppies 1" width=​"600" height=​"338">​

var puppiesOnly = [];
for (var i = 0; i < puppies.length; i++) {
  if (puppies[i].search("*puppies*") === 0){
    puppiesOnly.push(puppies[i]); 
  }
}

// X TypeError: undefined is not a function


var puppiesOnly = [];
for (var i = 5; i < 10; i++) {
    puppiesOnly.push(puppies[i]); 
}
// 5

puppiesOnly
// [
// <img style=​"display:​ block;​ margin-left:​ auto;​ margin-right:​ auto;​" src=​"http:​/​/​cdn.sheknows.com/​articles/​2013/​04/​Photo_1.jpg" alt=​"Heart melting puppies 1" width=​"600" height=​"338">​
// , 
// <img style=​"display:​ block;​ margin-left:​ auto;​ margin-right:​ auto;​" src=​"http:​/​/​cdn.sheknows.com/​articles/​2013/​04/​Puppy_2.jpg" alt=​"Heart melting puppies 2" width=​"533" height=​"400">​
// , 
// <img style=​"display:​ block;​ margin-left:​ auto;​ margin-right:​ auto;​" src=​"http:​/​/​cdn.sheknows.com/​articles/​2013/​04/​Puppy_3.jpg" alt=​"Heart melting puppies 3" width=​"520" height=​"400">​
// , 
// <img style=​"display:​ block;​ margin-left:​ auto;​ margin-right:​ auto;​" src=​"http:​/​/​cdn.sheknows.com/​articles/​2013/​04/​Puppy_4.jpg" alt=​"Heart melting puppies 4" width=​"400" height=​"436">​
// , 
// <img style=​"display:​ block;​ margin-left:​ auto;​ margin-right:​ auto;​" src=​"http:​/​/​cdn.sheknows.com/​articles/​2013/​05/​Puppy_5.jpg" alt=​"Heart melting puppies 5" width=​"398" height=​"562">​
// ]


// 3.) Go to this wiki and grab all the elements with class name toctext 
// and use that to grab the corresponding sections in the article.

// still don't understand this, how do I get to the next step
// and grab text in the article?

var toc = document.getElementsByClassName("toctext")
// undefined

toc
// [
// <span class=​"toctext">​Legacy DOM​</span>​
// , 
// <span class=​"toctext">​Intermediate DOM​</span>​
// , 
// <span class=​"toctext">​Standardization​</span>​
// , 
// <span class=​"toctext">​Applications​</span>​
// , 
// <span class=​"toctext">​Web browsers​</span>​
// , 
// <span class=​"toctext">​Implementations​</span>​
// , 
// <span class=​"toctext">​Layout engines​</span>​
// , 
// <span class=​"toctext">​Libraries​</span>​
// , 
// <span class=​"toctext">​See also​</span>​
// , 
// <span class=​"toctext">​Sources​</span>​
// , 
// <span class=​"toctext">​References​</span>​
// , 
// <span class=​"toctext">​External links​</span>​
// ]






















