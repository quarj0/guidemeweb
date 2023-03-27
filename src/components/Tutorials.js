const s = [
    {
        title: "Data Science ",
        description: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data.",
        image: "https://via.placeholder.com/350x200",
        link: "/data-science",
    },
    {
        title: "Machine Learning ",
        description: "This lesson uses the Iris dataset to demonstrate how to use the scikit-learn library to train a machine learning model. The programming language we'll use is Python. The Iris dataset is a classic dataset used in machine learning. It contains 150 samples of three different species of Iris flowers. The dataset contains four features: sepal length, sepal width, petal length, and petal width. The target variable is the species of the flower. The dataset is available in the scikit-learn library. The scikit-learn library is a free machine learning library for the Python programming language. It features various classification, regression, and clustering algorithms including support vector machines, random forests, gradient boosting, k-means, and DBSCAN. It also supports Python numerical and scientific libraries such as NumPy and SciPy. ",
        image: "https://via.placeholder.com/350x200",
        link: "/machine-learning",
    },
    {
        title: "Python Network Programming ",
        description: "Networking in Python is a set of Python libraries that help you to create network applications. These libraries allow you to send and receive packets across the network.",
        image: "https://via.placeholder.com/350x200",
        link: "/network-programming",
    },
    {
        title: "Python GUI Programming",
        description: "Python GUI Programming is a set of Python libraries that help you to create graphical user interfaces (GUIs) for your Python programs. Tkinter is the standard GUI library for Python. It is a thin object-oriented layer on top of Tcl/Tk. Tkinter is not the only GuiProgramming toolkit for Python. There are several other third-party Python GUI tools available. PyQt is a Python binding of the cross-platform GUI toolkit Qt, implemented as a Python plug-in. PyQt is one of the most popular Python GUI libraries. It is a very mature and feature-rich library. PySide is another Python binding of the Qt library. It is a port of the PyQt project to Qt for Python. PySide is developed by the Qt Company. wxPython is a Python wrapper around the wxWidgets cross-platform GUI library, which is written in C++. It allows Python programmers to create programs with a robust, highly functional graphical user interface, simply and easily. Kivy is a free and open source Python library for developing apps and other multitouch application software with a natural user interface. It is distributed under the terms of the MIT license and runs on Android, iOS, Linux, OS X, and Windows. Kivy was created by Mathieu Virbel in 2009.",
        image: "https://via.placeholder.com/350x200",
        link: "/python-gui-programming",
    },
    {
        title: "Python Game Development ",
        description: "Pygame and Pyglet are two popular Python libraries for game development. Pygame is a set of Python modules designed for writing video games. Pyglet is a cross-platform windowing and multimedia library for Python, intended for game development.\n\nKivy is a free and open source Python library for developing apps and other multitouch application software with a natural user interface. It is distributed under the terms of the MIT license and runs on Android, iOS, Linux, OS X, and Windows. Kivy was created by Mathieu Virbel in 2009.",
        image: "https://via.placeholder.com/350x200",
        link: "/python-game-development",
    },
 
    {
        title: "Python Web Frameworks ",
        description: "Python frameworks are a set of libraries and modules that help you to develop your web applications faster and easier. They are a collection of pre-written code that you can use in your applications.",
        image: "https://via.placeholder.com/350x200",
        link: "/python-web-frameworks",
    },
   
    {
        title: "JavaScript",
        description: "JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all major web browsers have a dedicated JavaScript engine to execute it. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded. JavaScript engines were originally used only in web browsers, but they are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets. ",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript",
    },
  
    {
        title: "React Native ",
        description: "Get started with React Native, a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/react-native",
    },
 
    {
        title: "SQL",
        description: "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables. In 1974, E. F. Codd published a relational model for databases, and in 1979, he proposed a relational algebra for querying relational databases. The first commercial RDBMS, Oracle, was released in 1979. Relational database theory provides the basis for many other database models, including the object-relational database model, which adds object-oriented programming features to the relational model. SQL is a standard language for relational database management and data manipulation. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database. Some common relational database management systems that use SQL are: Oracle, Sybase, Microsoft SQL Server, Access, Ingres, etc. SQL is used to query, insert, update and modify data. Most relational database systems have an implementation of SQL. ",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql",
    },
    {
        title: "Kali Linux ",
        description: "Kalilinux is a Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing. Kali Linux contains several hundred tools which are geared towards various information security tasks, such as Penetration Testing, Security research, Computer Forensics and Reverse Engineering. The tools are maintained and updated through the Kali repositories. Kali Linux is developed, funded and maintained by Offensive Security, a provider of world-class information security training and penetration testing services. The Kali Linux distribution is built using public repositories for Debian, along with repositories for several security-related software projects. The Kali Linux developers team is responsible for building, packaging and maintaining all components. The Kali Linux developers team is responsible for building, packaging and maintaining all components.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali",
    },
    {
        title: "Cryptography",

        description: "Cryptography is the practice and study of techniques for secure communication in the presence of third parties called adversaries. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages; various aspects in information security such as data confidentiality, data integrity, authentication, and non-repudiation are central to modern cryptography. Modern cryptography exists at the intersection of the disciplines of mathematics, computer science, electrical engineering, communication science, and physics. Applications of cryptography include electronic commerce, chip-based payment cards, digital currencies, computer passwords, and military communications.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/cryptography",
    },
   
    {
        title: "HTML ",
        description: "HTML is the standard markup language for creating Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as img and input directly introduce content into the page. Other tags such as p and div surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page. HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. Inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997. The CSS specifications are maintained by the W3C. The W3C's XML Activity defines a media type for HTML: application/xhtml+xml. XHTML, like HTML 4.01, is based on SGML, and like HTML5 is a reformulation of HTML and XHTML in the XML format. Although some HTML elements are not supported in XHTML, HTML 4.01 can be served as application/xhtml+xml, although some properties and behaviors of some elements are changed in the process. Some web browsers have a means to enter HTML source code directly and view the result. The W3C has published a searchable and browsable specification of HTML 4.01. HTML5 is the fifth and current major version of HTML, and subsumes XHTML. It was published in 2014 after a long public working draft process. The WHATWG HTML Living Standard, also known as HTML5.2, is the living HTML standard, developed by the WHATWG. It is a community-developed HTML specification. The HTML5.2 specification is a living document and work ",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html",
    },
    {
        title: "CSS ",
        description: "CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content. CSS also has rules for alternate formatting if the content is accessed on a mobile device. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications. The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable. The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents. CSS preprocessors are programming languages that extend the CSS language, adding features that do not exist in CSS by itself. Preprocessors are used to generate CSS from the preprocessor's own unique syntax. Popular CSS preprocessors include SASS, LESS and Stylus. Preprocessors enable features that do not exist in CSS, such as variables, mixins, nesting, inheritance, built-in functions, and color functions. Preprocessors also add other capabilities that can be used to generate CSS, such as linting, minification, and source maps. CSS preprocessors can also add programming capabilities to CSS, such as loops, conditionals, and functions. CSS preprocessors can also extend the CSS syntax to support features that may be added to future versions of CSS. CSS preprocessors can also add capabilities that are not part of CSS, such as the ability to import other files, or to use a programming language's syntax for variables, functions, and mixins. CSS preprocessors can also add capabilities that are not part of CSS, such as the ability to import other files, or to use a programming language's syntax for variables, functions, and mixins. CSS preprocessors can also add capabilities that are not part of CSS, such as the ability to import other files",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css",
    },
    {
        title: "React ",
        description: "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as AngularJS in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node and power mobile apps using React Native. React implements one-way reactive data flow which reduces the boilerplate and is easier to reason about than traditional data binding. React can also render on the server using Node and power mobile apps using React Native. React implements one-way reactive data flow which reduces the boilerplate and is easier to reason about than traditional data binding. React can also render on the server using Node and power mobile apps using React Native. React implements one-way reactive data flow which reduces the boilerplate and is easier to reason about than traditional data binding. React can also render on the server using Node and power mobile apps using React Native. React implements one-way reactive data flow which reduces the boilerplate and is easier to reason about than traditional data binding. React can also render on the server using Node and power mobile apps using React Native. React implements one-way reactive data flow which reduces the boilerplate and is easier to reason about than traditional data binding. React can also render on the server using Node and power mobile apps using React Native. React implements one-way reactive data flow which reduces the boilerplate and is easier to reason about than traditional data binding. React can also render on the server using Node and power mobile apps using React Native. React implements one-way reactive data flow which reduces the boilerplate and is easier to reason about than traditional data binding. React can also render on the server using Node and power mobile apps using React Native. React implements one-way reactive data flow which reduces the boilerplate and is easier to reason about than traditional",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react",
    },
    {
        title: "JavaScript Exercises",
        description: "Try out these JavaScript exercises to test your knowledge.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-exercises",
    },
    {
        title: "Python Exercises",
        description: "Try out these Python exercises to test your knowledge.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        link: "/python-exercises",
    },
    {
        title: "SQL Exercises",
        description: "Test your SQL knowledge with these exercises.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-exercises",
    },
    {
        title: "React Exercises",
        description: "Put your knowledge to the test with these exercises.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react-exercises",
    },
    {
        title: "HTML Exercises",
        description: "Put your knowledge to the test with these exercises.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html-exercises",
    },
    {
        title: "CSS Exercises",
        description: "Put your knowledge to the test with these exercises.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css-exercises",
    },
    {
        title: "Kali Linux Exercises",
        description: "Put your knowledge to the test with these exercises.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-exercises",
    },

    {
        title: "Python References",
        description: "Get the Python references to learn more about the language.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        link: "/python-references",
    },
    {
        title: "SQL References",
        description: "Get the SQL references to learn more about the language.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-references",
    },
    {
        title: "React References",
        description: "Get the React references to learn more about the library.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react-references",
    },
    {
        title: "HTML References",
        description: "Get the HTML references to learn more about the language.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html-references",
    },
    {
        title: "CSS References",
        description: "Get the CSS references to learn more about the language.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css-references",
    },
    {
        title: "Kali Linux References",
        description: "Read the Kali Linux references to learn more about the os.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-references",
    },
    {
        title: "JavaScript References",
        description: "Read the JavaScript references to learn more about the language.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-references",
    },
    {
        title: "Python Cheat Sheet",
        description: "Python Cheat Sheet, memorize the Python syntax.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        link: "my-website\\src\\Python\\cheatsheet.js"
    },
    {
        title: "SQL Cheat Sheet",
        description: "Get a SQL cheatsheet to help memorize things easily.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-cheat-sheet",
    },
    {
        title: "React Cheat Sheet",
        description: "Never forget the React syntax again.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react-cheat-sheet",
    },
    {
        title: "HTML Cheat Sheet",
        description: "HTML Cheat Sheet, memorize the HTML tags.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html-cheat-sheet",
    },
    {
        title: "CSS Cheat Sheet",
        description: "CSS Cheat Sheet, memorize the CSS properties.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css-cheat-sheet",
    },
    {
        title: "Kali Linux Cheat Sheet",
        description: "Memorize the Kali Linux commands.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-cheat-sheet",
    },
    {
        title: "JavaScript Cheat Sheet",
        description: "Get a JavaScript cheatsheet to help memorize things easily.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-cheat-sheet",
    },
    {
        title: "Python Quiz",
        description: "Let put our Python knowledge to test.",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        link: "/python-quiz",
    },
    {
        title: "SQL Quiz",
        description: "Structured Query Language test. Test yourself.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        link: "/sql-quiz",
    },
    {
        title: "React Quiz",
        description: "Try yourself on how best you know react.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        link: "/react-quiz",
    },
    {
        title: "HTML Quiz",
        description: "Test your knowledge on HTML",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        link: "/html-quiz",
    },
    {
        title: "CSS Quiz",
        description: "Test yourself in CSS.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "/css-quiz",
    },
    {
        title: "Kali Linux Quiz",
        description: "Let's test our knowledge on Kali Linux.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kali_Linux_Logo.png",
        link: "/kali-linux-quiz",
    },
    {
        title: "JavaScript Quiz",
        description: "Test yourself on JavaScript.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        link: "/javascript-quiz",
    }
];

export default s;