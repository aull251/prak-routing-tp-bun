const server = Bun.serve({
  port: 3001,
  fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    console.log(`[${new Date().toLocaleTimeString()}] ${method} ${path}`);

    // 1. Halaman Utama
    if (path === '/' && method === 'GET') {
      return new Response('<h1>🏠 Halaman Utama (Bun)</h1>', {
        headers: { 'Content-Type': 'text/html' },
      });
    } 
    // 2. Halaman About
    else if (path === '/about' && method === 'GET') {
      return new Response('<h1>📄 Tentang Kami (Bun)</h1>', {
        headers: { 'Content-Type': 'text/html' },
      });
    }
    // 3. GET /products (Latihan Mandiri 1)
    else if (path === '/products' && method === 'GET') {
      const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mouse" }
      ];
      return new Response(JSON.stringify(products), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // 4. POST /products (Latihan Mandiri 1)
    else if (path === '/products' && method === 'POST') {
      return new Response(JSON.stringify({ message: "Produk berhasil dibuat (Bun)" }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // 5. GET /users/:id (Latihan Mandiri 2 - Tantangan)
    else if (path.startsWith('/users/') && method === 'GET') {
      const id = path.split('/')[2]; // Mengambil ID setelah /users/
      return new Response(JSON.stringify({ message: `Data User ID: ${id}` }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 6. 404 Not Found
    else {
      return new Response('<h1>❌ 404 - Tidak Ditemukan</h1>', {
        status: 404,
        headers: { 'Content-Type': 'text/html' },
      });
    }
  },
});


console.log(`🚀 Server Bun berjalan di http://localhost:${server.port}`);