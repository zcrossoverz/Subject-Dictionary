class monHoc {
    constructor(id, maMonHoc, tenMonHoc, bf, at, level, tinChi, batBuoc){
        this.maMonHoc = maMonHoc;
        this.tenMonHoc = tenMonHoc;
        this.bf = [...bf];
        this.at = [...at];
        this.level = level;
        this.tinChi = tinChi;
        this.id = id;
        this.batBuoc = batBuoc;
    }
    getTen() {
        return this.tenMonHoc;
    }
    getMa() {
        return this.maMonHoc;
    }
    getBefore() {
        return this.bf;
    }
    getAfter() {
        return this.at;
    }
    getLevel() {
        return this.level;
    }
    getTinChi() {
        return this.tinChi;
    }
    isBatBuoc() {
        return this.batBuoc;
    }
}
const maMH = ["QP006","QP007","QP008","QP009","TC100","XH023","XH024","XH025","XH031","XH032","XH033","FL001","FL002","FL003","FL007","FL008","FL009","ML014","ML016","ML018","ML019","ML021","KL001","ML007","XH028","XH011","XH012","XH014","KN001","KN002","TN001","TN002","TN010","TN012","CT100","CT200",
    "CT172",
    "CT101",
    "CT177",
    "CT175",
    "CT174",
    "CT180",
    "CT173",
    "CT178",
    "CT112",
    "CT176",
    "CT296",
    "CT182",
    "CT179",
    "CT188",
    "CT190"
];
const tenMH = ["Giáo dục quốc phòng và An ninh 1",
  "Giáo dục quốc phòng và An ninh 2",
  "Giáo dục quốc phòng và An ninh 3",
  "Giáo dục quốc phòng và An ninh 4",
  "Giáo dục thể chất 1+2+3",
  "Anh văn căn bản 1",
  "Anh văn căn bản 2",
  "Anh văn căn bản 3",
  "Anh văn tăng cường 1",
  "Anh văn tăng cường 2",
  "Anh văn tăng cường 3",
  "Pháp văn căn bản 1",
  "Pháp văn căn bản 2",
  "Pháp văn căn bản 3",
  "Pháp văn tăng cường 1",
  "Pháp văn tăng cường 2",
  "Pháp văn tăng cường 3",
  "Triết học Mác - Lênin",
  "Kinh tế chính trị Mác - Lênin",
  "Chủ nghĩa xã hội khoa học",
  "Lịch sử Đảng Cộng sản Việt Nam",
  "Tư tưởng Hồ Chí Minh",
  "Pháp luật đại cương",
  "Logic học đại cương",
  "Xã hội học đại cương",
  "Cơ sở văn hóa Việt Nam",
  "Tiếng Việt thực hành",
  "Văn bản và lưu trữ học đại cương",
  "Kỹ năng mềm",
  "Đổi mới sáng tạo và khởi nghiệp",
  "Vi - Tích phân A1",
  "Vi - Tích phân A2",
  "Xác suất thống kê",
  "Đại số tuyến tính và hình học",
  "Kỹ năng học đại học",
  "Nền tảng công nghệ thông tin",

  "Toán rời rạc",
  "Lập trình căn bản A",
  "Cấu trúc dữ liệu",
  "Lý thuyết đồ thị",
  "Phân tích và thiết kế thuật toán",
  "Cơ sở dữ liệu",
  "Kiến trúc máy tính",
  "Nguyên lý hệ điều hành",
  "Mạng máy tính",
  "Lập trình hướng đối tượng",
  "Phân tích và thiết kế hệ thống",
  "Ngôn ngữ mô hình hóa",
  "Quản trị hệ thống",
  "Nhập môn lập trình Web",
  "Nhập môn trí tuệ nhân tạo"

];
const batBuoc = [
    1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,
    0,0,0,0,0,0,0,
    1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];

let addToAccordion = (id, from, to) => {
    const accordion_dc = document.querySelector('#'+id);
    for(let i=from;i<to;i++){
        let inf;
        let subject = new monHoc(i+1, maMH[i], tenMH[i], ['no'], ['no'], 3, 3, batBuoc[i]);
        let temp = document.createElement('li');
        temp.setAttribute('class','list-group-item');

        let temp2 = document.createElement('div');
        temp2.setAttribute('class','row');

        // ma mon hoc
        let ma = document.createElement('div');
        ma.setAttribute('class','col-2');
        inf = document.createTextNode(subject.getMa());
        ma.appendChild(inf);

        // ten mon hoc
        let ten = document.createElement('div');
        ten.setAttribute('class','col-4');
        inf = document.createTextNode(subject.getTen());
        ten.appendChild(inf);

        // bat buoc
        let bb = document.createElement('div');
        bb.setAttribute('class','col-1');
        inf = document.createTextNode('Bắt buộc');
        if(subject.isBatBuoc()) bb.appendChild(inf);

        
        temp2.appendChild(ma);
        temp2.appendChild(ten);
        temp2.appendChild(bb);

        temp.appendChild(temp2);
        accordion_dc.appendChild(temp);
    }
}


addToAccordion('accordion_dc',0,36);
addToAccordion('accordion_csn',36,51);