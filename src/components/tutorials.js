import Python from "../components/images/Python.png";
import DataScince from "../components/images/analysis.png";
import Script from "../components/images/script.jpeg";
import network from '../components/images/network.jpeg'
const tutorials = [
    {
      id: 1,
      title: "Python Basics",
      description:
        "Python is the most popular programming language among beginners, thanks to its simplicity and readability.",
      image: Python,
      path: "/basics",
    },
    {
      id: 2,
      title: "Advanced Python",
      description:
        "Once you have learned the basics of Python, you can start exploring its advanced features.",
      image: Script,
      path: "/advanced",
    },
    {
      id: 3,
      title: "Data Analysis with Python",
      description:
        "Data Analysis is the most important skill in today's world. Python provides several powerful libraries for data analysis and visualization.",
      image: DataScince,
      path: "/analysis",
    },

    {
      id: 4,
      title: "Python for Networking",
      description:
        "Networking is the process of connecting two or more computing devices together for the purpose of sharing data. In this tutorial, you will learn how to use Python to create a simple network application.",
      image: network,
      path: "/network",
    },
  ];

export default tutorials;   