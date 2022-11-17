// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//change data in card
function changeData(){
  const data = reviews[idx];
  personImg.src = data.img;
  author.innerText = data.name;
  job.innerText = data.job;
  info.innerText = data.text;
}

const btns = document.querySelectorAll(".button-container button")
let idx = 0;
const personImg = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info')

// calling here to remove def data when page loaded
changeData();

//adding event listener to next and prev btns
btns.forEach((btn)=>{
  btn.addEventListener('click',updateIdx)
})

//updating index value based on user click btn
function updateIdx(e){
  if(e.currentTarget.classList.contains("next-btn")){
    idx = (idx === reviews.length-1) ? 0: ++idx;
  } else{
    idx = (idx === 0) ? reviews.length-1: --idx;
  }
  changeData();
}

//to generate random idx and data change
const supriseBtn = document.querySelector(".random-btn");
supriseBtn.addEventListener("click",function(){
  idx = Math.floor(Math.random() * reviews.length)
  changeData();
})