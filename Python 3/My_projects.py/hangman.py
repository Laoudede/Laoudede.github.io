def num_attempts():
    while True:
        attempts_limit = input(
        "Input the max number of attempts before failing. 1-20"
        try:
            attempts_limit = int(attempts_limit)
            if 1<=attempts_limit<=20:
                return attempts_limit
            else:
                print("The number that was input is not valid. Try again")

        except ValueError:
            print("The number that was input is not valid. Please input an integer between 1 and 20.")
        )

def get_min_word_length():
    #Get minimum word length from user
    while True:
        try:
            min_word_length = input("Input the minimum amount of letters in the word 4-10")
            if 4<=min_word_length<=10:
                return min_word_length
            else:
                print("The number that was input is not valid. Try again")
        except ValueError:
            print("The number that was input is not valid. Please input an integer between 4 and 10.")

#Display current gamestate
