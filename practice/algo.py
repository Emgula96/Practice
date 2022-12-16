#hashmap
#iterate through 
#check and count
test = 'qweruiopdasfjk;lxcvnn'

def letterCount(string):
    letterMap = {}
    result = []
    for letter in string:
        #check if letter exists
        if letter not in letterMap:
            letterMap[letter] = 1
        else:
            #if its there +1
            letterMap[letter] = letterMap[letter] + 1
    #loop through and add things to result
    #reutrn as obejcts
    # for key, value in letterMap.items():
    #     result.append({"letter":key, "count":value})
    # return as string
    # for letter, count in letterMap.items():
    #     result.append((letter, count))
    result.append(letterMap)
    print(result)
    return result

letterCount(test)