import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/advanced.css'

// Introduction component
function Introduction() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  let contents;

  switch (step) {
    case 1:
      contents = (
        <>
          <section>
            <h2>Python</h2>
            <p>
              In this tutorial, we assume you've already learned the basics of
              Python. If you're new to Python, you can learn the basics in our
              {" Basic Python Tutorial"}.
            </p>
            <p>
              We recommend that you complete the{" Basic Python Tutorial"}{" "}
              before starting this tutorial.
            </p>
            <button className="tutorial-button-next" onClick={nextStep}>
              Next
            </button>
          </section>
        </>
      );

      break;
    case 2:
      contents = (
        <>
          <section>
            <h2>functions</h2>
            <p>
              A function is a block of code that performs a specific task. You
              can define your own functions in Python.
            </p>
            <p>
              A function is defined using the def keyword. For example, the
              following function prints a message:
            </p>
            <pre>
              <code>
                def my_function():<br></br>
                print("Hello from a function")
              </code>
            </pre>
            <p>
              To call a function, use the function name followed by parenthesis:
            </p>
            <pre>
              <code>my_function()</code>
            </pre>
            <p>
              The code block inside the function will be executed when the
              function is called.
            </p>
            <p>
              The function above does not take any parameters. However, a
              function can take parameters. Parameters are specified after the
              function name, inside the parentheses. You can add as many
              parameters as you want, just separate them with a comma.
            </p>
            <pre>
              <code>
                def my_function(fname):<br></br>
                print(fname + " Refsnes")
              </code>
            </pre>
            <p>
              To call a function with a parameter, use the function name
              followed by a parameter value, inside parenthesis:
            </p>
            <pre>
              <code>
                my_function("Emil")<br></br>
                my_function("Tobias")<br></br>
                my_function("Linus")
              </code>
            </pre>
            <p>
              When a function is called with a parameter, the parameter value is
              passed to the function. Inside the function, the parameter is used
              as a variable. For example, the function above uses the parameter
              fname. When the function is called, we pass along a first name,
              which is used inside the function to print the full name.
            </p>
            <p>
              By default, a function must be called with the correct number of
              arguments. Meaning that if your function expects 2 arguments, you
              have to call the function with 2 arguments, not more, and not
              less.
            </p>
            <p>This function expects 2 arguments, and gets 2 arguments:</p>
            <pre>
              <code>
                def my_function(fname, lname):<br></br>
                print(fname + " " + lname)
              </code>
            </pre>
            <p>
              When you call the function, pass along a first name and a last
              name:
            </p>
            <pre>
              <code>my_function("Emil", "Refsnes")</code>
            </pre>
            <p>
              If you try to call the function with 1 or 3 arguments, you will
              get an error:
            </p>
            <pre>
              <code>
                my_function("Emil")<br></br>
                my_function("Emil", "Refsnes", "Larsen")
              </code>
            </pre>
            <p>
              However, if the number of arguments is unknown, add a * before the
              parameter name:
            </p>
            <pre>
              <code>
                def my_function(*kids):<br></br>
                print("The youngest child is " + kids[2])
              </code>
            </pre>
            <p>
              This way the function will receive a tuple of arguments, and can
              access the items accordingly:
            </p>
            <pre>
              <code>my_function("Emil", "Tobias", "Linus")</code>
            </pre>
            <p>
              If you do not know how many keyword arguments that will be passed
              into your function, add two asterisk: ** before the parameter name
              in the function definition.
            </p>
            <pre>
              <code>
                def my_function(**kid):<br></br>
                print("His last name is " + kid["lname"])
              </code>
            </pre>
            <p>
              You can also send arguments with the key = value syntax. This way
              the order of the arguments does not matter.
            </p>
            <p>To let a function return a value, use the return statement:</p>
            <pre>
              <code>
                def my_function(x):<br></br>
                return 5 * x
              </code>
            </pre>
            <p>
              To call a function that returns a value, use the same syntax as
              calling a function that does not return a value:
            </p>
            <pre>
              <code>
                print(my_function(3))<br></br>
                print(my_function(5))<br></br>
                print(my_function(9))
              </code>
            </pre>
            <p>
              When you call a function, Python checks the number of arguments
              passed in. If it is wrong, Python raises a TypeError exception.
            </p>
            <button className="tutorial-button-next" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button-back" onClick={prevStep}>
              Previous
            </button>
          </section>
        </>
      );

      break;

    case 3:
      contents = (
        <>
          <section>
            <h2>OOPS in Python</h2>
            <p>
              Python is an object-oriented programming language. Unlike
              procedure-oriented programming, where the main emphasis is on
              functions, object-oriented programming stresses on objects.
            </p>
            <p>
              A feature of objects is that an object's properties can be
              accessed using dot-notation.
            </p>
            <p>
              A class is like an object constructor, or a "blueprint" for
              creating objects.
            </p>
            <pre>
              <code>
                class MyClass:<br></br>x = 5
              </code>
            </pre>
            <p>Now we can use the class named MyClass to create objects:</p>
            <pre>
              <code>
                p1 = MyClass()<br></br>
                print(p1.x)
              </code>
            </pre>
            <p>
              The __init__() Function The examples above are classes and objects
              in their simplest form, and are not really useful in real life
              applications.
            </p>
            <p>
              To understand the meaning of classes we have to understand the
              built-in __init__() function.
            </p>
            <p>
              All classes have a function called __init__(), which is always
              executed when the class is being initiated.
            </p>
            <p>
              Use the __init__() function to assign values to object properties,
              or other operations that are necessary to do when the object is
              being created:
            </p>
            <pre>
              <code>
                class Person:<br></br>
                def __init__(self, name, age):<br></br>
                self.name = name<br></br>
                self.age = age<br></br>
                p1 = Person("John", 36)<br></br>
                print(p1.name)<br></br>
                print(p1.age)
              </code>
            </pre>
            <p>
              Object Methods Object methods are functions that belong to the
              object.
            </p>
            <p>
              Insert a function that prints a greeting, and execute it on the p1
              object:
            </p>
            <pre>
              <code>
                class Person:<br></br>
                def __init__(self, name, age):<br></br>
                self.name = name<br></br>
                self.age = age<br></br>
                def myfunc(self):<br></br>
                print("Hello my name is " + self.name)<br></br>
                p1 = Person("John", 36)<br></br>
                p1.myfunc()
              </code>
            </pre>
            <p>
              The self Parameter The self parameter is a reference to the
              current instance of the class, and is used to access variables
              that belongs to the class.
            </p>
            <p>
              It does not have to be named self , you can call it whatever you
              like, but it has to be the first parameter of any function in the
              class:
            </p>
            <pre>
              <code>
                class Person:<br></br>
                def __init__(mysillyobject, name, age):<br></br>
                mysillyobject.name = name<br></br>
                mysillyobject.age = age<br></br>
                def myfunc(abc):<br></br>
                print("Hello my name is " + abc.name)<br></br>
                p1 = Person("John", 36)<br></br>
                p1.myfunc()
              </code>
            </pre>
            <p>
              Modify Object Properties You can modify properties on objects like
              this:
            </p>
            <pre>
              <code>p1.age = 40</code>
            </pre>
            <p>
              Delete Object Properties You can delete properties on objects by
              using the del keyword:
            </p>
            <pre>
              <code>del p1.age</code>
            </pre>
            <p>
              Delete Objects You can delete objects by using the del keyword:
            </p>
            <pre>
              <code>del p1</code>
            </pre>
            <button className="tutorial-button-next" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button-back" onClick={prevStep}>
              Previous
            </button>
          </section>
        </>
      );

      break;

    case 4:
      contents = (
        <>
          <section>
            <h2>Python Modules</h2>
            <p>Consider a module to be the same as a code library.</p>
            <p>
              A file containing a set of functions you want to include in your
              application.
            </p>
            <p>
              To create a module just save the code you want in a file with the
              file extension .py
            </p>
            <p>Save this code in a file named mymodule.py</p>
            <pre>
              <code>
                def greeting(name):<br></br>
                print("Hello, " + name)<br></br>
                person1 = <br></br> "name": "John",<br></br> "age": 36,<br></br>{" "}
                "country": "Norway"<br></br>
              </code>
            </pre>
            <p>
              Use a Module You can use the module we just created, by using the
              import statement:
            </p>
            <pre>
              <code>
                import mymodule<br></br>
                mymodule.greeting("Jonathan")
              </code>
            </pre>
            <p>
              Variables in Module The module can contain functions, as already
              described, but also variables of all types (arrays, dictionaries,
              objects etc):
            </p>
            <pre>
              <code>
                import mymodule<br></br>a = mymodule.person1["age"]<br></br>
                print(a)
              </code>
            </pre>
            <p></p>
            <button className="tutorial-button-next" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button-back" onClick={prevStep}>
              Previous
            </button>
          </section>
        </>
      );
      break;

    case 5:
      contents = (
        <>
          <section>
            <h2>Python Dates</h2>
            <p></p>
            <p>
              A date in Python is not a data type of its own, but we can import
              a module named datetime to work with dates as date objects.
            </p>
            <p>Import the datetime module and display the current date:</p>
            <pre>
              <code>
                import datetime<br></br>x = datetime.datetime.now()<br></br>
                print(x)
              </code>
            </pre>
            <p>
              The datetime module has many methods to return information about
              the date object.
            </p>
            <p>Return the year and name of weekday:</p>
            <pre>
              <code>
                import datetime<br></br>x = datetime.datetime.now()<br></br>
                print(x.year)<br></br>
                print(x.strftime("%A"))
              </code>
            </pre>
            <p>
              Create Date Objects To create a date, we can use the datetime()
              class (constructor) of the datetime module.
            </p>
            <p>
              The datetime() class requires three parameters to create a date:
              year, month, day.
            </p>
            <pre>
              <code>
                import datetime<br></br>x = datetime.datetime(2020, 5, 17)
                <br></br>
                print(x)
              </code>
            </pre>
            <p>
              The strftime() Method The datetime object has a method for
              formatting date objects into readable strings.
            </p>

            <p>
              The method is called strftime(), and takes one parameter, format,
              to specify the format of the returned string:
            </p>
            <pre>
              <code>
                import datetime<br></br>x = datetime.datetime(2018, 6, 1)
                <br></br>
                print(x.strftime("%B"))
              </code>
            </pre>
            <p>
              The strftime() method takes one parameter, format, to specify the
              format of the returned string:
            </p>
            <pre>
              <code>
                %a - Weekday, short version<br></br>
                %A - Weekday, full version<br></br>
                %w - Weekday as a number 0-6, 0 is Sunday<br></br>
                %d - Day of month 01-31<br></br>
                %b - Month name, short version<br></br>
                %B - Month name, full version<br></br>
                %m - Month as a number 01-12<br></br>
                %y - Year, short version, without century<br></br>
                %Y - Year, full version<br></br>
                %H - Hour 00-23<br></br>
                %I - Hour 00-12<br></br>
                %p - AM/PM<br></br>
                %M - Minute 00-59<br></br>
                %S - Second 00-59<br></br>
                %f - Microsecond 000000-999999<br></br>
                %z - UTC offset<br></br>
                %Z - Timezone<br></br>
                %j - Day number of year 001-366<br></br>
                %U - Week number of year, Sunday as the first day of week, 00-53
                <br></br>
                %W - Week number of year, Monday as the first day of week, 00-53
                <br></br>
                %c - Local version of date and time<br></br>
                %x - Local version of date<br></br>
                %X - Local version of time<br></br>
                %% - A % character<br></br>
              </code>
            </pre>
            <p>
              The strptime() Method The strptime() method creates a datetime
              object from a string.
            </p>
            <p>
              The strptime() method is defined under classes date, datetime and
              time.
            </p>
            <p>
              The strptime() method takes two parameters, date_string, and
              format.
            </p>
            <pre>
              <code>
                import datetime<br></br>x =
                datetime.datetime.strptime("2018-06-01", "%Y-%m-%d")<br></br>
                print(x)
              </code>
            </pre>
            <p>
              The strptime() method takes two parameters, date_string, and
              format.
            </p>
            <pre>
              <code>
                %a - Weekday, short version<br></br>
                %A - Weekday, full version<br></br>
                %w - Weekday as a number 0-6, 0 is Sunday<br></br>
                %d - Day of month 01-31<br></br>
                %b - Month name, short version<br></br>
                %B - Month name, full version<br></br>
                %m - Month as a number 01-12<br></br>
                %y - Year, short version, without century<br></br>
                %Y - Year, full version<br></br>
                %H - Hour 00-23<br></br>
                %I - Hour 00-12<br></br>
                %p - AM/PM<br></br>
                %M - Minute 00-59<br></br>
                %S - Second 00-59<br></br>
                %f - Microsecond 000000-999999<br></br>
                %z - UTC offset<br></br>
                %Z - Timezone<br></br>
                %j - Day number of year 001-366<br></br>
                %U - Week number of year, Sunday as the first day of week, 00-53
                <br></br>
                %W - Week number of year, Monday as the first day of week, 00-53
                <br></br>
                %c - Local version of date and time<br></br>
                %x - Local version of date<br></br>
                %X - Local version of time<br></br>
                %% - A % character<br></br>
              </code>
            </pre>
            <button className="tutorial-button-next" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button-back" onClick={prevStep}>
              Previous
            </button>
          </section>
        </>
      );
      break;

    case 6:
      contents = (
        <>
          <section>
            <h2>Libraries in Python </h2>
            <p>
              A library is a collection of functions / objects that serves one
              particular purpose. You could use a library in a variety of
              projects. For example, if you want to generate a random number,
              you can use the random library.
            </p>
            <p>
              Importing a library is easy. There are several ways to import a
              library in Python.
            </p>
            <pre>
              <code>
                import random<br></br>x = random.randrange(1, 1000)<br></br>
                print(x)
              </code>
            </pre>
            <p>
              When using the from keyword, do not use the random. prefix when
              you call the function.
            </p>
            <pre>
              <code>
                from random import randrange<br></br>x = randrange(1, 1000)
                <br></br>
                print(x)
              </code>
            </pre>
            <p>
              You can also import the whole library and refer to it with the
              random. prefix.
            </p>
            <pre>
              <code>
                import random<br></br>x = random.randrange(1, 1000)<br></br>
                print(x)
              </code>
            </pre>
            <p>
              Python has a number of built-in modules, which you can import
              whenever you like.
            </p>
            <p>
              The dir() Function There is a built-in function to list all the
              function names (or variable names) in a module. The dir()
              function:
            </p>
            <pre>
              <code>
                import random<br></br>x = dir(random)<br></br>
                print(x)
              </code>
            </pre>
            <p>
              The dir() function can be used on all modules, also the ones you
              create yourself.
            </p>

            <button className="tutorial-button-next" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button-back" onClick={prevStep}>
              Previous
            </button>
          </section>
        </>
      );
      break;

    case 7:
      contents = (
        <>
          <section>
            <h2>Python Regex</h2>
            <p>
              A RegEx, or Regular Expression, is a sequence of characters that
              forms a search pattern.
            </p>
            <p>
              RegEx can be used to check if a string contains the specified
              search pattern.
            </p>
            <p>
              Python has a built-in package called re, which can be used to work
              with Regular Expressions.
            </p>
            <pre>
              <code>
                import re<br></br>
                txt = "The rain in Spain"<br></br>
                #Find the first white-space character in the string:<br></br>x =
                re.search("\s", txt)<br></br>
                print("The first white-space character is located in position:",
                x.start())<br></br>
              </code>
            </pre>
            <p>
              The search() function searches the string for a match, and returns
              a Match object if there is a match.
            </p>
            <p>
              If there is more than one match, only the first occurrence of the
              match will be returned.
            </p>
            <p>
              The Match object has properties and methods used to retrieve
              information about the search, and the result:
            </p>

            <button className="tutorial-button-next" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button-back" onClick={prevStep}>
              Previous
            </button>
          </section>
        </>
      );
      break;

    case 8:
      contents = (
        <>
          <section>
            <h2>Python Try Except</h2>
            <p>
              When an error occurs, or exception as we call it, Python will
              normally stop and generate an error message.
            </p>
            <p>These exceptions can be handled using the try statement:</p>
            <pre>
              <code>
                try:<br></br>
                print(x)<br></br>
                except:<br></br>
                print("An exception occurred")<br></br>
              </code>
            </pre>
            <p>
              Many Exceptions You can define as many exception blocks as you
              want, e.g. if you want to execute a special block of code for a
              special kind of error:
            </p>
            <pre>
              <code>
                try:<br></br>
                print(x)<br></br>
                except NameError:<br></br>
                print("Variable x is not defined")<br></br>
                except:<br></br>
                print("Something else went wrong")<br></br>
              </code>
            </pre>
            <p>
              Else You can use the else keyword to define a block of code to be
              executed if no errors were raised:
            </p>
            <pre>
              <code>
                try:<br></br>
                print("Hello")<br></br>
                except:<br></br>
                print("Something went wrong")<br></br>
                else:<br></br>
                print("Nothing went wrong")<br></br>
              </code>
            </pre>
            <p>
              Finally The finally block, if specified, will be executed
              regardless if the try block raises an error or not.
            </p>
            <pre>
              <code>
                try:<br></br>
                print(x)<br></br>
                except:<br></br>
                print("Something went wrong")<br></br>
                finally:<br></br>
                print("The 'try except' is finished")<br></br>
              </code>
            </pre>
            <p>
              Raise an exception If a Python script raises an exception, it must
              either handle the exception immediately otherwise it terminates
              and quits.
            </p>
            <p>
              You can create your own exceptions by deriving classes from the
              Exception class.
            </p>
            <p>
              In the following example, we create a custom exception called
              MyError (note that MyError must derive from Exception).
            </p>
            <pre>
              <code>
                class MyError(Exception):<br></br>x = 10<br></br>
                if x &gt; 5:<br></br>
                raise MyError("x should not exceed 5. The value of x was: {}
                ".format(x))<br></br>
              </code>
            </pre>
            <p>The raise keyword is used to raise an exception.</p>
            <p>
              You can define what kind of error to raise, and the text to print
              to the user.
            </p>
            <p>In this example we raise a TypeError if x is not an integer:</p>
            <pre>
              <code>
                x = "hello"<br></br>
                if not type(x) is int:<br></br>
                raise TypeError("Only integers are allowed")<br></br>
              </code>
            </pre>
            <p>
              The AssertionError Exception If the expression given to the assert
              statement evaluates to false, an AssertionError exception is
              raised.
            </p>
            <p>
              The assert statement is shorthand for a conditional raise
              statement:
            </p>
            <pre>
              <code>
                age = -1<br></br>
                assert (age &gt;= 0), "Age can not be negative"<br></br>
              </code>
            </pre>
            <p>
              The AssertionError exception can be caught and handled like any
              other exception using the try statement:
            </p>
            <pre>
              <code>
                age = -1<br></br>
                try:<br></br>
                assert (age &gt;= 0), "Age can not be negative"<br></br>
                except AssertionError as error:<br></br>
                print(error)<br></br>
              </code>
            </pre>

            <button className="tutorial-button-next" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button" onClick={prevStep}>
              Previous
            </button>
          </section>
        </>
      );
      break;

    case 9:
      contents = (
        <>
          <section>
            <h2>Python Iterators</h2>
            <p>
              An iterator is an object that contains a countable number of
              values.
            </p>
            <p>
              An iterator is an object that can be iterated upon, meaning that
              you can traverse through all the values.
            </p>
            <p>
              Technically, in Python, an iterator is an object which implements
              the iterator protocol, which consist of the methods __iter__() and
              __next__().
            </p>
            <p>
              Lists, tuples, dictionaries, and sets are all iterable objects.
              They are iterable containers which you can get an iterator from.
            </p>
            <p>
              All these objects have a iter() method which is used to get an
              iterator:
            </p>
            <pre>
              <code>
                mytuple = ("apple", "banana", "cherry")<br></br>
                myit = iter(mytuple)<br></br>
                print(next(myit))<br></br>
                print(next(myit))<br></br>
                print(next(myit))<br></br>
              </code>
            </pre>
            <p>
              Even strings are iterable objects, and can return an iterator:
            </p>
            <pre>
              <code>
                mystr = "banana"<br></br>
                myit = iter(mystr)<br></br>
                print(next(myit))<br></br>
                print(next(myit))<br></br>
                print(next(myit))<br></br>
                print(next(myit))<br></br>
                print(next(myit))<br></br>
                print(next(myit))<br></br>
              </code>
            </pre>
            <p>
              Looping Through an Iterator You can also use a for loop to iterate
              through an iterable object:
            </p>
            <pre>
              <code>
                mytuple = ("apple", "banana", "cherry")<br></br>
                for x in mytuple:<br></br>
                print(x)<br></br>
              </code>
            </pre>
            <p>
              Create an Iterator To create an object/class as an iterator you
              have to implement the methods __iter__() and __next__() to your
              object.
            </p>
            <p>
              As you have learned in the Python Classes/Objects chapter, all
              classes have a function called __init__(), which allows you to do
              some initializing when the object is being created.
            </p>
            <p>
              The __iter__() method acts similar, you can do operations
              (initializing etc.), but must always return the iterator object
              itself.
            </p>
            <p>
              The __next__() method also allows you to do operations, and must
              return the next item in the sequence.
            </p>
            <p>
              Create an Iterator that returns numbers, starting with 1, and each
              sequence will increase by one (returning 1,2,3,4,5 etc.):
            </p>
            <pre>
              <code>
                class MyNumbers:<br></br>
                def __iter__(self):<br></br>
                self.a = 1<br></br>
                return self<br></br>
                def __next__(self):<br></br>x = self.a<br></br>
                self.a += 1<br></br>
                return x<br></br>
              </code>
            </pre>
            <p>
              Create an iterator object from that class, and print each
              sequence:
            </p>
            <pre>
              <code>
                x = MyNumbers()<br></br>
                myiter = iter(x)<br></br>
                print(next(myiter))<br></br>
                print(next(myiter))<br></br>
                print(next(myiter))<br></br>
                print(next(myiter))<br></br>
                print(next(myiter))<br></br>
              </code>
            </pre>
            <p>
              StopIteration You can control the behavior for for loops by
              implementing the __next__() method.
            </p>
            <p>
              In the __next__() method, you can add a terminating condition to
              raise an error if the iteration is done a specified number of
              times:
            </p>
            <pre>
              <code>
                class MyNumbers:<br></br>
                def __iter__(self):<br></br>
                self.a = 1<br></br>
                return self<br></br>
                def __next__(self):<br></br>
                if self.a &lt;= 20:<br></br>x = self.a<br></br>
                self.a += 1<br></br>
                return x<br></br>
                else:<br></br>
                raise StopIteration<br></br>
              </code>
            </pre>
            <p>
              Using the iter() function (to be used with loops):<br></br>
              <pre>
                <code>
                  x = MyNumbers()<br></br>
                  for x in myclass:<br></br>
                  print(x)<br></br>
                </code>
              </pre>
            </p>
            <p>
              Using the next() function (to be used in manual iteration):
              <br></br>
              <pre>
                <code>
                  x = MyNumbers()<br></br>
                  myiter = iter(x)<br></br>
                  print(next(myiter))<br></br>
                  print(next(myiter))<br></br>
                  print(next(myiter))<br></br>
                  print(next(myiter))<br></br>
                  print(next(myiter))<br></br>
                </code>
              </pre>
            </p>
          </section>
        </>
      );

      break;

    case 10:
      contents = (
        <>
          <section>
            <h2>Python Scope</h2>
            <p>
              A variable is only available from inside the region it is created.
              This is called scope.
            </p>
            <p>
              Local Scope A variable created inside a function belongs to the
              local scope of that function, and can only be used inside that
              function.
            </p>
            <p>
              The variable <code>x</code> is not available outside the function,
              but it is available for any function inside the function:
            </p>
            <pre>
              <code>
                def myfunc():<br></br>x = 300<br></br>
                print(x)<br></br>
                myfunc()<br></br>
                print(x)<br></br>
              </code>
            </pre>
            <p>
              The function will print the local <code>x</code>, and then the
              code will print the global <code>x</code>.
            </p>
            <p>
              Global Scope A variable created in the main body of the Python
              code is a global variable and belongs to the global scope.
            </p>
            <p>
              Global variables are available from within any scope, global and
              local.
            </p>
            <p>
              If you operate with the same variable name inside and outside of a
              function, Python will treat them as two separate variables, one
              available in the global scope (outside the function) and one
              available in the local scope (inside the function):
            </p>
            <pre>
              <code>
                x = 300<br></br>
                def myfunc():<br></br>
                print(x)<br></br>
                myfunc()<br></br>
                print(x)<br></br>
              </code>
            </pre>
            <p>
              Naming Variables If you operate with the same variable name inside
              and outside of a function, Python will treat them as two separate
              variables, one available in the global scope (outside the
              function) and one available in the local scope (inside the
              function):
            </p>
            <pre>
              <code>
                x = 300<br></br>
                def myfunc():<br></br>x = 200<br></br>
                print(x)<br></br>
                myfunc()<br></br>
                print(x)<br></br>
              </code>
            </pre>
            <p>
              The function will print the local <code>x</code>, and then the
              code will print the global <code>x</code>.
            </p>
            <p>
              The <code>global</code> Keyword If you need to create a global
              variable, but are stuck in the local scope, you can use the
              <code>global</code> keyword.
            </p>
            <p>
              The <code>global</code> keyword makes the variable global.
            </p>
            <p>
              If you use the <code>global</code> keyword, the variable belongs
              to the global scope:
            </p>
            <pre>
              <code>
                def myfunc():<br></br>
                global x<br></br>x = 300<br></br>
                myfunc()<br></br>
                print(x)<br></br>
              </code>
            </pre>
            <p>
              Also, use the <code>global</code> keyword if you want to make a
              change to a global variable inside a function.
            </p>
            <pre>
              <code>
                x = 300<br></br>
                def myfunc():<br></br>
                global x<br></br>x = 200<br></br>
                myfunc()<br></br>
                print(x)<br></br>
              </code>
            </pre>
            <p>
              The function will print the local <code>x</code>, and then the
              code will print the global <code>x</code>.
            </p>
            <p>
              The function will print the local <code>x</code>, and then the
              code will print the global <code>x</code>.
            </p>
          </section>
        </>
      );
      break;
       

    default:
      contents = (
        <>
          <section>
            <p>Thank you for learning with us.</p>
            <p>
              Please check out our other tutorials and courses on our website.
            </p>
            <Link to="/analysis">Advanced Python</Link>
          </section>
        </>
      );
  }

  return <div className="tutorial-section">{contents}</div>;
}

// Full Tutorial component
function Tutorial1() {
  return (
    <div className="introduction">
      <header className="tutorial-header">
        <h1>Python Basics</h1>
      </header>
      <main className="tutorial-content">
        <Introduction />
      </main>
      <footer className="tutorial-footer">
        <Link to="/" className="link">Back to Tutorials</Link>
      </footer>
    </div>
  );
}

export default Tutorial1;
