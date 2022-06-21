def fibonacci(n)
  n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
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
  puts

  puts "Expecting: 2"
  puts "=>", fibonacci(3)

  puts

  puts "Expecting: 8"
  puts "=>", fibonacci(6)

end

# Please add your pseudocode to this file
=begin
- Base case 1: Return number itself if < 2.
- Base case 2: Otherwise, return an expression adding the return values of recursive calls.
=end

# And a written explanation of your solution
=begin
Function keeps calling itself to derive the sum of the return values of when the number - 1 and number -2 are passed in to it. That is it sums the previous fib numbers to get the current one.
=end
