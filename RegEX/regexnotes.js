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

// Brackets [] - Character Sets
re = /gr[ae]y/i; //Must be an a or e so grey, gray, graey , greay work. BUT this time gry does not work
re = /[GF]ray/i; // Must be a Gg or Ff
re = /[^GF]ray/i; // must match anything except for Gg or Ff
re = /^[GF]ray/i; // must match start with Gg or Ff
re = /[A-Z]ray/; //must match any uppercase letter
re = /^[A-Z]ray/; //starting character must match any uppercase letter
re = /[a-z]ray/; //Match any lowercase charater
re = /[A-Za-z]ray/; // match any letter
re = /[0-9][0-9]ray/; // First 2 must match any digit eg 20ray passes 9ray wont
re = /[0-9]ray/; // First 2 must match any digit eg 10ray passes 8ray passes

// Braces {} - Quantifiers
re = /Hel{2}o/i; // l must occur exactly {2} times there for hello is fine but helo is not
re = /Hel{2,4}o/i // there must be 2, 3 or 4 ls following each other hello, helllo, hellllo are fine but helo and helllllo are wrong
re = /Hel{2,}0/i // the l must occur atleast 2 times

//Parenthesis () - Grouping
re = /[0-9]m{2}/ // 5mm, 6mm is accepted
re = /([0-9]m){2}/ // 7m8m, is accepted 0mm is not accepted
re = /^([0-9]m){3}$/ // 7m8m3m, has to be exactly number letter 3times

// Shorthand character classes
re =/\w/; // Word character - alphanumeric or _
re = /\w/; // One or more word characters (has to be a letter, number or underscore. Other special cars will not match)
re = /\W/; // Anthing but a letter number or underscore
re = /\W+/; // Anthing but a letter number or underscore
re = /\d/; // Matches any digit 0-9 match
re = /\d+/; // Matches any digit 0-9 match and will macth all of them so it must all be numbers
re = /\D/; // Matches non digits, so a number at the beginning will fail
re = /\D+/; // Matches non digits, so a number found will fail
re = /\s/; // Matches white space character ' ' works ' ' works '' does not work
re = /\D/; // Matches non white space character ' ' does not work ' ' does not work '' does work
re = /Mpi/i; // Matches Mpilo, Mpilo Pillz etc
re = /Mpi\b/i; // Word boundary Matches Mpilo, Karabo Mpi  etc, will only match Mpi at the end

//Assertions
re = /t(?=a)/; //Match t only if it is followed by a eg Nikita will match so will take as will eitabaffo
re = /t(?!a)/; //NOT Match t only if it is followed by a eg Nikita will NOT match so will take as will eitabaffo