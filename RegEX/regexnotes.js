let re;
//Literal Chars
re = /hello/; //case sensitive
re = /hello/i; //case insensitive

//Metacharacter symbols
re = /^h/i; // must start with h
re = / world$/i // must end with world
re = /^hello$/i // must start and end with hello
re = /h.llo/i; // matches any one character eg hello, hillo. however heello will fail
re = /h*llo/i // matches 0 or more times eg heeello willnow work
re = /gre?a?y/i; // Optional character, meaning a or ey are optional. grey, gray, greay, graey and gry will pass but groy will fail
re = /gre?a?y\?/i // escape character escapes the ? so it is not treated as part of the expression, there for you now search for the ? as part of the text you are looking for eg geay? with a question mark