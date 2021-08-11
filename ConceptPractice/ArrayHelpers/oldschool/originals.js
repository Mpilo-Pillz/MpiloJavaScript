myArr = []

//the first arg of splice is where th action syarts provide index
//second arr is number of tings to move
myArr.splice(0, 1)
//add new item
myArr.splice(1, 0, 'The new second item'); //index to start (1) number to remove(0), replacewith ('the second item') 
myArr.splice(2, 1, 'The replace second item'); //index to start (1) number to remove(1), replacewith ('the second item') 