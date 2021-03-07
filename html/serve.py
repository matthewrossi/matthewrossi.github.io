#!/usr/bin/env python3

from http.server import HTTPServer
from http.server import SimpleHTTPRequestHandler
from threading import Timer
from webbrowser import open_new

HOST = '127.0.0.1'
PORT = 8000
PAGE = 'index.html'

Timer(1.0, open_new, args=['http://%s:%d/%s' % (HOST, PORT, PAGE)]).start()

server = HTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
server.allow_reuse_address = True
server.serve_forever()
