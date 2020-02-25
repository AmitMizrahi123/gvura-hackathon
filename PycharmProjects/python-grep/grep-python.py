# libraries = [sys, re, argparse, colorama, termcolor]
# sys = to get text from stdin
# re = take regex from user and print all the regex match
# argpare = to deal with the argument
# colorama = help us to see the color
# termcolor, colored = help us to colored the regex match
import sys
import re
import argparse
import colorama
from termcolor import colored

colorama.init()


class MainRegex:
    def main(self, files, regex):
        its_file_flag = 0  # Flag to know if its file or not
        file_name_stdin = "stdin"  # Send that we work with stdin
        pattern = re.compile(regex, re.MULTILINE)  # Compile the regex
        its_match = 0  # Flag to see if we have regex match
        try:  # Try to catch error if file not open
            with open(files, "r") as file:  # Open the file
                its_file_flag = 1  # Flag up to one to know that we talk about file
                file_name = file.name  # Save the name of file
                for count_line, line in enumerate(file.readlines(), start=1):  # Loop that run over the lines and counter the lines
                    match = pattern.search(line)
                    if match != None:  # Condition that check if we have match for up to one
                        its_match = 1
                    if pattern.search(line):  # Condition that check if just regex in the file
                        read.print_with_color(line, file_name, count_line, pattern)  # We go to the function to print the regex match
                if not its_match:  # Condition that check if not regex match in line to print regex not found
                    print("Regex not found")
                    return
        except:  # Stdin
            for count_line, line in enumerate(sys.stdin, start=1):  # Loop that run over the lines and counter the lines
                if pattern.search(line):  # Condition that check if just regex in the stdin
                    read.print_with_color(line, file_name_stdin, count_line, pattern)  # We go to the function to print the regex match

    def print_with_color(self, line, file, count_line, pattern):  # Print regex match function
        lastMatch = 0  # Counter us to last match every loop
        formattedText = ''  # Contain the string
        colourStr = colorama.Fore.RED  # Change the regex match only
        resetStr = colorama.Fore.WHITE  # Change the color back to whith
        for match in pattern.finditer(line):  # We run loop over all matches regex
            start, end = match.span()  # Contain the start and end of regex match
            formattedText += line[lastMatch: start]  # Store the first text that no contain the regex match
            formattedText += colourStr  # Chane the color to red
            formattedText += line[start: end]  # Store the regex match
            formattedText += resetStr  # Change the color to white
            lastMatch = end  # Change the last match to the end of regex match to search for more regex match
        formattedText += line[lastMatch:]  # store the part that no contain regex match
        print(colored(file, "green") + ": " + colored(count_line, "blue") + ": " + formattedText)  # Print out the regex match like grep


if __name__ == '__main__':
    parser = argparse.ArgumentParser()  # We use argparse module for get the script information
    parser.add_argument("-r", "--regex", help="Enter a regex string", required=True)  # Required argument for regex search
    parser.add_argument("-f", "--files", help="Enter a file")  # If you have file use -f for search regex match
    args = parser.parse_args()  # Contain the information script
    read = MainRegex()  # Create a variable class - instance
    read.main(args.files, args.regex)  # Call to main function inside MainRegex class