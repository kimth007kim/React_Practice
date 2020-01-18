import React from "react";

const tom = [
  {
    name: "금",
    img:
      "https://d1rcylxe0mqwrt.cloudfront.net/cdn-1505504237160/media/wysiwyg/landing/gold-bars.jpg"
  },
  {
    name: "은",
    img: "http://cfile25.uf.tistory.com/image/0310DD35515108A2157CB3"
  },

  {
    name: "동",
    img:
      "https://steemitimages.com/p/Mn7gs6fABvehExEG7ghgu229LsPUK94xmTvUGp8LQ7DU6wBr4axFtt4cFH3M96wn9RwHKrs1jQ8jwAbDaTgTsPQcurnYncxzfNe5YHh3ALmL13BFxgmBTVrhwMoPHFfD9AXXQH4Ce6A3FLT8V926AYHvCWGVE2dPnzGbmRnXJiSuxgzdaQmGtRYQRB7N2pror9vcszvG55QHfJ7LFikuWw6qkn9DLtfg?format=match&mode=fit&width=640"
  }
];

function Gold({ name, picture }) {
  return (
    <div>
      <h1>세상에서 가장 비싼 물건은 "{name}" 일까요?</h1>
      <img src={picture} alt="something"></img>
    </div>
  );
}
function Atom({ name }) {
  return (
    <div>
      <a href="http://www.naver.com">{name}로 연결하기</a>
    </div>
  );
}

function Tol() {
  return <p>내일 죽을 것처럼 오늘을 살고 영원히 살 것처럼 내일을 꿈꾸어라.</p>;
}
function App() {
  return (
    <div>
      {tom.map(props => (
        <Gold name={props.name} picture={props.img} />
      ))}

      <Tol />
      <Atom name="네이버" />
    </div>
  );
}

export default App;
