require 'set'

def find_first_duplicate(arr)
  previous = Set.new([])

  arr.each do |x| 
    if previous.include?(x) 
      return x
    else
      previous.add(x)
    end
  end

  return -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([4])
  puts

  puts "Expecting: 2"
  puts "=>", find_first_duplicate([1, 2, 2, 3, 4])

  puts "Expecting: 23"
  puts "=>", find_first_duplicate([23, 2, 1, 3, 23, 2, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
- Loop thru each element, creating an array of previous elements in the array.
- If the array of previous elements includes the element at the current index, return it, if not, return -1.
=end

# And a written explanation of your solution
=begin
I need to return the first value that recurs, or if none do, -1.

I loop thru the array, checking with each iteration if the current element is in a set of previous elements. If it is it's returned. If not the function returns -1.
=end
