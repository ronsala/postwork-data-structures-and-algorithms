def recursive_search(arr, target)
  if arr.count === 0
    return false
  end

   if arr[0] === target
    return true
   end

  arr.slice!(0)

  return recursive_search(arr, target)
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: true"
  puts "=>", recursive_search([1, 2, 3], 2)

  puts

  puts "Expecting: false"
  puts "=>", recursive_search([3, 2, 1], 4)

  puts

  # Don't forget to add your own!
  puts "Expecting: true"
  puts "=>", recursive_search(['lion', 'tiger', 'zebra'], 'zebra')

  puts

  puts "Expecting: false"
  puts "=>", recursive_search(['Harry', 'Ron'], 'Luna')
end

# Please add your pseudocode to this file
=begin
- Base cases: Target found or last element checked without match.
- Each recursion, compare the first element to the target then, if they match, return true, otherwise, remove it from the array.
- If the array is empty or reduced to one element without a match, return false.
=end

# And a written explanation of your solution
=begin
Function checks one element of array against target each time it's called. If, during an execution, a conditional is not satisfied to return true or false, the first element is removed from the array and the function called again.
=end
