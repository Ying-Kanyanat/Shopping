var product = [{
    id: 1,
    img: 'https://media.istockphoto.com/id/517321409/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B8%B8%E0%B8%81%E0%B8%81%E0%B8%B5%E0%B9%89%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=2l4hZF-fZNmQSZwSUKhZZvUOyvloSdX-1Gtakl7RwNM=',
    name: 'Heart cookies',
    price: 1200,
    description: 'Heart cookies ipsum dolor sit amet consectetur, adipisicing elit. Ut deserunt, natus amet minima maiores libero!',
    type: 'Cookies'
}, {
    id: 2,
    img: 'https://media.istockphoto.com/id/1482650278/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%9A%E0%B8%94%E0%B8%89%E0%B9%88%E0%B9%8D%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%AA%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%9F%E0%B8%A3%E0%B8%99%E0%B8%8A%E0%B9%8C%E0%B8%9F%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B9%8C.jpg?s=612x612&w=0&k=20&c=Ez7rWdID-OqDboyK8_nKl3x4w7vgLayhSQI9ExW2CPo=',
    name: 'Full option hamberger',
    price: 1500,
    description: 'Full option hamberger ipsum dolor sit amet consectetur, adipisicing elit. Ut deserunt, natus amet minima maiores libero!',
    type: 'Hamberger'
}, {
    id: 3,
    img: 'https://plus.unsplash.com/premium_photo-1687354242494-bc2dc9c3787b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGRyaW5rc3xlbnwwfHwwfHx8MQ%3D%3D',
    name: 'Orange juice',
    price: 1000,
    description: 'Orange juice ipsum dolor sit amet consectetur, adipisicing elit. Ut deserunt, natus amet minima maiores libero!',
    type: 'Drinks'
}];
// เรียกใช้ Jquery เริ่มต้นเรียกใช้ตัว ready ทุกครั้งที่มีการเปิดเว็บ มันจะเรียกใช้ตัว ready ก่อน เพราะ ready มันเป็นตัว initial
$(document).ready(() => {
    var html = '';
    //i=0 การทำงานลูป for state แรก i=0 จากนั้นเช็ค state 2 i<10 ถ้าผ่านจะต่อด้วย state 3 พอเสร็จจะไป state 4 i++ จากนั้นไปเช็คที่ state 2 แล้วก็ไปต่อ...
    //for (let i = 0; i < 10; i++) {
        //state 3
        
    //}
    // [{},{},{}] => lenght = 3
    // html ในรูป for เป็น html ที่เราสร้างขึ้นมา ซึ่งเราจะเอาตัวแปรที่เราเก็บเอาไว้ใน html นี้ ส่งไปยังฟังก์ชัน html ของ Jquery
    // ${product[i].type เรียก product ตำแหน่งที่ i เข้าถึงในส่วนของ key type
    for (let i = 0; i< product.length; i++) {
      html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}"> 
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 0.9vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`; 
    }
    $("#productlist").html(html);  // # เครื่องหมายแทนหรือเป็นการเรียก id ใน javascript ของ Jquery : html ในบรรทัดนี้ เป็น html ของ Jquery ส่วน htmlในวงเล็บเป็นตัวที่เราสร้างมันขึ้นมาให้เก็บค่าที่เราต้องการไว้
})
//onclick="openProductDetail(${i})" ใส่ onclick ตรงนี้เพื่อให้สามารถคลิ๊กรูปภาพให้แสดงข้อมูลได้(เป็นการเปิดดูรายละเอียดของสินค้า) ซึ่งในฟังก์ชันนี้จะส่งparamเป็นรูปแบบ integer โดยส่ง i ไป ซึ่งเป็นตำแหน่งของตัวแปร

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

// ฝั่งซ้าย (html) เราส่ง this มา ฝั่งขวา (js) เราก็ต้องรับมันด้วย (ซ้ายส่งขวารับ)
// elem เป็นตัวแปรที่เราตั้งชื่อมารับ สามารถตั้งเป็นชื่ออะไรก็ได้ตามใจเรา
function searchsomething(elem) {
    //console.log(elem) เวลาค้นหามันจะเอาทั้งก้อน
    //console.log(elem.id) //เวลาค้นหามันจะเอาเฉพาะ id 
    //console.log('#'+elem.id)
    //ถ้าเราอยาก get value เราก็จะทำการเรียกใช้ Jquery เหมือนเดิม # คือไอดีมัน + เป็นการต่อสตริงกับตัวแปร
    //$('#'+elem.id).val() //ทำการเรียก val มา ซึ่ง val คือ การเรียก value จาก input ตัวนั้นมา
    var value = $('#'+elem.id).val()
    console.log(value) //Get value จากอินพุต

    var html = '';
    for (let i = 0; i< product.length; i++) {
        //product ตำแหน่งที่ i.name เราจะเช็คชื่อมัน แล้วเราใช้ includes มันจะเช็คเลยว่าคำ product[i].name นี้ประกอบด้วยอะไรบ้าง
        if( product[i].name.includes(value) ) {
            html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}"> 
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 0.9vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`; 
        }
    }
    if (html == '') {
        $("#productlist").html('<p>Not found product</p>');
    } else {
        $("#productlist").html(html); 
    }
    
}

