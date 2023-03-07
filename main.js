// var demoText = 'day la doan van mau.' 
// var words = demoText.split(' ')                               // tách câu thành mảng với mỗi phần tử là 1 từ 
//console.log(demoText)
//console.log('đoạn văn có số từ: '+ words.length.toString())
// số phần tử của mảng là số từ trong câucâu

function count() {
    // b1: thu thap du lieu
    const text = document.getElementById('input').value

    // b2: kiem tra du lieu

    // b3: xu ly du lieu (goi api)
    const lenght = text.split(' ').length
    
    // b4 xu li hien thi
    const rs = document.getElementById("output")
    rs.innerHTML = "so tu la: " + lenght
   
}