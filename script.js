/* 
  =========================================================
   BOREALIS STORE V2.5 - CLOUD BRIDGE ARCHITECTURE
  =========================================================
*/

// --- CONFIGURACIÓN CLOUD (SUPABASE) ---
const CLOUD_CONFIG = {
    ENABLED: false, 
    URL: 'https://TU_PROYECTO.supabase.co',
    KEY: 'TU_ANON_KEY_AQUI'
};

const defaultCatalog = [
    { id: "r-01", name: "Remera Oversize Básica Negra", price: "15500", tag: "REMERA", meta: "ALGODÓN PEINADO 20/1", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800", desc: "Remera de corte holgado urbano, confeccionada 100% en algodón premium." },
    { id: "r-02", name: "Remera Básica Blanca", price: "15500", tag: "REMERA", meta: "FIT REGULAR", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800", desc: "Manga corta clásica, ideal para usar debajo de camperas con estilo minimalista." },
    { id: "r-03", name: "Remera Gris Jaspeada", price: "16000", tag: "REMERA", meta: "TEXTURA JASPEADA", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800", desc: "Combinación de algodón y poliéster que garantiza resistencia y suavidad extrema." },
    { id: "r-04", name: "Remera Rayada", price: "17500", tag: "REMERA", meta: "PATRÓN BICOLOR", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800", desc: "Remera con diseño de rayas gruesas, calce relajado y cuello redondo clásico." },
    { id: "r-05", name: "Remera Cuello V", price: "16500", tag: "REMERA", meta: "CUELLO V ESTILIZADO", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800", desc: "Elegante y casual, una remera ligera con escote en V para darle aire fresco al look." },
    { id: "p-01", name: "Jean Classic Dark", price: "45000", tag: "PANTALÓN", meta: "DENIM 12OZ", image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=800", desc: "El clásico pantalón de jean azul oscuro. Resistente y estructurado." },
    { id: "p-02", name: "Pantalón Cargo Negro", price: "48000", tag: "PANTALÓN", meta: "GABARDINA REFORZADA", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800", desc: "Estilo utilitario con amplios bolsillos laterales. Fuerte orientación urbana." },
    { id: "p-03", name: "Jean Slim Celeste", price: "46000", tag: "PANTALÓN", meta: "DENIM ELASTIZADO", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800", desc: "Ligeramente ajustado en las piernas. Color celeste claro lavado a la piedra intensivo." },
    { id: "p-04", name: "Pantalón Jogger", price: "35000", tag: "PANTALÓN", meta: "ALGODÓN RÚSTICO", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800", desc: "Comodidad máxima con cintura elástica y puños resortes en los tobillos." },
    { id: "p-05", name: "Pantalón Chino Beige", price: "42000", tag: "PANTALÓN", meta: "CORTE RECTO", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800", desc: "El equilibrio perfecto entre elegancia y casualidad para todo momento del día." },
    { id: "b-01", name: "Hoodie Essential Negro", price: "35000", tag: "BUZO", meta: "CANGURO Y CAPUCHA", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800", desc: "Buzo básico indispensable, color pleno con interior frisado ultra suave." },
    { id: "b-02", name: "Buzo Cuello Redondo", price: "32000", tag: "BUZO", meta: "ALGODÓN PEINADO PREMIUM", image: "https://images.unsplash.com/photo-1572495641004-28421ae52e52?q=80&w=800", desc: "Clásico crewneck sweater sin capucha. Liviano e ideal para sobreponer con camisas." },
    { id: "b-03", name: "Hoodie Oversize Blanco", price: "36000", tag: "BUZO", meta: "FIT MODERNO", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800", desc: "Estética pura y geométrica. Hombros caídos y extremada comodidad." },
    { id: "b-04", name: "Buzo Half-Zip Oscuro", price: "38000", tag: "BUZO", meta: "MEDIO CIERRE SUPERIOR", image: "https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=800", desc: "Aroma retro en tela moderna. Cuello alto tipo polar para ajuste térmico perfecto." },
    { id: "b-05", name: "Hoodie Estampado Urbano", price: "39000", tag: "BUZO", meta: "ILUSTRACIÓN EXCLUSIVA", image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=800", desc: "Gráficos de alta definición en la espalda y logo minimalista en el frente." },
    { id: "c-01", name: "Campera Puffer Minimal", price: "85000", tag: "CAMPERA", meta: "IMPREMEABLE ALTA DENSIDAD", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800", desc: "Silueta protectora e impecable, perfecta para resistir el invierno con estilo táctico." },
    { id: "c-02", name: "Rompevientos Ligero", price: "60000", tag: "CAMPERA", meta: "TELA RESPIRABLE", image: "https://images.unsplash.com/photo-1559551408-df839c0dc951?q=80&w=800", desc: "Barrerá con fuertes ráfagas y llovizna, empacable en su propio bolsillo frontal." },
    { id: "c-03", name: "Campera Cuero Premium", price: "150000", tag: "CAMPERA", meta: "CUERO VEGANO RESISTENTE", image: "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=800", desc: "Chaqueta biker con cierres metálicos y detalles cromados de alta gama." },
    { id: "c-04", name: "Campera Denim Azul", price: "70000", tag: "CAMPERA", meta: "JEAN RÍGIDO CLÁSICO", image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0efa?q=80&w=800", desc: "Pieza eterna. Botones de cobre y un lavado atemporal texturizado." },
    { id: "c-05", name: "Parka Expedición Polar", price: "115000", tag: "CAMPERA", meta: "TRIPLE AISLAMIENTO", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800", desc: "Diseño extendido con capucha de pelaje sintético interno para máxima protección invernal." }
];

/* 
   =========================================================
   BOREALIS DATA PROVIDER (Infraestructure Layer)
   =========================================================
*/
const BorealisDB = {
    CATALOG_KEY: 'borealis_catalog_v4',
    CART_KEY: 'borealis_cart_v5',
    USER_KEY: 'borealis_user',

    init: async function() {
        if (!localStorage.getItem(this.CATALOG_KEY)) {
            localStorage.setItem(this.CATALOG_KEY, JSON.stringify(defaultCatalog));
        }
        return JSON.parse(localStorage.getItem(this.CATALOG_KEY));
    },

    getCatalog: async function() {
        return JSON.parse(localStorage.getItem(this.CATALOG_KEY));
    },

    saveCatalog: async function(catalog) {
        localStorage.setItem(this.CATALOG_KEY, JSON.stringify(catalog));
        return true;
    },

    getCart: async function() {
        const c = localStorage.getItem(this.CART_KEY);
        return c ? JSON.parse(c) : {};
    },

    saveCart: async function(cart) {
        localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
        return true;
    }
};

/* 
   =========================================================
   GLOBAL APP STATE
   =========================================================
*/
let catalog = [];
let shoppingCart = {};
let currentFilter = 'ALL', currentSearch = '';

async function bootstrap() {
    catalog = await BorealisDB.init();
    shoppingCart = await BorealisDB.getCart();
    
    renderNav();
    renderCartDrawer();
    setupEventListeners();
    
    if (document.getElementById('product-grid')) renderCatalog();
    if (document.getElementById('admin-inventory-list')) renderAdminInventory();
    
    checkProductPage();
    injectCloudStatus();
}

function injectCloudStatus() {
    const s = document.createElement('div');
    s.style = "position: fixed; bottom: 10px; left: 10px; font-family: monospace; font-size: 10px; color: #555; z-index: 1000;";
    s.innerHTML = CLOUD_CONFIG.ENABLED ? `<span style="color:#0f0">[ CLOUD_LINK: ACTIVE ]</span>` : `[ DATA_MODE: PERSISTENT_LOCAL ]`;
    document.body.appendChild(s);
}

/* EVENT LISTENERS */
function setupEventListeners() {
    // Mobile menu
    const header = document.querySelector('.top-nav');
    if (header && !document.getElementById('mobile-hamburger')) {
        const btn = document.createElement('button');
        btn.id = 'mobile-hamburger';
        btn.className = 'hamburger';
        btn.innerHTML = '☰';
        btn.onclick = () => document.getElementById('main-nav')?.classList.toggle('show');
        header.insertBefore(btn, document.getElementById('main-nav'));
    }

    // Search
    document.getElementById('search-input')?.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderCatalog();
    });

    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-filter');
            renderCatalog();
        };
    });

    // Close Cart
    document.getElementById('close-cart')?.onclick = () => toggleCart(false);

    // Login Form
    document.getElementById('login-form')?.onsubmit = (e) => {
        e.preventDefault();
        const u = document.getElementById('l-user').value.toLowerCase().trim();
        const p = document.getElementById('l-pass').value;
        const msg = document.getElementById('login-msg');
        if (u === 'admin' && p === 'lambda') {
            localStorage.setItem(BorealisDB.USER_KEY, 'admin');
            msg.className = 'status-msg success'; msg.innerText = "ACCESO CONCEDIDO.";
            showToast("Login exitoso.");
            setTimeout(() => window.location.href = 'admin.html', 800);
        } else {
            msg.className = 'status-msg error'; msg.innerText = "CREDENCIALES INVÁLIDAS.";
        }
    };

    // Admin Upload
    document.getElementById('upload-form')?.onsubmit = async (e) => {
        e.preventDefault();
        const msg = document.getElementById('upload-status');
        msg.className = 'status-msg success'; msg.innerText = "PROCESANDO...";
        
        const newProduct = {
            id: 'b-' + Date.now().toString().slice(-6),
            name: document.getElementById('p-name').value.trim(),
            price: document.getElementById('p-price').value,
            tag: document.getElementById('p-cat')?.value || "NUEVO",
            meta: "CARGA_MANUAL",
            image: document.getElementById('p-image').value.trim(),
            desc: document.getElementById('p-desc').value.trim()
        };
        
        catalog.unshift(newProduct);
        await BorealisDB.saveCatalog(catalog);
        showToast("Producto subido a la nube.");
        document.getElementById('upload-form').reset();
        renderAdminInventory();
        setTimeout(() => msg.classList.add('hidden'), 2000);
    };

    // Admin Preview
    document.getElementById('p-image')?.addEventListener('input', (e) => {
        const p = document.getElementById('image-preview');
        if (e.target.value.startsWith('http')) {
            p.innerHTML = `<img src="${e.target.value}" style="max-height:180px; width:100%; object-fit:cover;">`;
            p.classList.remove('empty-preview');
        } else {
            p.innerHTML = "SIN DATOS VISUALES"; p.classList.add('empty-preview');
        }
    });
}

/* UI ACTIONS */
window.addToCart = async function(itemId, size = 'M', goDirectly = false) {
    const item = catalog.find(i => i.id == itemId);
    if(!item) return;

    const key = `${itemId}_${size}`;
    if(shoppingCart[key]) shoppingCart[key].qty++;
    else shoppingCart[key] = { ...item, qty: 1, size: size };

    await BorealisDB.saveCart(shoppingCart);
    renderNav();
    renderCartDrawer();
    showToast(`"${item.name}" [${size}] añadido.`);
    if(goDirectly) toggleCart(true);
}

window.changeQty = async function(key, delta) {
    if(shoppingCart[key]) {
        shoppingCart[key].qty += delta;
        if(shoppingCart[key].qty <= 0) delete shoppingCart[key];
        await BorealisDB.saveCart(shoppingCart);
        renderNav();
        renderCartDrawer();
    }
}

window.toggleCart = function(state = null) {
    const d = document.getElementById('cart-drawer');
    if(!d) return;
    if(state === true) d.classList.remove('hidden');
    else if(state === false) d.classList.add('hidden');
    else d.classList.toggle('hidden');
}

window.logout = function() { localStorage.removeItem(BorealisDB.USER_KEY); window.location.href = 'index.html'; }

/* RENDERERS */
function renderNav() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    const user = localStorage.getItem(BorealisDB.USER_KEY);
    const count = Object.values(shoppingCart).reduce((a, b) => a + b.qty, 0);
    const isIndex = window.location.pathname.includes('index.html') || window.location.pathname === '/';
    
    let h = `<a href="index.html" class="${isIndex ? 'active' : ''}">CATÁLOGO</a>`;
    if (user === 'admin') {
        h += `<a href="admin.html" class="${window.location.pathname.includes('admin.html') ? 'active' : ''}">★ ADMIN</a>`;
        h += `<a href="#" onclick="logout()">LOGOUT</a>`;
    } else {
        h += `<a href="login.html" class="${window.location.pathname.includes('login.html') ? 'active' : ''}">ACCESO</a>`;
    }
    h += `<a href="#" onclick="toggleCart()" style="color:var(--hl-orange);">🛒 CARRO [${count}]</a>`;
    nav.innerHTML = h;
}

function renderCartDrawer() {
    const list = document.getElementById('cart-items');
    const totalNode = document.getElementById('cart-total');
    if(!list || !totalNode) return;
    list.innerHTML = '';
    let tot = 0;
    Object.keys(shoppingCart).forEach(k => {
        const item = shoppingCart[k];
        tot += (item.price * item.qty);
        list.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div class="cart-item-info">
                    <h4>${item.name} <span style="color:var(--hl-orange); font-size:0.75rem;">[${item.size}]</span></h4>
                    <div class="cart-item-price">${formatMoney(item.price)}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty('${k}', -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty('${k}', 1)">+</button>
                    </div>
                </div>
            </div>`;
    });
    totalNode.innerText = formatMoney(tot);
}

window.renderCatalog = function() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    grid.innerHTML = '';
    const filtered = catalog.filter(i => {
        const matF = currentFilter === 'ALL' || i.tag === currentFilter;
        const matS = i.name.toLowerCase().includes(currentSearch.toLowerCase());
        return matF && matS;
    });
    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="product-card" onclick="window.location.href='product.html?id=${item.id}'">
                <div class="img-container"><img src="${item.image}"></div>
                <div class="product-info">
                    <span class="product-tag">[ ${item.tag} ]</span>
                    <h3 class="product-name">${item.name}</h3>
                    <div class="product-price">${formatMoney(item.price)}</div>
                </div>
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${item.id}', 'M', true)">[ + COMPRAR ]</button>
            </div>`;
    });
}

function checkProductPage() {
    if (!window.location.pathname.endsWith('product.html')) return;
    const pid = new URLSearchParams(window.location.search).get('id');
    const container = document.getElementById('pd-container');
    if(!container || !pid) return;
    const item = catalog.find(i => i.id == pid);
    if(item) {
        window.currentSelectedSize = 'M';
        window.selectSize = (s) => {
            window.currentSelectedSize = s;
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('size-'+s).classList.add('active');
        };
        container.innerHTML = `
            <img src="${item.image}" class="pd-image">
            <div class="pd-info">
                <span class="product-tag">[ ${item.tag} ]</span>
                <h1 class="pd-title">${item.name}</h1>
                <div class="pd-price">${formatMoney(item.price)}</div>
                <p class="pd-desc">${item.desc}</p>
                <div class="size-selector">
                    ${['S','M','L','XL'].map(s => `<button id="size-${s}" class="size-btn ${s==='M'?'active':''}" onclick="selectSize('${s}')">${s}</button>`).join('')}
                </div>
                <button class="submit-btn" style="background:var(--hl-orange); color:#000; border:none;" onclick="addToCart('${item.id}', window.currentSelectedSize, true)">[ AGREGAR AL CARRITO ]</button>
            </div>`;
    }
}

/* ADMIN */
window.renderAdminInventory = function() {
    const list = document.getElementById('admin-inventory-list');
    if(!list) return;
    list.innerHTML = '';
    catalog.forEach(i => {
        list.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; background:#111; padding:15px; border:1px solid #333; margin-bottom:10px;">
                <span>${i.name} (${formatMoney(i.price)})</span>
                <button class="btn-del" onclick="handleDelete('${i.id}')">[ X ]</button>
            </div>`;
    });
}
window.handleDelete = async function(id) {
    if(confirm('¿Borrar permanentemente?')) {
        catalog = catalog.filter(i => i.id !== id);
        await BorealisDB.saveCatalog(catalog);
        renderAdminInventory();
        showToast("Eliminado.");
    }
}

/* HELPERS */
function formatMoney(n) { return "$" + parseInt(n).toLocaleString('es-AR'); }
function showToast(m) {
    const c = document.getElementById('toast-container') || document.createElement('div');
    c.id = 'toast-container'; document.body.appendChild(c);
    const t = document.createElement('div');
    t.className = 'toast'; t.innerText = `[ SYS ]: ${m}`;
    c.appendChild(t);
    setTimeout(() => { t.classList.add('fade-out'); setTimeout(() => t.remove(), 500); }, 3000);
}

bootstrap();
