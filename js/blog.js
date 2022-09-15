let dataBlog = [];
function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  // untuk membuat url gambar, agar tampil
  image = URL.createObjectURL(image[0]);
  console.log(image);
  let blog = {
    title,
    content,
    image,
    postAt: "15 September 2022",
    author: "Samsul Rijal",
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
        
            <div class="blog-list-item">
                <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
                </div>
                <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank"
                    >${dataBlog[index].title}</a
                    >
                </h1>
                <div class="detail-blog-content">
                    ${dataBlog[index].postAt} | ${dataBlog[index].author}
                </div>
                <p>
                    ${dataBlog[index].content}
                </p>
                </div>
            </div>
        `;
  }
}

// document.getElementById("card").innerHTML = ''

// for (let index = 0; index < dataBlog.length;  index++){
//     console.log(dataBlog[index]);

//     document.getElementById("card").innerHTML += `

//     <div style="width: 400px; margin: 10px;">
//         <img src="${dataBlog[index].image}" alt="" width="100%">
//         <h2>${dataBlog[index].title}</h2>
//     </div>
//     `
// }
// }
