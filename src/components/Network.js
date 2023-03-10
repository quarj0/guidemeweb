import React, { useState } from "react";
import { Link } from  "react-router-dom";
import '../styles/advanced.css';

function Network(){
    const [step , setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    let content; 

    switch(step){
        case 1:
            content = (
                <>
                <section>
                    
                    <h1>Networking with Python</h1>
                    <p>Networking is the process of connecting two or more computing devices together for the purpose of sharing data. In this tutorial, you will learn how to use Python to create a simple network application.</p>
                    <p>Once you have installed Python, open the command prompt and type the following command:</p>
                    <pre>
                        <code>
                            python -m pip install socket
                        </code>
                    </pre>
                    <p>This command will install the socket module, which is required to create a network application.</p>
                    <p>Now, create a new file named <code>server.py</code> and add the following code:</p>
                    <pre>
                        <code>
                            import socket
                            <br/>
                            <br/>
                            server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                            <br/>
                            <br/>
                            server.bind(("localhost", 5000))
                            <br/>
                            <br/>
                            server.listen(5)
                            <br/>
                            <br/>
                            client, address = server.accept()
                            <br/>
                            <br/>
                            print("Connection from", address, "has been established!")
                            <br/>
                            <br/>
                            client.send(bytes("Welcome to the server!", "utf-8"))
                            <br/>
                            <br/>
                            client.close()
                        </code>
                    </pre>

                    <p>This code will create a server that listens on port 5000. Once a client connects to the server, it will send a welcome message to the client.</p>
                    <p>Now, create another file named <code>client.py</code> and add the following code:</p>
                    <pre>
                        <code>
                            import socket
                            <br/>
                            <br/>
                            client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                            <br/>
                            <br/>
                            client.connect(("localhost", 5000))
                            <br/>
                            <br/>
                            print(client.recv(1024).decode("utf-8"))
                            <br/>
                            <br/>
                            client.close()
                        </code>
                    </pre>
                    <p>This code will create a client that connects to the server on port 5000. Once the connection is established, it will receive the welcome message from the server.</p>
                    <p>Now, run the server and client programs. You should see the following output:</p>
                    <pre>
                        <code>
                            Connection from ('
                            <br/>    
                        </code>
                    </pre>

                    <button onClick={nextStep}>Next</button>
                    <button onClick={prevStep}>Previous</button>

                </section>
                </>
            );
            break;
        case 2:
            content = (
                <>
                <section>
                    <h1>Networking with Python Continues...</h1>
                <p>
              Python has many modules for working with the internet and
              networking.
            </p>
            <p>
              The <code>urllib</code> module can be used to work with URLs:
            </p>
            <pre>
              <code>
                import urllib.request<br></br>
                x = urllib.request.urlopen('https://www.learnpython.com')<br></br>
                print(x.read())<br></br>
              </code>
            </pre>
            <p>
              The <code>urllib</code> module can also be used to parse URLs:
            </p>
            <pre>
              <code>
                import urllib.parse<br></br>
                import urllib.request<br></br>
                url = 'https://www.learnpython.com'<br></br>
                values = &#123; 's':'basics','submit':'search' &#123;<br></br>
                data = urllib.parse.urlencode(values)<br></br>
                data = data.encode('utf-8')<br></br>
                req = urllib.request.Request(url, data)<br></br>
                resp = urllib.request.urlopen(req)<br></br>
                respData = resp.read()<br></br>
                print(respData)<br></br>
              </code>
            </pre>
            <p>
              The <code>urllib</code> module can also be used to work with
              cookies:
            </p>
            <pre>
              <code>
                import http.cookiejar<br></br>
                import urllib.request<br></br>
                url = 'https://www.learnpython.com'<br></br>
                cj = http.cookiejar.CookieJar()<br></br>
                opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))<br></br>
                urllib.request.install_opener(opener)<br></br>
                resp = urllib.request.urlopen(url)<br></br>
                respData = resp.read()<br></br>
                print(respData)<br></br>
              </code>
            </pre>
            <p>
              The <code>urllib</code> module can also be used to work with
              proxies:
            </p>
            <pre>
              <code>
                import urllib.request<br></br>
                url = 'https://www.learnpython.com'<br></br>
                proxy = urllib.request.ProxyHandler( &#123;'http':'http://www.example.com:3128/'&#123;)<br></br>
                opener = urllib.request.build_opener(proxy, urllib.request.HTTPHandler)<br></br>

                urllib.request.install_opener(opener)<br></br>
                resp = urllib.request.urlopen(url)<br></br>
                respData = resp.read()<br></br>
                print(respData)<br></br>
              </code>
            </pre>
            <p>
              The <code>urllib</code> module can also be used to work with
              authentication:
            </p>
            <pre>
              <code>
                import urllib.request<br></br>
                url = 'https://www.learnpython.com'<br></br>
                username = 'username'<br></br>
                password = 'password'<br></br>
                p = urllib.request.HTTPPasswordMgrWithDefaultRealm()<br></br>
                p.add_password(None, url, username, password)<br></br>
                handler = urllib.request.HTTPBasicAuthHandler(p)<br></br>
                opener = urllib.request.build_opener(handler)<br></br>
                urllib.request.install_opener(opener)<br></br>
                resp = urllib.request.urlopen(url)<br></br>
                respData = resp.read()<br></br>
                print(respData)<br></br>
              </code>
            </pre>
            <p>
              The <code>urllib</code> module can also be used to work with
              robots.txt:
            </p>
            <pre>
              <code>
                import urllib.robotparser<br></br>
                rp = urllib.robotparser.RobotFileParser()<br></br>
                rp.set_url('https://www.learnpython.com/robots.txt')<br></br>
                rp.read()<br></br>
                url = 'https://www.learnpython.com'<br></br>
                user_agent = 'BadCrawler'<br></br>
                print(rp.can_fetch(user_agent, url))<br></br>
                user_agent = 'GoodCrawler'<br></br>
                print(rp.can_fetch(user_agent, url))<br></br>
              </code>
            </pre>
            <p>
              The <code>urllib</code> module can also be used to work with
              FTP:
            </p>
            <pre>
              <code>
                import ftplib<br></br>
                ftp = ftplib.FTP('ftp.example.com')<br></br>
                ftp.login('username','password')<br></br>
                ftp.cwd('/htdocs')<br></br>
                ftp.retrlines('LIST')<br></br>
                filename = 'example.txt'<br></br>

                ftp.retrbinary('RETR ' + filename, open(filename, 'wb').write)<br></br>
                ftp.quit()<br></br>
              </code>
            </pre>
            <p>
              The <code>urllib</code> module can also be used to work with
              SMTP:
            </p>
            <pre>
              <code>
                import smtplib<br></br>
                server = smtplib.SMTP('smtp.example.com', 587)<br></br>
                server.starttls()<br></br>
                server.login('username','password')<br></br>
                msg = 'Hello!' # The /n separates the message from the headers<br></br>
                server.sendmail(' ', ' ', msg)<br></br>
                server.quit()<br></br>
              </code>
            </pre>
            <p>
              The <code>urllib</code> module can also be used to work with
              POP3:
            </p>
            <pre>
              <code>
                import poplib<br></br>
                M = poplib.POP3('pop.example.com')<br></br>
                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                IMAP4:
            </p>
            <pre>
                <code>
                import imaplib<br></br>
                M = imaplib.IMAP4_SSL('imap.example.com')<br></br>
                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                HTTP:
            </p>
            <pre>
                <code>
                import http.client<br></br>
                conn = http.client.HTTPSConnection("www.example.com")<br></br>
                conn.request("GET", "/")<br></br>
                r1 = conn.getresponse()<br></br>
                print(r1.status, r1.reason)<br></br>
                data1 = r1.read()<br></br>
                conn.request("GET", "/")<br></br>
                r2 = conn.getresponse()<br></br>
                print(r2.status, r2.reason)<br></br>
                data2 = r2.read()<br></br>
                conn.close()<br></br>
                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                HTTPS:
            </p>
            <pre>
                <code>
                import http.client<br></br>
                conn = http.client.HTTPSConnection("www.example.com")<br></br>
                conn.request("GET", "/")<br></br>
                r1 = conn.getresponse()<br></br>
                print(r1.status, r1.reason)<br></br>
                data1 = r1.read()<br></br>
                conn.request("GET", "/")<br></br>
                r2 = conn.getresponse()<br></br>
                print(r2.status, r2.reason)<br></br>
                data2 = r2.read()<br></br>
                conn.close()<br></br>

                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                XML-RPC:
            </p>
            <pre>
                <code>
                import xmlrpc.client<br></br>
                proxy = xmlrpc.client.ServerProxy('http://www.example.com')<br></br>
                print(proxy)<br></br>
                print(proxy.system.listMethods())<br></br>
                print(proxy.system.methodHelp('add'))<br></br>
                print(proxy.system.methodSignature('add'))<br></br>
                print(proxy.add(2,3))<br></br>
                print(proxy.add('hello','world'))<br></br>
                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                JSON-RPC:
            </p>
            <pre>
                <code>
                import jsonrpclib<br></br>
                server = jsonrpclib.Server('http://www.example.com')<br></br>
                print(server)<br></br>
                print(server.add(2,3))<br></br>
                print(server.add('hello','world'))<br></br>
                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                SOAP:
            </p>
            <pre>
                <code>
                import suds<br></br>
                url = 'http://www.example.com/service?wsdl'<br></br>
                client = suds.client.Client(url)<br></br>
                print(client)<br></br>
                print(client.service.add(2,3))<br></br>

                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                LDAP:
            </p>
            <pre>
                <code>
                import ldap<br></br>
                l = ldap.initialize('ldap://www.example.com')<br></br>
                l.protocol_version = ldap.VERSION3<br></br>
                l.simple_bind_s('cn=admin,dc=example,dc=com','secret')<br></br>
                l.search_s('dc=example,dc=com', ldap.SCOPE_SUBTREE, '(objectClass=*)')<br></br>
                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                MongoDB:
            </p>
            <pre>
                <code>
                import pymongo<br></br>
                client = pymongo.MongoClient('mongodb://localhost:27017/')<br></br>
                db = client['test-database']<br></br>
                collection = db['test-collection']<br></br>

                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                Redis:
            </p>
            <pre>
                <code>
                import redis<br></br>
                r = redis.Redis(host='localhost', port=6379, db=0)<br></br>
                r.set('foo', 'bar')<br></br>
                r.get('foo')<br></br>
                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                Memcached:
            </p>
            <pre>
                <code>
                import memcache<br></br>
                mc = memcache.Client(['
                </code>
            </pre>
            <p>
                The <code>urllib</code> module can also be used to work with
                PostgreSQL:
            </p>
            <pre>
                <code>
                import psycopg2<br></br>
                conn = psycopg2.connect("dbname=test user=postgres")<br></br>
                cur = conn.cursor()<br></br>
                cur.execute("SELECT * FROM test")<br></br>
                cur.fetchone()<br></br>
                </code>
            </pre>
            <p> 
                The <code>urllib</code> module can also be used to work with
                many other protocols, including FTP, SMTP, POP3, IMAP, HTTP,
                HTTPS, XML-RPC, JSON-RPC, SOAP, LDAP, MongoDB, Redis, Memcached,
                PostgreSQL, and many others.
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

      default:
        content = (
            <>
            <section className="tutorial-section">
            <h2>We shall continue</h2>
            <p>
                Thanks for reading this tutorial. I hope you enjoyed it. If you
                have any questions or comments, please feel free to contact me
                at 
                <a href="mailto: letlearnpython@gmail.com ">
                </a>    
            </p>
            <button className="tutorial-button" onClick={prevStep}>
                Previous
            </button>
            </section>
            </>
        );
            }
            return <div className="tutorial-section">{content}</div>;
            }
function Tutorial() {
    return (
              <div className="introduction">
                <header className="tutorial-header">
                  <h1>Python Basics</h1>
                </header>
                <main className="tutorial-content">
                  <Network />
                </main>
                <footer className="tutorial-footer">
                  <Link to="/">Back to Tutorials</Link>
                </footer>
              </div>
            );
          }
            
export default Tutorial;
