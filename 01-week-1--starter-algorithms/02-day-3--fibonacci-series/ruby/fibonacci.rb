def fibonacci(num)
  return num if num < 2

  last_pair = [0, 1]

  i = 0

  while i < num - 1
    sum = last_pair[0] + last_pair[1]
    last_pair = [last_pair[1], sum]
    i += 1
  end

  return last_pair[1]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
  puts "Expecting: 196418"
  puts "=>", fibonacci(27)

  puts

  puts "Expecting: 196418"
  puts "=>", fibonacci(27)

  puts "Expecting: 317811"
  puts "=>", fibonacci(28)
end

# Please add your pseudocode to this file

# - If num is less than 2, return it.
# - Set an array containing 0 and 1.
# - Make a loop that runs num - 1 times
# - Each time, sum the numbers in array and set the array to contain the 2nd number as the first and the sum as the 2nd element.
# - Return the 2nd element.

# And a written explanation of your solution

# For the first two zero-indexed Fib numbers, the value is the same as the index so I return the index. For every index after that, the value is the sum of the last two values, so I loop through num - 1 times and return the final sum.
