document.addEventListener('DOMContentLoaded', (event) => {

    const blogs = [
        {
            id : "blog1",
            judul : "Analisis Sentimen",
            isi : "Sentiment Analysis adalah salah satu teknik dalam mengekstrak informasi berupa pandangan (sentimen) seseorang terhadap suatu isu atau kejadian. Analisis Sentimen dapat digunakan untuk mengungkap opini publik terhadap suatu isu, kepuasan pelayanan, kebijakan, cyber bulliying, memprediksi harga saham, dan analisis pesaing berdasarkan data tekstual. Namun, fenomena pertumbuhan data yang terjadi secara eksponensial menjadi tantangan baru dalam proses analisis sentimen. Pendekatakan kovensional bukan lagi jawaban tepat untuk mengungkap dan menentukan jenis sentimen dalam data tekstual. Memperkerjakan manusia untuk mengklasifikasikan jenis sentimen dari suatu kumpulan data tekstual yang sangat besar dan beragam tentu akan membutuhkan waktu dan biaya yang tidak sedikit.<br> Bayangkan jika kita memiliki 100.000 ribu tweet per hari yang harus di tentukan satu per satu jenis sentimen nya, pasti bukan hanya membutuhkan waktu yang lama, tapi juga membutuhkan sumber daya yang sangat besar. Oleh karena itu, dibutuhkan sebuah teknik baru dalam analisis sentimen yang dapat secara otomatis mengekstrak informasi dari data secara cepat dan bertanggungjawab."
        },
        {
            id : "blog2",
            judul : "Pengenalan JavaScript",
            isi : "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Internet Explorer (IE), Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web yang menggunakan tag SCRIPT.<br> JavaScript pertama kali dikembangkan oleh Brendan Eich dari Netscape di bawah nama Mocha. Navigator sebelumnya telah mendukung Java untuk lebih bisa dimanfaatkan para programmer yang non-Java. Maka dikembangkanlah bahasa pemrograman bernama LiveScript untuk mengakomodasi hal tersebut. “LiveScript“  ini berguna untuk browser Netscape Navigator 2 yang sangat popular pada masanya. Pada saat itu pula, Netscape dan Sun (pengembangan Bahasa pemrograman “Java”) sedang giat – giatnya bekerjasama untuk mengembangkan Bahasa pemrograman tersebut dan Netscape pun memberikan nama “Javascript” kepada Bahasa pemrograman tersebut. Hal ini dikarenakan “JavaScript” ini merupakan merk terdaftar milik Sun Microsystem, Inc dan dilisensikan oleh Sun untuk Netscape Comunications dan entitas lainnya seperti Mozilla Foundation"
        },
        {
            id : "blog3",
            judul : "Tutorial Membuat Website",
            isi : "Apa yang terlintas di pikiranmu ketika mendengar “cara membuat website”? Sulit, tidak paham, butuh tenaga IT, butuh komitmen besar, atau bahkan menghabiskan banyak pengeluaran? Tunggu dulu, pertanyaan ini cukup kamu jawab dalam hati. Sekarang, saatnya persiapkan hati dan pikiranmu untuk mulai memahami cara membuat website berikut ini.<br> Berikut 4 langkah mudah cara membuat website:<br> 1. Tentukan Tujuan Pembuatan Website.<br> 2. Tentukan Platform Website. Menentukan platform/CMS yang akan digunakan untuk membuat website.<br> 3. Register Hosting dan Nama Domain. Daftar mudah hosting dan domain sesuai keinginanmu.<br> 4. Instalasi dan Pengaturan Website."
        },
    ];

    var cards = document.querySelectorAll(".card");
    var activeLike = [];
    [].forEach.call(cards, (item, index) => {
        const iconLike = item.querySelector("#icon-like");
        const countLike = item.querySelector("#count-like");
        const readBlog = item.querySelector(".button-blog");
        const titleBlog = item.querySelector("#title")
        let totalLike = parseInt(countLike.innerText);
        activeLike.push(totalLike);
        let isLiked = false;

        readBlog.addEventListener('click', (event) => {
            const modalDialogElement = document.querySelector(".modalDialog")
            const title = titleBlog.innerText
            const contentBlog = blogs.filter( function(item) {
                return item.judul == title
            })
            const content = contentBlog[0].isi
            modalDialogElement.innerHTML = "";
            modalDialogElement.innerHTML = `
            <div> 
                <a href="#close" title="Close" class="close">X</a>
                <h2 id="blog-title">${title}</h2>
                <p id="blog-content">${content}</p>
            </div>
            `
        });
        
        iconLike.addEventListener('click', (event) => {
            if (isLiked == false) {
                totalLike += 1;
                countLike.innerText = totalLike;
                iconLike.style.color = "red";
                isLiked = true;
            } else {
                totalLike -= 1;
                countLike.innerText = totalLike;
                iconLike.style.color = "black";
                isLiked = false;
            }
            
        });
    });

    //method for add smile
    const iconSmile = document.querySelector("#icon-smile");
    iconSmile.addEventListener('click', (event) => {
        iconSmile.innerHTML = "";
        let newSmile = parseInt(document.querySelector("#count-smile").innerText);
        newSmile += 1;
        document.querySelector("#count-smile").innerText = newSmile;
        iconSmile.style.color = "#fce63a";
    })

})
