Asynchronous code is code that takes longer to execute

- usually code runs in sequence not at the same time, that is synchronous
- issues arise if the previous code takes longer as it will prevent all code from being executed until it completes

- we usualy offload tasks that take long to execute to the browser, and then send them back when they are done
- the browser needs a way to communicate back to the js code that the operation is complete. It uses a callback function for that

look at event addEventListener and setTimeOut. both take callbacks as the first argument

addEventListener('click', function () {
    instead of listening and waiting all day for a click to happen blocking other code
    we have a 'click' as the first argument and only ater click has been invloded then the callback function to runs on the right runs
})

setTimeOut(function {
    after 1000 miliseconds execute the code on the left
}, 1000)

THE EVENT LOOP HEPS US DEAL WITH ASYNC CODE AND callbacks


CODE -> JAVASCRIPT ENGINE INSIDE IT IS A 'stack' <- there is the broswer or node api

there is a messageque that lists the list of task that still need to be performed.

Teh event loop's job is to synchronise the Message Queue, Code, Stack and the tasks in the browser/nodejs

the event loop will wait untill the call stack is empty and push whatever is in the queue in it

this is swas still going on