const pythonQuizQuestions = [
    {
      question: "What is the output of the following code? x = [3, 6, 9]; y = [12, 15, 18]; print(x + y)",
      answer: "[3, 6, 9, 12, 15, 18]",
      difficulty: "easy",
      type: "Fill in the blank"
    },
    {
      question: "What is the output of the following code? x = [1, 2, 3]; y = [4, 5, 6]; z = x + y; print(z[4])",
      answer: "5",
      difficulty: "medium",
      type: "Fill in the blank"
    },
    {
      question: "What is the difference between a list and a tuple in Python?",
      answer: "A list is mutable (can be changed), while a tuple is immutable (cannot be changed)",
      difficulty: "hard",
      type: "Fill in the blank"
    },
    {
      question: "What does the following code print? for i in range(5): print(i)",
      answer: "0 1 2 3 4",
      difficulty: "easy",
      type: "Fill in the blank"
    },
    {
      question: "Which of the following is not a valid way to declare a Python dictionary?",
      options: ["{'key': 'value'}", "dict(key='value')", "{'key', 'value'}", "dict([('key', 'value')])"],
      answer: "{'key', 'value'}",
      difficulty: "hard",
      type: "MCQ"
    },
    {
      question: "What is the output of the following code? a = 'hello world'; print(a[::-1])",
      answer: "'dlrow olleh'",
      difficulty: "medium",
      type: "Fill in the blank"
    },
    {
      question: "What is the output of the following code? x = ['apple', 'banana', 'cherry']; x.remove('banana'); print(x)",
      answer: "['apple', 'cherry']",
      difficulty: "easy",
      type: "Fill in the blank"
    },
    {
      question: "What is the difference between '==' and 'is' in Python?",
      answer: "'==' compares the values of two objects, while 'is' compares their identities (whether they refer to the same object in memory)",
      difficulty: "hard",
      type: "Fill in the blank"
    },
    {
      question: "What does the following code print? x = lambda a, b: a * b; print(x(2, 3))",
      answer: "6",
      difficulty: "medium",
      type: "Fill in the blank"
    },
    {
      question: "What is the output of the following code? x = 'hello world'; print(x[2:8])",
      answer: "'llo wo'",
      difficulty: "easy",
      type: "Fill in the blank"
    },
    {
        question: "What is the output of the following code? x = [1, 2, 3]; y = [4, 5, 6]; z = x + y; print(z[2:5])",
        answer: "[3, 4, 5]",
        difficulty: "medium",
        type: "Fill in the blank"
        },
        {
            question: "In python, inheritance is a way of creating a new class for using details of an existing class without modifying it. Which of the following is not a valid way to inherit a class in python?",
            options: ["class A(B):", "class A(B, C):", "class A(B, C, D):", "class A(B, C, D, E):"],
            answer: "class A(B, C, D, E):",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Polymorphism is the ability of an object to take on many forms. Which of the following is not a valid way to implement polymorphism in python?",
            options: ["Method overloading", "Method overriding", "Operator overloading", "Method overloading and overriding"],
            answer: "Method overloading and overriding",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Lambda functions are also called anonymous functions. Which of the following is not a valid way to declare a lambda function in python?",
            options: ["lambda x: x + 1", "lambda x, y: x + y", "lambda x, y, z: x + y + z", "lambda x, y, z, a: x + y + z + a"],
            answer: "lambda x, y, z, a: x + y + z + a",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "A dataset is a collection of data. Which of the following is not a valid way to declare a dataset in python?",
            options: ["dataset = {'a': 1, 'b': 2, 'c': 3}", "dataset = {'a': 1, 'b': 2, 'c': 3, 'd': 4}", "dataset = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}", "dataset = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}"],
            answer: "dataset = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Training a machine learning model is a process of learning from the data. Which of the following is not a valid way to train a machine learning model in python?",
            options: ["model.fit(x_train, y_train)", "model.fit(x_train, y_train, epochs=10)", "model.fit(x_train, y_train, epochs=10, batch_size=32)", "model.fit(x_train, y_train, epochs=10, batch_size=32, verbose=0)"],
            answer: "model.fit(x_train, y_train, epochs=10, batch_size=32, verbose=0)",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Python classes have three types of methods. Which of the following is not a valid type of method in python?",
            options: ["Class method", "Static method", "Instance method", "Abstract method"],
            answer: "Abstract method",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "write a program to print the following pattern: 1 2 3 4 5 6 7 8 9 10",
            answer: "for i in range(1, 11): print(i)",
            difficulty: "medium",
            type: "Fill in the blank"
        },
        {
            question: "write a program to list all the files in the current directory",
            answer: "import os; print(os.listdir())",
            difficulty: "medium",
            type: "Fill in the blank"
        },
        {
            question: "An assertion is a sanity-check that you can turn on or turn off when you are done with your testing of the program. Which of the following is not a valid way to use an assertion in python?",
            options: ["assert expression", "assert expression, error_message", "assert expression, error_message, error_code", "assert expression, error_code"],
            answer: "assert expression, error_code",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "If you want to create a list of numbers from 0 to 10, which of the following is not a valid way to do it in python?",
            options: ["list(range(10))", "list(range(0, 10))", "list(range(0, 11))", "list(range(1, 11))"],
            answer: "list(range(1, 11))",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Using the re module, which of the following is not a valid way to match a string in python?",
            options: ["re.match(pattern, string)", "re.search(pattern, string)", "re.findall(pattern, string)", "re.fullmatch(pattern, string)"],
            answer: "re.fullmatch(pattern, string)",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Which of the following is not a valid way to create a dictionary in python?",
            options: ["dict = {'a': 1, 'b': 2, 'c': 3}", "dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4}", "dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}", "dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}"],
            answer: "dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Can you test if a variable is a string in python?",
            options: ["Yes", "No"],
            answer: "Yes",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Can you test if a variable is a list in python?",
            options: ["Yes", "No"],
            answer: "Yes",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "The statement a = 1 is an example of which of the following?",
            options: ["Assignment", "Comparison", "Arithmetic", "Logical"],
            answer: "Assignment",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "The statement a == 1 is an example of which of the following?",
            options: ["Assignment", "Comparison", "Arithmetic", "Logical"],
            answer: "Comparison",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "The statement a + 1 is an example of which of the following?",
            options: ["Assignment", "Comparison", "Arithmetic", "Logical"],
            answer: "Arithmetic",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "The statement a and b is an example of which of the following?",
            options: ["Assignment", "Comparison", "Arithmetic", "Logical"],
            answer: "Logical",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Which of the following is not a valid way to create a list in python?",
            options: ["list = [1, 2, 3]", "list = [1, 2, 3, 4]", "list = [1, 2, 3, 4, 5]", "list = [1, 2, 3, 4, 5, 6]"],
            answer: "list = [1, 2, 3, 4, 5, 6]",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Which data structure is not mutable in python?",
            options: ["List", "Dictionary", "Tuple", "Set"],
            answer: "Tuple",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Pytho is hard to learn?",
            options: ["Yes", "No"],
            answer: "No",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "In python networking, which of the following is not a valid way to create a socket?",
            options: ["socket.socket(socket.AF_INET, socket.SOCK_STREAM)", "socket.socket(socket.AF_INET, socket.SOCK_DGRAM)", "socket.socket(socket.AF_INET, socket.SOCK_RAW)", "socket.socket(socket.AF_INET, socket.SOCK_SEQPACKET)"],
            answer: "socket.socket(socket.AF_INET, socket.SOCK_SEQPACKET)",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Which of the following is not a valid way to create a db conection in python?",
            options: ["conn = sqlite3.connect('test.db')", "conn = sqlite3.connect('test.db', check_same_thread=False)", "conn = sqlite3.connect('test.db', timeout=10)", "conn = sqlite3.connect('test.db', isolation_level=None)"],
            answer: "conn = sqlite3.connect('test.db', isolation_level=None)",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Which of the following is not a valid way to create a db cursor in python?",
            options: ["c = conn.cursor()", "c = conn.cursor('test.db')", "c = conn.cursor('test.db', check_same_thread=False)", "c = conn.cursor('test.db', timeout=10)"],
            answer: "c = conn.cursor('test.db', timeout=10)",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "The folowing are all examples of encapsulation in python except?",
            options: ["class", "def", "if", "for"],
            answer: "if",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "The folowing are all examples of inheritance in python except?",
            options: ["class", "def", "if", "for"],
            answer: "if",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "The folowing are all examples of polymorphism in python except?",
            options: ["class", "def", "if", "for"],
            answer: "if",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "The folowing are all examples of abstraction in python except?",
            options: ["class", "def", "if", "for"],
            answer: "if",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "In what way is python different from other programming languages?",
            options: ["It is not an object oriented language", "It is not a high level language", "It is not a compiled language", "It is not a scripting language"],
            answer: "It is not a compiled language",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Python comes preinstalled on which of the following operating systems?",
            options: ["Windows", "Mac", "Linux", "All of the above"],
            answer: "Mac and Linux",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "Choose two of the following that do depict the python automation process?",
            options: ["Python is a scripting language", "Python is a compiled language", "Python is an interpreted language", "Python is an object oriented language"],
            answer: "Python is a scripting language and Python is an interpreted language",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "The OpenCv library is used for which of the following?",
            options: ["Image processing", "Video processing", "Audio processing", "All of the above"],
            answer: "All of the above",
            difficulty: "hard",
            type: "MCQ"
        },
        {
            question: "A library is a collection of functions and methods that allows you to perform many actions without writing your code?",
            options: ["True", "False"],
            answer: "True",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Which of the following is way to auotmate a task in python?",
            options: ["Use a library", "Use a framework", "Use a module", "Use a package"],
            answer: "Use a library",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Differentiate between an argument and a parameter?",
            options: ["An argument is a value passed to a function when it is called. A parameter is the variable listed inside the parentheses in the function definition.", "An argument is a value passed to a function when it is called. A parameter is the variable listed inside the parentheses in the function definition.", "An argument is a value passed to a function when it is called. A parameter is the variable listed inside the parentheses in the function definition.", "An argument is a value passed to a function when it is called. A parameter is the variable listed inside the parentheses in the function definition."],
            answer: "An argument is a value passed to a function when it is called. A parameter is the variable listed inside the parentheses in the function definition.",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Fill in the blank. class Animal():def ____(self, name):self.name = name",
            options: ["__init__", "_init__", "__init_", "_init_"],
            answer: "__init__",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Which package is used to create a GUI in python?",
            options: ["Tkinter", "PyQt", "PyQt5", "All of the above"],
            answer: "All of the above",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Which of the following is not a valid way to create a GUI in python?",
            options: ["Tkinter", "PyQt", "Qute", "All of the above"],
            answer: "Qute",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Crypto is a library used for which of the following?",
            options: ["Encryption", "Decryption", "Both of the above", "None of the above"],
            answer: "Both of the above",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Encryption is the process of converting information or data into a code, especially to prevent unauthorized access?",
            options: ["True", "False"],
            answer: "True",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Cryptography in python is an example of which of the following?",
            options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
            answer: "Encapsulation",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "The best way to web scrape in python is to use which of the following?",
            options: ["BeautifulSoup", "Selenium", "Requests", "All of the above"],
            answer: "All of the above",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question:"Python is scripting language?",
            options: ["True", "False"],
            answer: "True",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Python is a compiled language?",
            options: ["True", "False"],
            answer: "False",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "How many types of loops are there in python?",
            options: ["1", "2", "3", "4"],
            answer: "3",
            difficulty: "easy",
            type: "MCQ"
        },
        {
            question: "Python can be used to hack a computer?",
            options: ["True", "False"],
            answer: "True",
            difficulty: "easy",
            type: "MCQ"
        },
    ];
export default pythonQuizQuestions