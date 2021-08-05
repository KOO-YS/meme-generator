// 파일 업로드
// https://velog.io/@minkyeong-ko/HTMLCSSJS-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%A6%84-%EB%82%98%ED%83%80%EB%82%B4%EA%B8%B0-%ED%99%94%EB%A9%B4%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0

function uploadImg(input) {
    // let file = input.file;
    let file = input.files[0];

    // add image div
    let newImg = document.createElement('img');
    newImg.setAttribute('class', 'preview');
    
    // get image source
    newImg.src = URL.createObjectURL(file);

    newImg.style.width = "500px";
    newImg.style.height = "100%";
    newImg.style.visibility = "hidden";     // 버튼을 누르기 전까지 이미지 hidden
    newImg.style.objectFit = "contain";

    //이미지를 preview div에 추가
    var container = document.getElementById('preview');
    container.appendChild(newImg);

}


let submit = document.getElementById('submit');
submit.onclick = previewImg;     //Submit 버튼 클릭시 이미지 보여주기
submit.onclick = quququ;

function previewImg() {
    console.log("preview file");
    var newImg = document.getElementById('preview').lastElementChild;
  
    //이미지는 화면에 나타나고
    newImg.style.visibility = "visible";
  
    //이미지 업로드 버튼은 숨겨진다
    // document.getElementById('upload').style.visibility = 'hidden';

    //기존 파일 이름 지우기
    document.getElementById('fileName').textContent = null;
}


// konva