//ฝั่งซ้ายตัวส่ง ฝั่งขวาตัวรับ
function searchproduct(param) {
    console.log(param)
    //เราจะทำการเรียกใช้ Jquery เรียกใช้ class produc-items เราจะให้ class productit-items ทุกตัวเลย ใช้ฟังก์ชัน css ของ jquery สั่งให้มัน display เป็น none
    $(".product-items").css('display', 'none') //display noneไม่แสดงผล blockแสดงผล
    if (param == 'All') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0; //ประกาศตัวแปล global
function openProductDetail(index) {
    productindex = index; //ซึ่งถ้ามีการคลิ๊กเมื่อไหร่จะให้ index ไปเก็บที่ตัวแปร productindex ที่ต้องเก็บในตัวแปร global เดี๋ยวจะมีการเชื่อมกันหลายฟังก์ชัน
    console.log(productindex)
    $("#modalDesc").css('display', 'flex') //ให้ modal แสดงผล (Detail) ค่า default ของ modal คือ style="display: none; เราจะแปลงกลับโดยใช้ฟังก์ชัน css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img) //เรียกใช้ #mdd-img ตามด้วยฟังก์ชัน attr ของ jquery คือเราจะให้ attibute เปลี่ยนใหม่ จาก src เปลี่ยนไปเป็นตามตัวแรโปรดักของเรา
    $("#mdd-name").text(product[index].name) //ฟังก์ชัน text ของ Jquery เป็นการเซ็ตข้อความลงใน text => text(product[index].name) วิ่งไปเอา name ในตัวแปรโปรดัก โดยเอา index ที่ส่งมาวิ่งไปหา
    $("#mdd-price").text( numberWithCommas(product[index].price)+' THB' ) //text( numberWithCommas(product[index].price) ให้ฟังก์ชันใส่คอมมาให้เสร็จก่อนแล้วค่อยเซ็ต text
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display', 'none')
}

var cart = [];  //สร้างตัวแปรชื่อ cart เป็นแบบ array
function addtocart() {
    var pass = true; //เช็คว่าสินค้าที่เราคลิ๊กมีอยู่ใน array cart หรือยัง
//ซึ่งสินค้าที่เราคลิ๊ก ถ้าเคยมีอยู่ใน array cart เราจะให้ pass เป็น false
    for (let i = 0; i < cart.length; i++) {
        if ( productindex == cart[i].index ) {
             console.log('found same product')
             cart[i].count++;
             pass = false;
        }
    }

    if (pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        //console.log(obj)
        cart.push(obj) //push เป็นการเพิ่มเข้า array
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' to cart !'
    })
    $("#cartcount").css('display', 'flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display', 'flex')
    rendercart(); //ทุกครั้งที่มีการเปิด openCart เราจะเรียก rendercart มา => เรียกใช้ฟังก์ชัน rendercart
}

function rendercart() {
    if (cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${numberWithCommas(cart[i].price * cart[i].count)} THB</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
            
        }
        $("#mycart").html(html) //ให้ #mycart ของเราทำการ rendeer html กลับมา
    } 
    else {
        $("#mycart").html(`<p>Not found product list</p>`) //กรณีที่สินค้าในตระกร้าเป็น 0
        
    }
}

//อันเเรกรับ action มา อันที่ 2 รับ index เริ่มเเรกเมื่อมีการคลิ๊ก จะทำการเช็คว่า action ตัวเเรกที่เค้าคลิ๊กคืออะไร เช็คใน if
function deinitems(action, index) {
    if (action == '-') {
        if (cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if (cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true, //จะให้ปุ่มคอนเฟืร์มมันโชว์ ถ้าเป็น true ถ้าจะซ่อนปุ่มคอนเฟิร์มก็เป็น false อันนี้เป็น Swal นะ
                    showCancelButton: true, //ให้แสดงปุ่ม cancel
                    confirmButtonText: 'Delete', //เป็นการเซ็ตข้อความของปุ่มคอนเฟิร์ม
                    cancelButtonText: 'Cancel'  //การเช็คการกดปุ่มของ Swalต้องใช้ .then ตามด้วยรับ res มา มาเช็คว่า if(res.isConfirmed) ถ้ามีการกดปุ่ม confirm ก็จะให้ตัว cart ใช้ splice ฟังก์ชัน
                }).then((res) => {
                  if(res.isConfirmed) {
                    cart.splice(index, 1) //splice ใช้ในการลบ เราจะลบ index ที่เท่าไหร่เราก็ใส่ index ไป index เราส่งมาจากตัวนี้ deinitems(action, index) แล้วตามด้วยจะลบไปกี่ตำแหน่งก็ใส่ 1 ไป
                    console.log(cart)
                    rendercart();
                    $("#cartcount").css('display', 'flex').text(cart.length)

                    if (cart.length <= 0) {
                        $("#cartcount").css('display', 'none')
                    }
                  }
                  else {
                    cart[index].count++;
                    $("#countitems"+index).text(cart[index].count)
                  }
                })
            }
        }
    } 
    else if (action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
    }
}


