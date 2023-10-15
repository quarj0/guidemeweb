import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./html.css";

const HTML = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            GUIDE ME LEARN
          </Link>
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={handleMenuClick}
          >
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
          <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/exercise" className="nav-link" onClick={closeMenu}>
                Exercise
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reference" className="nav-link" onClick={closeMenu}>
                References
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Learning section */}
      <section className="learning">
        <section className="introduction">
          <h1>Introduction to HTML</h1>
          <p className="p-texts">
            HTML is the standard markup language for creating Web pages.
          </p>
          <p className="p-texts">
            HTML stands for <stong>Hyper Text Markup Language</stong>
          </p>
          <p className="p-texts">HTML describes the structure of a Web page</p>
          <p className="p-texts">HTML consists of a series of elements</p>
          <p className="p-texts">
            HTML elements tell the browser how to display the content
          </p>
          <p className="p-texts">
            HTML elements label pieces of content such as "this is a heading",
            "this is a paragraph", "this is a link", etc.
          </p>
          <p className="p-texts">HTML elements are represented by tags</p>
          <p className="p-texts">
            HTML tags label pieces of content such as "heading", "paragraph",
            "table", and so on
          </p>
          <p className="p-texts">
            Browsers do not display the HTML tags, but use them to render the
            content of the page
          </p>
        </section>
        <section className="htmlelements">
          <h1>HTML Elements</h1>
          <p className="p-texts">
            HTML elements are the building blocks of HTML pages.
          </p>
          <p className="p-texts">HTML elements are represented by tags.</p>
          <p className="p-texts">
            HTML tags label pieces of content such as "heading", "paragraph",
            "table", and so on.
          </p>
          <p className="p-texts">
            Browsers do not display the HTML tags, but use them to render the
            content of the page.
          </p>
        </section>
        <section className="htmlattributes">
          <h1>HTML Attributes</h1>
          <p className="p-texts">
            HTML attributes provide additional information about HTML elements.
          </p>
          <p className="p-texts">
            Attributes are always specified in the start tag.
          </p>
          <p className="p-texts">
            Attributes usually come in name/value pairs like: name="value"
          </p>
        </section>
        <section className="htmlheadings">
          <h1>HTML Headings</h1>
          <p className="p-texts">
            HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.
          </p>
          <p className="p-texts">
            &lt;h1&gt; defines the most important heading. &lt;h6&gt; defines
            the least important heading.
          </p>
          <p className="p-texts">
            Heading tags are not displayed as bold, italic, or larger text.
            However, they are displayed in a larger size than normal text.
          </p>
          <p className="p-texts">
            By default, a browser displays the &lt;h1&gt; element as a large
            heading, &lt;h2&gt; as a slightly smaller heading, and so on.
          </p>
        </section>
        <section className="htmlparagraphs">
          <h1>HTML Paragraphs</h1>
          <p className="p-texts">
            HTML paragraphs are defined with the &lt;p&gt; tag.
          </p>
          <p className="p-texts">The &lt;p&gt; tag defines a paragraph.</p>
          <p className="p-texts">
            By default, a browser displays a &lt;p&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section className="htmlstyles">
          <h1>HTML Styles</h1>
          <p className="p-texts">
            HTML styles are defined with the &lt;style&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;style&gt; tag is used to define style information for an
            HTML document.
          </p>
          <p className="p-texts">
            The &lt;style&gt; element should be placed inside the &lt;head&gt;
            section of an HTML document.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;style&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section className="htmlformatting">
          <h1>HTML Formatting</h1>
          <p className="p-texts">
            HTML formatting elements were designed to display special types of
            text:
          </p>
          <ul>
            <li>&lt;strong&gt; - Defines important text</li>
            <li>&lt;em&gt; - Defines emphasized text</li>
            <li>&lt;mark&gt; - Defines marked/highlighted text</li>
            <li>&lt;small&gt; - Defines smaller text</li>
            <li>&lt;del&gt; - Defines deleted text</li>
            <li>&lt;ins&gt; - Defines inserted text</li>
            <li>&lt;sub&gt; - Defines subscripted text</li>
            <li>&lt;sup&gt; - Defines superscripted text</li>
          </ul>
        </section>
        <section className="htmlquotes">
          <h1>HTML Quotations</h1>
          <p className="p-texts">
            HTML quotations are defined with the &lt;blockquote&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;blockquote&gt; tag defines a section that is quoted from
            another source.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;blockquote&gt; element as a
            block element (like &lt;div&gt;), with a line break before and after
            the element.
          </p>
        </section>
        <section className="htmlcomments">
          <h1>HTML Comments</h1>
          <p className="p-texts">
            HTML comments are defined with the &lt;!-- comment text --&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;!-- comment text --&gt; tag defines a comment in an HTML
            document.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;!-- comment text --&gt; element
            as a block element (like &lt;div&gt;), with a line break before and
            after the element.
          </p>
        </section>
        <section className="htmlcolors">
          <h1>HTML Colors</h1>
          <p className="p-texts">
            HTML colors are defined with the &lt;color&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;color&gt; tag defines a color in an HTML document.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;color&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section className="html-links">
          <h1>HTML Links</h1>
          <p className="p-texts">
            HTML links are defined with the &lt;a&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;a&gt; tag defines a hyperlink, which is used to link from
            one page to another.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;a&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section className="html-images">
          <h1>HTML Images</h1>
          <p className="p-texts">
            HTML images are defined with the &lt;img&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;img&gt; tag defines an image in an HTML page.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;img&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section className="html-tables">
          <h1>HTML Tables</h1>
          <p className="p-texts">
            HTML tables are defined with the &lt;table&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;table&gt; tag defines an HTML table.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;table&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section className="html-list">
          <h1>HTML Lists</h1>
          <p className="p-texts">
            HTML lists are defined with the &lt;ul&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;ul&gt; tag defines an unordered (bulleted) list.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;ul&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section className="html-blocks">
          <h1>HTML Blocks</h1>
          <p className="p-texts">
            HTML blocks are defined with the &lt;div&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;div&gt; tag defines a division or a section in an HTML
            document.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;div&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section className="html-classes">
          <h1>HTML Classes</h1>
          <p className="p-texts">
            HTML classes are defined with the &lt;class&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;class&gt; tag defines a class in an HTML document.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;class&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section className="html-ids">
          <h1>HTML Ids</h1>
          <p className="p-texts">
            HTML ids are defined with the &lt;id&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;id&gt; tag defines an id in an HTML document.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;id&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section>
          <h1>HTML Iframes</h1>
          <p className="p-texts">
            HTML iframes are defined with the &lt;iframe&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;iframe&gt; tag defines an inline frame.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;iframe&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section>
          <h1>HTML Styles</h1>
          <p className="p-texts">
            HTML styles are defined with the &lt;style&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;style&gt; tag defines style information for an HTML
            document.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;style&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section>
          <h1>HTML Scripts</h1>
          <p className="p-texts">
            HTML scripts are defined with the &lt;script&gt; tag.
          </p>
          <p className="p-texts">
            The &lt;script&gt; tag defines a client-side script (JavaScript).
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;script&gt; element as a block
            element (like &lt;div&gt;), with a line break before and after the
            element.
          </p>
        </section>
        <section>
          <h1>HTML user defined tags</h1>
          <p className="p-texts">
            HTML user defined tags are defined with the &lt;user-defined&gt;
            tag.
          </p>
          <p className="p-texts">
            The &lt;user-defined&gt; tag defines a user-defined tag in an HTML
            document.
          </p>
          <p className="p-texts">
            By default, a browser displays a &lt;user-defined&gt; element as a
            block element (like &lt;div&gt;), with a line break before and after
            the element.
          </p>
        </section>
        <section>
          <h1 className="centered">Practical use of HTML</h1>
          <p className="p-texts">
            I assumed you've setup your enviroment for the practice. If not,
            please follow the instructions in the previous section.
          </p>
          <p className="p-texts">Let's get stated with some practices</p>
          <p className="p-texts">1. Create a new file called index.html</p>
          <p className="p-texts">
            2. Open the file in your favorite text editor
          </p>
          <p className="p-texts">3. Add the following code to the file</p>
          <p>
            &lt;!DOCTYPE html&gt; <br />
            &lt;html&gt; <br />
            &lt;head&gt; <br />
            &lt;title&gt;Page Title&lt;/title&gt; <br />
            &lt;/head&gt; <br />
            &lt;body&gt; <br />
            <br />
            &lt;h1&gt;My First Heading&lt;/h1&gt; <br />
            &lt;p&gt;My first paragraph.&lt;/p&gt; <br />
            <br />
            &lt;/body&gt; <br />
            &lt;/html&gt; <br />
          </p>
          <p className="p-texts">4. Save the file</p>
          <p className="p-texts">5. Open the file in your browser</p>
          <p className="p-texts">6. You should see the following result</p>
        </section>
      </section>
    </>
  );
};

export default HTML;
