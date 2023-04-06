
const selectors = [
    {
        id: 1,
        name: "Universal Selector",
        description: "The universal selector (*) selects all elements on the page.",
        example: "p {color: red;}",
        exampleDescription: "This example selects all <p> elements on the page and makes the text red."
    },
    {
        id: 2,
        name: "Type Selector",
        description: "The type selector selects elements based on the element name.",
        example: "h1 {color: red;}",
        exampleDescription: "This example selects all <h1> elements on the page and makes the text red."
    },
    {
        id: 3,
        name: "Class Selector",
        description: "The class selector selects elements with a specific class attribute.",
        example: ".center {text-align: center;}",
        exampleDescription: "This example selects all elements with class=\"center\" and centers the text."
    },
    {
        id: 4,
        name: "ID Selector",
        description: "The ID selector selects elements with a specific ID.",
        example: "#para1 {text-align: center;}",
        exampleDescription: "This example selects the element with id=\"para1\" and centers the text."
    },
    {
        id: 5,
        name: "Attribute Selector",
        description: "The attribute selector selects elements with a specified attribute.",
        example: "a[target] {color: red;}",
        exampleDescription: "This example selects all <a> elements with a target attribute."
    },
    {
        id: 6,
        name: "Descendant Selector",
        description: "The descendant selector selects elements that are descendants of a specified element.",
        example: "div p {color: red;}",
        exampleDescription: "This example selects all <p> elements inside <div> elements."
    },
    {
        id: 7,
        name: "Child Selector",
        description: "The child selector selects elements that are the children of a specified element.",
        example: "div > p {color: red;}",
        exampleDescription: "This example selects all <p> elements where the parent is a <div> element."
    },
    {
        id: 8,
        name: "Adjacent Sibling Selector",
        description: "The adjacent sibling selector selects elements that are the next sibling of a specified element.",
        example: "h1 + p {color: red;}",
        exampleDescription: "This example selects all <p> elements that are placed immediately after <h1> elements."
    },
    {
        id: 9,
        name: "General Sibling Selector",
        description: "The general sibling selector selects elements that are siblings of a specified element.",
        example: "h1 ~ p {color: red;}",
        exampleDescription: "This example selects all <p> elements that are siblings of <h1> elements."
    },
    {
        id: 10,
        name: "Pseudo-class Selector",
        description: "The pseudo-class selector selects elements based on a certain state.",
        example: "a:link {color: red;}",
        exampleDescription: "This example selects all unvisited links."
    },
    {
        id: 11,
        name: "Pseudo-element Selector",
        description: "The pseudo-element selector selects and styles a part of an element.",
        example: "p::first-line {color: red;}",
        exampleDescription: "This example selects the first line of every <p> element."
    },
    {
        id: 12,
        name: "Grouping Selector",
        description: "The grouping selector groups selectors to make them more efficient.",
        example: "h1, h2, h3 {color: red;}",
        exampleDescription: "This example selects all <h1>, <h2>, and <h3> elements."
    },
    {
        id: 13,
        name: "Combinator Selector",
        description: "The combinator selector combines selectors to select elements.",
        example: "h1 + p.intro {color: red;}",
        exampleDescription: "This example selects all <p> elements with class=\"intro\" that are placed immediately after <h1> elements."
    },
    {
        id: 14,
        name: "Nth-child Selector",
        description: "The nth-child selector selects elements that are the nth child of its parent.",
        example: "p:nth-child(2) {color: red;}",
        exampleDescription: "This example selects all <p> elements that are the second child of their parent."
    },
    {
        id: 15,
        name: "Nth-last-child Selector",
        description: "The nth-last-child selector selects elements that are the nth child of its parent, counting from the last child.",
        example: "p:nth-last-child(2) {color: red;}",
        exampleDescription: "This example selects all <p> elements that are the second child of their parent, counting from the last child."
    },
    {
        id: 16,
        name: "Nth-of-type Selector",
        description: "The nth-of-type selector selects elements that are the nth sibling of its type in the list of children of its parent.",
        example: "p:nth-of-type(2) {color: red;}",
        exampleDescription: "This example selects all <p> elements that are the second sibling of its type in the list of children of its parent."
    },
    {
        id: 17,
        name: "Nth-last-of-type Selector",
        description: "The nth-last-of-type selector selects elements that are the nth sibling of its type in the list of children of its parent, counting from the last child.",
        example: "p:nth-last-of-type(2) {color: red;}",
        exampleDescription: "This example selects all <p> elements that are the second sibling of its type in the list of children of its parent, counting from the last child."
    },
    {
        id: 18,
        name: "First-child Selector",
        description: "The first-child selector selects elements that are the first child of its parent.",
        example: "p:first-child {color: red;}",
        exampleDescription: "This example selects all <p> elements that are the first child of their parent."
    },
    {
        id: 19,
        name: "Last-child Selector",
        description: "The last-child selector selects elements that are the last child of its parent.",
        example: "p:last-child {color: red;}",
        exampleDescription: "This example selects all <p> elements that are the last child of their parent."
    },
    {
        id: 20,
        name: "First-of-type Selector",
        description: "The first-of-type selector selects elements that are the first sibling of its type in the list of children of its parent.",
        example: "p:first-of-type {color: red;}",

        exampleDescription: "This example selects all <p> elements that are the first sibling of its type in the list of children of its parent."
    },
    {
        id: 21,
        name: "Last-of-type Selector",
        description: "The last-of-type selector selects elements that are the last sibling of its type in the list of children of its parent.",
        example: "p:last-of-type {color: red;}",
        exampleDescription: "This example selects all <p> elements that are the last sibling of its type in the list of children of its parent."
    },
    {
        id: 22,
        name: "Only-child Selector",
        description: "The only-child selector selects elements that are the only child of its parent.",
        example: "p:only-child {color: red;}",
        exampleDescription: "This example selects all <p> elements that are the only child of their parent."
    },
    {
        id: 23,
        name: "Only-of-type Selector",
        description: "The only-of-type selector selects elements that have no siblings with the same element name.",
        example: "p:only-of-type {color: red;}",
        exampleDescription: "This example selects all <p> elements that have no siblings with the same element name."
    },
    {
        id: 24,
        name: "Empty Selector",
        description: "The empty selector selects elements that have no children (including text nodes).",
        example: "p:empty {color: red;}",
        exampleDescription: "This example selects all <p> elements that have no children (including text nodes)."
    },
    {
        id: 25,
        name: "Negation Selector",
        description: "The negation selector selects elements that do not match the given selector.",
        example: ":not(p) {color: red;}",
        exampleDescription: "This example selects all elements that are not <p> elements."
    },
    {
        id: 26,
        name: "Attribute Selector",
        description: "The attribute selector selects elements with a specified attribute.",
        example: "a[target] {color: red;}",
        exampleDescription: "This example selects all <a> elements with a target attribute."
    },
    {
        id: 27,
        name: "Attribute Value Selector",
        description: "The attribute value selector selects elements with a specified attribute value.",
        example: "a[target=\"_blank\"] {color: red;}",
        exampleDescription: "This example selects all <a> elements with a target attribute value equal to \"_blank\"."
    },
    {
        id: 28,
        name: "Attribute Contains Selector",
        description: "The attribute contains selector selects elements with a specified attribute value containing a given substring.",
        example: "a[target*=\"_blank\"] {color: red;}",
        exampleDescription: "This example selects all <a> elements with a target attribute value containing the substring \"_blank\"."
    },
    {
        id: 29,
        name: "Attribute Begins With Selector",
        description: "The attribute begins with selector selects elements with a specified attribute value beginning with a given substring.",
        example: "a[target^=\"_blank\"] {color: red;}",
        exampleDescription: "This example selects all <a> elements with a target attribute value beginning with the substring \"_blank\"."
    },
    {
        id: 30,
        name: "Attribute Ends With Selector",
        description: "The attribute ends with selector selects elements with a specified attribute value ending with a given substring.",
        example: "a[target$=\"_blank\"] {color: red;}",
        exampleDescription: "This example selects all <a> elements with a target attribute value ending with the substring \"_blank\"."
    },
    {
        id: 31,
        name: "Attribute Hyphen Selector",
        description: "The attribute hyphen selector selects elements with a specified attribute value containing a given substring, separated by a hyphen (-).",
        example: "a[target|=\"_blank\"] {color: red;}",
        exampleDescription: "This example selects all <a> elements with a target attribute value containing the substring \"_blank\", separated by a hyphen (-)."
    },
    {
        id: 32,
        name: "Attribute Not Equal Selector",
        description: "The attribute not equal selector selects elements with a specified attribute value not equal to a given value.",
        example: "a[target!=\"_blank\"] {color: red;}",
        exampleDescription: "This example selects all <a> elements with a target attribute value not equal to \"_blank\"."
    },
]

export default selectors;