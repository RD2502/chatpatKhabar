let NewsAccordion = document.getElementById('NewsAccordion');
let xhr= new XMLHttpRequest();
xhr.open('GET',`https://newsdata.io/api/1/news?country=cn&apikey=pub_1243811a5a32722fe212d6b638dfb76fb83d1`,true);
xhr.onload=function(){
    if(this.readyState==4&&this.status===200)
    {
        let json=JSON.parse(this.responseText);
        let articles=json.results;
        let newsHtml=" ";
        console.log(json);
        console.log(articles);
        articles.forEach((element,index) => {
            let news=`
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                 <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
              </h2>
              <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#NewsAccordion">
                <div class="accordion-body">
                  <p>${element["description"]}.<a href="${element['link']}" target="_blank">Read more</a></p>
                </div>
              </div>
            </div>`
          newsHtml+=news;
        });
       NewsAccordion.innerHTML=newsHtml;
    }
    
};

xhr.send();
