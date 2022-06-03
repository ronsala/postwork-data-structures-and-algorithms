def selection_sort(arr)
  output = []

  while arr.length > 0 do
    min = arr.min
    i = arr.index(min)
    output << min
    arr.delete_at(i)
  end

  output
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!
  puts "Expecting: []"
  print "=> "
  print selection_sort([])

  puts

  puts "Expecting: [-1, 2, 5, 5]"
  print "=> "
  print selection_sort([5, -1, 5, 2])

  puts

  # BENCHMARK HERE, you can print the average runtime
  start_time = Time.now
  long_input = []

  100.times { long_input << rand }

  1000.times do
    selection_sort([3, 7, 2])
    selection_sort(long_input)
  end

  end_time = Time.now

  puts "Average runtime: #{(end_time - start_time) / 2000} millisecond(s)"
end

# Please add your pseudocode to this file
# - Use Math.min() to find the lowest value in input array
# - Remove that value and push it onto an output array
# - Continue the process until input array empty
# - Return output array

# And a written explanation of your solution
# Runs a loop once for every element of the input array in which the lowest value is removed from the input array and pushed onto the output array, which is returned.