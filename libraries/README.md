# RXJS NOTES
Input element -> Source Of Events (emits events overtime) = <strong>OBSERVABLE</strong>
Get Value through event object = <strong>OPERATOR</strong> 
Parse number out of value = <strong>OPERATOR</strong> 
inspect the number, throw error if it is not a number -> exit processing = <strong>OPERATOR</strong> 
hand off the numbers to something to consume it = <strong>OPERATOR</strong> 
function -> Processing pipeline (individual processing steps) = <strong>OPERATOR</strong> 
Operators can take in values and transform them or perform actions with them

All the above are referred to as pipes

- source of events is the observable
- it then emits events or values over time and they flow through a pipe or pile line
- operations may need to be performed on them over time by operators
- if there is an error the processing is complete and handed off to an error function
- if no error, the final value is handed off to some function to consume.
- the end functions are Observers

- Observable
- Pipe
- Operator
- Observer

We emit events we wan to do some processing on over time
They flow through out pipe
the pipe is made up of a series of different operators
Operators transform ot compute the values

### RXJS Major Operator Groups
- Transform - Take in a value, do some processing, return a new value
- Filtering - Modifies the flow of events in a pipe (group them together, pause thme, delete them)
- Creation - Creates a new Observable