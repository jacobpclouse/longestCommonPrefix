// longest common prefix (lcp)
// ie: flour, flavor, flow, fling -> 'fl' is the lcp
// if none, output empty string ""

// need to get length of individual components in the array 
// find the array component with the shortest length, that is the max possible lcp

// HOW DO YOU FIND THE LENGTH OF A SUBVALUE IN AN ARRAY? DO YOU CONVERT IT TO STRING?
// put in a check to make sure the input array is not empty and to set a skip flag if it is


function longestCommonPrefixFunc(inputArray) {

	// Getting Length of Array
	lengthArray = inputArray.lengthArray
	
	// Initializing Output Var
	longestCommonPrefixOutput = ""
	
	// Skip eval and return empty if array is empty
	if (lengthArray == 0) {
		console.log("Input array is empty!")
		longestCommonPrefixOutput = ""
		return longestCommonPrefixOutput
	}
	
	// Initializing Var to store length of shortest sub val
	// Initializing it to the length of the first value
	shortestSubValIndex = inputArray[0].length
	
	// Initializing Var to store shortest sub val
	shortestSubVal = ""
	
	
	
	// Looping through the array, finding variable with shortest length 
	for (i = 0; i < lengthArray; i++) {
		
		// grabbing length of current selected index
		currentVarInIndex = inputArray[i].length
		
		// setting new shortest length if currentVarInIndex is shorter
		if (currentVarInIndex < shortestSubValIndex) {
			shortestSubValIndex = currentVarInIndex
			
			// storing shortest sub val
			shortestSubVal = inputArray[i]
		}
	}
	
	
	
	// Initializing and Storing compare val (and modify if needed)
	prefixToCompare = shortestSubVal
	

	
	// Now we only have to compare values in shortest char to everything else
	for (j = 0; j < lengthArray; j++) {
	
		// Current length of prefix
		prefixToCompareLength = prefixToCompare.length	
	
		// getting length of selected sub element
		subElementLength = inputArray[j].length
		
		// if sub element is empty, exit out
		if (subElementLength == 0) {
			console.log("Input sub element is empty!")
			longestCommonPrefixOutput = ""
			return longestCommonPrefixOutput
		}
		
		// cut out same length of smallest val from element
		indexCutOut = inputArray[j].slice(0:prefixToCompareLength)
		
		
		// do while loop (while != or length not zero) 
		do {
		
			// grab current length of sub val
			prefixToCompareLength = prefixToCompare.length
			
			// remove last char from the current prefix
			prefixToCompare = prefixToCompare.slice(0,(prefixToCompareLength - 1))
			
			// getting current length of selected cut out
		    indexCutOutLength = indexCutOut.length
			
			// remove last char from the current cut out
			indexCutOut = indexCutOut.slice(0,(indexCutOutLength - 1))
			
		} while ((prefixToCompare != indexCutOut) || prefixToCompareLength > 1)
		
		
		// return prefix
		longestCommonPrefixOutput = prefix
		return longestCommonPrefixOutput

	}
}