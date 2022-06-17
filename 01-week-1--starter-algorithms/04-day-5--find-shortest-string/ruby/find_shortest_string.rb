def find_shortest_string(arr)
  return arr.reduce do |shortest, str|
    str.length < shortest.length ? str : shortest
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!
  puts

  puts "Expecting: 'Ron'"
  puts "=>", find_shortest_string(['ReBecca', 'Groot', 'Ron', 'Arya'])

  puts

  puts "Expecting: 'Maine'"
  puts "=>", find_shortest_string(['Mississippi', 'Maine', 'Montana', 'Maryland'])


  # BENCHMARK HERE
  start_time = Time.now
  short_input = ["JavaScript", "Ruby", "Python"]
  long_input = []

  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  100.times do
    string = ''
    length = rand(10) + 1

    i = 0
    while i < length do
      letter = letters[(rand * letters.length).floor]
      string += letter
      i += 1
    end

    long_input.push(string)
  end

  puts long_input

  1000.times do
    find_shortest_string(short_input)
    find_shortest_string(long_input)
  end

  end_time = Time.now

  puts "Average runtime: #{(end_time - start_time) / 2000} millisecond(s)"
end

# Please add your pseudocode to this file
=begin
-Return the result of the built-in `reduce` method, using an accumulator parameter and a parameter representing each element of the array.
=end

# And a written explanation of your solution
Uses the built-in `reduce` method to keep track of the shortest string so far and the current string from the input array. Returns result of `reduce`, which is from a ternary that results in either the shortest string or the current string, whichever is shorter.
