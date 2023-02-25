import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Tutorial.css";

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
            <h2>Introduction</h2>
            <p>
              In this tutorial, we will be learning the basics of Python
              scripting. We will be introducing ourself to the Python
              programming language and learning how to write simple scripts.
            </p>
            <p>
              Python is a powerful and versatile language for scripting tasks,
              and it's widely used in many fields, including data science, web
              development, system administration, and more. Here are some of the
              key features that make Python a great choice for scripting:
            </p>
            <button className="tutorial-button" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button" onClick={prevStep}>
              Previous
            </button>
          </section>
        </>
      );

      break;
    case 2:
      contents = (
        <>
          <section>
            <h2>Why Python</h2>
            <ul>
              <li>
                Python is a high-level language, which means it's easy to read
                and write.
              </li>
              <li>
                Python is a general-purpose language, which means it can be used
                for a wide variety of tasks.
              </li>
              <li>
                Python is a scripting language, which means it can be used to
                automate tasks.
              </li>
              <li>
                Python is a cross-platform language, which means it can be used
                on Windows, Mac, and Linux.
              </li>
              <li>
                Python is a free and open-source language, which means it's free
                to use and modify.
              </li>
              <li>
                Python is a popular language, which means there's a large
                community of developers and resources available.
              </li>
              <li>
                Python is a powerful language, which means it can be used to
                create complex applications.
              </li>
              <li>
                Python is a versatile language, which means it can be used for a
                wide variety of tasks.
              </li>
              <li>
                Python is a beginner-friendly language, which means it's easy to
                learn.
              </li>
            </ul>
            <button className="tutorial-button" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button" onClick={prevStep}>
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
            <h2>Python Versions</h2>
            <p>
              Python has been around for a long time, and there are many
              different versions of the language. The most recent version of
              Python is Python 3.11.2, which was released in Feb., 2023.
            </p>
            <p>
              Python 2.7 is the previous version of Python, and it's still
              widely used. However, Python 2.7 is no longer being updated, and
              it will be officially discontinued in 2020. Therefore, we
              recommend using Python 3.11.1 for all new projects.
            </p>
            <p>
              Python 3.11.1 is the latest version of Python, and it's the
              version we'll be using in this tutorial.
            </p>
            <button className="tutorial-button" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button" onClick={prevStep}>
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
            <h2>Python Installation</h2>
            <p>
              Python is a free and open-source language, which means it's free
              to use and modify. You can download Python from the official
              Python website.
              <a href=" https://www.python.org/downloads/">Download Python</a>
            </p>
            <p>
              The Python website has downloads for Windows, Mac, and Linux. You
              can download the latest version of Python for your operating
              system.
            </p>
            <p>
              Once you've downloaded Python, you can install it by following the
              instructions on the Python website.
            </p>
            <button className="tutorial-button" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button" onClick={prevStep}>
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
            <h2>Python Interpreter</h2>
            <p>
              Python is an interpreted language, which means it's not compiled
              into machine code. Instead, Python code is executed by a Python
              interpreter.
            </p>
            <p>
              The Python interpreter is a program that reads and executes Python
              code. It's available for Windows, Mac, and Linux, and it's
              included in the Python installation.
            </p>
            <p>
              To run a Python script, you can use the Python interpreter to
              execute the script. For example, if you have a script called
              hello.py, you can run it by typing the following command:
            </p>
            <pre>
              <code>python hello.py</code>
            </pre>
            <button className="tutorial-button" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button" onClick={prevStep}>
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
            <h2>Python Scripts</h2>
            <p>
              Python scripts are files that contain Python code. They can be
              used to automate tasks, and they can be run by the Python
              interpreter.
            </p>
            <p>
              Python scripts have the .py extension, and they can be opened and
              edited in any text editor. For example, you can use Notepad on
              Windows, TextEdit on Mac, or gedit on Linux.
            </p>
            <p>
              Python scripts can be run by the Python interpreter, which is
              included in the Python installation. For example, if you have a
              script called hello.py, you can run it by typing the following
              command:
            </p>
            <pre>
              <code>python hello.py</code>
            </pre>
            <button className="tutorial-button" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button" onClick={prevStep}>
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
            <h2>Python Comments</h2>
            <p>
              Comments are lines of text that are ignored by the Python
              interpreter. They're used to add notes to your code, and they're
              useful for documenting your code.
            </p>
            <p>
              Comments start with the # symbol, and they can be placed on their
              own line or after a line of code. For example:
            </p>
            <pre>
              <code>
                # This is a comment print("Hello, World!") # This is also a
                comment
              </code>
            </pre>
            <button className="tutorial-button" onClick={nextStep}>
              Next
            </button>
            <button className="tutorial-button" onClick={prevStep}>
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
          <h2>Python Variables</h2>
          <p>
            Variables are used to store data in a program. They're useful for
            storing information that can be changed later in the program.
          </p>
          <p>
            Variables are created when you assign a value to them. For example,
            the following code creates a variable called name and assigns the
            value "John" to it:
          </p>
          <pre>
            <code>name = "John"</code>
          </pre>
          <p>
            You can then use the variable in your code. For example, the
            following code prints the value of the name variable:
          </p>
          <pre>
            <code>name = "John" print(name)</code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
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
          <h2>Python Data Types</h2>
          <p>
            Data types are used to define the different kinds of values that can
            be stored in a variable. For example, a string is a sequence of
            characters, and an integer is a whole number.
          </p>
          <p>
            Python has the following data types built-in by default, in these
            categories:
          </p>
          <ul>
            <li>Text Type: str</li>
            <li>Numeric Types: int, float, complex</li>
            <li>Sequence Types: list, tuple, range</li>
            <li>Mapping Type: dict</li>
            <li>Set Types: set, frozenset</li>
            <li>Boolean Type: bool</li>
            <li>Binary Types: bytes, bytearray, memoryview</li>
          </ul>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </>
      );

      break;

    case 10:
      contents = (
        <>
        <section>
          
        <h2>Python Numbers</h2>
          <p>
            Python supports two types of numbers - integers and floating point
            numbers. (It also supports complex numbers, which will not be
            explained in this tutorial).
          </p>
          <p>
            Integers are whole numbers, positive or negative, without decimals,
            of unlimited length.
          </p>
          <p>
            Floating point numbers are represented as decimals and are accurate
            up to 15 decimal places. Float can also be scientific numbers with
            an "e" to indicate the power of 10.
          </p>
          <p>For example:</p>
          <pre>
            <code>x = 1 # int y = 2.8 # float z = 1j # complex</code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 11:
      contents = (
        <>
        <section>
          <h2>Python Casting</h2>
          <p>
            Casting in python is therefore done using constructor functions:
          </p>
          <pre>
            <code>
              x = int(1) # x will be 1 y = int(2.8) # y will be 2 z = int("3") #
              z will be 3
            </code>
          </pre>
          <p>You can also cast from a type to another:</p>
          <pre>
            <code>
              x = float(1) # x will be 1.0 y = float(2.8) # y will be 2.8 z =
              float("3") # z will be 3.0 a = float("4.2") # a will be 4.2
            </code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 12:
      contents = (
        <>
        <section>
          <h2>Python Strings</h2>
          <p>
            Strings in python are surrounded by either single quotation marks,
            or double quotation marks.
          </p>
          <p>'hello' is the same as "hello".</p>
          <p>You can display a string literal with the print() function:</p>
          <pre>
            <code>print("Hello") print('Hello')</code>
          </pre>
          <p>
            Assigning a string to a variable is done with the variable name
            followed by an equal sign and the string:
          </p>
          <pre>
            <code>a = "Hello" print(a)</code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 13:
      contents = (
        <>
        <section>
          <h2>Python Booleans</h2>
          <p>Booleans represent one of two values: True or False.</p>
          <p>
            You can evaluate any expression in Python, and get one of two
            answers, True or False.
          </p>
          <p>
            When you compare two values, the expression is evaluated and Python
            returns the Boolean answer:
          </p>
          <pre>
            <code>
              print(10 &gt; 9) # returns True print(10 == 9) # returns False
              print(10 &gt; 9) # returns False
            </code>
          </pre>
          <p>
            When you run a condition in an if statement, Python returns True or
            False:
          </p>
          <pre>
            <code>
              a = 200 b = 33 if b &gt; a: print("b is greater than a") else:
              print("b is not greater than a")
            </code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 14:
      contents = (
        <>
        <section>
          <h2>Python conditional statements</h2>
          <p>Python supports the usual logical conditions from mathematics:</p>
          <ul>
            <li>Equals: a &eql;&eql; b</li>
            <li>Not Equals: a != b</li>
            <li>Less than: a &lt; b</li>
            <li>Less than or equal to: a &lt;&eql; b</li>
            <li>Greater than: a &gt; b</li>
            <li>Greater than or equal to: a &gtt;&eql; b</li>
          </ul>
          <p>
            These conditions can be used in several ways, most commonly in "if
            statements" and loops.
          </p>
          <p>An "if statement" is written by using the if keyword.</p>
          <pre>
            <code>if a &t; b: print("a is greater than b")</code>
          </pre>
          <p>
            Indentation is very important in Python, where whitespace is used to
            indicate a block of code.
          </p>
          <p>
            The number of spaces is up to you as a programmer, but it has to be
            at least one.
          </p>
          <p>
            You have to use the same number of spaces in the same block of code,
            otherwise Python will give you an error:
          </p>
          <pre>
            <code>if a &gt; b: print("a is greater than b")</code>
          </pre>
          <p>
            The elif keyword is pythons way of saying "if the previous
            conditions were not true, then try this condition".
          </p>
          <pre>
            <code>
              if a &gt; b: print("a is greater than b") elif a == b: print("a
              and b are equal")
            </code>
          </pre>
          <p>
            The else keyword catches anything which isn't caught by the
            preceding conditions.
          </p>
          <pre>
            <code>
              if a &gt; b: print("a is greater than b") elif a == b: print("a
              and b are equal") else: print("a is less than b")
            </code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 15:
      contents = (
        <>
        <section>
          <h2>Python Operators</h2>
          <p>
            Operators are used to perform operations on variables and values.
          </p>
          <p>
            In the example below, we use the + operator to add together two
            values:
          </p>
          <pre>
            <code>x = 5 y = 3 print(x + y)</code>
          </pre>
          <p>
            Just like in mathematics, there are different types of operators,
            such as arithmetic operators which are used with numeric values to
            perform common mathematical operations:
          </p>
          <pre>
            <code>
              + Addition - Subtraction * Multiplication / Division % Modulus **
              Exponentiation // Floor division
            </code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 16:
      contents = (
        <>
        <section>
          <h2>Python Loops</h2>
          <p>Python has two primitive loop commands:</p>
          <ul>
            <li>while loops</li>
            <li>for loops</li>
          </ul>
          <h3>The while Loop</h3>
          <p>
            With the while loop we can execute a set of statements as long as a
            condition is true.
          </p>
          <pre>
            <code>i = 1 while i &lt; 6: print(i) i += 1</code>
          </pre>
          <p>
            Note: remember to increment i, or else the loop will continue
            forever.
          </p>
          <p>
            The while loop requires relevant variables to be ready, in this
            example we need to define an indexing variable, i, which we set to
            1.
          </p>
          <h3>The for Loop</h3>
          <p>
            A for loop is used for iterating over a sequence (that is either a
            list, a tuple, a dictionary, a set, or a string).
          </p>
          <pre>
            <code>
              fruits = ["apple", "banana", "cherry"] for x in fruits: print(x)
            </code>
          </pre>
          <p>
            The for loop does not require an indexing variable to set
            beforehand.
          </p>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 17:
      contents = (
        <>
        <section>
          <h2>Python Lists</h2>
          <p>Lists are used to store multiple items in a single variable.</p>
          <p>
            Lists are one of 4 built-in data types in Python used to store
            collections of data, the other 3 are Tuple, Set, and Dictionary, all
            with different qualities and usage.
          </p>
          <p>
            A list is created by placing all the items (elements) inside a
            square bracket [], separated by commas.
          </p>
          <pre>
            <code>mylist = ["apple", "banana", "cherry"] print(mylist)</code>
          </pre>
          <p>You access the list items by referring to the index number:</p>
          <pre>
            <code>mylist = ["apple", "banana", "cherry"] print(mylist[1])</code>
          </pre>
          <p>Change Item Value</p>
          <p>
            To change the value of a specific item, refer to the index number:
          </p>
          <pre>
            <code>
              mylist = ["apple", "banana", "cherry"] mylist[1] = "blackcurrant"
              print(mylist)
            </code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 18:
      contents = (
        <>
        <section>
          <h2>Python Tuples</h2>
          <p>A tuple is a collection which is ordered and unchangeable.</p>
          <p>Tuples are written with round brackets.</p>
          <pre>
            <code>
              thistuple = ("apple", "banana", "cherry") print(thistuple)
            </code>
          </pre>
          <p>You cannot change values in a tuple.</p>
          <pre>
            <code>
              thistuple = ("apple", "banana", "cherry") thistuple[1] =
              "blackcurrant" print(thistuple)
            </code>
          </pre>
          <p>Once a tuple is created, you cannot add items to it.</p>
          <pre>
            <code>
              thistuple = ("apple", "banana", "cherry")
              thistuple.append("orange") print(thistuple)
            </code>
          </pre>
          <p>
            Tuples are unchangeable, so you cannot remove items from it, but you
            can delete the tuple completely:
          </p>
          <pre>
            <code>
              thistuple = ("apple", "banana", "cherry") del thistuple
              print(thistuple)
            </code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 19:
      contents = (
        <>
        <section>
          <h2>Python Sets</h2>
          <p>A set is a collection which is unordered and unindexed.</p>
          <p>In Python sets are written with curly brackets.</p>
          <pre>
            <code>
              thisset = {("apple", "banana", "cherry")}
              print(thisset)
            </code>
          </pre>
          <p>
            You cannot access items in a set by referring to an index, since
            sets are unordered the items has no index.
          </p>
          <p>
            But you can loop through the set items using a for loop, or ask if a
            specified value is present in a set, by using the in keyword.
          </p>
          <pre>
            <code>
              thisset = {("apple", "banana", "cherry")}
              for x in thisset: print(x)
            </code>
          </pre>
          <p>To add one item to a set use the add() method.</p>
          <pre>
            <code>
              thisset = {("apple", "banana", "cherry")}
              thisset.add("orange") print(thisset)
            </code>
          </pre>
          <p>To add more than one item to a set use the update() method.</p>
          <pre>
            <code>
              thisset = {("apple", "banana", "cherry")}
              thisset.update(["orange", "mango", "grapes"]) print(thisset)
            </code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    case 20:
      contents = (
        <>
        <section>
          <h2>Python Dictionaries</h2>
          <p>
            A dictionary is a collection which is unordered, changeable and
            indexed. In Python dictionaries are written with curly brackets, and
            they have keys and values.
          </p>
          <pre>
            <code>
              thisdict ={" "}
              {(("brand": "Ford"), ("model": "Mustang"), ("year": 1964))}
              print(thisdict)
            </code>
          </pre>
          <p>
            You can access the items of a dictionary by referring to its key
            name:
          </p>
          <pre>
            <code>x = thisdict["model"]</code>
          </pre>
          <p>
            You can change the value of a specific item by referring to its key
            name:
          </p>
          <pre>
            <code>thisdict["year"] = 2018</code>
          </pre>
          <p>You can loop through a dictionary by using a for loop:</p>
          <pre>
            <code>for x in thisdict: print(x)</code>
          </pre>
          <p>
            You can also use the values() function to return values of a
            dictionary:
          </p>
          <pre>
            <code>for x in thisdict.values(): print(x)</code>
          </pre>
          <p>
            You can use the keys() function to return the keys of a dictionary:
          </p>
          <pre>
            <code>for x in thisdict.keys(): print(x)</code>
          </pre>
          <p>
            You can loop through both keys and values, by using the items()
            function:
          </p>
          <pre>
            <code>for x, y in thisdict.items(): print(x, y)</code>
          </pre>
          <p>Check if "model" is present in the dictionary:</p>
          <pre>
            <code>
              if "model" in thisdict: print("Yes, 'model' is one of the keys in
              the thisdict dictionary")
            </code>
          </pre>
          <p>Print the number of items in the dictionary:</p>
          <pre>
            <code>print(len(thisdict))</code>
          </pre>
          <p>Add an item to the dictionary:</p>
          <pre>
            <code>thisdict["color"] = "red"</code>
          </pre>
          <p>Remove an item from the dictionary:</p>
          <pre>
            <code>thisdict.pop("model")</code>
          </pre>
          <p>
            Remove the last inserted item (in versions before 3.7, a random item
            is removed instead):
          </p>
          <pre>
            <code>thisdict.popitem()</code>
          </pre>
          <p>Remove all items from the dictionary:</p>
          <pre>
            <code>thisdict.clear()</code>
          </pre>
          <p>Make a copy of a dictionary with the copy() method:</p>
          <pre>
            <code>mydict = thisdict.copy()</code>
          </pre>
          <p>Make a copy of a dictionary with the dict() method:</p>
          <pre>
            <code>mydict = dict(thisdict)</code>
          </pre>
          <button className="tutorial-button" onClick={nextStep}>
            Next
          </button>
          <button className="tutorial-button" onClick={prevStep}>
            Previous
          </button>
        </section>
        </>
      );

      break;

    default:
      contents = (
        <>
          <section>
          <h2>Congratulations, you completed the Introduction to Python!</h2>
          <p>Thank you for learning with us.</p>
          <Link to="/">Advanced Python</Link>
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
        <Link to="/">Back to Tutorials</Link>
      </footer>
    </div>
  );
}

export default Tutorial1;
