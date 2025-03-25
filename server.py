from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
import os

PORT = 54336
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

with TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Serving Tesla Hacker Terminal at http://localhost:{PORT}")
    httpd.serve_forever()