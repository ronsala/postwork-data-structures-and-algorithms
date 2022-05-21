def reverse_string(str)
  arr = []
  i = str.length - 1
  while i > -1
    arr << str[i]
    i --
  end

  return arr.join('')
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file

# 1. Rewrite the problem in your own words
# Function takes a string and returns it backwards without using methods that specifically do that.

# 2. Validate that you understand the problem
# Ex: 'Ron' ==> 'noR'

# 3. Write your own test cases
# 'ReBecca' ==> 'acceBeR'
# 'Arya' ==> 'ayrA'
# 'Groot' ==> 'toorG'

# 4. Pseudocode
# - Take the last letter of the string
# - Add it to a new string
# - Take the second to last letter and add it to the end of the new string
# - Keep going backwards through the original string and adding to the new string until all letters are in new string
# - Return new string

# 5. Code!

# And a written explanation of your solution
# Iterates through the string passed in in reverse order, pushes each character into an array, joins the elements of the array into a string, then returns that string.