def find_shortest_string_recursive(arr)
  if arr.length === 1
    return arr[0];
  elsif arr[0].length > arr[1].length
    arr.slice!(0)
    return find_shortest_string_recursive(arr)
  else 
    arr.slice!(1)
    return find_shortest_string_recursive(arr)
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string_recursive(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string_recursive(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string_recursive(['flower', 'juniper', 'lily', 'dandelion'])

  # Don't forget to add your own!
  puts

  puts "Expecting: 'Ron'"
  puts "=>", find_shortest_string_recursive(['ReBecca', 'Groot', 'Ron', 'Arya'])

  puts

  puts "Expecting: 'Maine"
  puts "=>", find_shortest_string_recursive(['Mississippi', 'Maine', 'Montana', 'Maryland'])

end

# Please add your pseudocode to this file
=begin
- Base case: 
  Return the lone element when arr is length 1 or has been reduced to length 1 by recursive calls.
- Remove first element of array if longer than the second element.
- Remove the second element of array if not shorter than the first element.
=end

# And a written explanation of your solution
=begin
If the array has one element, return that element. Otherwise, compare the lengths of the first and second element and remove the one that's longer with a preference for the first occurring until the array is reduced to one element.
=end
