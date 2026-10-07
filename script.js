// ========================================
// TOKO BESI BINTANG BARU
// ========================================


// NOMOR WHATSAPP TOKO
// Ganti dengan nomor asli.
// Format:
// 6281234567890
//
// Jangan menggunakan:
// +62
// spasi
// tanda "-"

const whatsappNumber = "62XXXXXXXXXX";


// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


// Tutup menu setelah link dipilih

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });

});


// ========================================
// PRODUCT SEARCH
// ========================================

const searchInput =
    document.getElementById("searchProduct");

const products =
    document.querySelectorAll(".product-card");


searchInput.addEventListener("input", () => {

    const keyword =
        searchInput.value.toLowerCase();

    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();

        const category =
            product.dataset.category.toLowerCase();

        if (
            name.includes(keyword) ||
            category.includes(keyword)
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});


// ========================================
// CATEGORY FILTER
// ========================================

const filters =
    document.querySelectorAll(".filter");


filters.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;


        filters.forEach(filter => {
            filter.classList.remove("active");
        });


        button.classList.add("active");


        showCategory(category);

    });

});


function showCategory(category) {

    products.forEach(product => {

        if (
            category === "Semua" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ========================================
// CATEGORY CARD
// ========================================

function filterProduct(category) {

    document
        .getElementById("produk")
        .scrollIntoView({
            behavior: "smooth"
        });


    showCategory(category);


    filters.forEach(button => {

        button.classList.remove("active");

        if (
            button.dataset.category === category
        ) {

            button.classList.add("active");

        }

    });

}


// ========================================
// WHATSAPP PRODUCT ORDER
// ========================================

function orderProduct(productName) {

    const message =
        `Halo Toko Besi Bintang Baru,

Saya ingin bertanya mengenai produk:

${productName}

Apakah barang ini tersedia?
Mohon informasi harga dan ukurannya.

Terima kasih.`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}


// ========================================
// COPYRIGHT YEAR
// ========================================

document.getElementById("year").textContent =
    new Date().getFullYear();